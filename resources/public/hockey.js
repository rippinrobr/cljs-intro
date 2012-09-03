var COMPILED = false;
var goog = goog || {};
goog.global = this;
goog.DEBUG = true;
goog.LOCALE = "en";
goog.evalWorksForGlobals_ = null;
goog.provide = function(name) {
  if(!COMPILED) {
    if(goog.getObjectByName(name) && !goog.implicitNamespaces_[name]) {
      throw Error('Namespace "' + name + '" already declared.');
    }
    var namespace = name;
    while(namespace = namespace.substring(0, namespace.lastIndexOf("."))) {
      goog.implicitNamespaces_[namespace] = true
    }
  }
  goog.exportPath_(name)
};
goog.setTestOnly = function(opt_message) {
  if(COMPILED && !goog.DEBUG) {
    opt_message = opt_message || "";
    throw Error("Importing test-only code into non-debug environment" + opt_message ? ": " + opt_message : ".");
  }
};
if(!COMPILED) {
  goog.implicitNamespaces_ = {}
}
goog.exportPath_ = function(name, opt_object, opt_objectToExportTo) {
  var parts = name.split(".");
  var cur = opt_objectToExportTo || goog.global;
  if(!(parts[0] in cur) && cur.execScript) {
    cur.execScript("var " + parts[0])
  }
  for(var part;parts.length && (part = parts.shift());) {
    if(!parts.length && goog.isDef(opt_object)) {
      cur[part] = opt_object
    }else {
      if(cur[part]) {
        cur = cur[part]
      }else {
        cur = cur[part] = {}
      }
    }
  }
};
goog.getObjectByName = function(name, opt_obj) {
  var parts = name.split(".");
  var cur = opt_obj || goog.global;
  for(var part;part = parts.shift();) {
    if(goog.isDefAndNotNull(cur[part])) {
      cur = cur[part]
    }else {
      return null
    }
  }
  return cur
};
goog.globalize = function(obj, opt_global) {
  var global = opt_global || goog.global;
  for(var x in obj) {
    global[x] = obj[x]
  }
};
goog.addDependency = function(relPath, provides, requires) {
  if(!COMPILED) {
    var provide, require;
    var path = relPath.replace(/\\/g, "/");
    var deps = goog.dependencies_;
    for(var i = 0;provide = provides[i];i++) {
      deps.nameToPath[provide] = path;
      if(!(path in deps.pathToNames)) {
        deps.pathToNames[path] = {}
      }
      deps.pathToNames[path][provide] = true
    }
    for(var j = 0;require = requires[j];j++) {
      if(!(path in deps.requires)) {
        deps.requires[path] = {}
      }
      deps.requires[path][require] = true
    }
  }
};
goog.require = function(rule) {
  if(!COMPILED) {
    if(goog.getObjectByName(rule)) {
      return
    }
    var path = goog.getPathFromDeps_(rule);
    if(path) {
      goog.included_[path] = true;
      goog.writeScripts_()
    }else {
      var errorMessage = "goog.require could not find: " + rule;
      if(goog.global.console) {
        goog.global.console["error"](errorMessage)
      }
      throw Error(errorMessage);
    }
  }
};
goog.basePath = "";
goog.global.CLOSURE_BASE_PATH;
goog.global.CLOSURE_NO_DEPS;
goog.global.CLOSURE_IMPORT_SCRIPT;
goog.nullFunction = function() {
};
goog.identityFunction = function(var_args) {
  return arguments[0]
};
goog.abstractMethod = function() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(ctor) {
  ctor.getInstance = function() {
    return ctor.instance_ || (ctor.instance_ = new ctor)
  }
};
if(!COMPILED) {
  goog.included_ = {};
  goog.dependencies_ = {pathToNames:{}, nameToPath:{}, requires:{}, visited:{}, written:{}};
  goog.inHtmlDocument_ = function() {
    var doc = goog.global.document;
    return typeof doc != "undefined" && "write" in doc
  };
  goog.findBasePath_ = function() {
    if(goog.global.CLOSURE_BASE_PATH) {
      goog.basePath = goog.global.CLOSURE_BASE_PATH;
      return
    }else {
      if(!goog.inHtmlDocument_()) {
        return
      }
    }
    var doc = goog.global.document;
    var scripts = doc.getElementsByTagName("script");
    for(var i = scripts.length - 1;i >= 0;--i) {
      var src = scripts[i].src;
      var qmark = src.lastIndexOf("?");
      var l = qmark == -1 ? src.length : qmark;
      if(src.substr(l - 7, 7) == "base.js") {
        goog.basePath = src.substr(0, l - 7);
        return
      }
    }
  };
  goog.importScript_ = function(src) {
    var importScript = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
    if(!goog.dependencies_.written[src] && importScript(src)) {
      goog.dependencies_.written[src] = true
    }
  };
  goog.writeScriptTag_ = function(src) {
    if(goog.inHtmlDocument_()) {
      var doc = goog.global.document;
      doc.write('<script type="text/javascript" src="' + src + '"></' + "script>");
      return true
    }else {
      return false
    }
  };
  goog.writeScripts_ = function() {
    var scripts = [];
    var seenScript = {};
    var deps = goog.dependencies_;
    function visitNode(path) {
      if(path in deps.written) {
        return
      }
      if(path in deps.visited) {
        if(!(path in seenScript)) {
          seenScript[path] = true;
          scripts.push(path)
        }
        return
      }
      deps.visited[path] = true;
      if(path in deps.requires) {
        for(var requireName in deps.requires[path]) {
          if(requireName in deps.nameToPath) {
            visitNode(deps.nameToPath[requireName])
          }else {
            if(!goog.getObjectByName(requireName)) {
              throw Error("Undefined nameToPath for " + requireName);
            }
          }
        }
      }
      if(!(path in seenScript)) {
        seenScript[path] = true;
        scripts.push(path)
      }
    }
    for(var path in goog.included_) {
      if(!deps.written[path]) {
        visitNode(path)
      }
    }
    for(var i = 0;i < scripts.length;i++) {
      if(scripts[i]) {
        goog.importScript_(goog.basePath + scripts[i])
      }else {
        throw Error("Undefined script input");
      }
    }
  };
  goog.getPathFromDeps_ = function(rule) {
    if(rule in goog.dependencies_.nameToPath) {
      return goog.dependencies_.nameToPath[rule]
    }else {
      return null
    }
  };
  goog.findBasePath_();
  if(!goog.global.CLOSURE_NO_DEPS) {
    goog.importScript_(goog.basePath + "deps.js")
  }
}
goog.typeOf = function(value) {
  var s = typeof value;
  if(s == "object") {
    if(value) {
      if(value instanceof Array) {
        return"array"
      }else {
        if(value instanceof Object) {
          return s
        }
      }
      var className = Object.prototype.toString.call(value);
      if(className == "[object Window]") {
        return"object"
      }
      if(className == "[object Array]" || typeof value.length == "number" && typeof value.splice != "undefined" && typeof value.propertyIsEnumerable != "undefined" && !value.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(className == "[object Function]" || typeof value.call != "undefined" && typeof value.propertyIsEnumerable != "undefined" && !value.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(s == "function" && typeof value.call == "undefined") {
      return"object"
    }
  }
  return s
};
goog.propertyIsEnumerableCustom_ = function(object, propName) {
  if(propName in object) {
    for(var key in object) {
      if(key == propName && Object.prototype.hasOwnProperty.call(object, propName)) {
        return true
      }
    }
  }
  return false
};
goog.propertyIsEnumerable_ = function(object, propName) {
  if(object instanceof Object) {
    return Object.prototype.propertyIsEnumerable.call(object, propName)
  }else {
    return goog.propertyIsEnumerableCustom_(object, propName)
  }
};
goog.isDef = function(val) {
  return val !== undefined
};
goog.isNull = function(val) {
  return val === null
};
goog.isDefAndNotNull = function(val) {
  return val != null
};
goog.isArray = function(val) {
  return goog.typeOf(val) == "array"
};
goog.isArrayLike = function(val) {
  var type = goog.typeOf(val);
  return type == "array" || type == "object" && typeof val.length == "number"
};
goog.isDateLike = function(val) {
  return goog.isObject(val) && typeof val.getFullYear == "function"
};
goog.isString = function(val) {
  return typeof val == "string"
};
goog.isBoolean = function(val) {
  return typeof val == "boolean"
};
goog.isNumber = function(val) {
  return typeof val == "number"
};
goog.isFunction = function(val) {
  return goog.typeOf(val) == "function"
};
goog.isObject = function(val) {
  var type = goog.typeOf(val);
  return type == "object" || type == "array" || type == "function"
};
goog.getUid = function(obj) {
  return obj[goog.UID_PROPERTY_] || (obj[goog.UID_PROPERTY_] = ++goog.uidCounter_)
};
goog.removeUid = function(obj) {
  if("removeAttribute" in obj) {
    obj.removeAttribute(goog.UID_PROPERTY_)
  }
  try {
    delete obj[goog.UID_PROPERTY_]
  }catch(ex) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(obj) {
  var type = goog.typeOf(obj);
  if(type == "object" || type == "array") {
    if(obj.clone) {
      return obj.clone()
    }
    var clone = type == "array" ? [] : {};
    for(var key in obj) {
      clone[key] = goog.cloneObject(obj[key])
    }
    return clone
  }
  return obj
};
Object.prototype.clone;
goog.bindNative_ = function(fn, selfObj, var_args) {
  return fn.call.apply(fn.bind, arguments)
};
goog.bindJs_ = function(fn, selfObj, var_args) {
  var context = selfObj || goog.global;
  if(arguments.length > 2) {
    var boundArgs = Array.prototype.slice.call(arguments, 2);
    return function() {
      var newArgs = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(newArgs, boundArgs);
      return fn.apply(context, newArgs)
    }
  }else {
    return function() {
      return fn.apply(context, arguments)
    }
  }
};
goog.bind = function(fn, selfObj, var_args) {
  if(Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1) {
    goog.bind = goog.bindNative_
  }else {
    goog.bind = goog.bindJs_
  }
  return goog.bind.apply(null, arguments)
};
goog.partial = function(fn, var_args) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {
    var newArgs = Array.prototype.slice.call(arguments);
    newArgs.unshift.apply(newArgs, args);
    return fn.apply(this, newArgs)
  }
};
goog.mixin = function(target, source) {
  for(var x in source) {
    target[x] = source[x]
  }
};
goog.now = Date.now || function() {
  return+new Date
};
goog.globalEval = function(script) {
  if(goog.global.execScript) {
    goog.global.execScript(script, "JavaScript")
  }else {
    if(goog.global.eval) {
      if(goog.evalWorksForGlobals_ == null) {
        goog.global.eval("var _et_ = 1;");
        if(typeof goog.global["_et_"] != "undefined") {
          delete goog.global["_et_"];
          goog.evalWorksForGlobals_ = true
        }else {
          goog.evalWorksForGlobals_ = false
        }
      }
      if(goog.evalWorksForGlobals_) {
        goog.global.eval(script)
      }else {
        var doc = goog.global.document;
        var scriptElt = doc.createElement("script");
        scriptElt.type = "text/javascript";
        scriptElt.defer = false;
        scriptElt.appendChild(doc.createTextNode(script));
        doc.body.appendChild(scriptElt);
        doc.body.removeChild(scriptElt)
      }
    }else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.cssNameMapping_;
goog.cssNameMappingStyle_;
goog.getCssName = function(className, opt_modifier) {
  var getMapping = function(cssName) {
    return goog.cssNameMapping_[cssName] || cssName
  };
  var renameByParts = function(cssName) {
    var parts = cssName.split("-");
    var mapped = [];
    for(var i = 0;i < parts.length;i++) {
      mapped.push(getMapping(parts[i]))
    }
    return mapped.join("-")
  };
  var rename;
  if(goog.cssNameMapping_) {
    rename = goog.cssNameMappingStyle_ == "BY_WHOLE" ? getMapping : renameByParts
  }else {
    rename = function(a) {
      return a
    }
  }
  if(opt_modifier) {
    return className + "-" + rename(opt_modifier)
  }else {
    return rename(className)
  }
};
goog.setCssNameMapping = function(mapping, style) {
  goog.cssNameMapping_ = mapping;
  goog.cssNameMappingStyle_ = style
};
goog.getMsg = function(str, opt_values) {
  var values = opt_values || {};
  for(var key in values) {
    var value = ("" + values[key]).replace(/\$/g, "$$$$");
    str = str.replace(new RegExp("\\{\\$" + key + "\\}", "gi"), value)
  }
  return str
};
goog.exportSymbol = function(publicPath, object, opt_objectToExportTo) {
  goog.exportPath_(publicPath, object, opt_objectToExportTo)
};
goog.exportProperty = function(object, publicName, symbol) {
  object[publicName] = symbol
};
goog.inherits = function(childCtor, parentCtor) {
  function tempCtor() {
  }
  tempCtor.prototype = parentCtor.prototype;
  childCtor.superClass_ = parentCtor.prototype;
  childCtor.prototype = new tempCtor;
  childCtor.prototype.constructor = childCtor
};
goog.base = function(me, opt_methodName, var_args) {
  var caller = arguments.callee.caller;
  if(caller.superClass_) {
    return caller.superClass_.constructor.apply(me, Array.prototype.slice.call(arguments, 1))
  }
  var args = Array.prototype.slice.call(arguments, 2);
  var foundCaller = false;
  for(var ctor = me.constructor;ctor;ctor = ctor.superClass_ && ctor.superClass_.constructor) {
    if(ctor.prototype[opt_methodName] === caller) {
      foundCaller = true
    }else {
      if(foundCaller) {
        return ctor.prototype[opt_methodName].apply(me, args)
      }
    }
  }
  if(me[opt_methodName] === caller) {
    return me.constructor.prototype[opt_methodName].apply(me, args)
  }else {
    throw Error("goog.base called from a method of one name " + "to a method of a different name");
  }
};
goog.scope = function(fn) {
  fn.call(goog.global)
};
goog.provide("goog.debug.Error");
goog.debug.Error = function(opt_msg) {
  this.stack = (new Error).stack || "";
  if(opt_msg) {
    this.message = String(opt_msg)
  }
};
goog.inherits(goog.debug.Error, Error);
goog.debug.Error.prototype.name = "CustomError";
goog.provide("goog.string");
goog.provide("goog.string.Unicode");
goog.string.Unicode = {NBSP:"\u00a0"};
goog.string.startsWith = function(str, prefix) {
  return str.lastIndexOf(prefix, 0) == 0
};
goog.string.endsWith = function(str, suffix) {
  var l = str.length - suffix.length;
  return l >= 0 && str.indexOf(suffix, l) == l
};
goog.string.caseInsensitiveStartsWith = function(str, prefix) {
  return goog.string.caseInsensitiveCompare(prefix, str.substr(0, prefix.length)) == 0
};
goog.string.caseInsensitiveEndsWith = function(str, suffix) {
  return goog.string.caseInsensitiveCompare(suffix, str.substr(str.length - suffix.length, suffix.length)) == 0
};
goog.string.subs = function(str, var_args) {
  for(var i = 1;i < arguments.length;i++) {
    var replacement = String(arguments[i]).replace(/\$/g, "$$$$");
    str = str.replace(/\%s/, replacement)
  }
  return str
};
goog.string.collapseWhitespace = function(str) {
  return str.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
};
goog.string.isEmpty = function(str) {
  return/^[\s\xa0]*$/.test(str)
};
goog.string.isEmptySafe = function(str) {
  return goog.string.isEmpty(goog.string.makeSafe(str))
};
goog.string.isBreakingWhitespace = function(str) {
  return!/[^\t\n\r ]/.test(str)
};
goog.string.isAlpha = function(str) {
  return!/[^a-zA-Z]/.test(str)
};
goog.string.isNumeric = function(str) {
  return!/[^0-9]/.test(str)
};
goog.string.isAlphaNumeric = function(str) {
  return!/[^a-zA-Z0-9]/.test(str)
};
goog.string.isSpace = function(ch) {
  return ch == " "
};
goog.string.isUnicodeChar = function(ch) {
  return ch.length == 1 && ch >= " " && ch <= "~" || ch >= "\u0080" && ch <= "\ufffd"
};
goog.string.stripNewlines = function(str) {
  return str.replace(/(\r\n|\r|\n)+/g, " ")
};
goog.string.canonicalizeNewlines = function(str) {
  return str.replace(/(\r\n|\r|\n)/g, "\n")
};
goog.string.normalizeWhitespace = function(str) {
  return str.replace(/\xa0|\s/g, " ")
};
goog.string.normalizeSpaces = function(str) {
  return str.replace(/\xa0|[ \t]+/g, " ")
};
goog.string.trim = function(str) {
  return str.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};
goog.string.trimLeft = function(str) {
  return str.replace(/^[\s\xa0]+/, "")
};
goog.string.trimRight = function(str) {
  return str.replace(/[\s\xa0]+$/, "")
};
goog.string.caseInsensitiveCompare = function(str1, str2) {
  var test1 = String(str1).toLowerCase();
  var test2 = String(str2).toLowerCase();
  if(test1 < test2) {
    return-1
  }else {
    if(test1 == test2) {
      return 0
    }else {
      return 1
    }
  }
};
goog.string.numerateCompareRegExp_ = /(\.\d+)|(\d+)|(\D+)/g;
goog.string.numerateCompare = function(str1, str2) {
  if(str1 == str2) {
    return 0
  }
  if(!str1) {
    return-1
  }
  if(!str2) {
    return 1
  }
  var tokens1 = str1.toLowerCase().match(goog.string.numerateCompareRegExp_);
  var tokens2 = str2.toLowerCase().match(goog.string.numerateCompareRegExp_);
  var count = Math.min(tokens1.length, tokens2.length);
  for(var i = 0;i < count;i++) {
    var a = tokens1[i];
    var b = tokens2[i];
    if(a != b) {
      var num1 = parseInt(a, 10);
      if(!isNaN(num1)) {
        var num2 = parseInt(b, 10);
        if(!isNaN(num2) && num1 - num2) {
          return num1 - num2
        }
      }
      return a < b ? -1 : 1
    }
  }
  if(tokens1.length != tokens2.length) {
    return tokens1.length - tokens2.length
  }
  return str1 < str2 ? -1 : 1
};
goog.string.encodeUriRegExp_ = /^[a-zA-Z0-9\-_.!~*'()]*$/;
goog.string.urlEncode = function(str) {
  str = String(str);
  if(!goog.string.encodeUriRegExp_.test(str)) {
    return encodeURIComponent(str)
  }
  return str
};
goog.string.urlDecode = function(str) {
  return decodeURIComponent(str.replace(/\+/g, " "))
};
goog.string.newLineToBr = function(str, opt_xml) {
  return str.replace(/(\r\n|\r|\n)/g, opt_xml ? "<br />" : "<br>")
};
goog.string.htmlEscape = function(str, opt_isLikelyToContainHtmlChars) {
  if(opt_isLikelyToContainHtmlChars) {
    return str.replace(goog.string.amperRe_, "&amp;").replace(goog.string.ltRe_, "&lt;").replace(goog.string.gtRe_, "&gt;").replace(goog.string.quotRe_, "&quot;")
  }else {
    if(!goog.string.allRe_.test(str)) {
      return str
    }
    if(str.indexOf("&") != -1) {
      str = str.replace(goog.string.amperRe_, "&amp;")
    }
    if(str.indexOf("<") != -1) {
      str = str.replace(goog.string.ltRe_, "&lt;")
    }
    if(str.indexOf(">") != -1) {
      str = str.replace(goog.string.gtRe_, "&gt;")
    }
    if(str.indexOf('"') != -1) {
      str = str.replace(goog.string.quotRe_, "&quot;")
    }
    return str
  }
};
goog.string.amperRe_ = /&/g;
goog.string.ltRe_ = /</g;
goog.string.gtRe_ = />/g;
goog.string.quotRe_ = /\"/g;
goog.string.allRe_ = /[&<>\"]/;
goog.string.unescapeEntities = function(str) {
  if(goog.string.contains(str, "&")) {
    if("document" in goog.global && !goog.string.contains(str, "<")) {
      return goog.string.unescapeEntitiesUsingDom_(str)
    }else {
      return goog.string.unescapePureXmlEntities_(str)
    }
  }
  return str
};
goog.string.unescapeEntitiesUsingDom_ = function(str) {
  var el = goog.global["document"]["createElement"]("div");
  el["innerHTML"] = "<pre>x" + str + "</pre>";
  if(el["firstChild"][goog.string.NORMALIZE_FN_]) {
    el["firstChild"][goog.string.NORMALIZE_FN_]()
  }
  str = el["firstChild"]["firstChild"]["nodeValue"].slice(1);
  el["innerHTML"] = "";
  return goog.string.canonicalizeNewlines(str)
};
goog.string.unescapePureXmlEntities_ = function(str) {
  return str.replace(/&([^;]+);/g, function(s, entity) {
    switch(entity) {
      case "amp":
        return"&";
      case "lt":
        return"<";
      case "gt":
        return">";
      case "quot":
        return'"';
      default:
        if(entity.charAt(0) == "#") {
          var n = Number("0" + entity.substr(1));
          if(!isNaN(n)) {
            return String.fromCharCode(n)
          }
        }
        return s
    }
  })
};
goog.string.NORMALIZE_FN_ = "normalize";
goog.string.whitespaceEscape = function(str, opt_xml) {
  return goog.string.newLineToBr(str.replace(/  /g, " &#160;"), opt_xml)
};
goog.string.stripQuotes = function(str, quoteChars) {
  var length = quoteChars.length;
  for(var i = 0;i < length;i++) {
    var quoteChar = length == 1 ? quoteChars : quoteChars.charAt(i);
    if(str.charAt(0) == quoteChar && str.charAt(str.length - 1) == quoteChar) {
      return str.substring(1, str.length - 1)
    }
  }
  return str
};
goog.string.truncate = function(str, chars, opt_protectEscapedCharacters) {
  if(opt_protectEscapedCharacters) {
    str = goog.string.unescapeEntities(str)
  }
  if(str.length > chars) {
    str = str.substring(0, chars - 3) + "..."
  }
  if(opt_protectEscapedCharacters) {
    str = goog.string.htmlEscape(str)
  }
  return str
};
goog.string.truncateMiddle = function(str, chars, opt_protectEscapedCharacters, opt_trailingChars) {
  if(opt_protectEscapedCharacters) {
    str = goog.string.unescapeEntities(str)
  }
  if(opt_trailingChars) {
    if(opt_trailingChars > chars) {
      opt_trailingChars = chars
    }
    var endPoint = str.length - opt_trailingChars;
    var startPoint = chars - opt_trailingChars;
    str = str.substring(0, startPoint) + "..." + str.substring(endPoint)
  }else {
    if(str.length > chars) {
      var half = Math.floor(chars / 2);
      var endPos = str.length - half;
      half += chars % 2;
      str = str.substring(0, half) + "..." + str.substring(endPos)
    }
  }
  if(opt_protectEscapedCharacters) {
    str = goog.string.htmlEscape(str)
  }
  return str
};
goog.string.specialEscapeChars_ = {"\x00":"\\0", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
goog.string.jsEscapeCache_ = {"'":"\\'"};
goog.string.quote = function(s) {
  s = String(s);
  if(s.quote) {
    return s.quote()
  }else {
    var sb = ['"'];
    for(var i = 0;i < s.length;i++) {
      var ch = s.charAt(i);
      var cc = ch.charCodeAt(0);
      sb[i + 1] = goog.string.specialEscapeChars_[ch] || (cc > 31 && cc < 127 ? ch : goog.string.escapeChar(ch))
    }
    sb.push('"');
    return sb.join("")
  }
};
goog.string.escapeString = function(str) {
  var sb = [];
  for(var i = 0;i < str.length;i++) {
    sb[i] = goog.string.escapeChar(str.charAt(i))
  }
  return sb.join("")
};
goog.string.escapeChar = function(c) {
  if(c in goog.string.jsEscapeCache_) {
    return goog.string.jsEscapeCache_[c]
  }
  if(c in goog.string.specialEscapeChars_) {
    return goog.string.jsEscapeCache_[c] = goog.string.specialEscapeChars_[c]
  }
  var rv = c;
  var cc = c.charCodeAt(0);
  if(cc > 31 && cc < 127) {
    rv = c
  }else {
    if(cc < 256) {
      rv = "\\x";
      if(cc < 16 || cc > 256) {
        rv += "0"
      }
    }else {
      rv = "\\u";
      if(cc < 4096) {
        rv += "0"
      }
    }
    rv += cc.toString(16).toUpperCase()
  }
  return goog.string.jsEscapeCache_[c] = rv
};
goog.string.toMap = function(s) {
  var rv = {};
  for(var i = 0;i < s.length;i++) {
    rv[s.charAt(i)] = true
  }
  return rv
};
goog.string.contains = function(s, ss) {
  return s.indexOf(ss) != -1
};
goog.string.removeAt = function(s, index, stringLength) {
  var resultStr = s;
  if(index >= 0 && index < s.length && stringLength > 0) {
    resultStr = s.substr(0, index) + s.substr(index + stringLength, s.length - index - stringLength)
  }
  return resultStr
};
goog.string.remove = function(s, ss) {
  var re = new RegExp(goog.string.regExpEscape(ss), "");
  return s.replace(re, "")
};
goog.string.removeAll = function(s, ss) {
  var re = new RegExp(goog.string.regExpEscape(ss), "g");
  return s.replace(re, "")
};
goog.string.regExpEscape = function(s) {
  return String(s).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
};
goog.string.repeat = function(string, length) {
  return(new Array(length + 1)).join(string)
};
goog.string.padNumber = function(num, length, opt_precision) {
  var s = goog.isDef(opt_precision) ? num.toFixed(opt_precision) : String(num);
  var index = s.indexOf(".");
  if(index == -1) {
    index = s.length
  }
  return goog.string.repeat("0", Math.max(0, length - index)) + s
};
goog.string.makeSafe = function(obj) {
  return obj == null ? "" : String(obj)
};
goog.string.buildString = function(var_args) {
  return Array.prototype.join.call(arguments, "")
};
goog.string.getRandomString = function() {
  var x = 2147483648;
  return Math.floor(Math.random() * x).toString(36) + Math.abs(Math.floor(Math.random() * x) ^ goog.now()).toString(36)
};
goog.string.compareVersions = function(version1, version2) {
  var order = 0;
  var v1Subs = goog.string.trim(String(version1)).split(".");
  var v2Subs = goog.string.trim(String(version2)).split(".");
  var subCount = Math.max(v1Subs.length, v2Subs.length);
  for(var subIdx = 0;order == 0 && subIdx < subCount;subIdx++) {
    var v1Sub = v1Subs[subIdx] || "";
    var v2Sub = v2Subs[subIdx] || "";
    var v1CompParser = new RegExp("(\\d*)(\\D*)", "g");
    var v2CompParser = new RegExp("(\\d*)(\\D*)", "g");
    do {
      var v1Comp = v1CompParser.exec(v1Sub) || ["", "", ""];
      var v2Comp = v2CompParser.exec(v2Sub) || ["", "", ""];
      if(v1Comp[0].length == 0 && v2Comp[0].length == 0) {
        break
      }
      var v1CompNum = v1Comp[1].length == 0 ? 0 : parseInt(v1Comp[1], 10);
      var v2CompNum = v2Comp[1].length == 0 ? 0 : parseInt(v2Comp[1], 10);
      order = goog.string.compareElements_(v1CompNum, v2CompNum) || goog.string.compareElements_(v1Comp[2].length == 0, v2Comp[2].length == 0) || goog.string.compareElements_(v1Comp[2], v2Comp[2])
    }while(order == 0)
  }
  return order
};
goog.string.compareElements_ = function(left, right) {
  if(left < right) {
    return-1
  }else {
    if(left > right) {
      return 1
    }
  }
  return 0
};
goog.string.HASHCODE_MAX_ = 4294967296;
goog.string.hashCode = function(str) {
  var result = 0;
  for(var i = 0;i < str.length;++i) {
    result = 31 * result + str.charCodeAt(i);
    result %= goog.string.HASHCODE_MAX_
  }
  return result
};
goog.string.uniqueStringCounter_ = Math.random() * 2147483648 | 0;
goog.string.createUniqueString = function() {
  return"goog_" + goog.string.uniqueStringCounter_++
};
goog.string.toNumber = function(str) {
  var num = Number(str);
  if(num == 0 && goog.string.isEmpty(str)) {
    return NaN
  }
  return num
};
goog.string.toCamelCaseCache_ = {};
goog.string.toCamelCase = function(str) {
  return goog.string.toCamelCaseCache_[str] || (goog.string.toCamelCaseCache_[str] = String(str).replace(/\-([a-z])/g, function(all, match) {
    return match.toUpperCase()
  }))
};
goog.string.toSelectorCaseCache_ = {};
goog.string.toSelectorCase = function(str) {
  return goog.string.toSelectorCaseCache_[str] || (goog.string.toSelectorCaseCache_[str] = String(str).replace(/([A-Z])/g, "-$1").toLowerCase())
};
goog.provide("goog.asserts");
goog.provide("goog.asserts.AssertionError");
goog.require("goog.debug.Error");
goog.require("goog.string");
goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
goog.asserts.AssertionError = function(messagePattern, messageArgs) {
  messageArgs.unshift(messagePattern);
  goog.debug.Error.call(this, goog.string.subs.apply(null, messageArgs));
  messageArgs.shift();
  this.messagePattern = messagePattern
};
goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
goog.asserts.AssertionError.prototype.name = "AssertionError";
goog.asserts.doAssertFailure_ = function(defaultMessage, defaultArgs, givenMessage, givenArgs) {
  var message = "Assertion failed";
  if(givenMessage) {
    message += ": " + givenMessage;
    var args = givenArgs
  }else {
    if(defaultMessage) {
      message += ": " + defaultMessage;
      args = defaultArgs
    }
  }
  throw new goog.asserts.AssertionError("" + message, args || []);
};
goog.asserts.assert = function(condition, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !condition) {
    goog.asserts.doAssertFailure_("", null, opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return condition
};
goog.asserts.fail = function(opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS) {
    throw new goog.asserts.AssertionError("Failure" + (opt_message ? ": " + opt_message : ""), Array.prototype.slice.call(arguments, 1));
  }
};
goog.asserts.assertNumber = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isNumber(value)) {
    goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertString = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isString(value)) {
    goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertFunction = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isFunction(value)) {
    goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertObject = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isObject(value)) {
    goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertArray = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isArray(value)) {
    goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertBoolean = function(value, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(value)) {
    goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2))
  }
  return value
};
goog.asserts.assertInstanceof = function(value, type, opt_message, var_args) {
  if(goog.asserts.ENABLE_ASSERTS && !(value instanceof type)) {
    goog.asserts.doAssertFailure_("instanceof check failed.", null, opt_message, Array.prototype.slice.call(arguments, 3))
  }
};
goog.provide("goog.array");
goog.provide("goog.array.ArrayLike");
goog.require("goog.asserts");
goog.NATIVE_ARRAY_PROTOTYPES = true;
goog.array.ArrayLike;
goog.array.peek = function(array) {
  return array[array.length - 1]
};
goog.array.ARRAY_PROTOTYPE_ = Array.prototype;
goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.indexOf ? function(arr, obj, opt_fromIndex) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.indexOf.call(arr, obj, opt_fromIndex)
} : function(arr, obj, opt_fromIndex) {
  var fromIndex = opt_fromIndex == null ? 0 : opt_fromIndex < 0 ? Math.max(0, arr.length + opt_fromIndex) : opt_fromIndex;
  if(goog.isString(arr)) {
    if(!goog.isString(obj) || obj.length != 1) {
      return-1
    }
    return arr.indexOf(obj, fromIndex)
  }
  for(var i = fromIndex;i < arr.length;i++) {
    if(i in arr && arr[i] === obj) {
      return i
    }
  }
  return-1
};
goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.lastIndexOf ? function(arr, obj, opt_fromIndex) {
  goog.asserts.assert(arr.length != null);
  var fromIndex = opt_fromIndex == null ? arr.length - 1 : opt_fromIndex;
  return goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call(arr, obj, fromIndex)
} : function(arr, obj, opt_fromIndex) {
  var fromIndex = opt_fromIndex == null ? arr.length - 1 : opt_fromIndex;
  if(fromIndex < 0) {
    fromIndex = Math.max(0, arr.length + fromIndex)
  }
  if(goog.isString(arr)) {
    if(!goog.isString(obj) || obj.length != 1) {
      return-1
    }
    return arr.lastIndexOf(obj, fromIndex)
  }
  for(var i = fromIndex;i >= 0;i--) {
    if(i in arr && arr[i] === obj) {
      return i
    }
  }
  return-1
};
goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.forEach ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  goog.array.ARRAY_PROTOTYPE_.forEach.call(arr, f, opt_obj)
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2) {
      f.call(opt_obj, arr2[i], i, arr)
    }
  }
};
goog.array.forEachRight = function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = l - 1;i >= 0;--i) {
    if(i in arr2) {
      f.call(opt_obj, arr2[i], i, arr)
    }
  }
};
goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.filter ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.filter.call(arr, f, opt_obj)
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var res = [];
  var resLength = 0;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2) {
      var val = arr2[i];
      if(f.call(opt_obj, val, i, arr)) {
        res[resLength++] = val
      }
    }
  }
  return res
};
goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.map ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.map.call(arr, f, opt_obj)
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var res = new Array(l);
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2) {
      res[i] = f.call(opt_obj, arr2[i], i, arr)
    }
  }
  return res
};
goog.array.reduce = function(arr, f, val, opt_obj) {
  if(arr.reduce) {
    if(opt_obj) {
      return arr.reduce(goog.bind(f, opt_obj), val)
    }else {
      return arr.reduce(f, val)
    }
  }
  var rval = val;
  goog.array.forEach(arr, function(val, index) {
    rval = f.call(opt_obj, rval, val, index, arr)
  });
  return rval
};
goog.array.reduceRight = function(arr, f, val, opt_obj) {
  if(arr.reduceRight) {
    if(opt_obj) {
      return arr.reduceRight(goog.bind(f, opt_obj), val)
    }else {
      return arr.reduceRight(f, val)
    }
  }
  var rval = val;
  goog.array.forEachRight(arr, function(val, index) {
    rval = f.call(opt_obj, rval, val, index, arr)
  });
  return rval
};
goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.some ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.some.call(arr, f, opt_obj)
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
      return true
    }
  }
  return false
};
goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.every ? function(arr, f, opt_obj) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.every.call(arr, f, opt_obj)
} : function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2 && !f.call(opt_obj, arr2[i], i, arr)) {
      return false
    }
  }
  return true
};
goog.array.find = function(arr, f, opt_obj) {
  var i = goog.array.findIndex(arr, f, opt_obj);
  return i < 0 ? null : goog.isString(arr) ? arr.charAt(i) : arr[i]
};
goog.array.findIndex = function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = 0;i < l;i++) {
    if(i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
      return i
    }
  }
  return-1
};
goog.array.findRight = function(arr, f, opt_obj) {
  var i = goog.array.findIndexRight(arr, f, opt_obj);
  return i < 0 ? null : goog.isString(arr) ? arr.charAt(i) : arr[i]
};
goog.array.findIndexRight = function(arr, f, opt_obj) {
  var l = arr.length;
  var arr2 = goog.isString(arr) ? arr.split("") : arr;
  for(var i = l - 1;i >= 0;i--) {
    if(i in arr2 && f.call(opt_obj, arr2[i], i, arr)) {
      return i
    }
  }
  return-1
};
goog.array.contains = function(arr, obj) {
  return goog.array.indexOf(arr, obj) >= 0
};
goog.array.isEmpty = function(arr) {
  return arr.length == 0
};
goog.array.clear = function(arr) {
  if(!goog.isArray(arr)) {
    for(var i = arr.length - 1;i >= 0;i--) {
      delete arr[i]
    }
  }
  arr.length = 0
};
goog.array.insert = function(arr, obj) {
  if(!goog.array.contains(arr, obj)) {
    arr.push(obj)
  }
};
goog.array.insertAt = function(arr, obj, opt_i) {
  goog.array.splice(arr, opt_i, 0, obj)
};
goog.array.insertArrayAt = function(arr, elementsToAdd, opt_i) {
  goog.partial(goog.array.splice, arr, opt_i, 0).apply(null, elementsToAdd)
};
goog.array.insertBefore = function(arr, obj, opt_obj2) {
  var i;
  if(arguments.length == 2 || (i = goog.array.indexOf(arr, opt_obj2)) < 0) {
    arr.push(obj)
  }else {
    goog.array.insertAt(arr, obj, i)
  }
};
goog.array.remove = function(arr, obj) {
  var i = goog.array.indexOf(arr, obj);
  var rv;
  if(rv = i >= 0) {
    goog.array.removeAt(arr, i)
  }
  return rv
};
goog.array.removeAt = function(arr, i) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.splice.call(arr, i, 1).length == 1
};
goog.array.removeIf = function(arr, f, opt_obj) {
  var i = goog.array.findIndex(arr, f, opt_obj);
  if(i >= 0) {
    goog.array.removeAt(arr, i);
    return true
  }
  return false
};
goog.array.concat = function(var_args) {
  return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments)
};
goog.array.clone = function(arr) {
  if(goog.isArray(arr)) {
    return goog.array.concat(arr)
  }else {
    var rv = [];
    for(var i = 0, len = arr.length;i < len;i++) {
      rv[i] = arr[i]
    }
    return rv
  }
};
goog.array.toArray = function(object) {
  if(goog.isArray(object)) {
    return goog.array.concat(object)
  }
  return goog.array.clone(object)
};
goog.array.extend = function(arr1, var_args) {
  for(var i = 1;i < arguments.length;i++) {
    var arr2 = arguments[i];
    var isArrayLike;
    if(goog.isArray(arr2) || (isArrayLike = goog.isArrayLike(arr2)) && arr2.hasOwnProperty("callee")) {
      arr1.push.apply(arr1, arr2)
    }else {
      if(isArrayLike) {
        var len1 = arr1.length;
        var len2 = arr2.length;
        for(var j = 0;j < len2;j++) {
          arr1[len1 + j] = arr2[j]
        }
      }else {
        arr1.push(arr2)
      }
    }
  }
};
goog.array.splice = function(arr, index, howMany, var_args) {
  goog.asserts.assert(arr.length != null);
  return goog.array.ARRAY_PROTOTYPE_.splice.apply(arr, goog.array.slice(arguments, 1))
};
goog.array.slice = function(arr, start, opt_end) {
  goog.asserts.assert(arr.length != null);
  if(arguments.length <= 2) {
    return goog.array.ARRAY_PROTOTYPE_.slice.call(arr, start)
  }else {
    return goog.array.ARRAY_PROTOTYPE_.slice.call(arr, start, opt_end)
  }
};
goog.array.removeDuplicates = function(arr, opt_rv) {
  var returnArray = opt_rv || arr;
  var seen = {}, cursorInsert = 0, cursorRead = 0;
  while(cursorRead < arr.length) {
    var current = arr[cursorRead++];
    var key = goog.isObject(current) ? "o" + goog.getUid(current) : (typeof current).charAt(0) + current;
    if(!Object.prototype.hasOwnProperty.call(seen, key)) {
      seen[key] = true;
      returnArray[cursorInsert++] = current
    }
  }
  returnArray.length = cursorInsert
};
goog.array.binarySearch = function(arr, target, opt_compareFn) {
  return goog.array.binarySearch_(arr, opt_compareFn || goog.array.defaultCompare, false, target)
};
goog.array.binarySelect = function(arr, evaluator, opt_obj) {
  return goog.array.binarySearch_(arr, evaluator, true, undefined, opt_obj)
};
goog.array.binarySearch_ = function(arr, compareFn, isEvaluator, opt_target, opt_selfObj) {
  var left = 0;
  var right = arr.length;
  var found;
  while(left < right) {
    var middle = left + right >> 1;
    var compareResult;
    if(isEvaluator) {
      compareResult = compareFn.call(opt_selfObj, arr[middle], middle, arr)
    }else {
      compareResult = compareFn(opt_target, arr[middle])
    }
    if(compareResult > 0) {
      left = middle + 1
    }else {
      right = middle;
      found = !compareResult
    }
  }
  return found ? left : ~left
};
goog.array.sort = function(arr, opt_compareFn) {
  goog.asserts.assert(arr.length != null);
  goog.array.ARRAY_PROTOTYPE_.sort.call(arr, opt_compareFn || goog.array.defaultCompare)
};
goog.array.stableSort = function(arr, opt_compareFn) {
  for(var i = 0;i < arr.length;i++) {
    arr[i] = {index:i, value:arr[i]}
  }
  var valueCompareFn = opt_compareFn || goog.array.defaultCompare;
  function stableCompareFn(obj1, obj2) {
    return valueCompareFn(obj1.value, obj2.value) || obj1.index - obj2.index
  }
  goog.array.sort(arr, stableCompareFn);
  for(var i = 0;i < arr.length;i++) {
    arr[i] = arr[i].value
  }
};
goog.array.sortObjectsByKey = function(arr, key, opt_compareFn) {
  var compare = opt_compareFn || goog.array.defaultCompare;
  goog.array.sort(arr, function(a, b) {
    return compare(a[key], b[key])
  })
};
goog.array.isSorted = function(arr, opt_compareFn, opt_strict) {
  var compare = opt_compareFn || goog.array.defaultCompare;
  for(var i = 1;i < arr.length;i++) {
    var compareResult = compare(arr[i - 1], arr[i]);
    if(compareResult > 0 || compareResult == 0 && opt_strict) {
      return false
    }
  }
  return true
};
goog.array.equals = function(arr1, arr2, opt_equalsFn) {
  if(!goog.isArrayLike(arr1) || !goog.isArrayLike(arr2) || arr1.length != arr2.length) {
    return false
  }
  var l = arr1.length;
  var equalsFn = opt_equalsFn || goog.array.defaultCompareEquality;
  for(var i = 0;i < l;i++) {
    if(!equalsFn(arr1[i], arr2[i])) {
      return false
    }
  }
  return true
};
goog.array.compare = function(arr1, arr2, opt_equalsFn) {
  return goog.array.equals(arr1, arr2, opt_equalsFn)
};
goog.array.defaultCompare = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
};
goog.array.defaultCompareEquality = function(a, b) {
  return a === b
};
goog.array.binaryInsert = function(array, value, opt_compareFn) {
  var index = goog.array.binarySearch(array, value, opt_compareFn);
  if(index < 0) {
    goog.array.insertAt(array, value, -(index + 1));
    return true
  }
  return false
};
goog.array.binaryRemove = function(array, value, opt_compareFn) {
  var index = goog.array.binarySearch(array, value, opt_compareFn);
  return index >= 0 ? goog.array.removeAt(array, index) : false
};
goog.array.bucket = function(array, sorter) {
  var buckets = {};
  for(var i = 0;i < array.length;i++) {
    var value = array[i];
    var key = sorter(value, i, array);
    if(goog.isDef(key)) {
      var bucket = buckets[key] || (buckets[key] = []);
      bucket.push(value)
    }
  }
  return buckets
};
goog.array.repeat = function(value, n) {
  var array = [];
  for(var i = 0;i < n;i++) {
    array[i] = value
  }
  return array
};
goog.array.flatten = function(var_args) {
  var result = [];
  for(var i = 0;i < arguments.length;i++) {
    var element = arguments[i];
    if(goog.isArray(element)) {
      result.push.apply(result, goog.array.flatten.apply(null, element))
    }else {
      result.push(element)
    }
  }
  return result
};
goog.array.rotate = function(array, n) {
  goog.asserts.assert(array.length != null);
  if(array.length) {
    n %= array.length;
    if(n > 0) {
      goog.array.ARRAY_PROTOTYPE_.unshift.apply(array, array.splice(-n, n))
    }else {
      if(n < 0) {
        goog.array.ARRAY_PROTOTYPE_.push.apply(array, array.splice(0, -n))
      }
    }
  }
  return array
};
goog.array.zip = function(var_args) {
  if(!arguments.length) {
    return[]
  }
  var result = [];
  for(var i = 0;true;i++) {
    var value = [];
    for(var j = 0;j < arguments.length;j++) {
      var arr = arguments[j];
      if(i >= arr.length) {
        return result
      }
      value.push(arr[i])
    }
    result.push(value)
  }
};
goog.array.shuffle = function(arr, opt_randFn) {
  var randFn = opt_randFn || Math.random;
  for(var i = arr.length - 1;i > 0;i--) {
    var j = Math.floor(randFn() * (i + 1));
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp
  }
};
goog.provide("goog.object");
goog.object.forEach = function(obj, f, opt_obj) {
  for(var key in obj) {
    f.call(opt_obj, obj[key], key, obj)
  }
};
goog.object.filter = function(obj, f, opt_obj) {
  var res = {};
  for(var key in obj) {
    if(f.call(opt_obj, obj[key], key, obj)) {
      res[key] = obj[key]
    }
  }
  return res
};
goog.object.map = function(obj, f, opt_obj) {
  var res = {};
  for(var key in obj) {
    res[key] = f.call(opt_obj, obj[key], key, obj)
  }
  return res
};
goog.object.some = function(obj, f, opt_obj) {
  for(var key in obj) {
    if(f.call(opt_obj, obj[key], key, obj)) {
      return true
    }
  }
  return false
};
goog.object.every = function(obj, f, opt_obj) {
  for(var key in obj) {
    if(!f.call(opt_obj, obj[key], key, obj)) {
      return false
    }
  }
  return true
};
goog.object.getCount = function(obj) {
  var rv = 0;
  for(var key in obj) {
    rv++
  }
  return rv
};
goog.object.getAnyKey = function(obj) {
  for(var key in obj) {
    return key
  }
};
goog.object.getAnyValue = function(obj) {
  for(var key in obj) {
    return obj[key]
  }
};
goog.object.contains = function(obj, val) {
  return goog.object.containsValue(obj, val)
};
goog.object.getValues = function(obj) {
  var res = [];
  var i = 0;
  for(var key in obj) {
    res[i++] = obj[key]
  }
  return res
};
goog.object.getKeys = function(obj) {
  var res = [];
  var i = 0;
  for(var key in obj) {
    res[i++] = key
  }
  return res
};
goog.object.getValueByKeys = function(obj, var_args) {
  var isArrayLike = goog.isArrayLike(var_args);
  var keys = isArrayLike ? var_args : arguments;
  for(var i = isArrayLike ? 0 : 1;i < keys.length;i++) {
    obj = obj[keys[i]];
    if(!goog.isDef(obj)) {
      break
    }
  }
  return obj
};
goog.object.containsKey = function(obj, key) {
  return key in obj
};
goog.object.containsValue = function(obj, val) {
  for(var key in obj) {
    if(obj[key] == val) {
      return true
    }
  }
  return false
};
goog.object.findKey = function(obj, f, opt_this) {
  for(var key in obj) {
    if(f.call(opt_this, obj[key], key, obj)) {
      return key
    }
  }
  return undefined
};
goog.object.findValue = function(obj, f, opt_this) {
  var key = goog.object.findKey(obj, f, opt_this);
  return key && obj[key]
};
goog.object.isEmpty = function(obj) {
  for(var key in obj) {
    return false
  }
  return true
};
goog.object.clear = function(obj) {
  for(var i in obj) {
    delete obj[i]
  }
};
goog.object.remove = function(obj, key) {
  var rv;
  if(rv = key in obj) {
    delete obj[key]
  }
  return rv
};
goog.object.add = function(obj, key, val) {
  if(key in obj) {
    throw Error('The object already contains the key "' + key + '"');
  }
  goog.object.set(obj, key, val)
};
goog.object.get = function(obj, key, opt_val) {
  if(key in obj) {
    return obj[key]
  }
  return opt_val
};
goog.object.set = function(obj, key, value) {
  obj[key] = value
};
goog.object.setIfUndefined = function(obj, key, value) {
  return key in obj ? obj[key] : obj[key] = value
};
goog.object.clone = function(obj) {
  var res = {};
  for(var key in obj) {
    res[key] = obj[key]
  }
  return res
};
goog.object.unsafeClone = function(obj) {
  var type = goog.typeOf(obj);
  if(type == "object" || type == "array") {
    if(obj.clone) {
      return obj.clone()
    }
    var clone = type == "array" ? [] : {};
    for(var key in obj) {
      clone[key] = goog.object.unsafeClone(obj[key])
    }
    return clone
  }
  return obj
};
goog.object.transpose = function(obj) {
  var transposed = {};
  for(var key in obj) {
    transposed[obj[key]] = key
  }
  return transposed
};
goog.object.PROTOTYPE_FIELDS_ = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
goog.object.extend = function(target, var_args) {
  var key, source;
  for(var i = 1;i < arguments.length;i++) {
    source = arguments[i];
    for(key in source) {
      target[key] = source[key]
    }
    for(var j = 0;j < goog.object.PROTOTYPE_FIELDS_.length;j++) {
      key = goog.object.PROTOTYPE_FIELDS_[j];
      if(Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key]
      }
    }
  }
};
goog.object.create = function(var_args) {
  var argLength = arguments.length;
  if(argLength == 1 && goog.isArray(arguments[0])) {
    return goog.object.create.apply(null, arguments[0])
  }
  if(argLength % 2) {
    throw Error("Uneven number of arguments");
  }
  var rv = {};
  for(var i = 0;i < argLength;i += 2) {
    rv[arguments[i]] = arguments[i + 1]
  }
  return rv
};
goog.object.createSet = function(var_args) {
  var argLength = arguments.length;
  if(argLength == 1 && goog.isArray(arguments[0])) {
    return goog.object.createSet.apply(null, arguments[0])
  }
  var rv = {};
  for(var i = 0;i < argLength;i++) {
    rv[arguments[i]] = true
  }
  return rv
};
goog.provide("goog.string.format");
goog.require("goog.string");
goog.string.format = function(formatString, var_args) {
  var args = Array.prototype.slice.call(arguments);
  var template = args.shift();
  if(typeof template == "undefined") {
    throw Error("[goog.string.format] Template required");
  }
  var formatRe = /%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g;
  function replacerDemuxer(match, flags, width, dotp, precision, type, offset, wholeString) {
    if(type == "%") {
      return"%"
    }
    var value = args.shift();
    if(typeof value == "undefined") {
      throw Error("[goog.string.format] Not enough arguments");
    }
    arguments[0] = value;
    return goog.string.format.demuxes_[type].apply(null, arguments)
  }
  return template.replace(formatRe, replacerDemuxer)
};
goog.string.format.demuxes_ = {};
goog.string.format.demuxes_["s"] = function(value, flags, width, dotp, precision, type, offset, wholeString) {
  var replacement = value;
  if(isNaN(width) || replacement.length >= width) {
    return replacement
  }
  if(flags.indexOf("-", 0) > -1) {
    replacement = replacement + goog.string.repeat(" ", width - replacement.length)
  }else {
    replacement = goog.string.repeat(" ", width - replacement.length) + replacement
  }
  return replacement
};
goog.string.format.demuxes_["f"] = function(value, flags, width, dotp, precision, type, offset, wholeString) {
  var replacement = value.toString();
  if(!(isNaN(precision) || precision == "")) {
    replacement = value.toFixed(precision)
  }
  var sign;
  if(value < 0) {
    sign = "-"
  }else {
    if(flags.indexOf("+") >= 0) {
      sign = "+"
    }else {
      if(flags.indexOf(" ") >= 0) {
        sign = " "
      }else {
        sign = ""
      }
    }
  }
  if(value >= 0) {
    replacement = sign + replacement
  }
  if(isNaN(width) || replacement.length >= width) {
    return replacement
  }
  replacement = isNaN(precision) ? Math.abs(value).toString() : Math.abs(value).toFixed(precision);
  var padCount = width - replacement.length - sign.length;
  if(flags.indexOf("-", 0) >= 0) {
    replacement = sign + replacement + goog.string.repeat(" ", padCount)
  }else {
    var paddingChar = flags.indexOf("0", 0) >= 0 ? "0" : " ";
    replacement = sign + goog.string.repeat(paddingChar, padCount) + replacement
  }
  return replacement
};
goog.string.format.demuxes_["d"] = function(value, flags, width, dotp, precision, type, offset, wholeString) {
  value = parseInt(value, 10);
  precision = 0;
  return goog.string.format.demuxes_["f"](value, flags, width, dotp, precision, type, offset, wholeString)
};
goog.string.format.demuxes_["i"] = goog.string.format.demuxes_["d"];
goog.string.format.demuxes_["u"] = goog.string.format.demuxes_["d"];
goog.provide("goog.userAgent.jscript");
goog.require("goog.string");
goog.userAgent.jscript.ASSUME_NO_JSCRIPT = false;
goog.userAgent.jscript.init_ = function() {
  var hasScriptEngine = "ScriptEngine" in goog.global;
  goog.userAgent.jscript.DETECTED_HAS_JSCRIPT_ = hasScriptEngine && goog.global["ScriptEngine"]() == "JScript";
  goog.userAgent.jscript.DETECTED_VERSION_ = goog.userAgent.jscript.DETECTED_HAS_JSCRIPT_ ? goog.global["ScriptEngineMajorVersion"]() + "." + goog.global["ScriptEngineMinorVersion"]() + "." + goog.global["ScriptEngineBuildVersion"]() : "0"
};
if(!goog.userAgent.jscript.ASSUME_NO_JSCRIPT) {
  goog.userAgent.jscript.init_()
}
goog.userAgent.jscript.HAS_JSCRIPT = goog.userAgent.jscript.ASSUME_NO_JSCRIPT ? false : goog.userAgent.jscript.DETECTED_HAS_JSCRIPT_;
goog.userAgent.jscript.VERSION = goog.userAgent.jscript.ASSUME_NO_JSCRIPT ? "0" : goog.userAgent.jscript.DETECTED_VERSION_;
goog.userAgent.jscript.isVersion = function(version) {
  return goog.string.compareVersions(goog.userAgent.jscript.VERSION, version) >= 0
};
goog.provide("goog.string.StringBuffer");
goog.require("goog.userAgent.jscript");
goog.string.StringBuffer = function(opt_a1, var_args) {
  this.buffer_ = goog.userAgent.jscript.HAS_JSCRIPT ? [] : "";
  if(opt_a1 != null) {
    this.append.apply(this, arguments)
  }
};
goog.string.StringBuffer.prototype.set = function(s) {
  this.clear();
  this.append(s)
};
if(goog.userAgent.jscript.HAS_JSCRIPT) {
  goog.string.StringBuffer.prototype.bufferLength_ = 0;
  goog.string.StringBuffer.prototype.append = function(a1, opt_a2, var_args) {
    if(opt_a2 == null) {
      this.buffer_[this.bufferLength_++] = a1
    }else {
      this.buffer_.push.apply(this.buffer_, arguments);
      this.bufferLength_ = this.buffer_.length
    }
    return this
  }
}else {
  goog.string.StringBuffer.prototype.append = function(a1, opt_a2, var_args) {
    this.buffer_ += a1;
    if(opt_a2 != null) {
      for(var i = 1;i < arguments.length;i++) {
        this.buffer_ += arguments[i]
      }
    }
    return this
  }
}
goog.string.StringBuffer.prototype.clear = function() {
  if(goog.userAgent.jscript.HAS_JSCRIPT) {
    this.buffer_.length = 0;
    this.bufferLength_ = 0
  }else {
    this.buffer_ = ""
  }
};
goog.string.StringBuffer.prototype.getLength = function() {
  return this.toString().length
};
goog.string.StringBuffer.prototype.toString = function() {
  if(goog.userAgent.jscript.HAS_JSCRIPT) {
    var str = this.buffer_.join("");
    this.clear();
    if(str) {
      this.append(str)
    }
    return str
  }else {
    return this.buffer_
  }
};
goog.provide("cljs.core");
goog.require("goog.array");
goog.require("goog.object");
goog.require("goog.string.format");
goog.require("goog.string.StringBuffer");
goog.require("goog.string");
cljs.core._STAR_unchecked_if_STAR_ = false;
cljs.core._STAR_print_fn_STAR_ = function _STAR_print_fn_STAR_(_) {
  throw new Error("No *print-fn* fn set for evaluation environment");
};
cljs.core.truth_ = function truth_(x) {
  return x != null && x !== false
};
cljs.core.type_satisfies_ = function type_satisfies_(p, x) {
  var x__6128 = x == null ? null : x;
  if(p[goog.typeOf(x__6128)]) {
    return true
  }else {
    if(p["_"]) {
      return true
    }else {
      if("\ufdd0'else") {
        return false
      }else {
        return null
      }
    }
  }
};
cljs.core.is_proto_ = function is_proto_(x) {
  return x.constructor.prototype === x
};
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = function missing_protocol(proto, obj) {
  return Error(["No protocol method ", proto, " defined for type ", goog.typeOf(obj), ": ", obj].join(""))
};
cljs.core.aclone = function aclone(array_like) {
  return array_like.slice()
};
cljs.core.array = function array(var_args) {
  return Array.prototype.slice.call(arguments)
};
cljs.core.make_array = function() {
  var make_array = null;
  var make_array__1 = function(size) {
    return new Array(size)
  };
  var make_array__2 = function(type, size) {
    return make_array.call(null, size)
  };
  make_array = function(type, size) {
    switch(arguments.length) {
      case 1:
        return make_array__1.call(this, type);
      case 2:
        return make_array__2.call(this, type, size)
    }
    throw"Invalid arity: " + arguments.length;
  };
  make_array.cljs$lang$arity$1 = make_array__1;
  make_array.cljs$lang$arity$2 = make_array__2;
  return make_array
}();
cljs.core.aget = function() {
  var aget = null;
  var aget__2 = function(array, i) {
    return array[i]
  };
  var aget__3 = function() {
    var G__6129__delegate = function(array, i, idxs) {
      return cljs.core.apply.call(null, aget, aget.call(null, array, i), idxs)
    };
    var G__6129 = function(array, i, var_args) {
      var idxs = null;
      if(goog.isDef(var_args)) {
        idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__6129__delegate.call(this, array, i, idxs)
    };
    G__6129.cljs$lang$maxFixedArity = 2;
    G__6129.cljs$lang$applyTo = function(arglist__6130) {
      var array = cljs.core.first(arglist__6130);
      var i = cljs.core.first(cljs.core.next(arglist__6130));
      var idxs = cljs.core.rest(cljs.core.next(arglist__6130));
      return G__6129__delegate(array, i, idxs)
    };
    G__6129.cljs$lang$arity$variadic = G__6129__delegate;
    return G__6129
  }();
  aget = function(array, i, var_args) {
    var idxs = var_args;
    switch(arguments.length) {
      case 2:
        return aget__2.call(this, array, i);
      default:
        return aget__3.cljs$lang$arity$variadic(array, i, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  aget.cljs$lang$maxFixedArity = 2;
  aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
  aget.cljs$lang$arity$2 = aget__2;
  aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
  return aget
}();
cljs.core.aset = function aset(array, i, val) {
  return array[i] = val
};
cljs.core.alength = function alength(array) {
  return array.length
};
cljs.core.into_array = function() {
  var into_array = null;
  var into_array__1 = function(aseq) {
    return into_array.call(null, null, aseq)
  };
  var into_array__2 = function(type, aseq) {
    return cljs.core.reduce.call(null, function(a, x) {
      a.push(x);
      return a
    }, [], aseq)
  };
  into_array = function(type, aseq) {
    switch(arguments.length) {
      case 1:
        return into_array__1.call(this, type);
      case 2:
        return into_array__2.call(this, type, aseq)
    }
    throw"Invalid arity: " + arguments.length;
  };
  into_array.cljs$lang$arity$1 = into_array__1;
  into_array.cljs$lang$arity$2 = into_array__2;
  return into_array
}();
cljs.core.IFn = {};
cljs.core._invoke = function() {
  var _invoke = null;
  var _invoke__1 = function(this$) {
    if(function() {
      var and__3822__auto____6215 = this$;
      if(and__3822__auto____6215) {
        return this$.cljs$core$IFn$_invoke$arity$1
      }else {
        return and__3822__auto____6215
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$1(this$)
    }else {
      var x__2389__auto____6216 = this$ == null ? null : this$;
      return function() {
        var or__3824__auto____6217 = cljs.core._invoke[goog.typeOf(x__2389__auto____6216)];
        if(or__3824__auto____6217) {
          return or__3824__auto____6217
        }else {
          var or__3824__auto____6218 = cljs.core._invoke["_"];
          if(or__3824__auto____6218) {
            return or__3824__auto____6218
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$)
    }
  };
  var _invoke__2 = function(this$, a) {
    if(function() {
      var and__3822__auto____6219 = this$;
      if(and__3822__auto____6219) {
        return this$.cljs$core$IFn$_invoke$arity$2
      }else {
        return and__3822__auto____6219
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$2(this$, a)
    }else {
      var x__2389__auto____6220 = this$ == null ? null : this$;
      return function() {
        var or__3824__auto____6221 = cljs.core._invoke[goog.typeOf(x__2389__auto____6220)];
        if(or__3824__auto____6221) {
          return or__3824__auto____6221
        }else {
          var or__3824__auto____6222 = cljs.core._invoke["_"];
          if(or__3824__auto____6222) {
            return or__3824__auto____6222
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a)
    }
  };
  var _invoke__3 = function(this$, a, b) {
    if(function() {
      var and__3822__auto____6223 = this$;
      if(and__3822__auto____6223) {
        return this$.cljs$core$IFn$_invoke$arity$3
      }else {
        return and__3822__auto____6223
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$3(this$, a, b)
    }else {
      var x__2389__auto____6224 = this$ == null ? null : this$;
      return function() {
        var or__3824__auto____6225 = cljs.core._invoke[goog.typeOf(x__2389__auto____6224)];
        if(or__3824__auto____6225) {
          return or__3824__auto____6225
        }else {
          var or__3824__auto____6226 = cljs.core._invoke["_"];
          if(or__3824__auto____6226) {
            return or__3824__auto____6226
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b)
    }
  };
  var _invoke__4 = function(this$, a, b, c) {
    if(function() {
      var and__3822__auto____6227 = this$;
      if(and__3822__auto____6227) {
        return this$.cljs$core$IFn$_invoke$arity$4
      }else {
        return and__3822__auto____6227
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$4(this$, a, b, c)
    }else {
      var x__2389__auto____6228 = this$ == null ? null : this$;
      return function() {
        var or__3824__auto____6229 = cljs.core._invoke[goog.typeOf(x__2389__auto____6228)];
        if(or__3824__auto____6229) {
          return or__3824__auto____6229
        }else {
          var or__3824__auto____6230 = cljs.core._invoke["_"];
          if(or__3824__auto____6230) {
            return or__3824__auto____6230
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c)
    }
  };
  var _invoke__5 = function(this$, a, b, c, d) {
    if(function() {
      var and__3822__auto____6231 = this$;
      if(and__3822__auto____6231) {
        return this$.cljs$core$IFn$_invoke$arity$5
      }else {
        return and__3822__auto____6231
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$5(this$, a, b, c, d)
    }else {
      var x__2389__auto____6232 = this$ == null ? null : this$;
      return function() {
        var or__3824__auto____6233 = cljs.core._invoke[goog.typeOf(x__2389__auto____6232)];
        if(or__3824__auto____6233) {
          return or__3824__auto____6233
        }else {
          var or__3824__auto____6234 = cljs.core._invoke["_"];
          if(or__3824__auto____6234) {
            return or__3824__auto____6234
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d)
    }
  };
  var _invoke__6 = function(this$, a, b, c, d, e) {
    if(function() {
      var and__3822__auto____6235 = this$;
      if(and__3822__auto____6235) {
        return this$.cljs$core$IFn$_invoke$arity$6
      }else {
        return and__3822__auto____6235
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$6(this$, a, b, c, d, e)
    }else {
      var x__2389__auto____6236 = this$ == null ? null : this$;
      return function() {
        var or__3824__auto____6237 = cljs.core._invoke[goog.typeOf(x__2389__auto____6236)];
        if(or__3824__auto____6237) {
          return or__3824__auto____6237
        }else {
          var or__3824__auto____6238 = cljs.core._invoke["_"];
          if(or__3824__auto____6238) {
            return or__3824__auto____6238
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e)
    }
  };
  var _invoke__7 = function(this$, a, b, c, d, e, f) {
    if(function() {
      var and__3822__auto____6239 = this$;
      if(and__3822__auto____6239) {
        return this$.cljs$core$IFn$_invoke$arity$7
      }else {
        return and__3822__auto____6239
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$7(this$, a, b, c, d, e, f)
    }else {
      var x__2389__auto____6240 = this$ == null ? null : this$;
      return function() {
        var or__3824__auto____6241 = cljs.core._invoke[goog.typeOf(x__2389__auto____6240)];
        if(or__3824__auto____6241) {
          return or__3824__auto____6241
        }else {
          var or__3824__auto____6242 = cljs.core._invoke["_"];
          if(or__3824__auto____6242) {
            return or__3824__auto____6242
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f)
    }
  };
  var _invoke__8 = function(this$, a, b, c, d, e, f, g) {
    if(function() {
      var and__3822__auto____6243 = this$;
      if(and__3822__auto____6243) {
        return this$.cljs$core$IFn$_invoke$arity$8
      }else {
        return and__3822__auto____6243
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$8(this$, a, b, c, d, e, f, g)
    }else {
      var x__2389__auto____6244 = this$ == null ? null : this$;
      return function() {
        var or__3824__auto____6245 = cljs.core._invoke[goog.typeOf(x__2389__auto____6244)];
        if(or__3824__auto____6245) {
          return or__3824__auto____6245
        }else {
          var or__3824__auto____6246 = cljs.core._invoke["_"];
          if(or__3824__auto____6246) {
            return or__3824__auto____6246
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g)
    }
  };
  var _invoke__9 = function(this$, a, b, c, d, e, f, g, h) {
    if(function() {
      var and__3822__auto____6247 = this$;
      if(and__3822__auto____6247) {
        return this$.cljs$core$IFn$_invoke$arity$9
      }else {
        return and__3822__auto____6247
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$9(this$, a, b, c, d, e, f, g, h)
    }else {
      var x__2389__auto____6248 = this$ == null ? null : this$;
      return function() {
        var or__3824__auto____6249 = cljs.core._invoke[goog.typeOf(x__2389__auto____6248)];
        if(or__3824__auto____6249) {
          return or__3824__auto____6249
        }else {
          var or__3824__auto____6250 = cljs.core._invoke["_"];
          if(or__3824__auto____6250) {
            return or__3824__auto____6250
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h)
    }
  };
  var _invoke__10 = function(this$, a, b, c, d, e, f, g, h, i) {
    if(function() {
      var and__3822__auto____6251 = this$;
      if(and__3822__auto____6251) {
        return this$.cljs$core$IFn$_invoke$arity$10
      }else {
        return and__3822__auto____6251
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$10(this$, a, b, c, d, e, f, g, h, i)
    }else {
      var x__2389__auto____6252 = this$ == null ? null : this$;
      return function() {
        var or__3824__auto____6253 = cljs.core._invoke[goog.typeOf(x__2389__auto____6252)];
        if(or__3824__auto____6253) {
          return or__3824__auto____6253
        }else {
          var or__3824__auto____6254 = cljs.core._invoke["_"];
          if(or__3824__auto____6254) {
            return or__3824__auto____6254
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i)
    }
  };
  var _invoke__11 = function(this$, a, b, c, d, e, f, g, h, i, j) {
    if(function() {
      var and__3822__auto____6255 = this$;
      if(and__3822__auto____6255) {
        return this$.cljs$core$IFn$_invoke$arity$11
      }else {
        return and__3822__auto____6255
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$11(this$, a, b, c, d, e, f, g, h, i, j)
    }else {
      var x__2389__auto____6256 = this$ == null ? null : this$;
      return function() {
        var or__3824__auto____6257 = cljs.core._invoke[goog.typeOf(x__2389__auto____6256)];
        if(or__3824__auto____6257) {
          return or__3824__auto____6257
        }else {
          var or__3824__auto____6258 = cljs.core._invoke["_"];
          if(or__3824__auto____6258) {
            return or__3824__auto____6258
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j)
    }
  };
  var _invoke__12 = function(this$, a, b, c, d, e, f, g, h, i, j, k) {
    if(function() {
      var and__3822__auto____6259 = this$;
      if(and__3822__auto____6259) {
        return this$.cljs$core$IFn$_invoke$arity$12
      }else {
        return and__3822__auto____6259
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$12(this$, a, b, c, d, e, f, g, h, i, j, k)
    }else {
      var x__2389__auto____6260 = this$ == null ? null : this$;
      return function() {
        var or__3824__auto____6261 = cljs.core._invoke[goog.typeOf(x__2389__auto____6260)];
        if(or__3824__auto____6261) {
          return or__3824__auto____6261
        }else {
          var or__3824__auto____6262 = cljs.core._invoke["_"];
          if(or__3824__auto____6262) {
            return or__3824__auto____6262
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k)
    }
  };
  var _invoke__13 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l) {
    if(function() {
      var and__3822__auto____6263 = this$;
      if(and__3822__auto____6263) {
        return this$.cljs$core$IFn$_invoke$arity$13
      }else {
        return and__3822__auto____6263
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$13(this$, a, b, c, d, e, f, g, h, i, j, k, l)
    }else {
      var x__2389__auto____6264 = this$ == null ? null : this$;
      return function() {
        var or__3824__auto____6265 = cljs.core._invoke[goog.typeOf(x__2389__auto____6264)];
        if(or__3824__auto____6265) {
          return or__3824__auto____6265
        }else {
          var or__3824__auto____6266 = cljs.core._invoke["_"];
          if(or__3824__auto____6266) {
            return or__3824__auto____6266
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l)
    }
  };
  var _invoke__14 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m) {
    if(function() {
      var and__3822__auto____6267 = this$;
      if(and__3822__auto____6267) {
        return this$.cljs$core$IFn$_invoke$arity$14
      }else {
        return and__3822__auto____6267
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$14(this$, a, b, c, d, e, f, g, h, i, j, k, l, m)
    }else {
      var x__2389__auto____6268 = this$ == null ? null : this$;
      return function() {
        var or__3824__auto____6269 = cljs.core._invoke[goog.typeOf(x__2389__auto____6268)];
        if(or__3824__auto____6269) {
          return or__3824__auto____6269
        }else {
          var or__3824__auto____6270 = cljs.core._invoke["_"];
          if(or__3824__auto____6270) {
            return or__3824__auto____6270
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m)
    }
  };
  var _invoke__15 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    if(function() {
      var and__3822__auto____6271 = this$;
      if(and__3822__auto____6271) {
        return this$.cljs$core$IFn$_invoke$arity$15
      }else {
        return and__3822__auto____6271
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$15(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n)
    }else {
      var x__2389__auto____6272 = this$ == null ? null : this$;
      return function() {
        var or__3824__auto____6273 = cljs.core._invoke[goog.typeOf(x__2389__auto____6272)];
        if(or__3824__auto____6273) {
          return or__3824__auto____6273
        }else {
          var or__3824__auto____6274 = cljs.core._invoke["_"];
          if(or__3824__auto____6274) {
            return or__3824__auto____6274
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n)
    }
  };
  var _invoke__16 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    if(function() {
      var and__3822__auto____6275 = this$;
      if(and__3822__auto____6275) {
        return this$.cljs$core$IFn$_invoke$arity$16
      }else {
        return and__3822__auto____6275
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$16(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o)
    }else {
      var x__2389__auto____6276 = this$ == null ? null : this$;
      return function() {
        var or__3824__auto____6277 = cljs.core._invoke[goog.typeOf(x__2389__auto____6276)];
        if(or__3824__auto____6277) {
          return or__3824__auto____6277
        }else {
          var or__3824__auto____6278 = cljs.core._invoke["_"];
          if(or__3824__auto____6278) {
            return or__3824__auto____6278
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o)
    }
  };
  var _invoke__17 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    if(function() {
      var and__3822__auto____6279 = this$;
      if(and__3822__auto____6279) {
        return this$.cljs$core$IFn$_invoke$arity$17
      }else {
        return and__3822__auto____6279
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$17(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)
    }else {
      var x__2389__auto____6280 = this$ == null ? null : this$;
      return function() {
        var or__3824__auto____6281 = cljs.core._invoke[goog.typeOf(x__2389__auto____6280)];
        if(or__3824__auto____6281) {
          return or__3824__auto____6281
        }else {
          var or__3824__auto____6282 = cljs.core._invoke["_"];
          if(or__3824__auto____6282) {
            return or__3824__auto____6282
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p)
    }
  };
  var _invoke__18 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    if(function() {
      var and__3822__auto____6283 = this$;
      if(and__3822__auto____6283) {
        return this$.cljs$core$IFn$_invoke$arity$18
      }else {
        return and__3822__auto____6283
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$18(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q)
    }else {
      var x__2389__auto____6284 = this$ == null ? null : this$;
      return function() {
        var or__3824__auto____6285 = cljs.core._invoke[goog.typeOf(x__2389__auto____6284)];
        if(or__3824__auto____6285) {
          return or__3824__auto____6285
        }else {
          var or__3824__auto____6286 = cljs.core._invoke["_"];
          if(or__3824__auto____6286) {
            return or__3824__auto____6286
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q)
    }
  };
  var _invoke__19 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s) {
    if(function() {
      var and__3822__auto____6287 = this$;
      if(and__3822__auto____6287) {
        return this$.cljs$core$IFn$_invoke$arity$19
      }else {
        return and__3822__auto____6287
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$19(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s)
    }else {
      var x__2389__auto____6288 = this$ == null ? null : this$;
      return function() {
        var or__3824__auto____6289 = cljs.core._invoke[goog.typeOf(x__2389__auto____6288)];
        if(or__3824__auto____6289) {
          return or__3824__auto____6289
        }else {
          var or__3824__auto____6290 = cljs.core._invoke["_"];
          if(or__3824__auto____6290) {
            return or__3824__auto____6290
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s)
    }
  };
  var _invoke__20 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t) {
    if(function() {
      var and__3822__auto____6291 = this$;
      if(and__3822__auto____6291) {
        return this$.cljs$core$IFn$_invoke$arity$20
      }else {
        return and__3822__auto____6291
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$20(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t)
    }else {
      var x__2389__auto____6292 = this$ == null ? null : this$;
      return function() {
        var or__3824__auto____6293 = cljs.core._invoke[goog.typeOf(x__2389__auto____6292)];
        if(or__3824__auto____6293) {
          return or__3824__auto____6293
        }else {
          var or__3824__auto____6294 = cljs.core._invoke["_"];
          if(or__3824__auto____6294) {
            return or__3824__auto____6294
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t)
    }
  };
  var _invoke__21 = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest) {
    if(function() {
      var and__3822__auto____6295 = this$;
      if(and__3822__auto____6295) {
        return this$.cljs$core$IFn$_invoke$arity$21
      }else {
        return and__3822__auto____6295
      }
    }()) {
      return this$.cljs$core$IFn$_invoke$arity$21(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest)
    }else {
      var x__2389__auto____6296 = this$ == null ? null : this$;
      return function() {
        var or__3824__auto____6297 = cljs.core._invoke[goog.typeOf(x__2389__auto____6296)];
        if(or__3824__auto____6297) {
          return or__3824__auto____6297
        }else {
          var or__3824__auto____6298 = cljs.core._invoke["_"];
          if(or__3824__auto____6298) {
            return or__3824__auto____6298
          }else {
            throw cljs.core.missing_protocol.call(null, "IFn.-invoke", this$);
          }
        }
      }().call(null, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest)
    }
  };
  _invoke = function(this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest) {
    switch(arguments.length) {
      case 1:
        return _invoke__1.call(this, this$);
      case 2:
        return _invoke__2.call(this, this$, a);
      case 3:
        return _invoke__3.call(this, this$, a, b);
      case 4:
        return _invoke__4.call(this, this$, a, b, c);
      case 5:
        return _invoke__5.call(this, this$, a, b, c, d);
      case 6:
        return _invoke__6.call(this, this$, a, b, c, d, e);
      case 7:
        return _invoke__7.call(this, this$, a, b, c, d, e, f);
      case 8:
        return _invoke__8.call(this, this$, a, b, c, d, e, f, g);
      case 9:
        return _invoke__9.call(this, this$, a, b, c, d, e, f, g, h);
      case 10:
        return _invoke__10.call(this, this$, a, b, c, d, e, f, g, h, i);
      case 11:
        return _invoke__11.call(this, this$, a, b, c, d, e, f, g, h, i, j);
      case 12:
        return _invoke__12.call(this, this$, a, b, c, d, e, f, g, h, i, j, k);
      case 13:
        return _invoke__13.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l);
      case 14:
        return _invoke__14.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m);
      case 15:
        return _invoke__15.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n);
      case 16:
        return _invoke__16.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o);
      case 17:
        return _invoke__17.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p);
      case 18:
        return _invoke__18.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q);
      case 19:
        return _invoke__19.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s);
      case 20:
        return _invoke__20.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t);
      case 21:
        return _invoke__21.call(this, this$, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, t, rest)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _invoke.cljs$lang$arity$1 = _invoke__1;
  _invoke.cljs$lang$arity$2 = _invoke__2;
  _invoke.cljs$lang$arity$3 = _invoke__3;
  _invoke.cljs$lang$arity$4 = _invoke__4;
  _invoke.cljs$lang$arity$5 = _invoke__5;
  _invoke.cljs$lang$arity$6 = _invoke__6;
  _invoke.cljs$lang$arity$7 = _invoke__7;
  _invoke.cljs$lang$arity$8 = _invoke__8;
  _invoke.cljs$lang$arity$9 = _invoke__9;
  _invoke.cljs$lang$arity$10 = _invoke__10;
  _invoke.cljs$lang$arity$11 = _invoke__11;
  _invoke.cljs$lang$arity$12 = _invoke__12;
  _invoke.cljs$lang$arity$13 = _invoke__13;
  _invoke.cljs$lang$arity$14 = _invoke__14;
  _invoke.cljs$lang$arity$15 = _invoke__15;
  _invoke.cljs$lang$arity$16 = _invoke__16;
  _invoke.cljs$lang$arity$17 = _invoke__17;
  _invoke.cljs$lang$arity$18 = _invoke__18;
  _invoke.cljs$lang$arity$19 = _invoke__19;
  _invoke.cljs$lang$arity$20 = _invoke__20;
  _invoke.cljs$lang$arity$21 = _invoke__21;
  return _invoke
}();
cljs.core.ICounted = {};
cljs.core._count = function _count(coll) {
  if(function() {
    var and__3822__auto____6303 = coll;
    if(and__3822__auto____6303) {
      return coll.cljs$core$ICounted$_count$arity$1
    }else {
      return and__3822__auto____6303
    }
  }()) {
    return coll.cljs$core$ICounted$_count$arity$1(coll)
  }else {
    var x__2389__auto____6304 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6305 = cljs.core._count[goog.typeOf(x__2389__auto____6304)];
      if(or__3824__auto____6305) {
        return or__3824__auto____6305
      }else {
        var or__3824__auto____6306 = cljs.core._count["_"];
        if(or__3824__auto____6306) {
          return or__3824__auto____6306
        }else {
          throw cljs.core.missing_protocol.call(null, "ICounted.-count", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core.IEmptyableCollection = {};
cljs.core._empty = function _empty(coll) {
  if(function() {
    var and__3822__auto____6311 = coll;
    if(and__3822__auto____6311) {
      return coll.cljs$core$IEmptyableCollection$_empty$arity$1
    }else {
      return and__3822__auto____6311
    }
  }()) {
    return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll)
  }else {
    var x__2389__auto____6312 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6313 = cljs.core._empty[goog.typeOf(x__2389__auto____6312)];
      if(or__3824__auto____6313) {
        return or__3824__auto____6313
      }else {
        var or__3824__auto____6314 = cljs.core._empty["_"];
        if(or__3824__auto____6314) {
          return or__3824__auto____6314
        }else {
          throw cljs.core.missing_protocol.call(null, "IEmptyableCollection.-empty", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core.ICollection = {};
cljs.core._conj = function _conj(coll, o) {
  if(function() {
    var and__3822__auto____6319 = coll;
    if(and__3822__auto____6319) {
      return coll.cljs$core$ICollection$_conj$arity$2
    }else {
      return and__3822__auto____6319
    }
  }()) {
    return coll.cljs$core$ICollection$_conj$arity$2(coll, o)
  }else {
    var x__2389__auto____6320 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6321 = cljs.core._conj[goog.typeOf(x__2389__auto____6320)];
      if(or__3824__auto____6321) {
        return or__3824__auto____6321
      }else {
        var or__3824__auto____6322 = cljs.core._conj["_"];
        if(or__3824__auto____6322) {
          return or__3824__auto____6322
        }else {
          throw cljs.core.missing_protocol.call(null, "ICollection.-conj", coll);
        }
      }
    }().call(null, coll, o)
  }
};
cljs.core.IIndexed = {};
cljs.core._nth = function() {
  var _nth = null;
  var _nth__2 = function(coll, n) {
    if(function() {
      var and__3822__auto____6331 = coll;
      if(and__3822__auto____6331) {
        return coll.cljs$core$IIndexed$_nth$arity$2
      }else {
        return and__3822__auto____6331
      }
    }()) {
      return coll.cljs$core$IIndexed$_nth$arity$2(coll, n)
    }else {
      var x__2389__auto____6332 = coll == null ? null : coll;
      return function() {
        var or__3824__auto____6333 = cljs.core._nth[goog.typeOf(x__2389__auto____6332)];
        if(or__3824__auto____6333) {
          return or__3824__auto____6333
        }else {
          var or__3824__auto____6334 = cljs.core._nth["_"];
          if(or__3824__auto____6334) {
            return or__3824__auto____6334
          }else {
            throw cljs.core.missing_protocol.call(null, "IIndexed.-nth", coll);
          }
        }
      }().call(null, coll, n)
    }
  };
  var _nth__3 = function(coll, n, not_found) {
    if(function() {
      var and__3822__auto____6335 = coll;
      if(and__3822__auto____6335) {
        return coll.cljs$core$IIndexed$_nth$arity$3
      }else {
        return and__3822__auto____6335
      }
    }()) {
      return coll.cljs$core$IIndexed$_nth$arity$3(coll, n, not_found)
    }else {
      var x__2389__auto____6336 = coll == null ? null : coll;
      return function() {
        var or__3824__auto____6337 = cljs.core._nth[goog.typeOf(x__2389__auto____6336)];
        if(or__3824__auto____6337) {
          return or__3824__auto____6337
        }else {
          var or__3824__auto____6338 = cljs.core._nth["_"];
          if(or__3824__auto____6338) {
            return or__3824__auto____6338
          }else {
            throw cljs.core.missing_protocol.call(null, "IIndexed.-nth", coll);
          }
        }
      }().call(null, coll, n, not_found)
    }
  };
  _nth = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return _nth__2.call(this, coll, n);
      case 3:
        return _nth__3.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _nth.cljs$lang$arity$2 = _nth__2;
  _nth.cljs$lang$arity$3 = _nth__3;
  return _nth
}();
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = function _first(coll) {
  if(function() {
    var and__3822__auto____6343 = coll;
    if(and__3822__auto____6343) {
      return coll.cljs$core$ISeq$_first$arity$1
    }else {
      return and__3822__auto____6343
    }
  }()) {
    return coll.cljs$core$ISeq$_first$arity$1(coll)
  }else {
    var x__2389__auto____6344 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6345 = cljs.core._first[goog.typeOf(x__2389__auto____6344)];
      if(or__3824__auto____6345) {
        return or__3824__auto____6345
      }else {
        var or__3824__auto____6346 = cljs.core._first["_"];
        if(or__3824__auto____6346) {
          return or__3824__auto____6346
        }else {
          throw cljs.core.missing_protocol.call(null, "ISeq.-first", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core._rest = function _rest(coll) {
  if(function() {
    var and__3822__auto____6351 = coll;
    if(and__3822__auto____6351) {
      return coll.cljs$core$ISeq$_rest$arity$1
    }else {
      return and__3822__auto____6351
    }
  }()) {
    return coll.cljs$core$ISeq$_rest$arity$1(coll)
  }else {
    var x__2389__auto____6352 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6353 = cljs.core._rest[goog.typeOf(x__2389__auto____6352)];
      if(or__3824__auto____6353) {
        return or__3824__auto____6353
      }else {
        var or__3824__auto____6354 = cljs.core._rest["_"];
        if(or__3824__auto____6354) {
          return or__3824__auto____6354
        }else {
          throw cljs.core.missing_protocol.call(null, "ISeq.-rest", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core.INext = {};
cljs.core._next = function _next(coll) {
  if(function() {
    var and__3822__auto____6359 = coll;
    if(and__3822__auto____6359) {
      return coll.cljs$core$INext$_next$arity$1
    }else {
      return and__3822__auto____6359
    }
  }()) {
    return coll.cljs$core$INext$_next$arity$1(coll)
  }else {
    var x__2389__auto____6360 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6361 = cljs.core._next[goog.typeOf(x__2389__auto____6360)];
      if(or__3824__auto____6361) {
        return or__3824__auto____6361
      }else {
        var or__3824__auto____6362 = cljs.core._next["_"];
        if(or__3824__auto____6362) {
          return or__3824__auto____6362
        }else {
          throw cljs.core.missing_protocol.call(null, "INext.-next", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core.ILookup = {};
cljs.core._lookup = function() {
  var _lookup = null;
  var _lookup__2 = function(o, k) {
    if(function() {
      var and__3822__auto____6371 = o;
      if(and__3822__auto____6371) {
        return o.cljs$core$ILookup$_lookup$arity$2
      }else {
        return and__3822__auto____6371
      }
    }()) {
      return o.cljs$core$ILookup$_lookup$arity$2(o, k)
    }else {
      var x__2389__auto____6372 = o == null ? null : o;
      return function() {
        var or__3824__auto____6373 = cljs.core._lookup[goog.typeOf(x__2389__auto____6372)];
        if(or__3824__auto____6373) {
          return or__3824__auto____6373
        }else {
          var or__3824__auto____6374 = cljs.core._lookup["_"];
          if(or__3824__auto____6374) {
            return or__3824__auto____6374
          }else {
            throw cljs.core.missing_protocol.call(null, "ILookup.-lookup", o);
          }
        }
      }().call(null, o, k)
    }
  };
  var _lookup__3 = function(o, k, not_found) {
    if(function() {
      var and__3822__auto____6375 = o;
      if(and__3822__auto____6375) {
        return o.cljs$core$ILookup$_lookup$arity$3
      }else {
        return and__3822__auto____6375
      }
    }()) {
      return o.cljs$core$ILookup$_lookup$arity$3(o, k, not_found)
    }else {
      var x__2389__auto____6376 = o == null ? null : o;
      return function() {
        var or__3824__auto____6377 = cljs.core._lookup[goog.typeOf(x__2389__auto____6376)];
        if(or__3824__auto____6377) {
          return or__3824__auto____6377
        }else {
          var or__3824__auto____6378 = cljs.core._lookup["_"];
          if(or__3824__auto____6378) {
            return or__3824__auto____6378
          }else {
            throw cljs.core.missing_protocol.call(null, "ILookup.-lookup", o);
          }
        }
      }().call(null, o, k, not_found)
    }
  };
  _lookup = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return _lookup__2.call(this, o, k);
      case 3:
        return _lookup__3.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _lookup.cljs$lang$arity$2 = _lookup__2;
  _lookup.cljs$lang$arity$3 = _lookup__3;
  return _lookup
}();
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = function _contains_key_QMARK_(coll, k) {
  if(function() {
    var and__3822__auto____6383 = coll;
    if(and__3822__auto____6383) {
      return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2
    }else {
      return and__3822__auto____6383
    }
  }()) {
    return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll, k)
  }else {
    var x__2389__auto____6384 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6385 = cljs.core._contains_key_QMARK_[goog.typeOf(x__2389__auto____6384)];
      if(or__3824__auto____6385) {
        return or__3824__auto____6385
      }else {
        var or__3824__auto____6386 = cljs.core._contains_key_QMARK_["_"];
        if(or__3824__auto____6386) {
          return or__3824__auto____6386
        }else {
          throw cljs.core.missing_protocol.call(null, "IAssociative.-contains-key?", coll);
        }
      }
    }().call(null, coll, k)
  }
};
cljs.core._assoc = function _assoc(coll, k, v) {
  if(function() {
    var and__3822__auto____6391 = coll;
    if(and__3822__auto____6391) {
      return coll.cljs$core$IAssociative$_assoc$arity$3
    }else {
      return and__3822__auto____6391
    }
  }()) {
    return coll.cljs$core$IAssociative$_assoc$arity$3(coll, k, v)
  }else {
    var x__2389__auto____6392 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6393 = cljs.core._assoc[goog.typeOf(x__2389__auto____6392)];
      if(or__3824__auto____6393) {
        return or__3824__auto____6393
      }else {
        var or__3824__auto____6394 = cljs.core._assoc["_"];
        if(or__3824__auto____6394) {
          return or__3824__auto____6394
        }else {
          throw cljs.core.missing_protocol.call(null, "IAssociative.-assoc", coll);
        }
      }
    }().call(null, coll, k, v)
  }
};
cljs.core.IMap = {};
cljs.core._dissoc = function _dissoc(coll, k) {
  if(function() {
    var and__3822__auto____6399 = coll;
    if(and__3822__auto____6399) {
      return coll.cljs$core$IMap$_dissoc$arity$2
    }else {
      return and__3822__auto____6399
    }
  }()) {
    return coll.cljs$core$IMap$_dissoc$arity$2(coll, k)
  }else {
    var x__2389__auto____6400 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6401 = cljs.core._dissoc[goog.typeOf(x__2389__auto____6400)];
      if(or__3824__auto____6401) {
        return or__3824__auto____6401
      }else {
        var or__3824__auto____6402 = cljs.core._dissoc["_"];
        if(or__3824__auto____6402) {
          return or__3824__auto____6402
        }else {
          throw cljs.core.missing_protocol.call(null, "IMap.-dissoc", coll);
        }
      }
    }().call(null, coll, k)
  }
};
cljs.core.IMapEntry = {};
cljs.core._key = function _key(coll) {
  if(function() {
    var and__3822__auto____6407 = coll;
    if(and__3822__auto____6407) {
      return coll.cljs$core$IMapEntry$_key$arity$1
    }else {
      return and__3822__auto____6407
    }
  }()) {
    return coll.cljs$core$IMapEntry$_key$arity$1(coll)
  }else {
    var x__2389__auto____6408 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6409 = cljs.core._key[goog.typeOf(x__2389__auto____6408)];
      if(or__3824__auto____6409) {
        return or__3824__auto____6409
      }else {
        var or__3824__auto____6410 = cljs.core._key["_"];
        if(or__3824__auto____6410) {
          return or__3824__auto____6410
        }else {
          throw cljs.core.missing_protocol.call(null, "IMapEntry.-key", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core._val = function _val(coll) {
  if(function() {
    var and__3822__auto____6415 = coll;
    if(and__3822__auto____6415) {
      return coll.cljs$core$IMapEntry$_val$arity$1
    }else {
      return and__3822__auto____6415
    }
  }()) {
    return coll.cljs$core$IMapEntry$_val$arity$1(coll)
  }else {
    var x__2389__auto____6416 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6417 = cljs.core._val[goog.typeOf(x__2389__auto____6416)];
      if(or__3824__auto____6417) {
        return or__3824__auto____6417
      }else {
        var or__3824__auto____6418 = cljs.core._val["_"];
        if(or__3824__auto____6418) {
          return or__3824__auto____6418
        }else {
          throw cljs.core.missing_protocol.call(null, "IMapEntry.-val", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core.ISet = {};
cljs.core._disjoin = function _disjoin(coll, v) {
  if(function() {
    var and__3822__auto____6423 = coll;
    if(and__3822__auto____6423) {
      return coll.cljs$core$ISet$_disjoin$arity$2
    }else {
      return and__3822__auto____6423
    }
  }()) {
    return coll.cljs$core$ISet$_disjoin$arity$2(coll, v)
  }else {
    var x__2389__auto____6424 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6425 = cljs.core._disjoin[goog.typeOf(x__2389__auto____6424)];
      if(or__3824__auto____6425) {
        return or__3824__auto____6425
      }else {
        var or__3824__auto____6426 = cljs.core._disjoin["_"];
        if(or__3824__auto____6426) {
          return or__3824__auto____6426
        }else {
          throw cljs.core.missing_protocol.call(null, "ISet.-disjoin", coll);
        }
      }
    }().call(null, coll, v)
  }
};
cljs.core.IStack = {};
cljs.core._peek = function _peek(coll) {
  if(function() {
    var and__3822__auto____6431 = coll;
    if(and__3822__auto____6431) {
      return coll.cljs$core$IStack$_peek$arity$1
    }else {
      return and__3822__auto____6431
    }
  }()) {
    return coll.cljs$core$IStack$_peek$arity$1(coll)
  }else {
    var x__2389__auto____6432 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6433 = cljs.core._peek[goog.typeOf(x__2389__auto____6432)];
      if(or__3824__auto____6433) {
        return or__3824__auto____6433
      }else {
        var or__3824__auto____6434 = cljs.core._peek["_"];
        if(or__3824__auto____6434) {
          return or__3824__auto____6434
        }else {
          throw cljs.core.missing_protocol.call(null, "IStack.-peek", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core._pop = function _pop(coll) {
  if(function() {
    var and__3822__auto____6439 = coll;
    if(and__3822__auto____6439) {
      return coll.cljs$core$IStack$_pop$arity$1
    }else {
      return and__3822__auto____6439
    }
  }()) {
    return coll.cljs$core$IStack$_pop$arity$1(coll)
  }else {
    var x__2389__auto____6440 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6441 = cljs.core._pop[goog.typeOf(x__2389__auto____6440)];
      if(or__3824__auto____6441) {
        return or__3824__auto____6441
      }else {
        var or__3824__auto____6442 = cljs.core._pop["_"];
        if(or__3824__auto____6442) {
          return or__3824__auto____6442
        }else {
          throw cljs.core.missing_protocol.call(null, "IStack.-pop", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core.IVector = {};
cljs.core._assoc_n = function _assoc_n(coll, n, val) {
  if(function() {
    var and__3822__auto____6447 = coll;
    if(and__3822__auto____6447) {
      return coll.cljs$core$IVector$_assoc_n$arity$3
    }else {
      return and__3822__auto____6447
    }
  }()) {
    return coll.cljs$core$IVector$_assoc_n$arity$3(coll, n, val)
  }else {
    var x__2389__auto____6448 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6449 = cljs.core._assoc_n[goog.typeOf(x__2389__auto____6448)];
      if(or__3824__auto____6449) {
        return or__3824__auto____6449
      }else {
        var or__3824__auto____6450 = cljs.core._assoc_n["_"];
        if(or__3824__auto____6450) {
          return or__3824__auto____6450
        }else {
          throw cljs.core.missing_protocol.call(null, "IVector.-assoc-n", coll);
        }
      }
    }().call(null, coll, n, val)
  }
};
cljs.core.IDeref = {};
cljs.core._deref = function _deref(o) {
  if(function() {
    var and__3822__auto____6455 = o;
    if(and__3822__auto____6455) {
      return o.cljs$core$IDeref$_deref$arity$1
    }else {
      return and__3822__auto____6455
    }
  }()) {
    return o.cljs$core$IDeref$_deref$arity$1(o)
  }else {
    var x__2389__auto____6456 = o == null ? null : o;
    return function() {
      var or__3824__auto____6457 = cljs.core._deref[goog.typeOf(x__2389__auto____6456)];
      if(or__3824__auto____6457) {
        return or__3824__auto____6457
      }else {
        var or__3824__auto____6458 = cljs.core._deref["_"];
        if(or__3824__auto____6458) {
          return or__3824__auto____6458
        }else {
          throw cljs.core.missing_protocol.call(null, "IDeref.-deref", o);
        }
      }
    }().call(null, o)
  }
};
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = function _deref_with_timeout(o, msec, timeout_val) {
  if(function() {
    var and__3822__auto____6463 = o;
    if(and__3822__auto____6463) {
      return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3
    }else {
      return and__3822__auto____6463
    }
  }()) {
    return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o, msec, timeout_val)
  }else {
    var x__2389__auto____6464 = o == null ? null : o;
    return function() {
      var or__3824__auto____6465 = cljs.core._deref_with_timeout[goog.typeOf(x__2389__auto____6464)];
      if(or__3824__auto____6465) {
        return or__3824__auto____6465
      }else {
        var or__3824__auto____6466 = cljs.core._deref_with_timeout["_"];
        if(or__3824__auto____6466) {
          return or__3824__auto____6466
        }else {
          throw cljs.core.missing_protocol.call(null, "IDerefWithTimeout.-deref-with-timeout", o);
        }
      }
    }().call(null, o, msec, timeout_val)
  }
};
cljs.core.IMeta = {};
cljs.core._meta = function _meta(o) {
  if(function() {
    var and__3822__auto____6471 = o;
    if(and__3822__auto____6471) {
      return o.cljs$core$IMeta$_meta$arity$1
    }else {
      return and__3822__auto____6471
    }
  }()) {
    return o.cljs$core$IMeta$_meta$arity$1(o)
  }else {
    var x__2389__auto____6472 = o == null ? null : o;
    return function() {
      var or__3824__auto____6473 = cljs.core._meta[goog.typeOf(x__2389__auto____6472)];
      if(or__3824__auto____6473) {
        return or__3824__auto____6473
      }else {
        var or__3824__auto____6474 = cljs.core._meta["_"];
        if(or__3824__auto____6474) {
          return or__3824__auto____6474
        }else {
          throw cljs.core.missing_protocol.call(null, "IMeta.-meta", o);
        }
      }
    }().call(null, o)
  }
};
cljs.core.IWithMeta = {};
cljs.core._with_meta = function _with_meta(o, meta) {
  if(function() {
    var and__3822__auto____6479 = o;
    if(and__3822__auto____6479) {
      return o.cljs$core$IWithMeta$_with_meta$arity$2
    }else {
      return and__3822__auto____6479
    }
  }()) {
    return o.cljs$core$IWithMeta$_with_meta$arity$2(o, meta)
  }else {
    var x__2389__auto____6480 = o == null ? null : o;
    return function() {
      var or__3824__auto____6481 = cljs.core._with_meta[goog.typeOf(x__2389__auto____6480)];
      if(or__3824__auto____6481) {
        return or__3824__auto____6481
      }else {
        var or__3824__auto____6482 = cljs.core._with_meta["_"];
        if(or__3824__auto____6482) {
          return or__3824__auto____6482
        }else {
          throw cljs.core.missing_protocol.call(null, "IWithMeta.-with-meta", o);
        }
      }
    }().call(null, o, meta)
  }
};
cljs.core.IReduce = {};
cljs.core._reduce = function() {
  var _reduce = null;
  var _reduce__2 = function(coll, f) {
    if(function() {
      var and__3822__auto____6491 = coll;
      if(and__3822__auto____6491) {
        return coll.cljs$core$IReduce$_reduce$arity$2
      }else {
        return and__3822__auto____6491
      }
    }()) {
      return coll.cljs$core$IReduce$_reduce$arity$2(coll, f)
    }else {
      var x__2389__auto____6492 = coll == null ? null : coll;
      return function() {
        var or__3824__auto____6493 = cljs.core._reduce[goog.typeOf(x__2389__auto____6492)];
        if(or__3824__auto____6493) {
          return or__3824__auto____6493
        }else {
          var or__3824__auto____6494 = cljs.core._reduce["_"];
          if(or__3824__auto____6494) {
            return or__3824__auto____6494
          }else {
            throw cljs.core.missing_protocol.call(null, "IReduce.-reduce", coll);
          }
        }
      }().call(null, coll, f)
    }
  };
  var _reduce__3 = function(coll, f, start) {
    if(function() {
      var and__3822__auto____6495 = coll;
      if(and__3822__auto____6495) {
        return coll.cljs$core$IReduce$_reduce$arity$3
      }else {
        return and__3822__auto____6495
      }
    }()) {
      return coll.cljs$core$IReduce$_reduce$arity$3(coll, f, start)
    }else {
      var x__2389__auto____6496 = coll == null ? null : coll;
      return function() {
        var or__3824__auto____6497 = cljs.core._reduce[goog.typeOf(x__2389__auto____6496)];
        if(or__3824__auto____6497) {
          return or__3824__auto____6497
        }else {
          var or__3824__auto____6498 = cljs.core._reduce["_"];
          if(or__3824__auto____6498) {
            return or__3824__auto____6498
          }else {
            throw cljs.core.missing_protocol.call(null, "IReduce.-reduce", coll);
          }
        }
      }().call(null, coll, f, start)
    }
  };
  _reduce = function(coll, f, start) {
    switch(arguments.length) {
      case 2:
        return _reduce__2.call(this, coll, f);
      case 3:
        return _reduce__3.call(this, coll, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  _reduce.cljs$lang$arity$2 = _reduce__2;
  _reduce.cljs$lang$arity$3 = _reduce__3;
  return _reduce
}();
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = function _kv_reduce(coll, f, init) {
  if(function() {
    var and__3822__auto____6503 = coll;
    if(and__3822__auto____6503) {
      return coll.cljs$core$IKVReduce$_kv_reduce$arity$3
    }else {
      return and__3822__auto____6503
    }
  }()) {
    return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll, f, init)
  }else {
    var x__2389__auto____6504 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6505 = cljs.core._kv_reduce[goog.typeOf(x__2389__auto____6504)];
      if(or__3824__auto____6505) {
        return or__3824__auto____6505
      }else {
        var or__3824__auto____6506 = cljs.core._kv_reduce["_"];
        if(or__3824__auto____6506) {
          return or__3824__auto____6506
        }else {
          throw cljs.core.missing_protocol.call(null, "IKVReduce.-kv-reduce", coll);
        }
      }
    }().call(null, coll, f, init)
  }
};
cljs.core.IEquiv = {};
cljs.core._equiv = function _equiv(o, other) {
  if(function() {
    var and__3822__auto____6511 = o;
    if(and__3822__auto____6511) {
      return o.cljs$core$IEquiv$_equiv$arity$2
    }else {
      return and__3822__auto____6511
    }
  }()) {
    return o.cljs$core$IEquiv$_equiv$arity$2(o, other)
  }else {
    var x__2389__auto____6512 = o == null ? null : o;
    return function() {
      var or__3824__auto____6513 = cljs.core._equiv[goog.typeOf(x__2389__auto____6512)];
      if(or__3824__auto____6513) {
        return or__3824__auto____6513
      }else {
        var or__3824__auto____6514 = cljs.core._equiv["_"];
        if(or__3824__auto____6514) {
          return or__3824__auto____6514
        }else {
          throw cljs.core.missing_protocol.call(null, "IEquiv.-equiv", o);
        }
      }
    }().call(null, o, other)
  }
};
cljs.core.IHash = {};
cljs.core._hash = function _hash(o) {
  if(function() {
    var and__3822__auto____6519 = o;
    if(and__3822__auto____6519) {
      return o.cljs$core$IHash$_hash$arity$1
    }else {
      return and__3822__auto____6519
    }
  }()) {
    return o.cljs$core$IHash$_hash$arity$1(o)
  }else {
    var x__2389__auto____6520 = o == null ? null : o;
    return function() {
      var or__3824__auto____6521 = cljs.core._hash[goog.typeOf(x__2389__auto____6520)];
      if(or__3824__auto____6521) {
        return or__3824__auto____6521
      }else {
        var or__3824__auto____6522 = cljs.core._hash["_"];
        if(or__3824__auto____6522) {
          return or__3824__auto____6522
        }else {
          throw cljs.core.missing_protocol.call(null, "IHash.-hash", o);
        }
      }
    }().call(null, o)
  }
};
cljs.core.ISeqable = {};
cljs.core._seq = function _seq(o) {
  if(function() {
    var and__3822__auto____6527 = o;
    if(and__3822__auto____6527) {
      return o.cljs$core$ISeqable$_seq$arity$1
    }else {
      return and__3822__auto____6527
    }
  }()) {
    return o.cljs$core$ISeqable$_seq$arity$1(o)
  }else {
    var x__2389__auto____6528 = o == null ? null : o;
    return function() {
      var or__3824__auto____6529 = cljs.core._seq[goog.typeOf(x__2389__auto____6528)];
      if(or__3824__auto____6529) {
        return or__3824__auto____6529
      }else {
        var or__3824__auto____6530 = cljs.core._seq["_"];
        if(or__3824__auto____6530) {
          return or__3824__auto____6530
        }else {
          throw cljs.core.missing_protocol.call(null, "ISeqable.-seq", o);
        }
      }
    }().call(null, o)
  }
};
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = function _rseq(coll) {
  if(function() {
    var and__3822__auto____6535 = coll;
    if(and__3822__auto____6535) {
      return coll.cljs$core$IReversible$_rseq$arity$1
    }else {
      return and__3822__auto____6535
    }
  }()) {
    return coll.cljs$core$IReversible$_rseq$arity$1(coll)
  }else {
    var x__2389__auto____6536 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6537 = cljs.core._rseq[goog.typeOf(x__2389__auto____6536)];
      if(or__3824__auto____6537) {
        return or__3824__auto____6537
      }else {
        var or__3824__auto____6538 = cljs.core._rseq["_"];
        if(or__3824__auto____6538) {
          return or__3824__auto____6538
        }else {
          throw cljs.core.missing_protocol.call(null, "IReversible.-rseq", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core.ISorted = {};
cljs.core._sorted_seq = function _sorted_seq(coll, ascending_QMARK_) {
  if(function() {
    var and__3822__auto____6543 = coll;
    if(and__3822__auto____6543) {
      return coll.cljs$core$ISorted$_sorted_seq$arity$2
    }else {
      return and__3822__auto____6543
    }
  }()) {
    return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll, ascending_QMARK_)
  }else {
    var x__2389__auto____6544 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6545 = cljs.core._sorted_seq[goog.typeOf(x__2389__auto____6544)];
      if(or__3824__auto____6545) {
        return or__3824__auto____6545
      }else {
        var or__3824__auto____6546 = cljs.core._sorted_seq["_"];
        if(or__3824__auto____6546) {
          return or__3824__auto____6546
        }else {
          throw cljs.core.missing_protocol.call(null, "ISorted.-sorted-seq", coll);
        }
      }
    }().call(null, coll, ascending_QMARK_)
  }
};
cljs.core._sorted_seq_from = function _sorted_seq_from(coll, k, ascending_QMARK_) {
  if(function() {
    var and__3822__auto____6551 = coll;
    if(and__3822__auto____6551) {
      return coll.cljs$core$ISorted$_sorted_seq_from$arity$3
    }else {
      return and__3822__auto____6551
    }
  }()) {
    return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll, k, ascending_QMARK_)
  }else {
    var x__2389__auto____6552 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6553 = cljs.core._sorted_seq_from[goog.typeOf(x__2389__auto____6552)];
      if(or__3824__auto____6553) {
        return or__3824__auto____6553
      }else {
        var or__3824__auto____6554 = cljs.core._sorted_seq_from["_"];
        if(or__3824__auto____6554) {
          return or__3824__auto____6554
        }else {
          throw cljs.core.missing_protocol.call(null, "ISorted.-sorted-seq-from", coll);
        }
      }
    }().call(null, coll, k, ascending_QMARK_)
  }
};
cljs.core._entry_key = function _entry_key(coll, entry) {
  if(function() {
    var and__3822__auto____6559 = coll;
    if(and__3822__auto____6559) {
      return coll.cljs$core$ISorted$_entry_key$arity$2
    }else {
      return and__3822__auto____6559
    }
  }()) {
    return coll.cljs$core$ISorted$_entry_key$arity$2(coll, entry)
  }else {
    var x__2389__auto____6560 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6561 = cljs.core._entry_key[goog.typeOf(x__2389__auto____6560)];
      if(or__3824__auto____6561) {
        return or__3824__auto____6561
      }else {
        var or__3824__auto____6562 = cljs.core._entry_key["_"];
        if(or__3824__auto____6562) {
          return or__3824__auto____6562
        }else {
          throw cljs.core.missing_protocol.call(null, "ISorted.-entry-key", coll);
        }
      }
    }().call(null, coll, entry)
  }
};
cljs.core._comparator = function _comparator(coll) {
  if(function() {
    var and__3822__auto____6567 = coll;
    if(and__3822__auto____6567) {
      return coll.cljs$core$ISorted$_comparator$arity$1
    }else {
      return and__3822__auto____6567
    }
  }()) {
    return coll.cljs$core$ISorted$_comparator$arity$1(coll)
  }else {
    var x__2389__auto____6568 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6569 = cljs.core._comparator[goog.typeOf(x__2389__auto____6568)];
      if(or__3824__auto____6569) {
        return or__3824__auto____6569
      }else {
        var or__3824__auto____6570 = cljs.core._comparator["_"];
        if(or__3824__auto____6570) {
          return or__3824__auto____6570
        }else {
          throw cljs.core.missing_protocol.call(null, "ISorted.-comparator", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core.IPrintable = {};
cljs.core._pr_seq = function _pr_seq(o, opts) {
  if(function() {
    var and__3822__auto____6575 = o;
    if(and__3822__auto____6575) {
      return o.cljs$core$IPrintable$_pr_seq$arity$2
    }else {
      return and__3822__auto____6575
    }
  }()) {
    return o.cljs$core$IPrintable$_pr_seq$arity$2(o, opts)
  }else {
    var x__2389__auto____6576 = o == null ? null : o;
    return function() {
      var or__3824__auto____6577 = cljs.core._pr_seq[goog.typeOf(x__2389__auto____6576)];
      if(or__3824__auto____6577) {
        return or__3824__auto____6577
      }else {
        var or__3824__auto____6578 = cljs.core._pr_seq["_"];
        if(or__3824__auto____6578) {
          return or__3824__auto____6578
        }else {
          throw cljs.core.missing_protocol.call(null, "IPrintable.-pr-seq", o);
        }
      }
    }().call(null, o, opts)
  }
};
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = function _realized_QMARK_(d) {
  if(function() {
    var and__3822__auto____6583 = d;
    if(and__3822__auto____6583) {
      return d.cljs$core$IPending$_realized_QMARK_$arity$1
    }else {
      return and__3822__auto____6583
    }
  }()) {
    return d.cljs$core$IPending$_realized_QMARK_$arity$1(d)
  }else {
    var x__2389__auto____6584 = d == null ? null : d;
    return function() {
      var or__3824__auto____6585 = cljs.core._realized_QMARK_[goog.typeOf(x__2389__auto____6584)];
      if(or__3824__auto____6585) {
        return or__3824__auto____6585
      }else {
        var or__3824__auto____6586 = cljs.core._realized_QMARK_["_"];
        if(or__3824__auto____6586) {
          return or__3824__auto____6586
        }else {
          throw cljs.core.missing_protocol.call(null, "IPending.-realized?", d);
        }
      }
    }().call(null, d)
  }
};
cljs.core.IWatchable = {};
cljs.core._notify_watches = function _notify_watches(this$, oldval, newval) {
  if(function() {
    var and__3822__auto____6591 = this$;
    if(and__3822__auto____6591) {
      return this$.cljs$core$IWatchable$_notify_watches$arity$3
    }else {
      return and__3822__auto____6591
    }
  }()) {
    return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$, oldval, newval)
  }else {
    var x__2389__auto____6592 = this$ == null ? null : this$;
    return function() {
      var or__3824__auto____6593 = cljs.core._notify_watches[goog.typeOf(x__2389__auto____6592)];
      if(or__3824__auto____6593) {
        return or__3824__auto____6593
      }else {
        var or__3824__auto____6594 = cljs.core._notify_watches["_"];
        if(or__3824__auto____6594) {
          return or__3824__auto____6594
        }else {
          throw cljs.core.missing_protocol.call(null, "IWatchable.-notify-watches", this$);
        }
      }
    }().call(null, this$, oldval, newval)
  }
};
cljs.core._add_watch = function _add_watch(this$, key, f) {
  if(function() {
    var and__3822__auto____6599 = this$;
    if(and__3822__auto____6599) {
      return this$.cljs$core$IWatchable$_add_watch$arity$3
    }else {
      return and__3822__auto____6599
    }
  }()) {
    return this$.cljs$core$IWatchable$_add_watch$arity$3(this$, key, f)
  }else {
    var x__2389__auto____6600 = this$ == null ? null : this$;
    return function() {
      var or__3824__auto____6601 = cljs.core._add_watch[goog.typeOf(x__2389__auto____6600)];
      if(or__3824__auto____6601) {
        return or__3824__auto____6601
      }else {
        var or__3824__auto____6602 = cljs.core._add_watch["_"];
        if(or__3824__auto____6602) {
          return or__3824__auto____6602
        }else {
          throw cljs.core.missing_protocol.call(null, "IWatchable.-add-watch", this$);
        }
      }
    }().call(null, this$, key, f)
  }
};
cljs.core._remove_watch = function _remove_watch(this$, key) {
  if(function() {
    var and__3822__auto____6607 = this$;
    if(and__3822__auto____6607) {
      return this$.cljs$core$IWatchable$_remove_watch$arity$2
    }else {
      return and__3822__auto____6607
    }
  }()) {
    return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$, key)
  }else {
    var x__2389__auto____6608 = this$ == null ? null : this$;
    return function() {
      var or__3824__auto____6609 = cljs.core._remove_watch[goog.typeOf(x__2389__auto____6608)];
      if(or__3824__auto____6609) {
        return or__3824__auto____6609
      }else {
        var or__3824__auto____6610 = cljs.core._remove_watch["_"];
        if(or__3824__auto____6610) {
          return or__3824__auto____6610
        }else {
          throw cljs.core.missing_protocol.call(null, "IWatchable.-remove-watch", this$);
        }
      }
    }().call(null, this$, key)
  }
};
cljs.core.IEditableCollection = {};
cljs.core._as_transient = function _as_transient(coll) {
  if(function() {
    var and__3822__auto____6615 = coll;
    if(and__3822__auto____6615) {
      return coll.cljs$core$IEditableCollection$_as_transient$arity$1
    }else {
      return and__3822__auto____6615
    }
  }()) {
    return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll)
  }else {
    var x__2389__auto____6616 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6617 = cljs.core._as_transient[goog.typeOf(x__2389__auto____6616)];
      if(or__3824__auto____6617) {
        return or__3824__auto____6617
      }else {
        var or__3824__auto____6618 = cljs.core._as_transient["_"];
        if(or__3824__auto____6618) {
          return or__3824__auto____6618
        }else {
          throw cljs.core.missing_protocol.call(null, "IEditableCollection.-as-transient", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = function _conj_BANG_(tcoll, val) {
  if(function() {
    var and__3822__auto____6623 = tcoll;
    if(and__3822__auto____6623) {
      return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2
    }else {
      return and__3822__auto____6623
    }
  }()) {
    return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll, val)
  }else {
    var x__2389__auto____6624 = tcoll == null ? null : tcoll;
    return function() {
      var or__3824__auto____6625 = cljs.core._conj_BANG_[goog.typeOf(x__2389__auto____6624)];
      if(or__3824__auto____6625) {
        return or__3824__auto____6625
      }else {
        var or__3824__auto____6626 = cljs.core._conj_BANG_["_"];
        if(or__3824__auto____6626) {
          return or__3824__auto____6626
        }else {
          throw cljs.core.missing_protocol.call(null, "ITransientCollection.-conj!", tcoll);
        }
      }
    }().call(null, tcoll, val)
  }
};
cljs.core._persistent_BANG_ = function _persistent_BANG_(tcoll) {
  if(function() {
    var and__3822__auto____6631 = tcoll;
    if(and__3822__auto____6631) {
      return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1
    }else {
      return and__3822__auto____6631
    }
  }()) {
    return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll)
  }else {
    var x__2389__auto____6632 = tcoll == null ? null : tcoll;
    return function() {
      var or__3824__auto____6633 = cljs.core._persistent_BANG_[goog.typeOf(x__2389__auto____6632)];
      if(or__3824__auto____6633) {
        return or__3824__auto____6633
      }else {
        var or__3824__auto____6634 = cljs.core._persistent_BANG_["_"];
        if(or__3824__auto____6634) {
          return or__3824__auto____6634
        }else {
          throw cljs.core.missing_protocol.call(null, "ITransientCollection.-persistent!", tcoll);
        }
      }
    }().call(null, tcoll)
  }
};
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = function _assoc_BANG_(tcoll, key, val) {
  if(function() {
    var and__3822__auto____6639 = tcoll;
    if(and__3822__auto____6639) {
      return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3
    }else {
      return and__3822__auto____6639
    }
  }()) {
    return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll, key, val)
  }else {
    var x__2389__auto____6640 = tcoll == null ? null : tcoll;
    return function() {
      var or__3824__auto____6641 = cljs.core._assoc_BANG_[goog.typeOf(x__2389__auto____6640)];
      if(or__3824__auto____6641) {
        return or__3824__auto____6641
      }else {
        var or__3824__auto____6642 = cljs.core._assoc_BANG_["_"];
        if(or__3824__auto____6642) {
          return or__3824__auto____6642
        }else {
          throw cljs.core.missing_protocol.call(null, "ITransientAssociative.-assoc!", tcoll);
        }
      }
    }().call(null, tcoll, key, val)
  }
};
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = function _dissoc_BANG_(tcoll, key) {
  if(function() {
    var and__3822__auto____6647 = tcoll;
    if(and__3822__auto____6647) {
      return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2
    }else {
      return and__3822__auto____6647
    }
  }()) {
    return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll, key)
  }else {
    var x__2389__auto____6648 = tcoll == null ? null : tcoll;
    return function() {
      var or__3824__auto____6649 = cljs.core._dissoc_BANG_[goog.typeOf(x__2389__auto____6648)];
      if(or__3824__auto____6649) {
        return or__3824__auto____6649
      }else {
        var or__3824__auto____6650 = cljs.core._dissoc_BANG_["_"];
        if(or__3824__auto____6650) {
          return or__3824__auto____6650
        }else {
          throw cljs.core.missing_protocol.call(null, "ITransientMap.-dissoc!", tcoll);
        }
      }
    }().call(null, tcoll, key)
  }
};
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = function _assoc_n_BANG_(tcoll, n, val) {
  if(function() {
    var and__3822__auto____6655 = tcoll;
    if(and__3822__auto____6655) {
      return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3
    }else {
      return and__3822__auto____6655
    }
  }()) {
    return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll, n, val)
  }else {
    var x__2389__auto____6656 = tcoll == null ? null : tcoll;
    return function() {
      var or__3824__auto____6657 = cljs.core._assoc_n_BANG_[goog.typeOf(x__2389__auto____6656)];
      if(or__3824__auto____6657) {
        return or__3824__auto____6657
      }else {
        var or__3824__auto____6658 = cljs.core._assoc_n_BANG_["_"];
        if(or__3824__auto____6658) {
          return or__3824__auto____6658
        }else {
          throw cljs.core.missing_protocol.call(null, "ITransientVector.-assoc-n!", tcoll);
        }
      }
    }().call(null, tcoll, n, val)
  }
};
cljs.core._pop_BANG_ = function _pop_BANG_(tcoll) {
  if(function() {
    var and__3822__auto____6663 = tcoll;
    if(and__3822__auto____6663) {
      return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1
    }else {
      return and__3822__auto____6663
    }
  }()) {
    return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll)
  }else {
    var x__2389__auto____6664 = tcoll == null ? null : tcoll;
    return function() {
      var or__3824__auto____6665 = cljs.core._pop_BANG_[goog.typeOf(x__2389__auto____6664)];
      if(or__3824__auto____6665) {
        return or__3824__auto____6665
      }else {
        var or__3824__auto____6666 = cljs.core._pop_BANG_["_"];
        if(or__3824__auto____6666) {
          return or__3824__auto____6666
        }else {
          throw cljs.core.missing_protocol.call(null, "ITransientVector.-pop!", tcoll);
        }
      }
    }().call(null, tcoll)
  }
};
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = function _disjoin_BANG_(tcoll, v) {
  if(function() {
    var and__3822__auto____6671 = tcoll;
    if(and__3822__auto____6671) {
      return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2
    }else {
      return and__3822__auto____6671
    }
  }()) {
    return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll, v)
  }else {
    var x__2389__auto____6672 = tcoll == null ? null : tcoll;
    return function() {
      var or__3824__auto____6673 = cljs.core._disjoin_BANG_[goog.typeOf(x__2389__auto____6672)];
      if(or__3824__auto____6673) {
        return or__3824__auto____6673
      }else {
        var or__3824__auto____6674 = cljs.core._disjoin_BANG_["_"];
        if(or__3824__auto____6674) {
          return or__3824__auto____6674
        }else {
          throw cljs.core.missing_protocol.call(null, "ITransientSet.-disjoin!", tcoll);
        }
      }
    }().call(null, tcoll, v)
  }
};
cljs.core.IComparable = {};
cljs.core._compare = function _compare(x, y) {
  if(function() {
    var and__3822__auto____6679 = x;
    if(and__3822__auto____6679) {
      return x.cljs$core$IComparable$_compare$arity$2
    }else {
      return and__3822__auto____6679
    }
  }()) {
    return x.cljs$core$IComparable$_compare$arity$2(x, y)
  }else {
    var x__2389__auto____6680 = x == null ? null : x;
    return function() {
      var or__3824__auto____6681 = cljs.core._compare[goog.typeOf(x__2389__auto____6680)];
      if(or__3824__auto____6681) {
        return or__3824__auto____6681
      }else {
        var or__3824__auto____6682 = cljs.core._compare["_"];
        if(or__3824__auto____6682) {
          return or__3824__auto____6682
        }else {
          throw cljs.core.missing_protocol.call(null, "IComparable.-compare", x);
        }
      }
    }().call(null, x, y)
  }
};
cljs.core.IChunk = {};
cljs.core._drop_first = function _drop_first(coll) {
  if(function() {
    var and__3822__auto____6687 = coll;
    if(and__3822__auto____6687) {
      return coll.cljs$core$IChunk$_drop_first$arity$1
    }else {
      return and__3822__auto____6687
    }
  }()) {
    return coll.cljs$core$IChunk$_drop_first$arity$1(coll)
  }else {
    var x__2389__auto____6688 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6689 = cljs.core._drop_first[goog.typeOf(x__2389__auto____6688)];
      if(or__3824__auto____6689) {
        return or__3824__auto____6689
      }else {
        var or__3824__auto____6690 = cljs.core._drop_first["_"];
        if(or__3824__auto____6690) {
          return or__3824__auto____6690
        }else {
          throw cljs.core.missing_protocol.call(null, "IChunk.-drop-first", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = function _chunked_first(coll) {
  if(function() {
    var and__3822__auto____6695 = coll;
    if(and__3822__auto____6695) {
      return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1
    }else {
      return and__3822__auto____6695
    }
  }()) {
    return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll)
  }else {
    var x__2389__auto____6696 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6697 = cljs.core._chunked_first[goog.typeOf(x__2389__auto____6696)];
      if(or__3824__auto____6697) {
        return or__3824__auto____6697
      }else {
        var or__3824__auto____6698 = cljs.core._chunked_first["_"];
        if(or__3824__auto____6698) {
          return or__3824__auto____6698
        }else {
          throw cljs.core.missing_protocol.call(null, "IChunkedSeq.-chunked-first", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core._chunked_rest = function _chunked_rest(coll) {
  if(function() {
    var and__3822__auto____6703 = coll;
    if(and__3822__auto____6703) {
      return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1
    }else {
      return and__3822__auto____6703
    }
  }()) {
    return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll)
  }else {
    var x__2389__auto____6704 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6705 = cljs.core._chunked_rest[goog.typeOf(x__2389__auto____6704)];
      if(or__3824__auto____6705) {
        return or__3824__auto____6705
      }else {
        var or__3824__auto____6706 = cljs.core._chunked_rest["_"];
        if(or__3824__auto____6706) {
          return or__3824__auto____6706
        }else {
          throw cljs.core.missing_protocol.call(null, "IChunkedSeq.-chunked-rest", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = function _chunked_next(coll) {
  if(function() {
    var and__3822__auto____6711 = coll;
    if(and__3822__auto____6711) {
      return coll.cljs$core$IChunkedNext$_chunked_next$arity$1
    }else {
      return and__3822__auto____6711
    }
  }()) {
    return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll)
  }else {
    var x__2389__auto____6712 = coll == null ? null : coll;
    return function() {
      var or__3824__auto____6713 = cljs.core._chunked_next[goog.typeOf(x__2389__auto____6712)];
      if(or__3824__auto____6713) {
        return or__3824__auto____6713
      }else {
        var or__3824__auto____6714 = cljs.core._chunked_next["_"];
        if(or__3824__auto____6714) {
          return or__3824__auto____6714
        }else {
          throw cljs.core.missing_protocol.call(null, "IChunkedNext.-chunked-next", coll);
        }
      }
    }().call(null, coll)
  }
};
cljs.core.identical_QMARK_ = function identical_QMARK_(x, y) {
  return x === y
};
cljs.core._EQ_ = function() {
  var _EQ_ = null;
  var _EQ___1 = function(x) {
    return true
  };
  var _EQ___2 = function(x, y) {
    var or__3824__auto____6716 = x === y;
    if(or__3824__auto____6716) {
      return or__3824__auto____6716
    }else {
      return cljs.core._equiv.call(null, x, y)
    }
  };
  var _EQ___3 = function() {
    var G__6717__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_EQ_.call(null, x, y))) {
          if(cljs.core.next.call(null, more)) {
            var G__6718 = y;
            var G__6719 = cljs.core.first.call(null, more);
            var G__6720 = cljs.core.next.call(null, more);
            x = G__6718;
            y = G__6719;
            more = G__6720;
            continue
          }else {
            return _EQ_.call(null, y, cljs.core.first.call(null, more))
          }
        }else {
          return false
        }
        break
      }
    };
    var G__6717 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__6717__delegate.call(this, x, y, more)
    };
    G__6717.cljs$lang$maxFixedArity = 2;
    G__6717.cljs$lang$applyTo = function(arglist__6721) {
      var x = cljs.core.first(arglist__6721);
      var y = cljs.core.first(cljs.core.next(arglist__6721));
      var more = cljs.core.rest(cljs.core.next(arglist__6721));
      return G__6717__delegate(x, y, more)
    };
    G__6717.cljs$lang$arity$variadic = G__6717__delegate;
    return G__6717
  }();
  _EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _EQ___1.call(this, x);
      case 2:
        return _EQ___2.call(this, x, y);
      default:
        return _EQ___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  _EQ_.cljs$lang$maxFixedArity = 2;
  _EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
  _EQ_.cljs$lang$arity$1 = _EQ___1;
  _EQ_.cljs$lang$arity$2 = _EQ___2;
  _EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
  return _EQ_
}();
cljs.core.nil_QMARK_ = function nil_QMARK_(x) {
  return x == null
};
cljs.core.type = function type(x) {
  if(x == null) {
    return null
  }else {
    return x.constructor
  }
};
cljs.core.instance_QMARK_ = function instance_QMARK_(t, o) {
  return o instanceof t
};
cljs.core.IHash["null"] = true;
cljs.core._hash["null"] = function(o) {
  return 0
};
cljs.core.ILookup["null"] = true;
cljs.core._lookup["null"] = function() {
  var G__6722 = null;
  var G__6722__2 = function(o, k) {
    return null
  };
  var G__6722__3 = function(o, k, not_found) {
    return not_found
  };
  G__6722 = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__6722__2.call(this, o, k);
      case 3:
        return G__6722__3.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__6722
}();
cljs.core.IAssociative["null"] = true;
cljs.core._assoc["null"] = function(_, k, v) {
  return cljs.core.hash_map.call(null, k, v)
};
cljs.core.INext["null"] = true;
cljs.core._next["null"] = function(_) {
  return null
};
cljs.core.ICollection["null"] = true;
cljs.core._conj["null"] = function(_, o) {
  return cljs.core.list.call(null, o)
};
cljs.core.IReduce["null"] = true;
cljs.core._reduce["null"] = function() {
  var G__6723 = null;
  var G__6723__2 = function(_, f) {
    return f.call(null)
  };
  var G__6723__3 = function(_, f, start) {
    return start
  };
  G__6723 = function(_, f, start) {
    switch(arguments.length) {
      case 2:
        return G__6723__2.call(this, _, f);
      case 3:
        return G__6723__3.call(this, _, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__6723
}();
cljs.core.IPrintable["null"] = true;
cljs.core._pr_seq["null"] = function(o) {
  return cljs.core.list.call(null, "nil")
};
cljs.core.ISet["null"] = true;
cljs.core._disjoin["null"] = function(_, v) {
  return null
};
cljs.core.ICounted["null"] = true;
cljs.core._count["null"] = function(_) {
  return 0
};
cljs.core.IStack["null"] = true;
cljs.core._peek["null"] = function(_) {
  return null
};
cljs.core._pop["null"] = function(_) {
  return null
};
cljs.core.ISeq["null"] = true;
cljs.core._first["null"] = function(_) {
  return null
};
cljs.core._rest["null"] = function(_) {
  return cljs.core.list.call(null)
};
cljs.core.IEquiv["null"] = true;
cljs.core._equiv["null"] = function(_, o) {
  return o == null
};
cljs.core.IWithMeta["null"] = true;
cljs.core._with_meta["null"] = function(_, meta) {
  return null
};
cljs.core.IMeta["null"] = true;
cljs.core._meta["null"] = function(_) {
  return null
};
cljs.core.IIndexed["null"] = true;
cljs.core._nth["null"] = function() {
  var G__6724 = null;
  var G__6724__2 = function(_, n) {
    return null
  };
  var G__6724__3 = function(_, n, not_found) {
    return not_found
  };
  G__6724 = function(_, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__6724__2.call(this, _, n);
      case 3:
        return G__6724__3.call(this, _, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__6724
}();
cljs.core.IEmptyableCollection["null"] = true;
cljs.core._empty["null"] = function(_) {
  return null
};
cljs.core.IMap["null"] = true;
cljs.core._dissoc["null"] = function(_, k) {
  return null
};
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(o, other) {
  var and__3822__auto____6725 = cljs.core.instance_QMARK_.call(null, Date, other);
  if(and__3822__auto____6725) {
    return o.toString() === other.toString()
  }else {
    return and__3822__auto____6725
  }
};
cljs.core.IHash["number"] = true;
cljs.core._hash["number"] = function(o) {
  return o
};
cljs.core.IEquiv["number"] = true;
cljs.core._equiv["number"] = function(x, o) {
  return x === o
};
cljs.core.IHash["boolean"] = true;
cljs.core._hash["boolean"] = function(o) {
  if(o === true) {
    return 1
  }else {
    return 0
  }
};
cljs.core.IHash["_"] = true;
cljs.core._hash["_"] = function(o) {
  return goog.getUid(o)
};
cljs.core.inc = function inc(x) {
  return x + 1
};
cljs.core.ci_reduce = function() {
  var ci_reduce = null;
  var ci_reduce__2 = function(cicoll, f) {
    var cnt__6738 = cljs.core._count.call(null, cicoll);
    if(cnt__6738 === 0) {
      return f.call(null)
    }else {
      var val__6739 = cljs.core._nth.call(null, cicoll, 0);
      var n__6740 = 1;
      while(true) {
        if(n__6740 < cnt__6738) {
          var nval__6741 = f.call(null, val__6739, cljs.core._nth.call(null, cicoll, n__6740));
          if(cljs.core.reduced_QMARK_.call(null, nval__6741)) {
            return cljs.core.deref.call(null, nval__6741)
          }else {
            var G__6750 = nval__6741;
            var G__6751 = n__6740 + 1;
            val__6739 = G__6750;
            n__6740 = G__6751;
            continue
          }
        }else {
          return val__6739
        }
        break
      }
    }
  };
  var ci_reduce__3 = function(cicoll, f, val) {
    var cnt__6742 = cljs.core._count.call(null, cicoll);
    var val__6743 = val;
    var n__6744 = 0;
    while(true) {
      if(n__6744 < cnt__6742) {
        var nval__6745 = f.call(null, val__6743, cljs.core._nth.call(null, cicoll, n__6744));
        if(cljs.core.reduced_QMARK_.call(null, nval__6745)) {
          return cljs.core.deref.call(null, nval__6745)
        }else {
          var G__6752 = nval__6745;
          var G__6753 = n__6744 + 1;
          val__6743 = G__6752;
          n__6744 = G__6753;
          continue
        }
      }else {
        return val__6743
      }
      break
    }
  };
  var ci_reduce__4 = function(cicoll, f, val, idx) {
    var cnt__6746 = cljs.core._count.call(null, cicoll);
    var val__6747 = val;
    var n__6748 = idx;
    while(true) {
      if(n__6748 < cnt__6746) {
        var nval__6749 = f.call(null, val__6747, cljs.core._nth.call(null, cicoll, n__6748));
        if(cljs.core.reduced_QMARK_.call(null, nval__6749)) {
          return cljs.core.deref.call(null, nval__6749)
        }else {
          var G__6754 = nval__6749;
          var G__6755 = n__6748 + 1;
          val__6747 = G__6754;
          n__6748 = G__6755;
          continue
        }
      }else {
        return val__6747
      }
      break
    }
  };
  ci_reduce = function(cicoll, f, val, idx) {
    switch(arguments.length) {
      case 2:
        return ci_reduce__2.call(this, cicoll, f);
      case 3:
        return ci_reduce__3.call(this, cicoll, f, val);
      case 4:
        return ci_reduce__4.call(this, cicoll, f, val, idx)
    }
    throw"Invalid arity: " + arguments.length;
  };
  ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
  ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
  ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
  return ci_reduce
}();
cljs.core.array_reduce = function() {
  var array_reduce = null;
  var array_reduce__2 = function(arr, f) {
    var cnt__6768 = arr.length;
    if(arr.length === 0) {
      return f.call(null)
    }else {
      var val__6769 = arr[0];
      var n__6770 = 1;
      while(true) {
        if(n__6770 < cnt__6768) {
          var nval__6771 = f.call(null, val__6769, arr[n__6770]);
          if(cljs.core.reduced_QMARK_.call(null, nval__6771)) {
            return cljs.core.deref.call(null, nval__6771)
          }else {
            var G__6780 = nval__6771;
            var G__6781 = n__6770 + 1;
            val__6769 = G__6780;
            n__6770 = G__6781;
            continue
          }
        }else {
          return val__6769
        }
        break
      }
    }
  };
  var array_reduce__3 = function(arr, f, val) {
    var cnt__6772 = arr.length;
    var val__6773 = val;
    var n__6774 = 0;
    while(true) {
      if(n__6774 < cnt__6772) {
        var nval__6775 = f.call(null, val__6773, arr[n__6774]);
        if(cljs.core.reduced_QMARK_.call(null, nval__6775)) {
          return cljs.core.deref.call(null, nval__6775)
        }else {
          var G__6782 = nval__6775;
          var G__6783 = n__6774 + 1;
          val__6773 = G__6782;
          n__6774 = G__6783;
          continue
        }
      }else {
        return val__6773
      }
      break
    }
  };
  var array_reduce__4 = function(arr, f, val, idx) {
    var cnt__6776 = arr.length;
    var val__6777 = val;
    var n__6778 = idx;
    while(true) {
      if(n__6778 < cnt__6776) {
        var nval__6779 = f.call(null, val__6777, arr[n__6778]);
        if(cljs.core.reduced_QMARK_.call(null, nval__6779)) {
          return cljs.core.deref.call(null, nval__6779)
        }else {
          var G__6784 = nval__6779;
          var G__6785 = n__6778 + 1;
          val__6777 = G__6784;
          n__6778 = G__6785;
          continue
        }
      }else {
        return val__6777
      }
      break
    }
  };
  array_reduce = function(arr, f, val, idx) {
    switch(arguments.length) {
      case 2:
        return array_reduce__2.call(this, arr, f);
      case 3:
        return array_reduce__3.call(this, arr, f, val);
      case 4:
        return array_reduce__4.call(this, arr, f, val, idx)
    }
    throw"Invalid arity: " + arguments.length;
  };
  array_reduce.cljs$lang$arity$2 = array_reduce__2;
  array_reduce.cljs$lang$arity$3 = array_reduce__3;
  array_reduce.cljs$lang$arity$4 = array_reduce__4;
  return array_reduce
}();
cljs.core.IndexedSeq = function(a, i) {
  this.a = a;
  this.i = i;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 166199546
};
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/IndexedSeq")
};
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__6786 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = function(_) {
  var this__6787 = this;
  if(this__6787.i + 1 < this__6787.a.length) {
    return new cljs.core.IndexedSeq(this__6787.a, this__6787.i + 1)
  }else {
    return null
  }
};
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__6788 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = function(coll) {
  var this__6789 = this;
  var c__6790 = coll.cljs$core$ICounted$_count$arity$1(coll);
  if(c__6790 > 0) {
    return new cljs.core.RSeq(coll, c__6790 - 1, null)
  }else {
    return cljs.core.List.EMPTY
  }
};
cljs.core.IndexedSeq.prototype.toString = function() {
  var this__6791 = this;
  var this__6792 = this;
  return cljs.core.pr_str.call(null, this__6792)
};
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = function(coll, f) {
  var this__6793 = this;
  if(cljs.core.counted_QMARK_.call(null, this__6793.a)) {
    return cljs.core.ci_reduce.call(null, this__6793.a, f, this__6793.a[this__6793.i], this__6793.i + 1)
  }else {
    return cljs.core.ci_reduce.call(null, coll, f, this__6793.a[this__6793.i], 0)
  }
};
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = function(coll, f, start) {
  var this__6794 = this;
  if(cljs.core.counted_QMARK_.call(null, this__6794.a)) {
    return cljs.core.ci_reduce.call(null, this__6794.a, f, start, this__6794.i)
  }else {
    return cljs.core.ci_reduce.call(null, coll, f, start, 0)
  }
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(this$) {
  var this__6795 = this;
  return this$
};
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = function(_) {
  var this__6796 = this;
  return this__6796.a.length - this__6796.i
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = function(_) {
  var this__6797 = this;
  return this__6797.a[this__6797.i]
};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(_) {
  var this__6798 = this;
  if(this__6798.i + 1 < this__6798.a.length) {
    return new cljs.core.IndexedSeq(this__6798.a, this__6798.i + 1)
  }else {
    return cljs.core.list.call(null)
  }
};
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__6799 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = function(coll, n) {
  var this__6800 = this;
  var i__6801 = n + this__6800.i;
  if(i__6801 < this__6800.a.length) {
    return this__6800.a[i__6801]
  }else {
    return null
  }
};
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = function(coll, n, not_found) {
  var this__6802 = this;
  var i__6803 = n + this__6802.i;
  if(i__6803 < this__6802.a.length) {
    return this__6802.a[i__6803]
  }else {
    return not_found
  }
};
cljs.core.IndexedSeq;
cljs.core.prim_seq = function() {
  var prim_seq = null;
  var prim_seq__1 = function(prim) {
    return prim_seq.call(null, prim, 0)
  };
  var prim_seq__2 = function(prim, i) {
    if(prim.length === 0) {
      return null
    }else {
      return new cljs.core.IndexedSeq(prim, i)
    }
  };
  prim_seq = function(prim, i) {
    switch(arguments.length) {
      case 1:
        return prim_seq__1.call(this, prim);
      case 2:
        return prim_seq__2.call(this, prim, i)
    }
    throw"Invalid arity: " + arguments.length;
  };
  prim_seq.cljs$lang$arity$1 = prim_seq__1;
  prim_seq.cljs$lang$arity$2 = prim_seq__2;
  return prim_seq
}();
cljs.core.array_seq = function() {
  var array_seq = null;
  var array_seq__1 = function(array) {
    return cljs.core.prim_seq.call(null, array, 0)
  };
  var array_seq__2 = function(array, i) {
    return cljs.core.prim_seq.call(null, array, i)
  };
  array_seq = function(array, i) {
    switch(arguments.length) {
      case 1:
        return array_seq__1.call(this, array);
      case 2:
        return array_seq__2.call(this, array, i)
    }
    throw"Invalid arity: " + arguments.length;
  };
  array_seq.cljs$lang$arity$1 = array_seq__1;
  array_seq.cljs$lang$arity$2 = array_seq__2;
  return array_seq
}();
cljs.core.IReduce["array"] = true;
cljs.core._reduce["array"] = function() {
  var G__6804 = null;
  var G__6804__2 = function(array, f) {
    return cljs.core.ci_reduce.call(null, array, f)
  };
  var G__6804__3 = function(array, f, start) {
    return cljs.core.ci_reduce.call(null, array, f, start)
  };
  G__6804 = function(array, f, start) {
    switch(arguments.length) {
      case 2:
        return G__6804__2.call(this, array, f);
      case 3:
        return G__6804__3.call(this, array, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__6804
}();
cljs.core.ILookup["array"] = true;
cljs.core._lookup["array"] = function() {
  var G__6805 = null;
  var G__6805__2 = function(array, k) {
    return array[k]
  };
  var G__6805__3 = function(array, k, not_found) {
    return cljs.core._nth.call(null, array, k, not_found)
  };
  G__6805 = function(array, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__6805__2.call(this, array, k);
      case 3:
        return G__6805__3.call(this, array, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__6805
}();
cljs.core.IIndexed["array"] = true;
cljs.core._nth["array"] = function() {
  var G__6806 = null;
  var G__6806__2 = function(array, n) {
    if(n < array.length) {
      return array[n]
    }else {
      return null
    }
  };
  var G__6806__3 = function(array, n, not_found) {
    if(n < array.length) {
      return array[n]
    }else {
      return not_found
    }
  };
  G__6806 = function(array, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__6806__2.call(this, array, n);
      case 3:
        return G__6806__3.call(this, array, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__6806
}();
cljs.core.ICounted["array"] = true;
cljs.core._count["array"] = function(a) {
  return a.length
};
cljs.core.ISeqable["array"] = true;
cljs.core._seq["array"] = function(array) {
  return cljs.core.array_seq.call(null, array, 0)
};
cljs.core.RSeq = function(ci, i, meta) {
  this.ci = ci;
  this.i = i;
  this.meta = meta;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 31850570
};
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/RSeq")
};
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__6807 = this;
  return cljs.core.hash_coll.call(null, coll)
};
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__6808 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.RSeq.prototype.toString = function() {
  var this__6809 = this;
  var this__6810 = this;
  return cljs.core.pr_str.call(null, this__6810)
};
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__6811 = this;
  return coll
};
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__6812 = this;
  return this__6812.i + 1
};
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = function(coll) {
  var this__6813 = this;
  return cljs.core._nth.call(null, this__6813.ci, this__6813.i)
};
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(coll) {
  var this__6814 = this;
  if(this__6814.i > 0) {
    return new cljs.core.RSeq(this__6814.ci, this__6814.i - 1, null)
  }else {
    return cljs.core.List.EMPTY
  }
};
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__6815 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, new_meta) {
  var this__6816 = this;
  return new cljs.core.RSeq(this__6816.ci, this__6816.i, new_meta)
};
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__6817 = this;
  return this__6817.meta
};
cljs.core.RSeq;
cljs.core.seq = function seq(coll) {
  if(coll == null) {
    return null
  }else {
    if(function() {
      var G__6821__6822 = coll;
      if(G__6821__6822) {
        if(function() {
          var or__3824__auto____6823 = G__6821__6822.cljs$lang$protocol_mask$partition0$ & 32;
          if(or__3824__auto____6823) {
            return or__3824__auto____6823
          }else {
            return G__6821__6822.cljs$core$ASeq$
          }
        }()) {
          return true
        }else {
          if(!G__6821__6822.cljs$lang$protocol_mask$partition0$) {
            return cljs.core.type_satisfies_.call(null, cljs.core.ASeq, G__6821__6822)
          }else {
            return false
          }
        }
      }else {
        return cljs.core.type_satisfies_.call(null, cljs.core.ASeq, G__6821__6822)
      }
    }()) {
      return coll
    }else {
      return cljs.core._seq.call(null, coll)
    }
  }
};
cljs.core.first = function first(coll) {
  if(coll == null) {
    return null
  }else {
    if(function() {
      var G__6828__6829 = coll;
      if(G__6828__6829) {
        if(function() {
          var or__3824__auto____6830 = G__6828__6829.cljs$lang$protocol_mask$partition0$ & 64;
          if(or__3824__auto____6830) {
            return or__3824__auto____6830
          }else {
            return G__6828__6829.cljs$core$ISeq$
          }
        }()) {
          return true
        }else {
          if(!G__6828__6829.cljs$lang$protocol_mask$partition0$) {
            return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, G__6828__6829)
          }else {
            return false
          }
        }
      }else {
        return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, G__6828__6829)
      }
    }()) {
      return cljs.core._first.call(null, coll)
    }else {
      var s__6831 = cljs.core.seq.call(null, coll);
      if(s__6831 == null) {
        return null
      }else {
        return cljs.core._first.call(null, s__6831)
      }
    }
  }
};
cljs.core.rest = function rest(coll) {
  if(!(coll == null)) {
    if(function() {
      var G__6836__6837 = coll;
      if(G__6836__6837) {
        if(function() {
          var or__3824__auto____6838 = G__6836__6837.cljs$lang$protocol_mask$partition0$ & 64;
          if(or__3824__auto____6838) {
            return or__3824__auto____6838
          }else {
            return G__6836__6837.cljs$core$ISeq$
          }
        }()) {
          return true
        }else {
          if(!G__6836__6837.cljs$lang$protocol_mask$partition0$) {
            return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, G__6836__6837)
          }else {
            return false
          }
        }
      }else {
        return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, G__6836__6837)
      }
    }()) {
      return cljs.core._rest.call(null, coll)
    }else {
      var s__6839 = cljs.core.seq.call(null, coll);
      if(!(s__6839 == null)) {
        return cljs.core._rest.call(null, s__6839)
      }else {
        return cljs.core.List.EMPTY
      }
    }
  }else {
    return cljs.core.List.EMPTY
  }
};
cljs.core.next = function next(coll) {
  if(coll == null) {
    return null
  }else {
    if(function() {
      var G__6843__6844 = coll;
      if(G__6843__6844) {
        if(function() {
          var or__3824__auto____6845 = G__6843__6844.cljs$lang$protocol_mask$partition0$ & 128;
          if(or__3824__auto____6845) {
            return or__3824__auto____6845
          }else {
            return G__6843__6844.cljs$core$INext$
          }
        }()) {
          return true
        }else {
          if(!G__6843__6844.cljs$lang$protocol_mask$partition0$) {
            return cljs.core.type_satisfies_.call(null, cljs.core.INext, G__6843__6844)
          }else {
            return false
          }
        }
      }else {
        return cljs.core.type_satisfies_.call(null, cljs.core.INext, G__6843__6844)
      }
    }()) {
      return cljs.core._next.call(null, coll)
    }else {
      return cljs.core.seq.call(null, cljs.core.rest.call(null, coll))
    }
  }
};
cljs.core.second = function second(coll) {
  return cljs.core.first.call(null, cljs.core.next.call(null, coll))
};
cljs.core.ffirst = function ffirst(coll) {
  return cljs.core.first.call(null, cljs.core.first.call(null, coll))
};
cljs.core.nfirst = function nfirst(coll) {
  return cljs.core.next.call(null, cljs.core.first.call(null, coll))
};
cljs.core.fnext = function fnext(coll) {
  return cljs.core.first.call(null, cljs.core.next.call(null, coll))
};
cljs.core.nnext = function nnext(coll) {
  return cljs.core.next.call(null, cljs.core.next.call(null, coll))
};
cljs.core.last = function last(s) {
  while(true) {
    var sn__6847 = cljs.core.next.call(null, s);
    if(!(sn__6847 == null)) {
      var G__6848 = sn__6847;
      s = G__6848;
      continue
    }else {
      return cljs.core.first.call(null, s)
    }
    break
  }
};
cljs.core.IEquiv["_"] = true;
cljs.core._equiv["_"] = function(x, o) {
  return x === o
};
cljs.core.not = function not(x) {
  if(cljs.core.truth_(x)) {
    return false
  }else {
    return true
  }
};
cljs.core.conj = function() {
  var conj = null;
  var conj__2 = function(coll, x) {
    return cljs.core._conj.call(null, coll, x)
  };
  var conj__3 = function() {
    var G__6849__delegate = function(coll, x, xs) {
      while(true) {
        if(cljs.core.truth_(xs)) {
          var G__6850 = conj.call(null, coll, x);
          var G__6851 = cljs.core.first.call(null, xs);
          var G__6852 = cljs.core.next.call(null, xs);
          coll = G__6850;
          x = G__6851;
          xs = G__6852;
          continue
        }else {
          return conj.call(null, coll, x)
        }
        break
      }
    };
    var G__6849 = function(coll, x, var_args) {
      var xs = null;
      if(goog.isDef(var_args)) {
        xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__6849__delegate.call(this, coll, x, xs)
    };
    G__6849.cljs$lang$maxFixedArity = 2;
    G__6849.cljs$lang$applyTo = function(arglist__6853) {
      var coll = cljs.core.first(arglist__6853);
      var x = cljs.core.first(cljs.core.next(arglist__6853));
      var xs = cljs.core.rest(cljs.core.next(arglist__6853));
      return G__6849__delegate(coll, x, xs)
    };
    G__6849.cljs$lang$arity$variadic = G__6849__delegate;
    return G__6849
  }();
  conj = function(coll, x, var_args) {
    var xs = var_args;
    switch(arguments.length) {
      case 2:
        return conj__2.call(this, coll, x);
      default:
        return conj__3.cljs$lang$arity$variadic(coll, x, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  conj.cljs$lang$maxFixedArity = 2;
  conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
  conj.cljs$lang$arity$2 = conj__2;
  conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
  return conj
}();
cljs.core.empty = function empty(coll) {
  return cljs.core._empty.call(null, coll)
};
cljs.core.accumulating_seq_count = function accumulating_seq_count(coll) {
  var s__6856 = cljs.core.seq.call(null, coll);
  var acc__6857 = 0;
  while(true) {
    if(cljs.core.counted_QMARK_.call(null, s__6856)) {
      return acc__6857 + cljs.core._count.call(null, s__6856)
    }else {
      var G__6858 = cljs.core.next.call(null, s__6856);
      var G__6859 = acc__6857 + 1;
      s__6856 = G__6858;
      acc__6857 = G__6859;
      continue
    }
    break
  }
};
cljs.core.count = function count(coll) {
  if(cljs.core.counted_QMARK_.call(null, coll)) {
    return cljs.core._count.call(null, coll)
  }else {
    return cljs.core.accumulating_seq_count.call(null, coll)
  }
};
cljs.core.linear_traversal_nth = function() {
  var linear_traversal_nth = null;
  var linear_traversal_nth__2 = function(coll, n) {
    if(coll == null) {
      throw new Error("Index out of bounds");
    }else {
      if(n === 0) {
        if(cljs.core.seq.call(null, coll)) {
          return cljs.core.first.call(null, coll)
        }else {
          throw new Error("Index out of bounds");
        }
      }else {
        if(cljs.core.indexed_QMARK_.call(null, coll)) {
          return cljs.core._nth.call(null, coll, n)
        }else {
          if(cljs.core.seq.call(null, coll)) {
            return linear_traversal_nth.call(null, cljs.core.next.call(null, coll), n - 1)
          }else {
            if("\ufdd0'else") {
              throw new Error("Index out of bounds");
            }else {
              return null
            }
          }
        }
      }
    }
  };
  var linear_traversal_nth__3 = function(coll, n, not_found) {
    if(coll == null) {
      return not_found
    }else {
      if(n === 0) {
        if(cljs.core.seq.call(null, coll)) {
          return cljs.core.first.call(null, coll)
        }else {
          return not_found
        }
      }else {
        if(cljs.core.indexed_QMARK_.call(null, coll)) {
          return cljs.core._nth.call(null, coll, n, not_found)
        }else {
          if(cljs.core.seq.call(null, coll)) {
            return linear_traversal_nth.call(null, cljs.core.next.call(null, coll), n - 1, not_found)
          }else {
            if("\ufdd0'else") {
              return not_found
            }else {
              return null
            }
          }
        }
      }
    }
  };
  linear_traversal_nth = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return linear_traversal_nth__2.call(this, coll, n);
      case 3:
        return linear_traversal_nth__3.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
  linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
  return linear_traversal_nth
}();
cljs.core.nth = function() {
  var nth = null;
  var nth__2 = function(coll, n) {
    if(coll == null) {
      return null
    }else {
      if(function() {
        var G__6866__6867 = coll;
        if(G__6866__6867) {
          if(function() {
            var or__3824__auto____6868 = G__6866__6867.cljs$lang$protocol_mask$partition0$ & 16;
            if(or__3824__auto____6868) {
              return or__3824__auto____6868
            }else {
              return G__6866__6867.cljs$core$IIndexed$
            }
          }()) {
            return true
          }else {
            if(!G__6866__6867.cljs$lang$protocol_mask$partition0$) {
              return cljs.core.type_satisfies_.call(null, cljs.core.IIndexed, G__6866__6867)
            }else {
              return false
            }
          }
        }else {
          return cljs.core.type_satisfies_.call(null, cljs.core.IIndexed, G__6866__6867)
        }
      }()) {
        return cljs.core._nth.call(null, coll, Math.floor(n))
      }else {
        return cljs.core.linear_traversal_nth.call(null, coll, Math.floor(n))
      }
    }
  };
  var nth__3 = function(coll, n, not_found) {
    if(!(coll == null)) {
      if(function() {
        var G__6869__6870 = coll;
        if(G__6869__6870) {
          if(function() {
            var or__3824__auto____6871 = G__6869__6870.cljs$lang$protocol_mask$partition0$ & 16;
            if(or__3824__auto____6871) {
              return or__3824__auto____6871
            }else {
              return G__6869__6870.cljs$core$IIndexed$
            }
          }()) {
            return true
          }else {
            if(!G__6869__6870.cljs$lang$protocol_mask$partition0$) {
              return cljs.core.type_satisfies_.call(null, cljs.core.IIndexed, G__6869__6870)
            }else {
              return false
            }
          }
        }else {
          return cljs.core.type_satisfies_.call(null, cljs.core.IIndexed, G__6869__6870)
        }
      }()) {
        return cljs.core._nth.call(null, coll, Math.floor(n), not_found)
      }else {
        return cljs.core.linear_traversal_nth.call(null, coll, Math.floor(n), not_found)
      }
    }else {
      return not_found
    }
  };
  nth = function(coll, n, not_found) {
    switch(arguments.length) {
      case 2:
        return nth__2.call(this, coll, n);
      case 3:
        return nth__3.call(this, coll, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  nth.cljs$lang$arity$2 = nth__2;
  nth.cljs$lang$arity$3 = nth__3;
  return nth
}();
cljs.core.get = function() {
  var get = null;
  var get__2 = function(o, k) {
    return cljs.core._lookup.call(null, o, k)
  };
  var get__3 = function(o, k, not_found) {
    return cljs.core._lookup.call(null, o, k, not_found)
  };
  get = function(o, k, not_found) {
    switch(arguments.length) {
      case 2:
        return get__2.call(this, o, k);
      case 3:
        return get__3.call(this, o, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  get.cljs$lang$arity$2 = get__2;
  get.cljs$lang$arity$3 = get__3;
  return get
}();
cljs.core.assoc = function() {
  var assoc = null;
  var assoc__3 = function(coll, k, v) {
    return cljs.core._assoc.call(null, coll, k, v)
  };
  var assoc__4 = function() {
    var G__6874__delegate = function(coll, k, v, kvs) {
      while(true) {
        var ret__6873 = assoc.call(null, coll, k, v);
        if(cljs.core.truth_(kvs)) {
          var G__6875 = ret__6873;
          var G__6876 = cljs.core.first.call(null, kvs);
          var G__6877 = cljs.core.second.call(null, kvs);
          var G__6878 = cljs.core.nnext.call(null, kvs);
          coll = G__6875;
          k = G__6876;
          v = G__6877;
          kvs = G__6878;
          continue
        }else {
          return ret__6873
        }
        break
      }
    };
    var G__6874 = function(coll, k, v, var_args) {
      var kvs = null;
      if(goog.isDef(var_args)) {
        kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__6874__delegate.call(this, coll, k, v, kvs)
    };
    G__6874.cljs$lang$maxFixedArity = 3;
    G__6874.cljs$lang$applyTo = function(arglist__6879) {
      var coll = cljs.core.first(arglist__6879);
      var k = cljs.core.first(cljs.core.next(arglist__6879));
      var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6879)));
      var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6879)));
      return G__6874__delegate(coll, k, v, kvs)
    };
    G__6874.cljs$lang$arity$variadic = G__6874__delegate;
    return G__6874
  }();
  assoc = function(coll, k, v, var_args) {
    var kvs = var_args;
    switch(arguments.length) {
      case 3:
        return assoc__3.call(this, coll, k, v);
      default:
        return assoc__4.cljs$lang$arity$variadic(coll, k, v, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  assoc.cljs$lang$maxFixedArity = 3;
  assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
  assoc.cljs$lang$arity$3 = assoc__3;
  assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
  return assoc
}();
cljs.core.dissoc = function() {
  var dissoc = null;
  var dissoc__1 = function(coll) {
    return coll
  };
  var dissoc__2 = function(coll, k) {
    return cljs.core._dissoc.call(null, coll, k)
  };
  var dissoc__3 = function() {
    var G__6882__delegate = function(coll, k, ks) {
      while(true) {
        var ret__6881 = dissoc.call(null, coll, k);
        if(cljs.core.truth_(ks)) {
          var G__6883 = ret__6881;
          var G__6884 = cljs.core.first.call(null, ks);
          var G__6885 = cljs.core.next.call(null, ks);
          coll = G__6883;
          k = G__6884;
          ks = G__6885;
          continue
        }else {
          return ret__6881
        }
        break
      }
    };
    var G__6882 = function(coll, k, var_args) {
      var ks = null;
      if(goog.isDef(var_args)) {
        ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__6882__delegate.call(this, coll, k, ks)
    };
    G__6882.cljs$lang$maxFixedArity = 2;
    G__6882.cljs$lang$applyTo = function(arglist__6886) {
      var coll = cljs.core.first(arglist__6886);
      var k = cljs.core.first(cljs.core.next(arglist__6886));
      var ks = cljs.core.rest(cljs.core.next(arglist__6886));
      return G__6882__delegate(coll, k, ks)
    };
    G__6882.cljs$lang$arity$variadic = G__6882__delegate;
    return G__6882
  }();
  dissoc = function(coll, k, var_args) {
    var ks = var_args;
    switch(arguments.length) {
      case 1:
        return dissoc__1.call(this, coll);
      case 2:
        return dissoc__2.call(this, coll, k);
      default:
        return dissoc__3.cljs$lang$arity$variadic(coll, k, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  dissoc.cljs$lang$maxFixedArity = 2;
  dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
  dissoc.cljs$lang$arity$1 = dissoc__1;
  dissoc.cljs$lang$arity$2 = dissoc__2;
  dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
  return dissoc
}();
cljs.core.with_meta = function with_meta(o, meta) {
  return cljs.core._with_meta.call(null, o, meta)
};
cljs.core.meta = function meta(o) {
  if(function() {
    var G__6890__6891 = o;
    if(G__6890__6891) {
      if(function() {
        var or__3824__auto____6892 = G__6890__6891.cljs$lang$protocol_mask$partition0$ & 131072;
        if(or__3824__auto____6892) {
          return or__3824__auto____6892
        }else {
          return G__6890__6891.cljs$core$IMeta$
        }
      }()) {
        return true
      }else {
        if(!G__6890__6891.cljs$lang$protocol_mask$partition0$) {
          return cljs.core.type_satisfies_.call(null, cljs.core.IMeta, G__6890__6891)
        }else {
          return false
        }
      }
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.IMeta, G__6890__6891)
    }
  }()) {
    return cljs.core._meta.call(null, o)
  }else {
    return null
  }
};
cljs.core.peek = function peek(coll) {
  return cljs.core._peek.call(null, coll)
};
cljs.core.pop = function pop(coll) {
  return cljs.core._pop.call(null, coll)
};
cljs.core.disj = function() {
  var disj = null;
  var disj__1 = function(coll) {
    return coll
  };
  var disj__2 = function(coll, k) {
    return cljs.core._disjoin.call(null, coll, k)
  };
  var disj__3 = function() {
    var G__6895__delegate = function(coll, k, ks) {
      while(true) {
        var ret__6894 = disj.call(null, coll, k);
        if(cljs.core.truth_(ks)) {
          var G__6896 = ret__6894;
          var G__6897 = cljs.core.first.call(null, ks);
          var G__6898 = cljs.core.next.call(null, ks);
          coll = G__6896;
          k = G__6897;
          ks = G__6898;
          continue
        }else {
          return ret__6894
        }
        break
      }
    };
    var G__6895 = function(coll, k, var_args) {
      var ks = null;
      if(goog.isDef(var_args)) {
        ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__6895__delegate.call(this, coll, k, ks)
    };
    G__6895.cljs$lang$maxFixedArity = 2;
    G__6895.cljs$lang$applyTo = function(arglist__6899) {
      var coll = cljs.core.first(arglist__6899);
      var k = cljs.core.first(cljs.core.next(arglist__6899));
      var ks = cljs.core.rest(cljs.core.next(arglist__6899));
      return G__6895__delegate(coll, k, ks)
    };
    G__6895.cljs$lang$arity$variadic = G__6895__delegate;
    return G__6895
  }();
  disj = function(coll, k, var_args) {
    var ks = var_args;
    switch(arguments.length) {
      case 1:
        return disj__1.call(this, coll);
      case 2:
        return disj__2.call(this, coll, k);
      default:
        return disj__3.cljs$lang$arity$variadic(coll, k, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  disj.cljs$lang$maxFixedArity = 2;
  disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
  disj.cljs$lang$arity$1 = disj__1;
  disj.cljs$lang$arity$2 = disj__2;
  disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
  return disj
}();
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = function add_to_string_hash_cache(k) {
  var h__6901 = goog.string.hashCode(k);
  cljs.core.string_hash_cache[k] = h__6901;
  cljs.core.string_hash_cache_count = cljs.core.string_hash_cache_count + 1;
  return h__6901
};
cljs.core.check_string_hash_cache = function check_string_hash_cache(k) {
  if(cljs.core.string_hash_cache_count > 255) {
    cljs.core.string_hash_cache = {};
    cljs.core.string_hash_cache_count = 0
  }else {
  }
  var h__6903 = cljs.core.string_hash_cache[k];
  if(!(h__6903 == null)) {
    return h__6903
  }else {
    return cljs.core.add_to_string_hash_cache.call(null, k)
  }
};
cljs.core.hash = function() {
  var hash = null;
  var hash__1 = function(o) {
    return hash.call(null, o, true)
  };
  var hash__2 = function(o, check_cache) {
    if(function() {
      var and__3822__auto____6905 = goog.isString(o);
      if(and__3822__auto____6905) {
        return check_cache
      }else {
        return and__3822__auto____6905
      }
    }()) {
      return cljs.core.check_string_hash_cache.call(null, o)
    }else {
      return cljs.core._hash.call(null, o)
    }
  };
  hash = function(o, check_cache) {
    switch(arguments.length) {
      case 1:
        return hash__1.call(this, o);
      case 2:
        return hash__2.call(this, o, check_cache)
    }
    throw"Invalid arity: " + arguments.length;
  };
  hash.cljs$lang$arity$1 = hash__1;
  hash.cljs$lang$arity$2 = hash__2;
  return hash
}();
cljs.core.empty_QMARK_ = function empty_QMARK_(coll) {
  return cljs.core.not.call(null, cljs.core.seq.call(null, coll))
};
cljs.core.coll_QMARK_ = function coll_QMARK_(x) {
  if(x == null) {
    return false
  }else {
    var G__6909__6910 = x;
    if(G__6909__6910) {
      if(function() {
        var or__3824__auto____6911 = G__6909__6910.cljs$lang$protocol_mask$partition0$ & 8;
        if(or__3824__auto____6911) {
          return or__3824__auto____6911
        }else {
          return G__6909__6910.cljs$core$ICollection$
        }
      }()) {
        return true
      }else {
        if(!G__6909__6910.cljs$lang$protocol_mask$partition0$) {
          return cljs.core.type_satisfies_.call(null, cljs.core.ICollection, G__6909__6910)
        }else {
          return false
        }
      }
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ICollection, G__6909__6910)
    }
  }
};
cljs.core.set_QMARK_ = function set_QMARK_(x) {
  if(x == null) {
    return false
  }else {
    var G__6915__6916 = x;
    if(G__6915__6916) {
      if(function() {
        var or__3824__auto____6917 = G__6915__6916.cljs$lang$protocol_mask$partition0$ & 4096;
        if(or__3824__auto____6917) {
          return or__3824__auto____6917
        }else {
          return G__6915__6916.cljs$core$ISet$
        }
      }()) {
        return true
      }else {
        if(!G__6915__6916.cljs$lang$protocol_mask$partition0$) {
          return cljs.core.type_satisfies_.call(null, cljs.core.ISet, G__6915__6916)
        }else {
          return false
        }
      }
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ISet, G__6915__6916)
    }
  }
};
cljs.core.associative_QMARK_ = function associative_QMARK_(x) {
  var G__6921__6922 = x;
  if(G__6921__6922) {
    if(function() {
      var or__3824__auto____6923 = G__6921__6922.cljs$lang$protocol_mask$partition0$ & 512;
      if(or__3824__auto____6923) {
        return or__3824__auto____6923
      }else {
        return G__6921__6922.cljs$core$IAssociative$
      }
    }()) {
      return true
    }else {
      if(!G__6921__6922.cljs$lang$protocol_mask$partition0$) {
        return cljs.core.type_satisfies_.call(null, cljs.core.IAssociative, G__6921__6922)
      }else {
        return false
      }
    }
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IAssociative, G__6921__6922)
  }
};
cljs.core.sequential_QMARK_ = function sequential_QMARK_(x) {
  var G__6927__6928 = x;
  if(G__6927__6928) {
    if(function() {
      var or__3824__auto____6929 = G__6927__6928.cljs$lang$protocol_mask$partition0$ & 16777216;
      if(or__3824__auto____6929) {
        return or__3824__auto____6929
      }else {
        return G__6927__6928.cljs$core$ISequential$
      }
    }()) {
      return true
    }else {
      if(!G__6927__6928.cljs$lang$protocol_mask$partition0$) {
        return cljs.core.type_satisfies_.call(null, cljs.core.ISequential, G__6927__6928)
      }else {
        return false
      }
    }
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.ISequential, G__6927__6928)
  }
};
cljs.core.counted_QMARK_ = function counted_QMARK_(x) {
  var G__6933__6934 = x;
  if(G__6933__6934) {
    if(function() {
      var or__3824__auto____6935 = G__6933__6934.cljs$lang$protocol_mask$partition0$ & 2;
      if(or__3824__auto____6935) {
        return or__3824__auto____6935
      }else {
        return G__6933__6934.cljs$core$ICounted$
      }
    }()) {
      return true
    }else {
      if(!G__6933__6934.cljs$lang$protocol_mask$partition0$) {
        return cljs.core.type_satisfies_.call(null, cljs.core.ICounted, G__6933__6934)
      }else {
        return false
      }
    }
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.ICounted, G__6933__6934)
  }
};
cljs.core.indexed_QMARK_ = function indexed_QMARK_(x) {
  var G__6939__6940 = x;
  if(G__6939__6940) {
    if(function() {
      var or__3824__auto____6941 = G__6939__6940.cljs$lang$protocol_mask$partition0$ & 16;
      if(or__3824__auto____6941) {
        return or__3824__auto____6941
      }else {
        return G__6939__6940.cljs$core$IIndexed$
      }
    }()) {
      return true
    }else {
      if(!G__6939__6940.cljs$lang$protocol_mask$partition0$) {
        return cljs.core.type_satisfies_.call(null, cljs.core.IIndexed, G__6939__6940)
      }else {
        return false
      }
    }
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IIndexed, G__6939__6940)
  }
};
cljs.core.reduceable_QMARK_ = function reduceable_QMARK_(x) {
  var G__6945__6946 = x;
  if(G__6945__6946) {
    if(function() {
      var or__3824__auto____6947 = G__6945__6946.cljs$lang$protocol_mask$partition0$ & 524288;
      if(or__3824__auto____6947) {
        return or__3824__auto____6947
      }else {
        return G__6945__6946.cljs$core$IReduce$
      }
    }()) {
      return true
    }else {
      if(!G__6945__6946.cljs$lang$protocol_mask$partition0$) {
        return cljs.core.type_satisfies_.call(null, cljs.core.IReduce, G__6945__6946)
      }else {
        return false
      }
    }
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IReduce, G__6945__6946)
  }
};
cljs.core.map_QMARK_ = function map_QMARK_(x) {
  if(x == null) {
    return false
  }else {
    var G__6951__6952 = x;
    if(G__6951__6952) {
      if(function() {
        var or__3824__auto____6953 = G__6951__6952.cljs$lang$protocol_mask$partition0$ & 1024;
        if(or__3824__auto____6953) {
          return or__3824__auto____6953
        }else {
          return G__6951__6952.cljs$core$IMap$
        }
      }()) {
        return true
      }else {
        if(!G__6951__6952.cljs$lang$protocol_mask$partition0$) {
          return cljs.core.type_satisfies_.call(null, cljs.core.IMap, G__6951__6952)
        }else {
          return false
        }
      }
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.IMap, G__6951__6952)
    }
  }
};
cljs.core.vector_QMARK_ = function vector_QMARK_(x) {
  var G__6957__6958 = x;
  if(G__6957__6958) {
    if(function() {
      var or__3824__auto____6959 = G__6957__6958.cljs$lang$protocol_mask$partition0$ & 16384;
      if(or__3824__auto____6959) {
        return or__3824__auto____6959
      }else {
        return G__6957__6958.cljs$core$IVector$
      }
    }()) {
      return true
    }else {
      if(!G__6957__6958.cljs$lang$protocol_mask$partition0$) {
        return cljs.core.type_satisfies_.call(null, cljs.core.IVector, G__6957__6958)
      }else {
        return false
      }
    }
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IVector, G__6957__6958)
  }
};
cljs.core.chunked_seq_QMARK_ = function chunked_seq_QMARK_(x) {
  var G__6963__6964 = x;
  if(G__6963__6964) {
    if(cljs.core.truth_(function() {
      var or__3824__auto____6965 = null;
      if(cljs.core.truth_(or__3824__auto____6965)) {
        return or__3824__auto____6965
      }else {
        return G__6963__6964.cljs$core$IChunkedSeq$
      }
    }())) {
      return true
    }else {
      if(!G__6963__6964.cljs$lang$protocol_mask$partition$) {
        return cljs.core.type_satisfies_.call(null, cljs.core.IChunkedSeq, G__6963__6964)
      }else {
        return false
      }
    }
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IChunkedSeq, G__6963__6964)
  }
};
cljs.core.js_obj = function() {
  var js_obj = null;
  var js_obj__0 = function() {
    return{}
  };
  var js_obj__1 = function() {
    var G__6966__delegate = function(keyvals) {
      return cljs.core.apply.call(null, goog.object.create, keyvals)
    };
    var G__6966 = function(var_args) {
      var keyvals = null;
      if(goog.isDef(var_args)) {
        keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
      }
      return G__6966__delegate.call(this, keyvals)
    };
    G__6966.cljs$lang$maxFixedArity = 0;
    G__6966.cljs$lang$applyTo = function(arglist__6967) {
      var keyvals = cljs.core.seq(arglist__6967);
      return G__6966__delegate(keyvals)
    };
    G__6966.cljs$lang$arity$variadic = G__6966__delegate;
    return G__6966
  }();
  js_obj = function(var_args) {
    var keyvals = var_args;
    switch(arguments.length) {
      case 0:
        return js_obj__0.call(this);
      default:
        return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0))
    }
    throw"Invalid arity: " + arguments.length;
  };
  js_obj.cljs$lang$maxFixedArity = 0;
  js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
  js_obj.cljs$lang$arity$0 = js_obj__0;
  js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
  return js_obj
}();
cljs.core.js_keys = function js_keys(obj) {
  var keys__6969 = [];
  goog.object.forEach(obj, function(val, key, obj) {
    return keys__6969.push(key)
  });
  return keys__6969
};
cljs.core.js_delete = function js_delete(obj, key) {
  return delete obj[key]
};
cljs.core.array_copy = function array_copy(from, i, to, j, len) {
  var i__6973 = i;
  var j__6974 = j;
  var len__6975 = len;
  while(true) {
    if(len__6975 === 0) {
      return to
    }else {
      to[j__6974] = from[i__6973];
      var G__6976 = i__6973 + 1;
      var G__6977 = j__6974 + 1;
      var G__6978 = len__6975 - 1;
      i__6973 = G__6976;
      j__6974 = G__6977;
      len__6975 = G__6978;
      continue
    }
    break
  }
};
cljs.core.array_copy_downward = function array_copy_downward(from, i, to, j, len) {
  var i__6982 = i + (len - 1);
  var j__6983 = j + (len - 1);
  var len__6984 = len;
  while(true) {
    if(len__6984 === 0) {
      return to
    }else {
      to[j__6983] = from[i__6982];
      var G__6985 = i__6982 - 1;
      var G__6986 = j__6983 - 1;
      var G__6987 = len__6984 - 1;
      i__6982 = G__6985;
      j__6983 = G__6986;
      len__6984 = G__6987;
      continue
    }
    break
  }
};
cljs.core.lookup_sentinel = {};
cljs.core.false_QMARK_ = function false_QMARK_(x) {
  return x === false
};
cljs.core.true_QMARK_ = function true_QMARK_(x) {
  return x === true
};
cljs.core.undefined_QMARK_ = function undefined_QMARK_(x) {
  return void 0 === x
};
cljs.core.seq_QMARK_ = function seq_QMARK_(s) {
  if(s == null) {
    return false
  }else {
    var G__6991__6992 = s;
    if(G__6991__6992) {
      if(function() {
        var or__3824__auto____6993 = G__6991__6992.cljs$lang$protocol_mask$partition0$ & 64;
        if(or__3824__auto____6993) {
          return or__3824__auto____6993
        }else {
          return G__6991__6992.cljs$core$ISeq$
        }
      }()) {
        return true
      }else {
        if(!G__6991__6992.cljs$lang$protocol_mask$partition0$) {
          return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, G__6991__6992)
        }else {
          return false
        }
      }
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, G__6991__6992)
    }
  }
};
cljs.core.seqable_QMARK_ = function seqable_QMARK_(s) {
  var G__6997__6998 = s;
  if(G__6997__6998) {
    if(function() {
      var or__3824__auto____6999 = G__6997__6998.cljs$lang$protocol_mask$partition0$ & 8388608;
      if(or__3824__auto____6999) {
        return or__3824__auto____6999
      }else {
        return G__6997__6998.cljs$core$ISeqable$
      }
    }()) {
      return true
    }else {
      if(!G__6997__6998.cljs$lang$protocol_mask$partition0$) {
        return cljs.core.type_satisfies_.call(null, cljs.core.ISeqable, G__6997__6998)
      }else {
        return false
      }
    }
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.ISeqable, G__6997__6998)
  }
};
cljs.core.boolean$ = function boolean$(x) {
  if(cljs.core.truth_(x)) {
    return true
  }else {
    return false
  }
};
cljs.core.string_QMARK_ = function string_QMARK_(x) {
  var and__3822__auto____7002 = goog.isString(x);
  if(and__3822__auto____7002) {
    return!function() {
      var or__3824__auto____7003 = x.charAt(0) === "\ufdd0";
      if(or__3824__auto____7003) {
        return or__3824__auto____7003
      }else {
        return x.charAt(0) === "\ufdd1"
      }
    }()
  }else {
    return and__3822__auto____7002
  }
};
cljs.core.keyword_QMARK_ = function keyword_QMARK_(x) {
  var and__3822__auto____7005 = goog.isString(x);
  if(and__3822__auto____7005) {
    return x.charAt(0) === "\ufdd0"
  }else {
    return and__3822__auto____7005
  }
};
cljs.core.symbol_QMARK_ = function symbol_QMARK_(x) {
  var and__3822__auto____7007 = goog.isString(x);
  if(and__3822__auto____7007) {
    return x.charAt(0) === "\ufdd1"
  }else {
    return and__3822__auto____7007
  }
};
cljs.core.number_QMARK_ = function number_QMARK_(n) {
  return goog.isNumber(n)
};
cljs.core.fn_QMARK_ = function fn_QMARK_(f) {
  return goog.isFunction(f)
};
cljs.core.ifn_QMARK_ = function ifn_QMARK_(f) {
  var or__3824__auto____7012 = cljs.core.fn_QMARK_.call(null, f);
  if(or__3824__auto____7012) {
    return or__3824__auto____7012
  }else {
    var G__7013__7014 = f;
    if(G__7013__7014) {
      if(function() {
        var or__3824__auto____7015 = G__7013__7014.cljs$lang$protocol_mask$partition0$ & 1;
        if(or__3824__auto____7015) {
          return or__3824__auto____7015
        }else {
          return G__7013__7014.cljs$core$IFn$
        }
      }()) {
        return true
      }else {
        if(!G__7013__7014.cljs$lang$protocol_mask$partition0$) {
          return cljs.core.type_satisfies_.call(null, cljs.core.IFn, G__7013__7014)
        }else {
          return false
        }
      }
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.IFn, G__7013__7014)
    }
  }
};
cljs.core.integer_QMARK_ = function integer_QMARK_(n) {
  var and__3822__auto____7017 = cljs.core.number_QMARK_.call(null, n);
  if(and__3822__auto____7017) {
    return n == n.toFixed()
  }else {
    return and__3822__auto____7017
  }
};
cljs.core.contains_QMARK_ = function contains_QMARK_(coll, v) {
  if(cljs.core._lookup.call(null, coll, v, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel) {
    return false
  }else {
    return true
  }
};
cljs.core.find = function find(coll, k) {
  if(cljs.core.truth_(function() {
    var and__3822__auto____7020 = coll;
    if(cljs.core.truth_(and__3822__auto____7020)) {
      var and__3822__auto____7021 = cljs.core.associative_QMARK_.call(null, coll);
      if(and__3822__auto____7021) {
        return cljs.core.contains_QMARK_.call(null, coll, k)
      }else {
        return and__3822__auto____7021
      }
    }else {
      return and__3822__auto____7020
    }
  }())) {
    return cljs.core.PersistentVector.fromArray([k, cljs.core._lookup.call(null, coll, k)], true)
  }else {
    return null
  }
};
cljs.core.distinct_QMARK_ = function() {
  var distinct_QMARK_ = null;
  var distinct_QMARK___1 = function(x) {
    return true
  };
  var distinct_QMARK___2 = function(x, y) {
    return!cljs.core._EQ_.call(null, x, y)
  };
  var distinct_QMARK___3 = function() {
    var G__7030__delegate = function(x, y, more) {
      if(!cljs.core._EQ_.call(null, x, y)) {
        var s__7026 = cljs.core.PersistentHashSet.fromArray([y, x]);
        var xs__7027 = more;
        while(true) {
          var x__7028 = cljs.core.first.call(null, xs__7027);
          var etc__7029 = cljs.core.next.call(null, xs__7027);
          if(cljs.core.truth_(xs__7027)) {
            if(cljs.core.contains_QMARK_.call(null, s__7026, x__7028)) {
              return false
            }else {
              var G__7031 = cljs.core.conj.call(null, s__7026, x__7028);
              var G__7032 = etc__7029;
              s__7026 = G__7031;
              xs__7027 = G__7032;
              continue
            }
          }else {
            return true
          }
          break
        }
      }else {
        return false
      }
    };
    var G__7030 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__7030__delegate.call(this, x, y, more)
    };
    G__7030.cljs$lang$maxFixedArity = 2;
    G__7030.cljs$lang$applyTo = function(arglist__7033) {
      var x = cljs.core.first(arglist__7033);
      var y = cljs.core.first(cljs.core.next(arglist__7033));
      var more = cljs.core.rest(cljs.core.next(arglist__7033));
      return G__7030__delegate(x, y, more)
    };
    G__7030.cljs$lang$arity$variadic = G__7030__delegate;
    return G__7030
  }();
  distinct_QMARK_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return distinct_QMARK___1.call(this, x);
      case 2:
        return distinct_QMARK___2.call(this, x, y);
      default:
        return distinct_QMARK___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  distinct_QMARK_.cljs$lang$maxFixedArity = 2;
  distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
  distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
  distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
  distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
  return distinct_QMARK_
}();
cljs.core.compare = function compare(x, y) {
  if(x === y) {
    return 0
  }else {
    if(x == null) {
      return-1
    }else {
      if(y == null) {
        return 1
      }else {
        if(cljs.core.type.call(null, x) === cljs.core.type.call(null, y)) {
          if(function() {
            var G__7037__7038 = x;
            if(G__7037__7038) {
              if(cljs.core.truth_(function() {
                var or__3824__auto____7039 = null;
                if(cljs.core.truth_(or__3824__auto____7039)) {
                  return or__3824__auto____7039
                }else {
                  return G__7037__7038.cljs$core$IComparable$
                }
              }())) {
                return true
              }else {
                if(!G__7037__7038.cljs$lang$protocol_mask$partition$) {
                  return cljs.core.type_satisfies_.call(null, cljs.core.IComparable, G__7037__7038)
                }else {
                  return false
                }
              }
            }else {
              return cljs.core.type_satisfies_.call(null, cljs.core.IComparable, G__7037__7038)
            }
          }()) {
            return cljs.core._compare.call(null, x, y)
          }else {
            return goog.array.defaultCompare(x, y)
          }
        }else {
          if("\ufdd0'else") {
            throw new Error("compare on non-nil objects of different types");
          }else {
            return null
          }
        }
      }
    }
  }
};
cljs.core.compare_indexed = function() {
  var compare_indexed = null;
  var compare_indexed__2 = function(xs, ys) {
    var xl__7044 = cljs.core.count.call(null, xs);
    var yl__7045 = cljs.core.count.call(null, ys);
    if(xl__7044 < yl__7045) {
      return-1
    }else {
      if(xl__7044 > yl__7045) {
        return 1
      }else {
        if("\ufdd0'else") {
          return compare_indexed.call(null, xs, ys, xl__7044, 0)
        }else {
          return null
        }
      }
    }
  };
  var compare_indexed__4 = function(xs, ys, len, n) {
    while(true) {
      var d__7046 = cljs.core.compare.call(null, cljs.core.nth.call(null, xs, n), cljs.core.nth.call(null, ys, n));
      if(function() {
        var and__3822__auto____7047 = d__7046 === 0;
        if(and__3822__auto____7047) {
          return n + 1 < len
        }else {
          return and__3822__auto____7047
        }
      }()) {
        var G__7048 = xs;
        var G__7049 = ys;
        var G__7050 = len;
        var G__7051 = n + 1;
        xs = G__7048;
        ys = G__7049;
        len = G__7050;
        n = G__7051;
        continue
      }else {
        return d__7046
      }
      break
    }
  };
  compare_indexed = function(xs, ys, len, n) {
    switch(arguments.length) {
      case 2:
        return compare_indexed__2.call(this, xs, ys);
      case 4:
        return compare_indexed__4.call(this, xs, ys, len, n)
    }
    throw"Invalid arity: " + arguments.length;
  };
  compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
  compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
  return compare_indexed
}();
cljs.core.fn__GT_comparator = function fn__GT_comparator(f) {
  if(cljs.core._EQ_.call(null, f, cljs.core.compare)) {
    return cljs.core.compare
  }else {
    return function(x, y) {
      var r__7053 = f.call(null, x, y);
      if(cljs.core.number_QMARK_.call(null, r__7053)) {
        return r__7053
      }else {
        if(cljs.core.truth_(r__7053)) {
          return-1
        }else {
          if(cljs.core.truth_(f.call(null, y, x))) {
            return 1
          }else {
            return 0
          }
        }
      }
    }
  }
};
cljs.core.sort = function() {
  var sort = null;
  var sort__1 = function(coll) {
    return sort.call(null, cljs.core.compare, coll)
  };
  var sort__2 = function(comp, coll) {
    if(cljs.core.seq.call(null, coll)) {
      var a__7055 = cljs.core.to_array.call(null, coll);
      goog.array.stableSort(a__7055, cljs.core.fn__GT_comparator.call(null, comp));
      return cljs.core.seq.call(null, a__7055)
    }else {
      return cljs.core.List.EMPTY
    }
  };
  sort = function(comp, coll) {
    switch(arguments.length) {
      case 1:
        return sort__1.call(this, comp);
      case 2:
        return sort__2.call(this, comp, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  sort.cljs$lang$arity$1 = sort__1;
  sort.cljs$lang$arity$2 = sort__2;
  return sort
}();
cljs.core.sort_by = function() {
  var sort_by = null;
  var sort_by__2 = function(keyfn, coll) {
    return sort_by.call(null, keyfn, cljs.core.compare, coll)
  };
  var sort_by__3 = function(keyfn, comp, coll) {
    return cljs.core.sort.call(null, function(x, y) {
      return cljs.core.fn__GT_comparator.call(null, comp).call(null, keyfn.call(null, x), keyfn.call(null, y))
    }, coll)
  };
  sort_by = function(keyfn, comp, coll) {
    switch(arguments.length) {
      case 2:
        return sort_by__2.call(this, keyfn, comp);
      case 3:
        return sort_by__3.call(this, keyfn, comp, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  sort_by.cljs$lang$arity$2 = sort_by__2;
  sort_by.cljs$lang$arity$3 = sort_by__3;
  return sort_by
}();
cljs.core.seq_reduce = function() {
  var seq_reduce = null;
  var seq_reduce__2 = function(f, coll) {
    var temp__3971__auto____7061 = cljs.core.seq.call(null, coll);
    if(temp__3971__auto____7061) {
      var s__7062 = temp__3971__auto____7061;
      return cljs.core.reduce.call(null, f, cljs.core.first.call(null, s__7062), cljs.core.next.call(null, s__7062))
    }else {
      return f.call(null)
    }
  };
  var seq_reduce__3 = function(f, val, coll) {
    var val__7063 = val;
    var coll__7064 = cljs.core.seq.call(null, coll);
    while(true) {
      if(coll__7064) {
        var nval__7065 = f.call(null, val__7063, cljs.core.first.call(null, coll__7064));
        if(cljs.core.reduced_QMARK_.call(null, nval__7065)) {
          return cljs.core.deref.call(null, nval__7065)
        }else {
          var G__7066 = nval__7065;
          var G__7067 = cljs.core.next.call(null, coll__7064);
          val__7063 = G__7066;
          coll__7064 = G__7067;
          continue
        }
      }else {
        return val__7063
      }
      break
    }
  };
  seq_reduce = function(f, val, coll) {
    switch(arguments.length) {
      case 2:
        return seq_reduce__2.call(this, f, val);
      case 3:
        return seq_reduce__3.call(this, f, val, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
  seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
  return seq_reduce
}();
cljs.core.shuffle = function shuffle(coll) {
  var a__7069 = cljs.core.to_array.call(null, coll);
  goog.array.shuffle(a__7069);
  return cljs.core.vec.call(null, a__7069)
};
cljs.core.reduce = function() {
  var reduce = null;
  var reduce__2 = function(f, coll) {
    if(function() {
      var G__7076__7077 = coll;
      if(G__7076__7077) {
        if(function() {
          var or__3824__auto____7078 = G__7076__7077.cljs$lang$protocol_mask$partition0$ & 524288;
          if(or__3824__auto____7078) {
            return or__3824__auto____7078
          }else {
            return G__7076__7077.cljs$core$IReduce$
          }
        }()) {
          return true
        }else {
          if(!G__7076__7077.cljs$lang$protocol_mask$partition0$) {
            return cljs.core.type_satisfies_.call(null, cljs.core.IReduce, G__7076__7077)
          }else {
            return false
          }
        }
      }else {
        return cljs.core.type_satisfies_.call(null, cljs.core.IReduce, G__7076__7077)
      }
    }()) {
      return cljs.core._reduce.call(null, coll, f)
    }else {
      return cljs.core.seq_reduce.call(null, f, coll)
    }
  };
  var reduce__3 = function(f, val, coll) {
    if(function() {
      var G__7079__7080 = coll;
      if(G__7079__7080) {
        if(function() {
          var or__3824__auto____7081 = G__7079__7080.cljs$lang$protocol_mask$partition0$ & 524288;
          if(or__3824__auto____7081) {
            return or__3824__auto____7081
          }else {
            return G__7079__7080.cljs$core$IReduce$
          }
        }()) {
          return true
        }else {
          if(!G__7079__7080.cljs$lang$protocol_mask$partition0$) {
            return cljs.core.type_satisfies_.call(null, cljs.core.IReduce, G__7079__7080)
          }else {
            return false
          }
        }
      }else {
        return cljs.core.type_satisfies_.call(null, cljs.core.IReduce, G__7079__7080)
      }
    }()) {
      return cljs.core._reduce.call(null, coll, f, val)
    }else {
      return cljs.core.seq_reduce.call(null, f, val, coll)
    }
  };
  reduce = function(f, val, coll) {
    switch(arguments.length) {
      case 2:
        return reduce__2.call(this, f, val);
      case 3:
        return reduce__3.call(this, f, val, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  reduce.cljs$lang$arity$2 = reduce__2;
  reduce.cljs$lang$arity$3 = reduce__3;
  return reduce
}();
cljs.core.reduce_kv = function reduce_kv(f, init, coll) {
  return cljs.core._kv_reduce.call(null, coll, f, init)
};
cljs.core.Reduced = function(val) {
  this.val = val;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 32768
};
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/Reduced")
};
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = function(o) {
  var this__7082 = this;
  return this__7082.val
};
cljs.core.Reduced;
cljs.core.reduced_QMARK_ = function reduced_QMARK_(r) {
  return cljs.core.instance_QMARK_.call(null, cljs.core.Reduced, r)
};
cljs.core.reduced = function reduced(x) {
  return new cljs.core.Reduced(x)
};
cljs.core._PLUS_ = function() {
  var _PLUS_ = null;
  var _PLUS___0 = function() {
    return 0
  };
  var _PLUS___1 = function(x) {
    return x
  };
  var _PLUS___2 = function(x, y) {
    return x + y
  };
  var _PLUS___3 = function() {
    var G__7083__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _PLUS_, x + y, more)
    };
    var G__7083 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__7083__delegate.call(this, x, y, more)
    };
    G__7083.cljs$lang$maxFixedArity = 2;
    G__7083.cljs$lang$applyTo = function(arglist__7084) {
      var x = cljs.core.first(arglist__7084);
      var y = cljs.core.first(cljs.core.next(arglist__7084));
      var more = cljs.core.rest(cljs.core.next(arglist__7084));
      return G__7083__delegate(x, y, more)
    };
    G__7083.cljs$lang$arity$variadic = G__7083__delegate;
    return G__7083
  }();
  _PLUS_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 0:
        return _PLUS___0.call(this);
      case 1:
        return _PLUS___1.call(this, x);
      case 2:
        return _PLUS___2.call(this, x, y);
      default:
        return _PLUS___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  _PLUS_.cljs$lang$maxFixedArity = 2;
  _PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
  _PLUS_.cljs$lang$arity$0 = _PLUS___0;
  _PLUS_.cljs$lang$arity$1 = _PLUS___1;
  _PLUS_.cljs$lang$arity$2 = _PLUS___2;
  _PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
  return _PLUS_
}();
cljs.core._ = function() {
  var _ = null;
  var ___1 = function(x) {
    return-x
  };
  var ___2 = function(x, y) {
    return x - y
  };
  var ___3 = function() {
    var G__7085__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _, x - y, more)
    };
    var G__7085 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__7085__delegate.call(this, x, y, more)
    };
    G__7085.cljs$lang$maxFixedArity = 2;
    G__7085.cljs$lang$applyTo = function(arglist__7086) {
      var x = cljs.core.first(arglist__7086);
      var y = cljs.core.first(cljs.core.next(arglist__7086));
      var more = cljs.core.rest(cljs.core.next(arglist__7086));
      return G__7085__delegate(x, y, more)
    };
    G__7085.cljs$lang$arity$variadic = G__7085__delegate;
    return G__7085
  }();
  _ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return ___1.call(this, x);
      case 2:
        return ___2.call(this, x, y);
      default:
        return ___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  _.cljs$lang$maxFixedArity = 2;
  _.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
  _.cljs$lang$arity$1 = ___1;
  _.cljs$lang$arity$2 = ___2;
  _.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
  return _
}();
cljs.core._STAR_ = function() {
  var _STAR_ = null;
  var _STAR___0 = function() {
    return 1
  };
  var _STAR___1 = function(x) {
    return x
  };
  var _STAR___2 = function(x, y) {
    return x * y
  };
  var _STAR___3 = function() {
    var G__7087__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _STAR_, x * y, more)
    };
    var G__7087 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__7087__delegate.call(this, x, y, more)
    };
    G__7087.cljs$lang$maxFixedArity = 2;
    G__7087.cljs$lang$applyTo = function(arglist__7088) {
      var x = cljs.core.first(arglist__7088);
      var y = cljs.core.first(cljs.core.next(arglist__7088));
      var more = cljs.core.rest(cljs.core.next(arglist__7088));
      return G__7087__delegate(x, y, more)
    };
    G__7087.cljs$lang$arity$variadic = G__7087__delegate;
    return G__7087
  }();
  _STAR_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 0:
        return _STAR___0.call(this);
      case 1:
        return _STAR___1.call(this, x);
      case 2:
        return _STAR___2.call(this, x, y);
      default:
        return _STAR___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  _STAR_.cljs$lang$maxFixedArity = 2;
  _STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
  _STAR_.cljs$lang$arity$0 = _STAR___0;
  _STAR_.cljs$lang$arity$1 = _STAR___1;
  _STAR_.cljs$lang$arity$2 = _STAR___2;
  _STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
  return _STAR_
}();
cljs.core._SLASH_ = function() {
  var _SLASH_ = null;
  var _SLASH___1 = function(x) {
    return _SLASH_.call(null, 1, x)
  };
  var _SLASH___2 = function(x, y) {
    return x / y
  };
  var _SLASH___3 = function() {
    var G__7089__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, _SLASH_, _SLASH_.call(null, x, y), more)
    };
    var G__7089 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__7089__delegate.call(this, x, y, more)
    };
    G__7089.cljs$lang$maxFixedArity = 2;
    G__7089.cljs$lang$applyTo = function(arglist__7090) {
      var x = cljs.core.first(arglist__7090);
      var y = cljs.core.first(cljs.core.next(arglist__7090));
      var more = cljs.core.rest(cljs.core.next(arglist__7090));
      return G__7089__delegate(x, y, more)
    };
    G__7089.cljs$lang$arity$variadic = G__7089__delegate;
    return G__7089
  }();
  _SLASH_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _SLASH___1.call(this, x);
      case 2:
        return _SLASH___2.call(this, x, y);
      default:
        return _SLASH___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  _SLASH_.cljs$lang$maxFixedArity = 2;
  _SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
  _SLASH_.cljs$lang$arity$1 = _SLASH___1;
  _SLASH_.cljs$lang$arity$2 = _SLASH___2;
  _SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
  return _SLASH_
}();
cljs.core._LT_ = function() {
  var _LT_ = null;
  var _LT___1 = function(x) {
    return true
  };
  var _LT___2 = function(x, y) {
    return x < y
  };
  var _LT___3 = function() {
    var G__7091__delegate = function(x, y, more) {
      while(true) {
        if(x < y) {
          if(cljs.core.next.call(null, more)) {
            var G__7092 = y;
            var G__7093 = cljs.core.first.call(null, more);
            var G__7094 = cljs.core.next.call(null, more);
            x = G__7092;
            y = G__7093;
            more = G__7094;
            continue
          }else {
            return y < cljs.core.first.call(null, more)
          }
        }else {
          return false
        }
        break
      }
    };
    var G__7091 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__7091__delegate.call(this, x, y, more)
    };
    G__7091.cljs$lang$maxFixedArity = 2;
    G__7091.cljs$lang$applyTo = function(arglist__7095) {
      var x = cljs.core.first(arglist__7095);
      var y = cljs.core.first(cljs.core.next(arglist__7095));
      var more = cljs.core.rest(cljs.core.next(arglist__7095));
      return G__7091__delegate(x, y, more)
    };
    G__7091.cljs$lang$arity$variadic = G__7091__delegate;
    return G__7091
  }();
  _LT_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _LT___1.call(this, x);
      case 2:
        return _LT___2.call(this, x, y);
      default:
        return _LT___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  _LT_.cljs$lang$maxFixedArity = 2;
  _LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
  _LT_.cljs$lang$arity$1 = _LT___1;
  _LT_.cljs$lang$arity$2 = _LT___2;
  _LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
  return _LT_
}();
cljs.core._LT__EQ_ = function() {
  var _LT__EQ_ = null;
  var _LT__EQ___1 = function(x) {
    return true
  };
  var _LT__EQ___2 = function(x, y) {
    return x <= y
  };
  var _LT__EQ___3 = function() {
    var G__7096__delegate = function(x, y, more) {
      while(true) {
        if(x <= y) {
          if(cljs.core.next.call(null, more)) {
            var G__7097 = y;
            var G__7098 = cljs.core.first.call(null, more);
            var G__7099 = cljs.core.next.call(null, more);
            x = G__7097;
            y = G__7098;
            more = G__7099;
            continue
          }else {
            return y <= cljs.core.first.call(null, more)
          }
        }else {
          return false
        }
        break
      }
    };
    var G__7096 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__7096__delegate.call(this, x, y, more)
    };
    G__7096.cljs$lang$maxFixedArity = 2;
    G__7096.cljs$lang$applyTo = function(arglist__7100) {
      var x = cljs.core.first(arglist__7100);
      var y = cljs.core.first(cljs.core.next(arglist__7100));
      var more = cljs.core.rest(cljs.core.next(arglist__7100));
      return G__7096__delegate(x, y, more)
    };
    G__7096.cljs$lang$arity$variadic = G__7096__delegate;
    return G__7096
  }();
  _LT__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _LT__EQ___1.call(this, x);
      case 2:
        return _LT__EQ___2.call(this, x, y);
      default:
        return _LT__EQ___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  _LT__EQ_.cljs$lang$maxFixedArity = 2;
  _LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
  _LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
  _LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
  _LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
  return _LT__EQ_
}();
cljs.core._GT_ = function() {
  var _GT_ = null;
  var _GT___1 = function(x) {
    return true
  };
  var _GT___2 = function(x, y) {
    return x > y
  };
  var _GT___3 = function() {
    var G__7101__delegate = function(x, y, more) {
      while(true) {
        if(x > y) {
          if(cljs.core.next.call(null, more)) {
            var G__7102 = y;
            var G__7103 = cljs.core.first.call(null, more);
            var G__7104 = cljs.core.next.call(null, more);
            x = G__7102;
            y = G__7103;
            more = G__7104;
            continue
          }else {
            return y > cljs.core.first.call(null, more)
          }
        }else {
          return false
        }
        break
      }
    };
    var G__7101 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__7101__delegate.call(this, x, y, more)
    };
    G__7101.cljs$lang$maxFixedArity = 2;
    G__7101.cljs$lang$applyTo = function(arglist__7105) {
      var x = cljs.core.first(arglist__7105);
      var y = cljs.core.first(cljs.core.next(arglist__7105));
      var more = cljs.core.rest(cljs.core.next(arglist__7105));
      return G__7101__delegate(x, y, more)
    };
    G__7101.cljs$lang$arity$variadic = G__7101__delegate;
    return G__7101
  }();
  _GT_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _GT___1.call(this, x);
      case 2:
        return _GT___2.call(this, x, y);
      default:
        return _GT___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  _GT_.cljs$lang$maxFixedArity = 2;
  _GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
  _GT_.cljs$lang$arity$1 = _GT___1;
  _GT_.cljs$lang$arity$2 = _GT___2;
  _GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
  return _GT_
}();
cljs.core._GT__EQ_ = function() {
  var _GT__EQ_ = null;
  var _GT__EQ___1 = function(x) {
    return true
  };
  var _GT__EQ___2 = function(x, y) {
    return x >= y
  };
  var _GT__EQ___3 = function() {
    var G__7106__delegate = function(x, y, more) {
      while(true) {
        if(x >= y) {
          if(cljs.core.next.call(null, more)) {
            var G__7107 = y;
            var G__7108 = cljs.core.first.call(null, more);
            var G__7109 = cljs.core.next.call(null, more);
            x = G__7107;
            y = G__7108;
            more = G__7109;
            continue
          }else {
            return y >= cljs.core.first.call(null, more)
          }
        }else {
          return false
        }
        break
      }
    };
    var G__7106 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__7106__delegate.call(this, x, y, more)
    };
    G__7106.cljs$lang$maxFixedArity = 2;
    G__7106.cljs$lang$applyTo = function(arglist__7110) {
      var x = cljs.core.first(arglist__7110);
      var y = cljs.core.first(cljs.core.next(arglist__7110));
      var more = cljs.core.rest(cljs.core.next(arglist__7110));
      return G__7106__delegate(x, y, more)
    };
    G__7106.cljs$lang$arity$variadic = G__7106__delegate;
    return G__7106
  }();
  _GT__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _GT__EQ___1.call(this, x);
      case 2:
        return _GT__EQ___2.call(this, x, y);
      default:
        return _GT__EQ___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  _GT__EQ_.cljs$lang$maxFixedArity = 2;
  _GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
  _GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
  _GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
  _GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
  return _GT__EQ_
}();
cljs.core.dec = function dec(x) {
  return x - 1
};
cljs.core.max = function() {
  var max = null;
  var max__1 = function(x) {
    return x
  };
  var max__2 = function(x, y) {
    return x > y ? x : y
  };
  var max__3 = function() {
    var G__7111__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, max, x > y ? x : y, more)
    };
    var G__7111 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__7111__delegate.call(this, x, y, more)
    };
    G__7111.cljs$lang$maxFixedArity = 2;
    G__7111.cljs$lang$applyTo = function(arglist__7112) {
      var x = cljs.core.first(arglist__7112);
      var y = cljs.core.first(cljs.core.next(arglist__7112));
      var more = cljs.core.rest(cljs.core.next(arglist__7112));
      return G__7111__delegate(x, y, more)
    };
    G__7111.cljs$lang$arity$variadic = G__7111__delegate;
    return G__7111
  }();
  max = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return max__1.call(this, x);
      case 2:
        return max__2.call(this, x, y);
      default:
        return max__3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  max.cljs$lang$maxFixedArity = 2;
  max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
  max.cljs$lang$arity$1 = max__1;
  max.cljs$lang$arity$2 = max__2;
  max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
  return max
}();
cljs.core.min = function() {
  var min = null;
  var min__1 = function(x) {
    return x
  };
  var min__2 = function(x, y) {
    return x < y ? x : y
  };
  var min__3 = function() {
    var G__7113__delegate = function(x, y, more) {
      return cljs.core.reduce.call(null, min, x < y ? x : y, more)
    };
    var G__7113 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__7113__delegate.call(this, x, y, more)
    };
    G__7113.cljs$lang$maxFixedArity = 2;
    G__7113.cljs$lang$applyTo = function(arglist__7114) {
      var x = cljs.core.first(arglist__7114);
      var y = cljs.core.first(cljs.core.next(arglist__7114));
      var more = cljs.core.rest(cljs.core.next(arglist__7114));
      return G__7113__delegate(x, y, more)
    };
    G__7113.cljs$lang$arity$variadic = G__7113__delegate;
    return G__7113
  }();
  min = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return min__1.call(this, x);
      case 2:
        return min__2.call(this, x, y);
      default:
        return min__3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  min.cljs$lang$maxFixedArity = 2;
  min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
  min.cljs$lang$arity$1 = min__1;
  min.cljs$lang$arity$2 = min__2;
  min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
  return min
}();
cljs.core.fix = function fix(q) {
  if(q >= 0) {
    return Math.floor.call(null, q)
  }else {
    return Math.ceil.call(null, q)
  }
};
cljs.core.int$ = function int$(x) {
  return cljs.core.fix.call(null, x)
};
cljs.core.long$ = function long$(x) {
  return cljs.core.fix.call(null, x)
};
cljs.core.mod = function mod(n, d) {
  return n % d
};
cljs.core.quot = function quot(n, d) {
  var rem__7116 = n % d;
  return cljs.core.fix.call(null, (n - rem__7116) / d)
};
cljs.core.rem = function rem(n, d) {
  var q__7118 = cljs.core.quot.call(null, n, d);
  return n - d * q__7118
};
cljs.core.rand = function() {
  var rand = null;
  var rand__0 = function() {
    return Math.random.call(null)
  };
  var rand__1 = function(n) {
    return n * rand.call(null)
  };
  rand = function(n) {
    switch(arguments.length) {
      case 0:
        return rand__0.call(this);
      case 1:
        return rand__1.call(this, n)
    }
    throw"Invalid arity: " + arguments.length;
  };
  rand.cljs$lang$arity$0 = rand__0;
  rand.cljs$lang$arity$1 = rand__1;
  return rand
}();
cljs.core.rand_int = function rand_int(n) {
  return cljs.core.fix.call(null, cljs.core.rand.call(null, n))
};
cljs.core.bit_xor = function bit_xor(x, y) {
  return x ^ y
};
cljs.core.bit_and = function bit_and(x, y) {
  return x & y
};
cljs.core.bit_or = function bit_or(x, y) {
  return x | y
};
cljs.core.bit_and_not = function bit_and_not(x, y) {
  return x & ~y
};
cljs.core.bit_clear = function bit_clear(x, n) {
  return x & ~(1 << n)
};
cljs.core.bit_flip = function bit_flip(x, n) {
  return x ^ 1 << n
};
cljs.core.bit_not = function bit_not(x) {
  return~x
};
cljs.core.bit_set = function bit_set(x, n) {
  return x | 1 << n
};
cljs.core.bit_test = function bit_test(x, n) {
  return(x & 1 << n) != 0
};
cljs.core.bit_shift_left = function bit_shift_left(x, n) {
  return x << n
};
cljs.core.bit_shift_right = function bit_shift_right(x, n) {
  return x >> n
};
cljs.core.bit_shift_right_zero_fill = function bit_shift_right_zero_fill(x, n) {
  return x >>> n
};
cljs.core.bit_count = function bit_count(v) {
  var v__7121 = v - (v >> 1 & 1431655765);
  var v__7122 = (v__7121 & 858993459) + (v__7121 >> 2 & 858993459);
  return(v__7122 + (v__7122 >> 4) & 252645135) * 16843009 >> 24
};
cljs.core._EQ__EQ_ = function() {
  var _EQ__EQ_ = null;
  var _EQ__EQ___1 = function(x) {
    return true
  };
  var _EQ__EQ___2 = function(x, y) {
    return cljs.core._equiv.call(null, x, y)
  };
  var _EQ__EQ___3 = function() {
    var G__7123__delegate = function(x, y, more) {
      while(true) {
        if(cljs.core.truth_(_EQ__EQ_.call(null, x, y))) {
          if(cljs.core.next.call(null, more)) {
            var G__7124 = y;
            var G__7125 = cljs.core.first.call(null, more);
            var G__7126 = cljs.core.next.call(null, more);
            x = G__7124;
            y = G__7125;
            more = G__7126;
            continue
          }else {
            return _EQ__EQ_.call(null, y, cljs.core.first.call(null, more))
          }
        }else {
          return false
        }
        break
      }
    };
    var G__7123 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__7123__delegate.call(this, x, y, more)
    };
    G__7123.cljs$lang$maxFixedArity = 2;
    G__7123.cljs$lang$applyTo = function(arglist__7127) {
      var x = cljs.core.first(arglist__7127);
      var y = cljs.core.first(cljs.core.next(arglist__7127));
      var more = cljs.core.rest(cljs.core.next(arglist__7127));
      return G__7123__delegate(x, y, more)
    };
    G__7123.cljs$lang$arity$variadic = G__7123__delegate;
    return G__7123
  }();
  _EQ__EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return _EQ__EQ___1.call(this, x);
      case 2:
        return _EQ__EQ___2.call(this, x, y);
      default:
        return _EQ__EQ___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  _EQ__EQ_.cljs$lang$maxFixedArity = 2;
  _EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
  _EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
  _EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
  _EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
  return _EQ__EQ_
}();
cljs.core.pos_QMARK_ = function pos_QMARK_(n) {
  return n > 0
};
cljs.core.zero_QMARK_ = function zero_QMARK_(n) {
  return n === 0
};
cljs.core.neg_QMARK_ = function neg_QMARK_(x) {
  return x < 0
};
cljs.core.nthnext = function nthnext(coll, n) {
  var n__7131 = n;
  var xs__7132 = cljs.core.seq.call(null, coll);
  while(true) {
    if(cljs.core.truth_(function() {
      var and__3822__auto____7133 = xs__7132;
      if(and__3822__auto____7133) {
        return n__7131 > 0
      }else {
        return and__3822__auto____7133
      }
    }())) {
      var G__7134 = n__7131 - 1;
      var G__7135 = cljs.core.next.call(null, xs__7132);
      n__7131 = G__7134;
      xs__7132 = G__7135;
      continue
    }else {
      return xs__7132
    }
    break
  }
};
cljs.core.str_STAR_ = function() {
  var str_STAR_ = null;
  var str_STAR___0 = function() {
    return""
  };
  var str_STAR___1 = function(x) {
    if(x == null) {
      return""
    }else {
      if("\ufdd0'else") {
        return x.toString()
      }else {
        return null
      }
    }
  };
  var str_STAR___2 = function() {
    var G__7136__delegate = function(x, ys) {
      return function(sb, more) {
        while(true) {
          if(cljs.core.truth_(more)) {
            var G__7137 = sb.append(str_STAR_.call(null, cljs.core.first.call(null, more)));
            var G__7138 = cljs.core.next.call(null, more);
            sb = G__7137;
            more = G__7138;
            continue
          }else {
            return str_STAR_.call(null, sb)
          }
          break
        }
      }.call(null, new goog.string.StringBuffer(str_STAR_.call(null, x)), ys)
    };
    var G__7136 = function(x, var_args) {
      var ys = null;
      if(goog.isDef(var_args)) {
        ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__7136__delegate.call(this, x, ys)
    };
    G__7136.cljs$lang$maxFixedArity = 1;
    G__7136.cljs$lang$applyTo = function(arglist__7139) {
      var x = cljs.core.first(arglist__7139);
      var ys = cljs.core.rest(arglist__7139);
      return G__7136__delegate(x, ys)
    };
    G__7136.cljs$lang$arity$variadic = G__7136__delegate;
    return G__7136
  }();
  str_STAR_ = function(x, var_args) {
    var ys = var_args;
    switch(arguments.length) {
      case 0:
        return str_STAR___0.call(this);
      case 1:
        return str_STAR___1.call(this, x);
      default:
        return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1))
    }
    throw"Invalid arity: " + arguments.length;
  };
  str_STAR_.cljs$lang$maxFixedArity = 1;
  str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
  str_STAR_.cljs$lang$arity$0 = str_STAR___0;
  str_STAR_.cljs$lang$arity$1 = str_STAR___1;
  str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
  return str_STAR_
}();
cljs.core.str = function() {
  var str = null;
  var str__0 = function() {
    return""
  };
  var str__1 = function(x) {
    if(cljs.core.symbol_QMARK_.call(null, x)) {
      return x.substring(2, x.length)
    }else {
      if(cljs.core.keyword_QMARK_.call(null, x)) {
        return cljs.core.str_STAR_.call(null, ":", x.substring(2, x.length))
      }else {
        if(x == null) {
          return""
        }else {
          if("\ufdd0'else") {
            return x.toString()
          }else {
            return null
          }
        }
      }
    }
  };
  var str__2 = function() {
    var G__7140__delegate = function(x, ys) {
      return function(sb, more) {
        while(true) {
          if(cljs.core.truth_(more)) {
            var G__7141 = sb.append(str.call(null, cljs.core.first.call(null, more)));
            var G__7142 = cljs.core.next.call(null, more);
            sb = G__7141;
            more = G__7142;
            continue
          }else {
            return cljs.core.str_STAR_.call(null, sb)
          }
          break
        }
      }.call(null, new goog.string.StringBuffer(str.call(null, x)), ys)
    };
    var G__7140 = function(x, var_args) {
      var ys = null;
      if(goog.isDef(var_args)) {
        ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__7140__delegate.call(this, x, ys)
    };
    G__7140.cljs$lang$maxFixedArity = 1;
    G__7140.cljs$lang$applyTo = function(arglist__7143) {
      var x = cljs.core.first(arglist__7143);
      var ys = cljs.core.rest(arglist__7143);
      return G__7140__delegate(x, ys)
    };
    G__7140.cljs$lang$arity$variadic = G__7140__delegate;
    return G__7140
  }();
  str = function(x, var_args) {
    var ys = var_args;
    switch(arguments.length) {
      case 0:
        return str__0.call(this);
      case 1:
        return str__1.call(this, x);
      default:
        return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1))
    }
    throw"Invalid arity: " + arguments.length;
  };
  str.cljs$lang$maxFixedArity = 1;
  str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
  str.cljs$lang$arity$0 = str__0;
  str.cljs$lang$arity$1 = str__1;
  str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
  return str
}();
cljs.core.subs = function() {
  var subs = null;
  var subs__2 = function(s, start) {
    return s.substring(start)
  };
  var subs__3 = function(s, start, end) {
    return s.substring(start, end)
  };
  subs = function(s, start, end) {
    switch(arguments.length) {
      case 2:
        return subs__2.call(this, s, start);
      case 3:
        return subs__3.call(this, s, start, end)
    }
    throw"Invalid arity: " + arguments.length;
  };
  subs.cljs$lang$arity$2 = subs__2;
  subs.cljs$lang$arity$3 = subs__3;
  return subs
}();
cljs.core.format = function() {
  var format__delegate = function(fmt, args) {
    return cljs.core.apply.call(null, goog.string.format, fmt, args)
  };
  var format = function(fmt, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return format__delegate.call(this, fmt, args)
  };
  format.cljs$lang$maxFixedArity = 1;
  format.cljs$lang$applyTo = function(arglist__7144) {
    var fmt = cljs.core.first(arglist__7144);
    var args = cljs.core.rest(arglist__7144);
    return format__delegate(fmt, args)
  };
  format.cljs$lang$arity$variadic = format__delegate;
  return format
}();
cljs.core.symbol = function() {
  var symbol = null;
  var symbol__1 = function(name) {
    if(cljs.core.symbol_QMARK_.call(null, name)) {
      name
    }else {
      if(cljs.core.keyword_QMARK_.call(null, name)) {
        cljs.core.str_STAR_.call(null, "\ufdd1", "'", cljs.core.subs.call(null, name, 2))
      }else {
      }
    }
    return cljs.core.str_STAR_.call(null, "\ufdd1", "'", name)
  };
  var symbol__2 = function(ns, name) {
    return symbol.call(null, cljs.core.str_STAR_.call(null, ns, "/", name))
  };
  symbol = function(ns, name) {
    switch(arguments.length) {
      case 1:
        return symbol__1.call(this, ns);
      case 2:
        return symbol__2.call(this, ns, name)
    }
    throw"Invalid arity: " + arguments.length;
  };
  symbol.cljs$lang$arity$1 = symbol__1;
  symbol.cljs$lang$arity$2 = symbol__2;
  return symbol
}();
cljs.core.keyword = function() {
  var keyword = null;
  var keyword__1 = function(name) {
    if(cljs.core.keyword_QMARK_.call(null, name)) {
      return name
    }else {
      if(cljs.core.symbol_QMARK_.call(null, name)) {
        return cljs.core.str_STAR_.call(null, "\ufdd0", "'", cljs.core.subs.call(null, name, 2))
      }else {
        if("\ufdd0'else") {
          return cljs.core.str_STAR_.call(null, "\ufdd0", "'", name)
        }else {
          return null
        }
      }
    }
  };
  var keyword__2 = function(ns, name) {
    return keyword.call(null, cljs.core.str_STAR_.call(null, ns, "/", name))
  };
  keyword = function(ns, name) {
    switch(arguments.length) {
      case 1:
        return keyword__1.call(this, ns);
      case 2:
        return keyword__2.call(this, ns, name)
    }
    throw"Invalid arity: " + arguments.length;
  };
  keyword.cljs$lang$arity$1 = keyword__1;
  keyword.cljs$lang$arity$2 = keyword__2;
  return keyword
}();
cljs.core.equiv_sequential = function equiv_sequential(x, y) {
  return cljs.core.boolean$.call(null, cljs.core.sequential_QMARK_.call(null, y) ? function() {
    var xs__7147 = cljs.core.seq.call(null, x);
    var ys__7148 = cljs.core.seq.call(null, y);
    while(true) {
      if(xs__7147 == null) {
        return ys__7148 == null
      }else {
        if(ys__7148 == null) {
          return false
        }else {
          if(cljs.core._EQ_.call(null, cljs.core.first.call(null, xs__7147), cljs.core.first.call(null, ys__7148))) {
            var G__7149 = cljs.core.next.call(null, xs__7147);
            var G__7150 = cljs.core.next.call(null, ys__7148);
            xs__7147 = G__7149;
            ys__7148 = G__7150;
            continue
          }else {
            if("\ufdd0'else") {
              return false
            }else {
              return null
            }
          }
        }
      }
      break
    }
  }() : null)
};
cljs.core.hash_combine = function hash_combine(seed, hash) {
  return seed ^ hash + 2654435769 + (seed << 6) + (seed >> 2)
};
cljs.core.hash_coll = function hash_coll(coll) {
  return cljs.core.reduce.call(null, function(p1__7151_SHARP_, p2__7152_SHARP_) {
    return cljs.core.hash_combine.call(null, p1__7151_SHARP_, cljs.core.hash.call(null, p2__7152_SHARP_, false))
  }, cljs.core.hash.call(null, cljs.core.first.call(null, coll), false), cljs.core.next.call(null, coll))
};
cljs.core.hash_imap = function hash_imap(m) {
  var h__7156 = 0;
  var s__7157 = cljs.core.seq.call(null, m);
  while(true) {
    if(s__7157) {
      var e__7158 = cljs.core.first.call(null, s__7157);
      var G__7159 = (h__7156 + (cljs.core.hash.call(null, cljs.core.key.call(null, e__7158)) ^ cljs.core.hash.call(null, cljs.core.val.call(null, e__7158)))) % 4503599627370496;
      var G__7160 = cljs.core.next.call(null, s__7157);
      h__7156 = G__7159;
      s__7157 = G__7160;
      continue
    }else {
      return h__7156
    }
    break
  }
};
cljs.core.hash_iset = function hash_iset(s) {
  var h__7164 = 0;
  var s__7165 = cljs.core.seq.call(null, s);
  while(true) {
    if(s__7165) {
      var e__7166 = cljs.core.first.call(null, s__7165);
      var G__7167 = (h__7164 + cljs.core.hash.call(null, e__7166)) % 4503599627370496;
      var G__7168 = cljs.core.next.call(null, s__7165);
      h__7164 = G__7167;
      s__7165 = G__7168;
      continue
    }else {
      return h__7164
    }
    break
  }
};
cljs.core.extend_object_BANG_ = function extend_object_BANG_(obj, fn_map) {
  var G__7189__7190 = cljs.core.seq.call(null, fn_map);
  if(G__7189__7190) {
    var G__7192__7194 = cljs.core.first.call(null, G__7189__7190);
    var vec__7193__7195 = G__7192__7194;
    var key_name__7196 = cljs.core.nth.call(null, vec__7193__7195, 0, null);
    var f__7197 = cljs.core.nth.call(null, vec__7193__7195, 1, null);
    var G__7189__7198 = G__7189__7190;
    var G__7192__7199 = G__7192__7194;
    var G__7189__7200 = G__7189__7198;
    while(true) {
      var vec__7201__7202 = G__7192__7199;
      var key_name__7203 = cljs.core.nth.call(null, vec__7201__7202, 0, null);
      var f__7204 = cljs.core.nth.call(null, vec__7201__7202, 1, null);
      var G__7189__7205 = G__7189__7200;
      var str_name__7206 = cljs.core.name.call(null, key_name__7203);
      obj[str_name__7206] = f__7204;
      var temp__3974__auto____7207 = cljs.core.next.call(null, G__7189__7205);
      if(temp__3974__auto____7207) {
        var G__7189__7208 = temp__3974__auto____7207;
        var G__7209 = cljs.core.first.call(null, G__7189__7208);
        var G__7210 = G__7189__7208;
        G__7192__7199 = G__7209;
        G__7189__7200 = G__7210;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return obj
};
cljs.core.List = function(meta, first, rest, count, __hash) {
  this.meta = meta;
  this.first = first;
  this.rest = rest;
  this.count = count;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 65413358
};
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/List")
};
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__7211 = this;
  var h__2218__auto____7212 = this__7211.__hash;
  if(!(h__2218__auto____7212 == null)) {
    return h__2218__auto____7212
  }else {
    var h__2218__auto____7213 = cljs.core.hash_coll.call(null, coll);
    this__7211.__hash = h__2218__auto____7213;
    return h__2218__auto____7213
  }
};
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = function(coll) {
  var this__7214 = this;
  if(this__7214.count === 1) {
    return null
  }else {
    return this__7214.rest
  }
};
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__7215 = this;
  return new cljs.core.List(this__7215.meta, o, coll, this__7215.count + 1, null)
};
cljs.core.List.prototype.toString = function() {
  var this__7216 = this;
  var this__7217 = this;
  return cljs.core.pr_str.call(null, this__7217)
};
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__7218 = this;
  return coll
};
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__7219 = this;
  return this__7219.count
};
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = function(coll) {
  var this__7220 = this;
  return this__7220.first
};
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = function(coll) {
  var this__7221 = this;
  return coll.cljs$core$ISeq$_rest$arity$1(coll)
};
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = function(coll) {
  var this__7222 = this;
  return this__7222.first
};
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = function(coll) {
  var this__7223 = this;
  if(this__7223.count === 1) {
    return cljs.core.List.EMPTY
  }else {
    return this__7223.rest
  }
};
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__7224 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__7225 = this;
  return new cljs.core.List(meta, this__7225.first, this__7225.rest, this__7225.count, this__7225.__hash)
};
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__7226 = this;
  return this__7226.meta
};
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__7227 = this;
  return cljs.core.List.EMPTY
};
cljs.core.List;
cljs.core.EmptyList = function(meta) {
  this.meta = meta;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 65413326
};
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/EmptyList")
};
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__7228 = this;
  return 0
};
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = function(coll) {
  var this__7229 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__7230 = this;
  return new cljs.core.List(this__7230.meta, o, null, 1, null)
};
cljs.core.EmptyList.prototype.toString = function() {
  var this__7231 = this;
  var this__7232 = this;
  return cljs.core.pr_str.call(null, this__7232)
};
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__7233 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__7234 = this;
  return 0
};
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = function(coll) {
  var this__7235 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = function(coll) {
  var this__7236 = this;
  throw new Error("Can't pop empty list");
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = function(coll) {
  var this__7237 = this;
  return null
};
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = function(coll) {
  var this__7238 = this;
  return cljs.core.List.EMPTY
};
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__7239 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__7240 = this;
  return new cljs.core.EmptyList(meta)
};
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__7241 = this;
  return this__7241.meta
};
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__7242 = this;
  return coll
};
cljs.core.EmptyList;
cljs.core.List.EMPTY = new cljs.core.EmptyList(null);
cljs.core.reversible_QMARK_ = function reversible_QMARK_(coll) {
  var G__7246__7247 = coll;
  if(G__7246__7247) {
    if(function() {
      var or__3824__auto____7248 = G__7246__7247.cljs$lang$protocol_mask$partition0$ & 134217728;
      if(or__3824__auto____7248) {
        return or__3824__auto____7248
      }else {
        return G__7246__7247.cljs$core$IReversible$
      }
    }()) {
      return true
    }else {
      if(!G__7246__7247.cljs$lang$protocol_mask$partition0$) {
        return cljs.core.type_satisfies_.call(null, cljs.core.IReversible, G__7246__7247)
      }else {
        return false
      }
    }
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IReversible, G__7246__7247)
  }
};
cljs.core.rseq = function rseq(coll) {
  return cljs.core._rseq.call(null, coll)
};
cljs.core.reverse = function reverse(coll) {
  if(cljs.core.reversible_QMARK_.call(null, coll)) {
    return cljs.core.rseq.call(null, coll)
  }else {
    return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.List.EMPTY, coll)
  }
};
cljs.core.list = function() {
  var list = null;
  var list__0 = function() {
    return cljs.core.List.EMPTY
  };
  var list__1 = function(x) {
    return cljs.core.conj.call(null, cljs.core.List.EMPTY, x)
  };
  var list__2 = function(x, y) {
    return cljs.core.conj.call(null, list.call(null, y), x)
  };
  var list__3 = function(x, y, z) {
    return cljs.core.conj.call(null, list.call(null, y, z), x)
  };
  var list__4 = function() {
    var G__7249__delegate = function(x, y, z, items) {
      return cljs.core.conj.call(null, cljs.core.conj.call(null, cljs.core.conj.call(null, cljs.core.reduce.call(null, cljs.core.conj, cljs.core.List.EMPTY, cljs.core.reverse.call(null, items)), z), y), x)
    };
    var G__7249 = function(x, y, z, var_args) {
      var items = null;
      if(goog.isDef(var_args)) {
        items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__7249__delegate.call(this, x, y, z, items)
    };
    G__7249.cljs$lang$maxFixedArity = 3;
    G__7249.cljs$lang$applyTo = function(arglist__7250) {
      var x = cljs.core.first(arglist__7250);
      var y = cljs.core.first(cljs.core.next(arglist__7250));
      var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7250)));
      var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7250)));
      return G__7249__delegate(x, y, z, items)
    };
    G__7249.cljs$lang$arity$variadic = G__7249__delegate;
    return G__7249
  }();
  list = function(x, y, z, var_args) {
    var items = var_args;
    switch(arguments.length) {
      case 0:
        return list__0.call(this);
      case 1:
        return list__1.call(this, x);
      case 2:
        return list__2.call(this, x, y);
      case 3:
        return list__3.call(this, x, y, z);
      default:
        return list__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  list.cljs$lang$maxFixedArity = 3;
  list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
  list.cljs$lang$arity$0 = list__0;
  list.cljs$lang$arity$1 = list__1;
  list.cljs$lang$arity$2 = list__2;
  list.cljs$lang$arity$3 = list__3;
  list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
  return list
}();
cljs.core.Cons = function(meta, first, rest, __hash) {
  this.meta = meta;
  this.first = first;
  this.rest = rest;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 65405164
};
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/Cons")
};
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__7251 = this;
  var h__2218__auto____7252 = this__7251.__hash;
  if(!(h__2218__auto____7252 == null)) {
    return h__2218__auto____7252
  }else {
    var h__2218__auto____7253 = cljs.core.hash_coll.call(null, coll);
    this__7251.__hash = h__2218__auto____7253;
    return h__2218__auto____7253
  }
};
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = function(coll) {
  var this__7254 = this;
  if(this__7254.rest == null) {
    return null
  }else {
    return cljs.core._seq.call(null, this__7254.rest)
  }
};
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__7255 = this;
  return new cljs.core.Cons(null, o, coll, this__7255.__hash)
};
cljs.core.Cons.prototype.toString = function() {
  var this__7256 = this;
  var this__7257 = this;
  return cljs.core.pr_str.call(null, this__7257)
};
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__7258 = this;
  return coll
};
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = function(coll) {
  var this__7259 = this;
  return this__7259.first
};
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = function(coll) {
  var this__7260 = this;
  if(this__7260.rest == null) {
    return cljs.core.List.EMPTY
  }else {
    return this__7260.rest
  }
};
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__7261 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__7262 = this;
  return new cljs.core.Cons(meta, this__7262.first, this__7262.rest, this__7262.__hash)
};
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__7263 = this;
  return this__7263.meta
};
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__7264 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__7264.meta)
};
cljs.core.Cons;
cljs.core.cons = function cons(x, coll) {
  if(function() {
    var or__3824__auto____7269 = coll == null;
    if(or__3824__auto____7269) {
      return or__3824__auto____7269
    }else {
      var G__7270__7271 = coll;
      if(G__7270__7271) {
        if(function() {
          var or__3824__auto____7272 = G__7270__7271.cljs$lang$protocol_mask$partition0$ & 64;
          if(or__3824__auto____7272) {
            return or__3824__auto____7272
          }else {
            return G__7270__7271.cljs$core$ISeq$
          }
        }()) {
          return true
        }else {
          if(!G__7270__7271.cljs$lang$protocol_mask$partition0$) {
            return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, G__7270__7271)
          }else {
            return false
          }
        }
      }else {
        return cljs.core.type_satisfies_.call(null, cljs.core.ISeq, G__7270__7271)
      }
    }
  }()) {
    return new cljs.core.Cons(null, x, coll, null)
  }else {
    return new cljs.core.Cons(null, x, cljs.core.seq.call(null, coll), null)
  }
};
cljs.core.list_QMARK_ = function list_QMARK_(x) {
  var G__7276__7277 = x;
  if(G__7276__7277) {
    if(function() {
      var or__3824__auto____7278 = G__7276__7277.cljs$lang$protocol_mask$partition0$ & 33554432;
      if(or__3824__auto____7278) {
        return or__3824__auto____7278
      }else {
        return G__7276__7277.cljs$core$IList$
      }
    }()) {
      return true
    }else {
      if(!G__7276__7277.cljs$lang$protocol_mask$partition0$) {
        return cljs.core.type_satisfies_.call(null, cljs.core.IList, G__7276__7277)
      }else {
        return false
      }
    }
  }else {
    return cljs.core.type_satisfies_.call(null, cljs.core.IList, G__7276__7277)
  }
};
cljs.core.IReduce["string"] = true;
cljs.core._reduce["string"] = function() {
  var G__7279 = null;
  var G__7279__2 = function(string, f) {
    return cljs.core.ci_reduce.call(null, string, f)
  };
  var G__7279__3 = function(string, f, start) {
    return cljs.core.ci_reduce.call(null, string, f, start)
  };
  G__7279 = function(string, f, start) {
    switch(arguments.length) {
      case 2:
        return G__7279__2.call(this, string, f);
      case 3:
        return G__7279__3.call(this, string, f, start)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__7279
}();
cljs.core.ILookup["string"] = true;
cljs.core._lookup["string"] = function() {
  var G__7280 = null;
  var G__7280__2 = function(string, k) {
    return cljs.core._nth.call(null, string, k)
  };
  var G__7280__3 = function(string, k, not_found) {
    return cljs.core._nth.call(null, string, k, not_found)
  };
  G__7280 = function(string, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__7280__2.call(this, string, k);
      case 3:
        return G__7280__3.call(this, string, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__7280
}();
cljs.core.IIndexed["string"] = true;
cljs.core._nth["string"] = function() {
  var G__7281 = null;
  var G__7281__2 = function(string, n) {
    if(n < cljs.core._count.call(null, string)) {
      return string.charAt(n)
    }else {
      return null
    }
  };
  var G__7281__3 = function(string, n, not_found) {
    if(n < cljs.core._count.call(null, string)) {
      return string.charAt(n)
    }else {
      return not_found
    }
  };
  G__7281 = function(string, n, not_found) {
    switch(arguments.length) {
      case 2:
        return G__7281__2.call(this, string, n);
      case 3:
        return G__7281__3.call(this, string, n, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__7281
}();
cljs.core.ICounted["string"] = true;
cljs.core._count["string"] = function(s) {
  return s.length
};
cljs.core.ISeqable["string"] = true;
cljs.core._seq["string"] = function(string) {
  return cljs.core.prim_seq.call(null, string, 0)
};
cljs.core.IHash["string"] = true;
cljs.core._hash["string"] = function(o) {
  return goog.string.hashCode(o)
};
cljs.core.Keyword = function(k) {
  this.k = k;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 1
};
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/Keyword")
};
cljs.core.Keyword.prototype.call = function() {
  var G__7293 = null;
  var G__7293__2 = function(this_sym7284, coll) {
    var this__7286 = this;
    var this_sym7284__7287 = this;
    var ___7288 = this_sym7284__7287;
    if(coll == null) {
      return null
    }else {
      var strobj__7289 = coll.strobj;
      if(strobj__7289 == null) {
        return cljs.core._lookup.call(null, coll, this__7286.k, null)
      }else {
        return strobj__7289[this__7286.k]
      }
    }
  };
  var G__7293__3 = function(this_sym7285, coll, not_found) {
    var this__7286 = this;
    var this_sym7285__7290 = this;
    var ___7291 = this_sym7285__7290;
    if(coll == null) {
      return not_found
    }else {
      return cljs.core._lookup.call(null, coll, this__7286.k, not_found)
    }
  };
  G__7293 = function(this_sym7285, coll, not_found) {
    switch(arguments.length) {
      case 2:
        return G__7293__2.call(this, this_sym7285, coll);
      case 3:
        return G__7293__3.call(this, this_sym7285, coll, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__7293
}();
cljs.core.Keyword.prototype.apply = function(this_sym7282, args7283) {
  var this__7292 = this;
  return this_sym7282.call.apply(this_sym7282, [this_sym7282].concat(args7283.slice()))
};
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = function() {
  var G__7302 = null;
  var G__7302__2 = function(this_sym7296, coll) {
    var this_sym7296__7298 = this;
    var this__7299 = this_sym7296__7298;
    return cljs.core._lookup.call(null, coll, this__7299.toString(), null)
  };
  var G__7302__3 = function(this_sym7297, coll, not_found) {
    var this_sym7297__7300 = this;
    var this__7301 = this_sym7297__7300;
    return cljs.core._lookup.call(null, coll, this__7301.toString(), not_found)
  };
  G__7302 = function(this_sym7297, coll, not_found) {
    switch(arguments.length) {
      case 2:
        return G__7302__2.call(this, this_sym7297, coll);
      case 3:
        return G__7302__3.call(this, this_sym7297, coll, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__7302
}();
String.prototype.apply = function(this_sym7294, args7295) {
  return this_sym7294.call.apply(this_sym7294, [this_sym7294].concat(args7295.slice()))
};
String.prototype.apply = function(s, args) {
  if(cljs.core.count.call(null, args) < 2) {
    return cljs.core._lookup.call(null, args[0], s, null)
  }else {
    return cljs.core._lookup.call(null, args[0], s, args[1])
  }
};
cljs.core.lazy_seq_value = function lazy_seq_value(lazy_seq) {
  var x__7304 = lazy_seq.x;
  if(lazy_seq.realized) {
    return x__7304
  }else {
    lazy_seq.x = x__7304.call(null);
    lazy_seq.realized = true;
    return lazy_seq.x
  }
};
cljs.core.LazySeq = function(meta, realized, x, __hash) {
  this.meta = meta;
  this.realized = realized;
  this.x = x;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 31850700
};
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/LazySeq")
};
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__7305 = this;
  var h__2218__auto____7306 = this__7305.__hash;
  if(!(h__2218__auto____7306 == null)) {
    return h__2218__auto____7306
  }else {
    var h__2218__auto____7307 = cljs.core.hash_coll.call(null, coll);
    this__7305.__hash = h__2218__auto____7307;
    return h__2218__auto____7307
  }
};
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = function(coll) {
  var this__7308 = this;
  return cljs.core._seq.call(null, coll.cljs$core$ISeq$_rest$arity$1(coll))
};
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__7309 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.LazySeq.prototype.toString = function() {
  var this__7310 = this;
  var this__7311 = this;
  return cljs.core.pr_str.call(null, this__7311)
};
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__7312 = this;
  return cljs.core.seq.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = function(coll) {
  var this__7313 = this;
  return cljs.core.first.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(coll) {
  var this__7314 = this;
  return cljs.core.rest.call(null, cljs.core.lazy_seq_value.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__7315 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__7316 = this;
  return new cljs.core.LazySeq(meta, this__7316.realized, this__7316.x, this__7316.__hash)
};
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__7317 = this;
  return this__7317.meta
};
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__7318 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__7318.meta)
};
cljs.core.LazySeq;
cljs.core.ChunkBuffer = function(buf, end) {
  this.buf = buf;
  this.end = end;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 2
};
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/ChunkBuffer")
};
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = function(_) {
  var this__7319 = this;
  return this__7319.end
};
cljs.core.ChunkBuffer.prototype.add = function(o) {
  var this__7320 = this;
  var ___7321 = this;
  this__7320.buf[this__7320.end] = o;
  return this__7320.end = this__7320.end + 1
};
cljs.core.ChunkBuffer.prototype.chunk = function(o) {
  var this__7322 = this;
  var ___7323 = this;
  var ret__7324 = new cljs.core.ArrayChunk(this__7322.buf, 0, this__7322.end);
  this__7322.buf = null;
  return ret__7324
};
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = function chunk_buffer(capacity) {
  return new cljs.core.ChunkBuffer(cljs.core.make_array.call(null, capacity), 0)
};
cljs.core.ArrayChunk = function(arr, off, end) {
  this.arr = arr;
  this.off = off;
  this.end = end;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 524306
};
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/ArrayChunk")
};
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = function(coll, f) {
  var this__7325 = this;
  return cljs.core.ci_reduce.call(null, coll, f, this__7325.arr[this__7325.off], this__7325.off + 1)
};
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = function(coll, f, start) {
  var this__7326 = this;
  return cljs.core.ci_reduce.call(null, coll, f, start, this__7326.off)
};
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = function(coll) {
  var this__7327 = this;
  if(this__7327.off === this__7327.end) {
    throw new Error("-drop-first of empty chunk");
  }else {
    return new cljs.core.ArrayChunk(this__7327.arr, this__7327.off + 1, this__7327.end)
  }
};
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = function(coll, i) {
  var this__7328 = this;
  return this__7328.arr[this__7328.off + i]
};
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = function(coll, i, not_found) {
  var this__7329 = this;
  if(function() {
    var and__3822__auto____7330 = i >= 0;
    if(and__3822__auto____7330) {
      return i < this__7329.end - this__7329.off
    }else {
      return and__3822__auto____7330
    }
  }()) {
    return this__7329.arr[this__7329.off + i]
  }else {
    return not_found
  }
};
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = function(_) {
  var this__7331 = this;
  return this__7331.end - this__7331.off
};
cljs.core.ArrayChunk;
cljs.core.array_chunk = function() {
  var array_chunk = null;
  var array_chunk__1 = function(arr) {
    return array_chunk.call(null, arr, 0, arr.length)
  };
  var array_chunk__2 = function(arr, off) {
    return array_chunk.call(null, arr, off, arr.length)
  };
  var array_chunk__3 = function(arr, off, end) {
    return new cljs.core.ArrayChunk(arr, off, end)
  };
  array_chunk = function(arr, off, end) {
    switch(arguments.length) {
      case 1:
        return array_chunk__1.call(this, arr);
      case 2:
        return array_chunk__2.call(this, arr, off);
      case 3:
        return array_chunk__3.call(this, arr, off, end)
    }
    throw"Invalid arity: " + arguments.length;
  };
  array_chunk.cljs$lang$arity$1 = array_chunk__1;
  array_chunk.cljs$lang$arity$2 = array_chunk__2;
  array_chunk.cljs$lang$arity$3 = array_chunk__3;
  return array_chunk
}();
cljs.core.ChunkedCons = function(chunk, more, meta) {
  this.chunk = chunk;
  this.more = more;
  this.meta = meta;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 27656296
};
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/ChunkedCons")
};
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = function(this$, o) {
  var this__7332 = this;
  return cljs.core.cons.call(null, o, this$)
};
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__7333 = this;
  return coll
};
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = function(coll) {
  var this__7334 = this;
  return cljs.core._nth.call(null, this__7334.chunk, 0)
};
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = function(coll) {
  var this__7335 = this;
  if(cljs.core._count.call(null, this__7335.chunk) > 1) {
    return new cljs.core.ChunkedCons(cljs.core._drop_first.call(null, this__7335.chunk), this__7335.more, this__7335.meta)
  }else {
    if(this__7335.more == null) {
      return cljs.core.List.EMPTY
    }else {
      return this__7335.more
    }
  }
};
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = function(coll) {
  var this__7336 = this;
  if(this__7336.more == null) {
    return null
  }else {
    return this__7336.more
  }
};
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__7337 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, m) {
  var this__7338 = this;
  return new cljs.core.ChunkedCons(this__7338.chunk, this__7338.more, m)
};
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__7339 = this;
  return this__7339.meta
};
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = function(coll) {
  var this__7340 = this;
  return this__7340.chunk
};
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = function(coll) {
  var this__7341 = this;
  if(this__7341.more == null) {
    return cljs.core.List.EMPTY
  }else {
    return this__7341.more
  }
};
cljs.core.ChunkedCons;
cljs.core.chunk_cons = function chunk_cons(chunk, rest) {
  if(cljs.core._count.call(null, chunk) === 0) {
    return rest
  }else {
    return new cljs.core.ChunkedCons(chunk, rest, null)
  }
};
cljs.core.chunk_append = function chunk_append(b, x) {
  return b.add(x)
};
cljs.core.chunk = function chunk(b) {
  return b.chunk()
};
cljs.core.chunk_first = function chunk_first(s) {
  return cljs.core._chunked_first.call(null, s)
};
cljs.core.chunk_rest = function chunk_rest(s) {
  return cljs.core._chunked_rest.call(null, s)
};
cljs.core.chunk_next = function chunk_next(s) {
  if(function() {
    var G__7345__7346 = s;
    if(G__7345__7346) {
      if(cljs.core.truth_(function() {
        var or__3824__auto____7347 = null;
        if(cljs.core.truth_(or__3824__auto____7347)) {
          return or__3824__auto____7347
        }else {
          return G__7345__7346.cljs$core$IChunkedNext$
        }
      }())) {
        return true
      }else {
        if(!G__7345__7346.cljs$lang$protocol_mask$partition$) {
          return cljs.core.type_satisfies_.call(null, cljs.core.IChunkedNext, G__7345__7346)
        }else {
          return false
        }
      }
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.IChunkedNext, G__7345__7346)
    }
  }()) {
    return cljs.core._chunked_next.call(null, s)
  }else {
    return cljs.core.seq.call(null, cljs.core._chunked_rest.call(null, s))
  }
};
cljs.core.to_array = function to_array(s) {
  var ary__7350 = [];
  var s__7351 = s;
  while(true) {
    if(cljs.core.seq.call(null, s__7351)) {
      ary__7350.push(cljs.core.first.call(null, s__7351));
      var G__7352 = cljs.core.next.call(null, s__7351);
      s__7351 = G__7352;
      continue
    }else {
      return ary__7350
    }
    break
  }
};
cljs.core.to_array_2d = function to_array_2d(coll) {
  var ret__7356 = cljs.core.make_array.call(null, cljs.core.count.call(null, coll));
  var i__7357 = 0;
  var xs__7358 = cljs.core.seq.call(null, coll);
  while(true) {
    if(xs__7358) {
      ret__7356[i__7357] = cljs.core.to_array.call(null, cljs.core.first.call(null, xs__7358));
      var G__7359 = i__7357 + 1;
      var G__7360 = cljs.core.next.call(null, xs__7358);
      i__7357 = G__7359;
      xs__7358 = G__7360;
      continue
    }else {
    }
    break
  }
  return ret__7356
};
cljs.core.long_array = function() {
  var long_array = null;
  var long_array__1 = function(size_or_seq) {
    if(cljs.core.number_QMARK_.call(null, size_or_seq)) {
      return long_array.call(null, size_or_seq, null)
    }else {
      if(cljs.core.seq_QMARK_.call(null, size_or_seq)) {
        return cljs.core.into_array.call(null, size_or_seq)
      }else {
        if("\ufdd0'else") {
          throw new Error("long-array called with something other than size or ISeq");
        }else {
          return null
        }
      }
    }
  };
  var long_array__2 = function(size, init_val_or_seq) {
    var a__7368 = cljs.core.make_array.call(null, size);
    if(cljs.core.seq_QMARK_.call(null, init_val_or_seq)) {
      var s__7369 = cljs.core.seq.call(null, init_val_or_seq);
      var i__7370 = 0;
      var s__7371 = s__7369;
      while(true) {
        if(cljs.core.truth_(function() {
          var and__3822__auto____7372 = s__7371;
          if(and__3822__auto____7372) {
            return i__7370 < size
          }else {
            return and__3822__auto____7372
          }
        }())) {
          a__7368[i__7370] = cljs.core.first.call(null, s__7371);
          var G__7375 = i__7370 + 1;
          var G__7376 = cljs.core.next.call(null, s__7371);
          i__7370 = G__7375;
          s__7371 = G__7376;
          continue
        }else {
          return a__7368
        }
        break
      }
    }else {
      var n__2553__auto____7373 = size;
      var i__7374 = 0;
      while(true) {
        if(i__7374 < n__2553__auto____7373) {
          a__7368[i__7374] = init_val_or_seq;
          var G__7377 = i__7374 + 1;
          i__7374 = G__7377;
          continue
        }else {
        }
        break
      }
      return a__7368
    }
  };
  long_array = function(size, init_val_or_seq) {
    switch(arguments.length) {
      case 1:
        return long_array__1.call(this, size);
      case 2:
        return long_array__2.call(this, size, init_val_or_seq)
    }
    throw"Invalid arity: " + arguments.length;
  };
  long_array.cljs$lang$arity$1 = long_array__1;
  long_array.cljs$lang$arity$2 = long_array__2;
  return long_array
}();
cljs.core.double_array = function() {
  var double_array = null;
  var double_array__1 = function(size_or_seq) {
    if(cljs.core.number_QMARK_.call(null, size_or_seq)) {
      return double_array.call(null, size_or_seq, null)
    }else {
      if(cljs.core.seq_QMARK_.call(null, size_or_seq)) {
        return cljs.core.into_array.call(null, size_or_seq)
      }else {
        if("\ufdd0'else") {
          throw new Error("double-array called with something other than size or ISeq");
        }else {
          return null
        }
      }
    }
  };
  var double_array__2 = function(size, init_val_or_seq) {
    var a__7385 = cljs.core.make_array.call(null, size);
    if(cljs.core.seq_QMARK_.call(null, init_val_or_seq)) {
      var s__7386 = cljs.core.seq.call(null, init_val_or_seq);
      var i__7387 = 0;
      var s__7388 = s__7386;
      while(true) {
        if(cljs.core.truth_(function() {
          var and__3822__auto____7389 = s__7388;
          if(and__3822__auto____7389) {
            return i__7387 < size
          }else {
            return and__3822__auto____7389
          }
        }())) {
          a__7385[i__7387] = cljs.core.first.call(null, s__7388);
          var G__7392 = i__7387 + 1;
          var G__7393 = cljs.core.next.call(null, s__7388);
          i__7387 = G__7392;
          s__7388 = G__7393;
          continue
        }else {
          return a__7385
        }
        break
      }
    }else {
      var n__2553__auto____7390 = size;
      var i__7391 = 0;
      while(true) {
        if(i__7391 < n__2553__auto____7390) {
          a__7385[i__7391] = init_val_or_seq;
          var G__7394 = i__7391 + 1;
          i__7391 = G__7394;
          continue
        }else {
        }
        break
      }
      return a__7385
    }
  };
  double_array = function(size, init_val_or_seq) {
    switch(arguments.length) {
      case 1:
        return double_array__1.call(this, size);
      case 2:
        return double_array__2.call(this, size, init_val_or_seq)
    }
    throw"Invalid arity: " + arguments.length;
  };
  double_array.cljs$lang$arity$1 = double_array__1;
  double_array.cljs$lang$arity$2 = double_array__2;
  return double_array
}();
cljs.core.object_array = function() {
  var object_array = null;
  var object_array__1 = function(size_or_seq) {
    if(cljs.core.number_QMARK_.call(null, size_or_seq)) {
      return object_array.call(null, size_or_seq, null)
    }else {
      if(cljs.core.seq_QMARK_.call(null, size_or_seq)) {
        return cljs.core.into_array.call(null, size_or_seq)
      }else {
        if("\ufdd0'else") {
          throw new Error("object-array called with something other than size or ISeq");
        }else {
          return null
        }
      }
    }
  };
  var object_array__2 = function(size, init_val_or_seq) {
    var a__7402 = cljs.core.make_array.call(null, size);
    if(cljs.core.seq_QMARK_.call(null, init_val_or_seq)) {
      var s__7403 = cljs.core.seq.call(null, init_val_or_seq);
      var i__7404 = 0;
      var s__7405 = s__7403;
      while(true) {
        if(cljs.core.truth_(function() {
          var and__3822__auto____7406 = s__7405;
          if(and__3822__auto____7406) {
            return i__7404 < size
          }else {
            return and__3822__auto____7406
          }
        }())) {
          a__7402[i__7404] = cljs.core.first.call(null, s__7405);
          var G__7409 = i__7404 + 1;
          var G__7410 = cljs.core.next.call(null, s__7405);
          i__7404 = G__7409;
          s__7405 = G__7410;
          continue
        }else {
          return a__7402
        }
        break
      }
    }else {
      var n__2553__auto____7407 = size;
      var i__7408 = 0;
      while(true) {
        if(i__7408 < n__2553__auto____7407) {
          a__7402[i__7408] = init_val_or_seq;
          var G__7411 = i__7408 + 1;
          i__7408 = G__7411;
          continue
        }else {
        }
        break
      }
      return a__7402
    }
  };
  object_array = function(size, init_val_or_seq) {
    switch(arguments.length) {
      case 1:
        return object_array__1.call(this, size);
      case 2:
        return object_array__2.call(this, size, init_val_or_seq)
    }
    throw"Invalid arity: " + arguments.length;
  };
  object_array.cljs$lang$arity$1 = object_array__1;
  object_array.cljs$lang$arity$2 = object_array__2;
  return object_array
}();
cljs.core.bounded_count = function bounded_count(s, n) {
  if(cljs.core.counted_QMARK_.call(null, s)) {
    return cljs.core.count.call(null, s)
  }else {
    var s__7416 = s;
    var i__7417 = n;
    var sum__7418 = 0;
    while(true) {
      if(cljs.core.truth_(function() {
        var and__3822__auto____7419 = i__7417 > 0;
        if(and__3822__auto____7419) {
          return cljs.core.seq.call(null, s__7416)
        }else {
          return and__3822__auto____7419
        }
      }())) {
        var G__7420 = cljs.core.next.call(null, s__7416);
        var G__7421 = i__7417 - 1;
        var G__7422 = sum__7418 + 1;
        s__7416 = G__7420;
        i__7417 = G__7421;
        sum__7418 = G__7422;
        continue
      }else {
        return sum__7418
      }
      break
    }
  }
};
cljs.core.spread = function spread(arglist) {
  if(arglist == null) {
    return null
  }else {
    if(cljs.core.next.call(null, arglist) == null) {
      return cljs.core.seq.call(null, cljs.core.first.call(null, arglist))
    }else {
      if("\ufdd0'else") {
        return cljs.core.cons.call(null, cljs.core.first.call(null, arglist), spread.call(null, cljs.core.next.call(null, arglist)))
      }else {
        return null
      }
    }
  }
};
cljs.core.concat = function() {
  var concat = null;
  var concat__0 = function() {
    return new cljs.core.LazySeq(null, false, function() {
      return null
    }, null)
  };
  var concat__1 = function(x) {
    return new cljs.core.LazySeq(null, false, function() {
      return x
    }, null)
  };
  var concat__2 = function(x, y) {
    return new cljs.core.LazySeq(null, false, function() {
      var s__7427 = cljs.core.seq.call(null, x);
      if(s__7427) {
        if(cljs.core.chunked_seq_QMARK_.call(null, s__7427)) {
          return cljs.core.chunk_cons.call(null, cljs.core.chunk_first.call(null, s__7427), concat.call(null, cljs.core.chunk_rest.call(null, s__7427), y))
        }else {
          return cljs.core.cons.call(null, cljs.core.first.call(null, s__7427), concat.call(null, cljs.core.rest.call(null, s__7427), y))
        }
      }else {
        return y
      }
    }, null)
  };
  var concat__3 = function() {
    var G__7431__delegate = function(x, y, zs) {
      var cat__7430 = function cat(xys, zs) {
        return new cljs.core.LazySeq(null, false, function() {
          var xys__7429 = cljs.core.seq.call(null, xys);
          if(xys__7429) {
            if(cljs.core.chunked_seq_QMARK_.call(null, xys__7429)) {
              return cljs.core.chunk_cons.call(null, cljs.core.chunk_first.call(null, xys__7429), cat.call(null, cljs.core.chunk_rest.call(null, xys__7429), zs))
            }else {
              return cljs.core.cons.call(null, cljs.core.first.call(null, xys__7429), cat.call(null, cljs.core.rest.call(null, xys__7429), zs))
            }
          }else {
            if(cljs.core.truth_(zs)) {
              return cat.call(null, cljs.core.first.call(null, zs), cljs.core.next.call(null, zs))
            }else {
              return null
            }
          }
        }, null)
      };
      return cat__7430.call(null, concat.call(null, x, y), zs)
    };
    var G__7431 = function(x, y, var_args) {
      var zs = null;
      if(goog.isDef(var_args)) {
        zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__7431__delegate.call(this, x, y, zs)
    };
    G__7431.cljs$lang$maxFixedArity = 2;
    G__7431.cljs$lang$applyTo = function(arglist__7432) {
      var x = cljs.core.first(arglist__7432);
      var y = cljs.core.first(cljs.core.next(arglist__7432));
      var zs = cljs.core.rest(cljs.core.next(arglist__7432));
      return G__7431__delegate(x, y, zs)
    };
    G__7431.cljs$lang$arity$variadic = G__7431__delegate;
    return G__7431
  }();
  concat = function(x, y, var_args) {
    var zs = var_args;
    switch(arguments.length) {
      case 0:
        return concat__0.call(this);
      case 1:
        return concat__1.call(this, x);
      case 2:
        return concat__2.call(this, x, y);
      default:
        return concat__3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  concat.cljs$lang$maxFixedArity = 2;
  concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
  concat.cljs$lang$arity$0 = concat__0;
  concat.cljs$lang$arity$1 = concat__1;
  concat.cljs$lang$arity$2 = concat__2;
  concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
  return concat
}();
cljs.core.list_STAR_ = function() {
  var list_STAR_ = null;
  var list_STAR___1 = function(args) {
    return cljs.core.seq.call(null, args)
  };
  var list_STAR___2 = function(a, args) {
    return cljs.core.cons.call(null, a, args)
  };
  var list_STAR___3 = function(a, b, args) {
    return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, args))
  };
  var list_STAR___4 = function(a, b, c, args) {
    return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, args)))
  };
  var list_STAR___5 = function() {
    var G__7433__delegate = function(a, b, c, d, more) {
      return cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, cljs.core.cons.call(null, d, cljs.core.spread.call(null, more)))))
    };
    var G__7433 = function(a, b, c, d, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__7433__delegate.call(this, a, b, c, d, more)
    };
    G__7433.cljs$lang$maxFixedArity = 4;
    G__7433.cljs$lang$applyTo = function(arglist__7434) {
      var a = cljs.core.first(arglist__7434);
      var b = cljs.core.first(cljs.core.next(arglist__7434));
      var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7434)));
      var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7434))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7434))));
      return G__7433__delegate(a, b, c, d, more)
    };
    G__7433.cljs$lang$arity$variadic = G__7433__delegate;
    return G__7433
  }();
  list_STAR_ = function(a, b, c, d, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return list_STAR___1.call(this, a);
      case 2:
        return list_STAR___2.call(this, a, b);
      case 3:
        return list_STAR___3.call(this, a, b, c);
      case 4:
        return list_STAR___4.call(this, a, b, c, d);
      default:
        return list_STAR___5.cljs$lang$arity$variadic(a, b, c, d, cljs.core.array_seq(arguments, 4))
    }
    throw"Invalid arity: " + arguments.length;
  };
  list_STAR_.cljs$lang$maxFixedArity = 4;
  list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
  list_STAR_.cljs$lang$arity$1 = list_STAR___1;
  list_STAR_.cljs$lang$arity$2 = list_STAR___2;
  list_STAR_.cljs$lang$arity$3 = list_STAR___3;
  list_STAR_.cljs$lang$arity$4 = list_STAR___4;
  list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
  return list_STAR_
}();
cljs.core.transient$ = function transient$(coll) {
  return cljs.core._as_transient.call(null, coll)
};
cljs.core.persistent_BANG_ = function persistent_BANG_(tcoll) {
  return cljs.core._persistent_BANG_.call(null, tcoll)
};
cljs.core.conj_BANG_ = function conj_BANG_(tcoll, val) {
  return cljs.core._conj_BANG_.call(null, tcoll, val)
};
cljs.core.assoc_BANG_ = function assoc_BANG_(tcoll, key, val) {
  return cljs.core._assoc_BANG_.call(null, tcoll, key, val)
};
cljs.core.dissoc_BANG_ = function dissoc_BANG_(tcoll, key) {
  return cljs.core._dissoc_BANG_.call(null, tcoll, key)
};
cljs.core.pop_BANG_ = function pop_BANG_(tcoll) {
  return cljs.core._pop_BANG_.call(null, tcoll)
};
cljs.core.disj_BANG_ = function disj_BANG_(tcoll, val) {
  return cljs.core._disjoin_BANG_.call(null, tcoll, val)
};
cljs.core.apply_to = function apply_to(f, argc, args) {
  var args__7476 = cljs.core.seq.call(null, args);
  if(argc === 0) {
    return f.call(null)
  }else {
    var a__7477 = cljs.core._first.call(null, args__7476);
    var args__7478 = cljs.core._rest.call(null, args__7476);
    if(argc === 1) {
      if(f.cljs$lang$arity$1) {
        return f.cljs$lang$arity$1(a__7477)
      }else {
        return f.call(null, a__7477)
      }
    }else {
      var b__7479 = cljs.core._first.call(null, args__7478);
      var args__7480 = cljs.core._rest.call(null, args__7478);
      if(argc === 2) {
        if(f.cljs$lang$arity$2) {
          return f.cljs$lang$arity$2(a__7477, b__7479)
        }else {
          return f.call(null, a__7477, b__7479)
        }
      }else {
        var c__7481 = cljs.core._first.call(null, args__7480);
        var args__7482 = cljs.core._rest.call(null, args__7480);
        if(argc === 3) {
          if(f.cljs$lang$arity$3) {
            return f.cljs$lang$arity$3(a__7477, b__7479, c__7481)
          }else {
            return f.call(null, a__7477, b__7479, c__7481)
          }
        }else {
          var d__7483 = cljs.core._first.call(null, args__7482);
          var args__7484 = cljs.core._rest.call(null, args__7482);
          if(argc === 4) {
            if(f.cljs$lang$arity$4) {
              return f.cljs$lang$arity$4(a__7477, b__7479, c__7481, d__7483)
            }else {
              return f.call(null, a__7477, b__7479, c__7481, d__7483)
            }
          }else {
            var e__7485 = cljs.core._first.call(null, args__7484);
            var args__7486 = cljs.core._rest.call(null, args__7484);
            if(argc === 5) {
              if(f.cljs$lang$arity$5) {
                return f.cljs$lang$arity$5(a__7477, b__7479, c__7481, d__7483, e__7485)
              }else {
                return f.call(null, a__7477, b__7479, c__7481, d__7483, e__7485)
              }
            }else {
              var f__7487 = cljs.core._first.call(null, args__7486);
              var args__7488 = cljs.core._rest.call(null, args__7486);
              if(argc === 6) {
                if(f__7487.cljs$lang$arity$6) {
                  return f__7487.cljs$lang$arity$6(a__7477, b__7479, c__7481, d__7483, e__7485, f__7487)
                }else {
                  return f__7487.call(null, a__7477, b__7479, c__7481, d__7483, e__7485, f__7487)
                }
              }else {
                var g__7489 = cljs.core._first.call(null, args__7488);
                var args__7490 = cljs.core._rest.call(null, args__7488);
                if(argc === 7) {
                  if(f__7487.cljs$lang$arity$7) {
                    return f__7487.cljs$lang$arity$7(a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489)
                  }else {
                    return f__7487.call(null, a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489)
                  }
                }else {
                  var h__7491 = cljs.core._first.call(null, args__7490);
                  var args__7492 = cljs.core._rest.call(null, args__7490);
                  if(argc === 8) {
                    if(f__7487.cljs$lang$arity$8) {
                      return f__7487.cljs$lang$arity$8(a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491)
                    }else {
                      return f__7487.call(null, a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491)
                    }
                  }else {
                    var i__7493 = cljs.core._first.call(null, args__7492);
                    var args__7494 = cljs.core._rest.call(null, args__7492);
                    if(argc === 9) {
                      if(f__7487.cljs$lang$arity$9) {
                        return f__7487.cljs$lang$arity$9(a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493)
                      }else {
                        return f__7487.call(null, a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493)
                      }
                    }else {
                      var j__7495 = cljs.core._first.call(null, args__7494);
                      var args__7496 = cljs.core._rest.call(null, args__7494);
                      if(argc === 10) {
                        if(f__7487.cljs$lang$arity$10) {
                          return f__7487.cljs$lang$arity$10(a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493, j__7495)
                        }else {
                          return f__7487.call(null, a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493, j__7495)
                        }
                      }else {
                        var k__7497 = cljs.core._first.call(null, args__7496);
                        var args__7498 = cljs.core._rest.call(null, args__7496);
                        if(argc === 11) {
                          if(f__7487.cljs$lang$arity$11) {
                            return f__7487.cljs$lang$arity$11(a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493, j__7495, k__7497)
                          }else {
                            return f__7487.call(null, a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493, j__7495, k__7497)
                          }
                        }else {
                          var l__7499 = cljs.core._first.call(null, args__7498);
                          var args__7500 = cljs.core._rest.call(null, args__7498);
                          if(argc === 12) {
                            if(f__7487.cljs$lang$arity$12) {
                              return f__7487.cljs$lang$arity$12(a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493, j__7495, k__7497, l__7499)
                            }else {
                              return f__7487.call(null, a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493, j__7495, k__7497, l__7499)
                            }
                          }else {
                            var m__7501 = cljs.core._first.call(null, args__7500);
                            var args__7502 = cljs.core._rest.call(null, args__7500);
                            if(argc === 13) {
                              if(f__7487.cljs$lang$arity$13) {
                                return f__7487.cljs$lang$arity$13(a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493, j__7495, k__7497, l__7499, m__7501)
                              }else {
                                return f__7487.call(null, a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493, j__7495, k__7497, l__7499, m__7501)
                              }
                            }else {
                              var n__7503 = cljs.core._first.call(null, args__7502);
                              var args__7504 = cljs.core._rest.call(null, args__7502);
                              if(argc === 14) {
                                if(f__7487.cljs$lang$arity$14) {
                                  return f__7487.cljs$lang$arity$14(a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493, j__7495, k__7497, l__7499, m__7501, n__7503)
                                }else {
                                  return f__7487.call(null, a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493, j__7495, k__7497, l__7499, m__7501, n__7503)
                                }
                              }else {
                                var o__7505 = cljs.core._first.call(null, args__7504);
                                var args__7506 = cljs.core._rest.call(null, args__7504);
                                if(argc === 15) {
                                  if(f__7487.cljs$lang$arity$15) {
                                    return f__7487.cljs$lang$arity$15(a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493, j__7495, k__7497, l__7499, m__7501, n__7503, o__7505)
                                  }else {
                                    return f__7487.call(null, a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493, j__7495, k__7497, l__7499, m__7501, n__7503, o__7505)
                                  }
                                }else {
                                  var p__7507 = cljs.core._first.call(null, args__7506);
                                  var args__7508 = cljs.core._rest.call(null, args__7506);
                                  if(argc === 16) {
                                    if(f__7487.cljs$lang$arity$16) {
                                      return f__7487.cljs$lang$arity$16(a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493, j__7495, k__7497, l__7499, m__7501, n__7503, o__7505, p__7507)
                                    }else {
                                      return f__7487.call(null, a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493, j__7495, k__7497, l__7499, m__7501, n__7503, o__7505, p__7507)
                                    }
                                  }else {
                                    var q__7509 = cljs.core._first.call(null, args__7508);
                                    var args__7510 = cljs.core._rest.call(null, args__7508);
                                    if(argc === 17) {
                                      if(f__7487.cljs$lang$arity$17) {
                                        return f__7487.cljs$lang$arity$17(a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493, j__7495, k__7497, l__7499, m__7501, n__7503, o__7505, p__7507, q__7509)
                                      }else {
                                        return f__7487.call(null, a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493, j__7495, k__7497, l__7499, m__7501, n__7503, o__7505, p__7507, q__7509)
                                      }
                                    }else {
                                      var r__7511 = cljs.core._first.call(null, args__7510);
                                      var args__7512 = cljs.core._rest.call(null, args__7510);
                                      if(argc === 18) {
                                        if(f__7487.cljs$lang$arity$18) {
                                          return f__7487.cljs$lang$arity$18(a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493, j__7495, k__7497, l__7499, m__7501, n__7503, o__7505, p__7507, q__7509, r__7511)
                                        }else {
                                          return f__7487.call(null, a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493, j__7495, k__7497, l__7499, m__7501, n__7503, o__7505, p__7507, q__7509, r__7511)
                                        }
                                      }else {
                                        var s__7513 = cljs.core._first.call(null, args__7512);
                                        var args__7514 = cljs.core._rest.call(null, args__7512);
                                        if(argc === 19) {
                                          if(f__7487.cljs$lang$arity$19) {
                                            return f__7487.cljs$lang$arity$19(a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493, j__7495, k__7497, l__7499, m__7501, n__7503, o__7505, p__7507, q__7509, r__7511, s__7513)
                                          }else {
                                            return f__7487.call(null, a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493, j__7495, k__7497, l__7499, m__7501, n__7503, o__7505, p__7507, q__7509, r__7511, s__7513)
                                          }
                                        }else {
                                          var t__7515 = cljs.core._first.call(null, args__7514);
                                          var args__7516 = cljs.core._rest.call(null, args__7514);
                                          if(argc === 20) {
                                            if(f__7487.cljs$lang$arity$20) {
                                              return f__7487.cljs$lang$arity$20(a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493, j__7495, k__7497, l__7499, m__7501, n__7503, o__7505, p__7507, q__7509, r__7511, s__7513, t__7515)
                                            }else {
                                              return f__7487.call(null, a__7477, b__7479, c__7481, d__7483, e__7485, f__7487, g__7489, h__7491, i__7493, j__7495, k__7497, l__7499, m__7501, n__7503, o__7505, p__7507, q__7509, r__7511, s__7513, t__7515)
                                            }
                                          }else {
                                            throw new Error("Only up to 20 arguments supported on functions");
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
cljs.core.apply = function() {
  var apply = null;
  var apply__2 = function(f, args) {
    var fixed_arity__7531 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      var bc__7532 = cljs.core.bounded_count.call(null, args, fixed_arity__7531 + 1);
      if(bc__7532 <= fixed_arity__7531) {
        return cljs.core.apply_to.call(null, f, bc__7532, args)
      }else {
        return f.cljs$lang$applyTo(args)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, args))
    }
  };
  var apply__3 = function(f, x, args) {
    var arglist__7533 = cljs.core.list_STAR_.call(null, x, args);
    var fixed_arity__7534 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      var bc__7535 = cljs.core.bounded_count.call(null, arglist__7533, fixed_arity__7534 + 1);
      if(bc__7535 <= fixed_arity__7534) {
        return cljs.core.apply_to.call(null, f, bc__7535, arglist__7533)
      }else {
        return f.cljs$lang$applyTo(arglist__7533)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__7533))
    }
  };
  var apply__4 = function(f, x, y, args) {
    var arglist__7536 = cljs.core.list_STAR_.call(null, x, y, args);
    var fixed_arity__7537 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      var bc__7538 = cljs.core.bounded_count.call(null, arglist__7536, fixed_arity__7537 + 1);
      if(bc__7538 <= fixed_arity__7537) {
        return cljs.core.apply_to.call(null, f, bc__7538, arglist__7536)
      }else {
        return f.cljs$lang$applyTo(arglist__7536)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__7536))
    }
  };
  var apply__5 = function(f, x, y, z, args) {
    var arglist__7539 = cljs.core.list_STAR_.call(null, x, y, z, args);
    var fixed_arity__7540 = f.cljs$lang$maxFixedArity;
    if(cljs.core.truth_(f.cljs$lang$applyTo)) {
      var bc__7541 = cljs.core.bounded_count.call(null, arglist__7539, fixed_arity__7540 + 1);
      if(bc__7541 <= fixed_arity__7540) {
        return cljs.core.apply_to.call(null, f, bc__7541, arglist__7539)
      }else {
        return f.cljs$lang$applyTo(arglist__7539)
      }
    }else {
      return f.apply(f, cljs.core.to_array.call(null, arglist__7539))
    }
  };
  var apply__6 = function() {
    var G__7545__delegate = function(f, a, b, c, d, args) {
      var arglist__7542 = cljs.core.cons.call(null, a, cljs.core.cons.call(null, b, cljs.core.cons.call(null, c, cljs.core.cons.call(null, d, cljs.core.spread.call(null, args)))));
      var fixed_arity__7543 = f.cljs$lang$maxFixedArity;
      if(cljs.core.truth_(f.cljs$lang$applyTo)) {
        var bc__7544 = cljs.core.bounded_count.call(null, arglist__7542, fixed_arity__7543 + 1);
        if(bc__7544 <= fixed_arity__7543) {
          return cljs.core.apply_to.call(null, f, bc__7544, arglist__7542)
        }else {
          return f.cljs$lang$applyTo(arglist__7542)
        }
      }else {
        return f.apply(f, cljs.core.to_array.call(null, arglist__7542))
      }
    };
    var G__7545 = function(f, a, b, c, d, var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0)
      }
      return G__7545__delegate.call(this, f, a, b, c, d, args)
    };
    G__7545.cljs$lang$maxFixedArity = 5;
    G__7545.cljs$lang$applyTo = function(arglist__7546) {
      var f = cljs.core.first(arglist__7546);
      var a = cljs.core.first(cljs.core.next(arglist__7546));
      var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7546)));
      var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7546))));
      var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7546)))));
      var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7546)))));
      return G__7545__delegate(f, a, b, c, d, args)
    };
    G__7545.cljs$lang$arity$variadic = G__7545__delegate;
    return G__7545
  }();
  apply = function(f, a, b, c, d, var_args) {
    var args = var_args;
    switch(arguments.length) {
      case 2:
        return apply__2.call(this, f, a);
      case 3:
        return apply__3.call(this, f, a, b);
      case 4:
        return apply__4.call(this, f, a, b, c);
      case 5:
        return apply__5.call(this, f, a, b, c, d);
      default:
        return apply__6.cljs$lang$arity$variadic(f, a, b, c, d, cljs.core.array_seq(arguments, 5))
    }
    throw"Invalid arity: " + arguments.length;
  };
  apply.cljs$lang$maxFixedArity = 5;
  apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
  apply.cljs$lang$arity$2 = apply__2;
  apply.cljs$lang$arity$3 = apply__3;
  apply.cljs$lang$arity$4 = apply__4;
  apply.cljs$lang$arity$5 = apply__5;
  apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
  return apply
}();
cljs.core.vary_meta = function() {
  var vary_meta__delegate = function(obj, f, args) {
    return cljs.core.with_meta.call(null, obj, cljs.core.apply.call(null, f, cljs.core.meta.call(null, obj), args))
  };
  var vary_meta = function(obj, f, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
    }
    return vary_meta__delegate.call(this, obj, f, args)
  };
  vary_meta.cljs$lang$maxFixedArity = 2;
  vary_meta.cljs$lang$applyTo = function(arglist__7547) {
    var obj = cljs.core.first(arglist__7547);
    var f = cljs.core.first(cljs.core.next(arglist__7547));
    var args = cljs.core.rest(cljs.core.next(arglist__7547));
    return vary_meta__delegate(obj, f, args)
  };
  vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
  return vary_meta
}();
cljs.core.not_EQ_ = function() {
  var not_EQ_ = null;
  var not_EQ___1 = function(x) {
    return false
  };
  var not_EQ___2 = function(x, y) {
    return!cljs.core._EQ_.call(null, x, y)
  };
  var not_EQ___3 = function() {
    var G__7548__delegate = function(x, y, more) {
      return cljs.core.not.call(null, cljs.core.apply.call(null, cljs.core._EQ_, x, y, more))
    };
    var G__7548 = function(x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__7548__delegate.call(this, x, y, more)
    };
    G__7548.cljs$lang$maxFixedArity = 2;
    G__7548.cljs$lang$applyTo = function(arglist__7549) {
      var x = cljs.core.first(arglist__7549);
      var y = cljs.core.first(cljs.core.next(arglist__7549));
      var more = cljs.core.rest(cljs.core.next(arglist__7549));
      return G__7548__delegate(x, y, more)
    };
    G__7548.cljs$lang$arity$variadic = G__7548__delegate;
    return G__7548
  }();
  not_EQ_ = function(x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 1:
        return not_EQ___1.call(this, x);
      case 2:
        return not_EQ___2.call(this, x, y);
      default:
        return not_EQ___3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  not_EQ_.cljs$lang$maxFixedArity = 2;
  not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
  not_EQ_.cljs$lang$arity$1 = not_EQ___1;
  not_EQ_.cljs$lang$arity$2 = not_EQ___2;
  not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
  return not_EQ_
}();
cljs.core.not_empty = function not_empty(coll) {
  if(cljs.core.seq.call(null, coll)) {
    return coll
  }else {
    return null
  }
};
cljs.core.every_QMARK_ = function every_QMARK_(pred, coll) {
  while(true) {
    if(cljs.core.seq.call(null, coll) == null) {
      return true
    }else {
      if(cljs.core.truth_(pred.call(null, cljs.core.first.call(null, coll)))) {
        var G__7550 = pred;
        var G__7551 = cljs.core.next.call(null, coll);
        pred = G__7550;
        coll = G__7551;
        continue
      }else {
        if("\ufdd0'else") {
          return false
        }else {
          return null
        }
      }
    }
    break
  }
};
cljs.core.not_every_QMARK_ = function not_every_QMARK_(pred, coll) {
  return!cljs.core.every_QMARK_.call(null, pred, coll)
};
cljs.core.some = function some(pred, coll) {
  while(true) {
    if(cljs.core.seq.call(null, coll)) {
      var or__3824__auto____7553 = pred.call(null, cljs.core.first.call(null, coll));
      if(cljs.core.truth_(or__3824__auto____7553)) {
        return or__3824__auto____7553
      }else {
        var G__7554 = pred;
        var G__7555 = cljs.core.next.call(null, coll);
        pred = G__7554;
        coll = G__7555;
        continue
      }
    }else {
      return null
    }
    break
  }
};
cljs.core.not_any_QMARK_ = function not_any_QMARK_(pred, coll) {
  return cljs.core.not.call(null, cljs.core.some.call(null, pred, coll))
};
cljs.core.even_QMARK_ = function even_QMARK_(n) {
  if(cljs.core.integer_QMARK_.call(null, n)) {
    return(n & 1) === 0
  }else {
    throw new Error([cljs.core.str("Argument must be an integer: "), cljs.core.str(n)].join(""));
  }
};
cljs.core.odd_QMARK_ = function odd_QMARK_(n) {
  return!cljs.core.even_QMARK_.call(null, n)
};
cljs.core.identity = function identity(x) {
  return x
};
cljs.core.complement = function complement(f) {
  return function() {
    var G__7556 = null;
    var G__7556__0 = function() {
      return cljs.core.not.call(null, f.call(null))
    };
    var G__7556__1 = function(x) {
      return cljs.core.not.call(null, f.call(null, x))
    };
    var G__7556__2 = function(x, y) {
      return cljs.core.not.call(null, f.call(null, x, y))
    };
    var G__7556__3 = function() {
      var G__7557__delegate = function(x, y, zs) {
        return cljs.core.not.call(null, cljs.core.apply.call(null, f, x, y, zs))
      };
      var G__7557 = function(x, y, var_args) {
        var zs = null;
        if(goog.isDef(var_args)) {
          zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
        }
        return G__7557__delegate.call(this, x, y, zs)
      };
      G__7557.cljs$lang$maxFixedArity = 2;
      G__7557.cljs$lang$applyTo = function(arglist__7558) {
        var x = cljs.core.first(arglist__7558);
        var y = cljs.core.first(cljs.core.next(arglist__7558));
        var zs = cljs.core.rest(cljs.core.next(arglist__7558));
        return G__7557__delegate(x, y, zs)
      };
      G__7557.cljs$lang$arity$variadic = G__7557__delegate;
      return G__7557
    }();
    G__7556 = function(x, y, var_args) {
      var zs = var_args;
      switch(arguments.length) {
        case 0:
          return G__7556__0.call(this);
        case 1:
          return G__7556__1.call(this, x);
        case 2:
          return G__7556__2.call(this, x, y);
        default:
          return G__7556__3.cljs$lang$arity$variadic(x, y, cljs.core.array_seq(arguments, 2))
      }
      throw"Invalid arity: " + arguments.length;
    };
    G__7556.cljs$lang$maxFixedArity = 2;
    G__7556.cljs$lang$applyTo = G__7556__3.cljs$lang$applyTo;
    return G__7556
  }()
};
cljs.core.constantly = function constantly(x) {
  return function() {
    var G__7559__delegate = function(args) {
      return x
    };
    var G__7559 = function(var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
      }
      return G__7559__delegate.call(this, args)
    };
    G__7559.cljs$lang$maxFixedArity = 0;
    G__7559.cljs$lang$applyTo = function(arglist__7560) {
      var args = cljs.core.seq(arglist__7560);
      return G__7559__delegate(args)
    };
    G__7559.cljs$lang$arity$variadic = G__7559__delegate;
    return G__7559
  }()
};
cljs.core.comp = function() {
  var comp = null;
  var comp__0 = function() {
    return cljs.core.identity
  };
  var comp__1 = function(f) {
    return f
  };
  var comp__2 = function(f, g) {
    return function() {
      var G__7567 = null;
      var G__7567__0 = function() {
        return f.call(null, g.call(null))
      };
      var G__7567__1 = function(x) {
        return f.call(null, g.call(null, x))
      };
      var G__7567__2 = function(x, y) {
        return f.call(null, g.call(null, x, y))
      };
      var G__7567__3 = function(x, y, z) {
        return f.call(null, g.call(null, x, y, z))
      };
      var G__7567__4 = function() {
        var G__7568__delegate = function(x, y, z, args) {
          return f.call(null, cljs.core.apply.call(null, g, x, y, z, args))
        };
        var G__7568 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__7568__delegate.call(this, x, y, z, args)
        };
        G__7568.cljs$lang$maxFixedArity = 3;
        G__7568.cljs$lang$applyTo = function(arglist__7569) {
          var x = cljs.core.first(arglist__7569);
          var y = cljs.core.first(cljs.core.next(arglist__7569));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7569)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7569)));
          return G__7568__delegate(x, y, z, args)
        };
        G__7568.cljs$lang$arity$variadic = G__7568__delegate;
        return G__7568
      }();
      G__7567 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__7567__0.call(this);
          case 1:
            return G__7567__1.call(this, x);
          case 2:
            return G__7567__2.call(this, x, y);
          case 3:
            return G__7567__3.call(this, x, y, z);
          default:
            return G__7567__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__7567.cljs$lang$maxFixedArity = 3;
      G__7567.cljs$lang$applyTo = G__7567__4.cljs$lang$applyTo;
      return G__7567
    }()
  };
  var comp__3 = function(f, g, h) {
    return function() {
      var G__7570 = null;
      var G__7570__0 = function() {
        return f.call(null, g.call(null, h.call(null)))
      };
      var G__7570__1 = function(x) {
        return f.call(null, g.call(null, h.call(null, x)))
      };
      var G__7570__2 = function(x, y) {
        return f.call(null, g.call(null, h.call(null, x, y)))
      };
      var G__7570__3 = function(x, y, z) {
        return f.call(null, g.call(null, h.call(null, x, y, z)))
      };
      var G__7570__4 = function() {
        var G__7571__delegate = function(x, y, z, args) {
          return f.call(null, g.call(null, cljs.core.apply.call(null, h, x, y, z, args)))
        };
        var G__7571 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__7571__delegate.call(this, x, y, z, args)
        };
        G__7571.cljs$lang$maxFixedArity = 3;
        G__7571.cljs$lang$applyTo = function(arglist__7572) {
          var x = cljs.core.first(arglist__7572);
          var y = cljs.core.first(cljs.core.next(arglist__7572));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7572)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7572)));
          return G__7571__delegate(x, y, z, args)
        };
        G__7571.cljs$lang$arity$variadic = G__7571__delegate;
        return G__7571
      }();
      G__7570 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__7570__0.call(this);
          case 1:
            return G__7570__1.call(this, x);
          case 2:
            return G__7570__2.call(this, x, y);
          case 3:
            return G__7570__3.call(this, x, y, z);
          default:
            return G__7570__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__7570.cljs$lang$maxFixedArity = 3;
      G__7570.cljs$lang$applyTo = G__7570__4.cljs$lang$applyTo;
      return G__7570
    }()
  };
  var comp__4 = function() {
    var G__7573__delegate = function(f1, f2, f3, fs) {
      var fs__7564 = cljs.core.reverse.call(null, cljs.core.list_STAR_.call(null, f1, f2, f3, fs));
      return function() {
        var G__7574__delegate = function(args) {
          var ret__7565 = cljs.core.apply.call(null, cljs.core.first.call(null, fs__7564), args);
          var fs__7566 = cljs.core.next.call(null, fs__7564);
          while(true) {
            if(fs__7566) {
              var G__7575 = cljs.core.first.call(null, fs__7566).call(null, ret__7565);
              var G__7576 = cljs.core.next.call(null, fs__7566);
              ret__7565 = G__7575;
              fs__7566 = G__7576;
              continue
            }else {
              return ret__7565
            }
            break
          }
        };
        var G__7574 = function(var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
          }
          return G__7574__delegate.call(this, args)
        };
        G__7574.cljs$lang$maxFixedArity = 0;
        G__7574.cljs$lang$applyTo = function(arglist__7577) {
          var args = cljs.core.seq(arglist__7577);
          return G__7574__delegate(args)
        };
        G__7574.cljs$lang$arity$variadic = G__7574__delegate;
        return G__7574
      }()
    };
    var G__7573 = function(f1, f2, f3, var_args) {
      var fs = null;
      if(goog.isDef(var_args)) {
        fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__7573__delegate.call(this, f1, f2, f3, fs)
    };
    G__7573.cljs$lang$maxFixedArity = 3;
    G__7573.cljs$lang$applyTo = function(arglist__7578) {
      var f1 = cljs.core.first(arglist__7578);
      var f2 = cljs.core.first(cljs.core.next(arglist__7578));
      var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7578)));
      var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7578)));
      return G__7573__delegate(f1, f2, f3, fs)
    };
    G__7573.cljs$lang$arity$variadic = G__7573__delegate;
    return G__7573
  }();
  comp = function(f1, f2, f3, var_args) {
    var fs = var_args;
    switch(arguments.length) {
      case 0:
        return comp__0.call(this);
      case 1:
        return comp__1.call(this, f1);
      case 2:
        return comp__2.call(this, f1, f2);
      case 3:
        return comp__3.call(this, f1, f2, f3);
      default:
        return comp__4.cljs$lang$arity$variadic(f1, f2, f3, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  comp.cljs$lang$maxFixedArity = 3;
  comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
  comp.cljs$lang$arity$0 = comp__0;
  comp.cljs$lang$arity$1 = comp__1;
  comp.cljs$lang$arity$2 = comp__2;
  comp.cljs$lang$arity$3 = comp__3;
  comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
  return comp
}();
cljs.core.partial = function() {
  var partial = null;
  var partial__2 = function(f, arg1) {
    return function() {
      var G__7579__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, args)
      };
      var G__7579 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__7579__delegate.call(this, args)
      };
      G__7579.cljs$lang$maxFixedArity = 0;
      G__7579.cljs$lang$applyTo = function(arglist__7580) {
        var args = cljs.core.seq(arglist__7580);
        return G__7579__delegate(args)
      };
      G__7579.cljs$lang$arity$variadic = G__7579__delegate;
      return G__7579
    }()
  };
  var partial__3 = function(f, arg1, arg2) {
    return function() {
      var G__7581__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, arg2, args)
      };
      var G__7581 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__7581__delegate.call(this, args)
      };
      G__7581.cljs$lang$maxFixedArity = 0;
      G__7581.cljs$lang$applyTo = function(arglist__7582) {
        var args = cljs.core.seq(arglist__7582);
        return G__7581__delegate(args)
      };
      G__7581.cljs$lang$arity$variadic = G__7581__delegate;
      return G__7581
    }()
  };
  var partial__4 = function(f, arg1, arg2, arg3) {
    return function() {
      var G__7583__delegate = function(args) {
        return cljs.core.apply.call(null, f, arg1, arg2, arg3, args)
      };
      var G__7583 = function(var_args) {
        var args = null;
        if(goog.isDef(var_args)) {
          args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
        }
        return G__7583__delegate.call(this, args)
      };
      G__7583.cljs$lang$maxFixedArity = 0;
      G__7583.cljs$lang$applyTo = function(arglist__7584) {
        var args = cljs.core.seq(arglist__7584);
        return G__7583__delegate(args)
      };
      G__7583.cljs$lang$arity$variadic = G__7583__delegate;
      return G__7583
    }()
  };
  var partial__5 = function() {
    var G__7585__delegate = function(f, arg1, arg2, arg3, more) {
      return function() {
        var G__7586__delegate = function(args) {
          return cljs.core.apply.call(null, f, arg1, arg2, arg3, cljs.core.concat.call(null, more, args))
        };
        var G__7586 = function(var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
          }
          return G__7586__delegate.call(this, args)
        };
        G__7586.cljs$lang$maxFixedArity = 0;
        G__7586.cljs$lang$applyTo = function(arglist__7587) {
          var args = cljs.core.seq(arglist__7587);
          return G__7586__delegate(args)
        };
        G__7586.cljs$lang$arity$variadic = G__7586__delegate;
        return G__7586
      }()
    };
    var G__7585 = function(f, arg1, arg2, arg3, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__7585__delegate.call(this, f, arg1, arg2, arg3, more)
    };
    G__7585.cljs$lang$maxFixedArity = 4;
    G__7585.cljs$lang$applyTo = function(arglist__7588) {
      var f = cljs.core.first(arglist__7588);
      var arg1 = cljs.core.first(cljs.core.next(arglist__7588));
      var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7588)));
      var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7588))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__7588))));
      return G__7585__delegate(f, arg1, arg2, arg3, more)
    };
    G__7585.cljs$lang$arity$variadic = G__7585__delegate;
    return G__7585
  }();
  partial = function(f, arg1, arg2, arg3, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return partial__2.call(this, f, arg1);
      case 3:
        return partial__3.call(this, f, arg1, arg2);
      case 4:
        return partial__4.call(this, f, arg1, arg2, arg3);
      default:
        return partial__5.cljs$lang$arity$variadic(f, arg1, arg2, arg3, cljs.core.array_seq(arguments, 4))
    }
    throw"Invalid arity: " + arguments.length;
  };
  partial.cljs$lang$maxFixedArity = 4;
  partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
  partial.cljs$lang$arity$2 = partial__2;
  partial.cljs$lang$arity$3 = partial__3;
  partial.cljs$lang$arity$4 = partial__4;
  partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
  return partial
}();
cljs.core.fnil = function() {
  var fnil = null;
  var fnil__2 = function(f, x) {
    return function() {
      var G__7589 = null;
      var G__7589__1 = function(a) {
        return f.call(null, a == null ? x : a)
      };
      var G__7589__2 = function(a, b) {
        return f.call(null, a == null ? x : a, b)
      };
      var G__7589__3 = function(a, b, c) {
        return f.call(null, a == null ? x : a, b, c)
      };
      var G__7589__4 = function() {
        var G__7590__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, a == null ? x : a, b, c, ds)
        };
        var G__7590 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__7590__delegate.call(this, a, b, c, ds)
        };
        G__7590.cljs$lang$maxFixedArity = 3;
        G__7590.cljs$lang$applyTo = function(arglist__7591) {
          var a = cljs.core.first(arglist__7591);
          var b = cljs.core.first(cljs.core.next(arglist__7591));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7591)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7591)));
          return G__7590__delegate(a, b, c, ds)
        };
        G__7590.cljs$lang$arity$variadic = G__7590__delegate;
        return G__7590
      }();
      G__7589 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 1:
            return G__7589__1.call(this, a);
          case 2:
            return G__7589__2.call(this, a, b);
          case 3:
            return G__7589__3.call(this, a, b, c);
          default:
            return G__7589__4.cljs$lang$arity$variadic(a, b, c, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__7589.cljs$lang$maxFixedArity = 3;
      G__7589.cljs$lang$applyTo = G__7589__4.cljs$lang$applyTo;
      return G__7589
    }()
  };
  var fnil__3 = function(f, x, y) {
    return function() {
      var G__7592 = null;
      var G__7592__2 = function(a, b) {
        return f.call(null, a == null ? x : a, b == null ? y : b)
      };
      var G__7592__3 = function(a, b, c) {
        return f.call(null, a == null ? x : a, b == null ? y : b, c)
      };
      var G__7592__4 = function() {
        var G__7593__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, a == null ? x : a, b == null ? y : b, c, ds)
        };
        var G__7593 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__7593__delegate.call(this, a, b, c, ds)
        };
        G__7593.cljs$lang$maxFixedArity = 3;
        G__7593.cljs$lang$applyTo = function(arglist__7594) {
          var a = cljs.core.first(arglist__7594);
          var b = cljs.core.first(cljs.core.next(arglist__7594));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7594)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7594)));
          return G__7593__delegate(a, b, c, ds)
        };
        G__7593.cljs$lang$arity$variadic = G__7593__delegate;
        return G__7593
      }();
      G__7592 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 2:
            return G__7592__2.call(this, a, b);
          case 3:
            return G__7592__3.call(this, a, b, c);
          default:
            return G__7592__4.cljs$lang$arity$variadic(a, b, c, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__7592.cljs$lang$maxFixedArity = 3;
      G__7592.cljs$lang$applyTo = G__7592__4.cljs$lang$applyTo;
      return G__7592
    }()
  };
  var fnil__4 = function(f, x, y, z) {
    return function() {
      var G__7595 = null;
      var G__7595__2 = function(a, b) {
        return f.call(null, a == null ? x : a, b == null ? y : b)
      };
      var G__7595__3 = function(a, b, c) {
        return f.call(null, a == null ? x : a, b == null ? y : b, c == null ? z : c)
      };
      var G__7595__4 = function() {
        var G__7596__delegate = function(a, b, c, ds) {
          return cljs.core.apply.call(null, f, a == null ? x : a, b == null ? y : b, c == null ? z : c, ds)
        };
        var G__7596 = function(a, b, c, var_args) {
          var ds = null;
          if(goog.isDef(var_args)) {
            ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__7596__delegate.call(this, a, b, c, ds)
        };
        G__7596.cljs$lang$maxFixedArity = 3;
        G__7596.cljs$lang$applyTo = function(arglist__7597) {
          var a = cljs.core.first(arglist__7597);
          var b = cljs.core.first(cljs.core.next(arglist__7597));
          var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7597)));
          var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7597)));
          return G__7596__delegate(a, b, c, ds)
        };
        G__7596.cljs$lang$arity$variadic = G__7596__delegate;
        return G__7596
      }();
      G__7595 = function(a, b, c, var_args) {
        var ds = var_args;
        switch(arguments.length) {
          case 2:
            return G__7595__2.call(this, a, b);
          case 3:
            return G__7595__3.call(this, a, b, c);
          default:
            return G__7595__4.cljs$lang$arity$variadic(a, b, c, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__7595.cljs$lang$maxFixedArity = 3;
      G__7595.cljs$lang$applyTo = G__7595__4.cljs$lang$applyTo;
      return G__7595
    }()
  };
  fnil = function(f, x, y, z) {
    switch(arguments.length) {
      case 2:
        return fnil__2.call(this, f, x);
      case 3:
        return fnil__3.call(this, f, x, y);
      case 4:
        return fnil__4.call(this, f, x, y, z)
    }
    throw"Invalid arity: " + arguments.length;
  };
  fnil.cljs$lang$arity$2 = fnil__2;
  fnil.cljs$lang$arity$3 = fnil__3;
  fnil.cljs$lang$arity$4 = fnil__4;
  return fnil
}();
cljs.core.map_indexed = function map_indexed(f, coll) {
  var mapi__7613 = function mapi(idx, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3974__auto____7621 = cljs.core.seq.call(null, coll);
      if(temp__3974__auto____7621) {
        var s__7622 = temp__3974__auto____7621;
        if(cljs.core.chunked_seq_QMARK_.call(null, s__7622)) {
          var c__7623 = cljs.core.chunk_first.call(null, s__7622);
          var size__7624 = cljs.core.count.call(null, c__7623);
          var b__7625 = cljs.core.chunk_buffer.call(null, size__7624);
          var n__2553__auto____7626 = size__7624;
          var i__7627 = 0;
          while(true) {
            if(i__7627 < n__2553__auto____7626) {
              cljs.core.chunk_append.call(null, b__7625, f.call(null, idx + i__7627, cljs.core._nth.call(null, c__7623, i__7627)));
              var G__7628 = i__7627 + 1;
              i__7627 = G__7628;
              continue
            }else {
            }
            break
          }
          return cljs.core.chunk_cons.call(null, cljs.core.chunk.call(null, b__7625), mapi.call(null, idx + size__7624, cljs.core.chunk_rest.call(null, s__7622)))
        }else {
          return cljs.core.cons.call(null, f.call(null, idx, cljs.core.first.call(null, s__7622)), mapi.call(null, idx + 1, cljs.core.rest.call(null, s__7622)))
        }
      }else {
        return null
      }
    }, null)
  };
  return mapi__7613.call(null, 0, coll)
};
cljs.core.keep = function keep(f, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3974__auto____7638 = cljs.core.seq.call(null, coll);
    if(temp__3974__auto____7638) {
      var s__7639 = temp__3974__auto____7638;
      if(cljs.core.chunked_seq_QMARK_.call(null, s__7639)) {
        var c__7640 = cljs.core.chunk_first.call(null, s__7639);
        var size__7641 = cljs.core.count.call(null, c__7640);
        var b__7642 = cljs.core.chunk_buffer.call(null, size__7641);
        var n__2553__auto____7643 = size__7641;
        var i__7644 = 0;
        while(true) {
          if(i__7644 < n__2553__auto____7643) {
            var x__7645 = f.call(null, cljs.core._nth.call(null, c__7640, i__7644));
            if(x__7645 == null) {
            }else {
              cljs.core.chunk_append.call(null, b__7642, x__7645)
            }
            var G__7647 = i__7644 + 1;
            i__7644 = G__7647;
            continue
          }else {
          }
          break
        }
        return cljs.core.chunk_cons.call(null, cljs.core.chunk.call(null, b__7642), keep.call(null, f, cljs.core.chunk_rest.call(null, s__7639)))
      }else {
        var x__7646 = f.call(null, cljs.core.first.call(null, s__7639));
        if(x__7646 == null) {
          return keep.call(null, f, cljs.core.rest.call(null, s__7639))
        }else {
          return cljs.core.cons.call(null, x__7646, keep.call(null, f, cljs.core.rest.call(null, s__7639)))
        }
      }
    }else {
      return null
    }
  }, null)
};
cljs.core.keep_indexed = function keep_indexed(f, coll) {
  var keepi__7673 = function keepi(idx, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3974__auto____7683 = cljs.core.seq.call(null, coll);
      if(temp__3974__auto____7683) {
        var s__7684 = temp__3974__auto____7683;
        if(cljs.core.chunked_seq_QMARK_.call(null, s__7684)) {
          var c__7685 = cljs.core.chunk_first.call(null, s__7684);
          var size__7686 = cljs.core.count.call(null, c__7685);
          var b__7687 = cljs.core.chunk_buffer.call(null, size__7686);
          var n__2553__auto____7688 = size__7686;
          var i__7689 = 0;
          while(true) {
            if(i__7689 < n__2553__auto____7688) {
              var x__7690 = f.call(null, idx + i__7689, cljs.core._nth.call(null, c__7685, i__7689));
              if(x__7690 == null) {
              }else {
                cljs.core.chunk_append.call(null, b__7687, x__7690)
              }
              var G__7692 = i__7689 + 1;
              i__7689 = G__7692;
              continue
            }else {
            }
            break
          }
          return cljs.core.chunk_cons.call(null, cljs.core.chunk.call(null, b__7687), keepi.call(null, idx + size__7686, cljs.core.chunk_rest.call(null, s__7684)))
        }else {
          var x__7691 = f.call(null, idx, cljs.core.first.call(null, s__7684));
          if(x__7691 == null) {
            return keepi.call(null, idx + 1, cljs.core.rest.call(null, s__7684))
          }else {
            return cljs.core.cons.call(null, x__7691, keepi.call(null, idx + 1, cljs.core.rest.call(null, s__7684)))
          }
        }
      }else {
        return null
      }
    }, null)
  };
  return keepi__7673.call(null, 0, coll)
};
cljs.core.every_pred = function() {
  var every_pred = null;
  var every_pred__1 = function(p) {
    return function() {
      var ep1 = null;
      var ep1__0 = function() {
        return true
      };
      var ep1__1 = function(x) {
        return cljs.core.boolean$.call(null, p.call(null, x))
      };
      var ep1__2 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3822__auto____7778 = p.call(null, x);
          if(cljs.core.truth_(and__3822__auto____7778)) {
            return p.call(null, y)
          }else {
            return and__3822__auto____7778
          }
        }())
      };
      var ep1__3 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3822__auto____7779 = p.call(null, x);
          if(cljs.core.truth_(and__3822__auto____7779)) {
            var and__3822__auto____7780 = p.call(null, y);
            if(cljs.core.truth_(and__3822__auto____7780)) {
              return p.call(null, z)
            }else {
              return and__3822__auto____7780
            }
          }else {
            return and__3822__auto____7779
          }
        }())
      };
      var ep1__4 = function() {
        var G__7849__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3822__auto____7781 = ep1.call(null, x, y, z);
            if(cljs.core.truth_(and__3822__auto____7781)) {
              return cljs.core.every_QMARK_.call(null, p, args)
            }else {
              return and__3822__auto____7781
            }
          }())
        };
        var G__7849 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__7849__delegate.call(this, x, y, z, args)
        };
        G__7849.cljs$lang$maxFixedArity = 3;
        G__7849.cljs$lang$applyTo = function(arglist__7850) {
          var x = cljs.core.first(arglist__7850);
          var y = cljs.core.first(cljs.core.next(arglist__7850));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7850)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7850)));
          return G__7849__delegate(x, y, z, args)
        };
        G__7849.cljs$lang$arity$variadic = G__7849__delegate;
        return G__7849
      }();
      ep1 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep1__0.call(this);
          case 1:
            return ep1__1.call(this, x);
          case 2:
            return ep1__2.call(this, x, y);
          case 3:
            return ep1__3.call(this, x, y, z);
          default:
            return ep1__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep1.cljs$lang$maxFixedArity = 3;
      ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
      ep1.cljs$lang$arity$0 = ep1__0;
      ep1.cljs$lang$arity$1 = ep1__1;
      ep1.cljs$lang$arity$2 = ep1__2;
      ep1.cljs$lang$arity$3 = ep1__3;
      ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
      return ep1
    }()
  };
  var every_pred__2 = function(p1, p2) {
    return function() {
      var ep2 = null;
      var ep2__0 = function() {
        return true
      };
      var ep2__1 = function(x) {
        return cljs.core.boolean$.call(null, function() {
          var and__3822__auto____7793 = p1.call(null, x);
          if(cljs.core.truth_(and__3822__auto____7793)) {
            return p2.call(null, x)
          }else {
            return and__3822__auto____7793
          }
        }())
      };
      var ep2__2 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3822__auto____7794 = p1.call(null, x);
          if(cljs.core.truth_(and__3822__auto____7794)) {
            var and__3822__auto____7795 = p1.call(null, y);
            if(cljs.core.truth_(and__3822__auto____7795)) {
              var and__3822__auto____7796 = p2.call(null, x);
              if(cljs.core.truth_(and__3822__auto____7796)) {
                return p2.call(null, y)
              }else {
                return and__3822__auto____7796
              }
            }else {
              return and__3822__auto____7795
            }
          }else {
            return and__3822__auto____7794
          }
        }())
      };
      var ep2__3 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3822__auto____7797 = p1.call(null, x);
          if(cljs.core.truth_(and__3822__auto____7797)) {
            var and__3822__auto____7798 = p1.call(null, y);
            if(cljs.core.truth_(and__3822__auto____7798)) {
              var and__3822__auto____7799 = p1.call(null, z);
              if(cljs.core.truth_(and__3822__auto____7799)) {
                var and__3822__auto____7800 = p2.call(null, x);
                if(cljs.core.truth_(and__3822__auto____7800)) {
                  var and__3822__auto____7801 = p2.call(null, y);
                  if(cljs.core.truth_(and__3822__auto____7801)) {
                    return p2.call(null, z)
                  }else {
                    return and__3822__auto____7801
                  }
                }else {
                  return and__3822__auto____7800
                }
              }else {
                return and__3822__auto____7799
              }
            }else {
              return and__3822__auto____7798
            }
          }else {
            return and__3822__auto____7797
          }
        }())
      };
      var ep2__4 = function() {
        var G__7851__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3822__auto____7802 = ep2.call(null, x, y, z);
            if(cljs.core.truth_(and__3822__auto____7802)) {
              return cljs.core.every_QMARK_.call(null, function(p1__7648_SHARP_) {
                var and__3822__auto____7803 = p1.call(null, p1__7648_SHARP_);
                if(cljs.core.truth_(and__3822__auto____7803)) {
                  return p2.call(null, p1__7648_SHARP_)
                }else {
                  return and__3822__auto____7803
                }
              }, args)
            }else {
              return and__3822__auto____7802
            }
          }())
        };
        var G__7851 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__7851__delegate.call(this, x, y, z, args)
        };
        G__7851.cljs$lang$maxFixedArity = 3;
        G__7851.cljs$lang$applyTo = function(arglist__7852) {
          var x = cljs.core.first(arglist__7852);
          var y = cljs.core.first(cljs.core.next(arglist__7852));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7852)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7852)));
          return G__7851__delegate(x, y, z, args)
        };
        G__7851.cljs$lang$arity$variadic = G__7851__delegate;
        return G__7851
      }();
      ep2 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep2__0.call(this);
          case 1:
            return ep2__1.call(this, x);
          case 2:
            return ep2__2.call(this, x, y);
          case 3:
            return ep2__3.call(this, x, y, z);
          default:
            return ep2__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep2.cljs$lang$maxFixedArity = 3;
      ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
      ep2.cljs$lang$arity$0 = ep2__0;
      ep2.cljs$lang$arity$1 = ep2__1;
      ep2.cljs$lang$arity$2 = ep2__2;
      ep2.cljs$lang$arity$3 = ep2__3;
      ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
      return ep2
    }()
  };
  var every_pred__3 = function(p1, p2, p3) {
    return function() {
      var ep3 = null;
      var ep3__0 = function() {
        return true
      };
      var ep3__1 = function(x) {
        return cljs.core.boolean$.call(null, function() {
          var and__3822__auto____7822 = p1.call(null, x);
          if(cljs.core.truth_(and__3822__auto____7822)) {
            var and__3822__auto____7823 = p2.call(null, x);
            if(cljs.core.truth_(and__3822__auto____7823)) {
              return p3.call(null, x)
            }else {
              return and__3822__auto____7823
            }
          }else {
            return and__3822__auto____7822
          }
        }())
      };
      var ep3__2 = function(x, y) {
        return cljs.core.boolean$.call(null, function() {
          var and__3822__auto____7824 = p1.call(null, x);
          if(cljs.core.truth_(and__3822__auto____7824)) {
            var and__3822__auto____7825 = p2.call(null, x);
            if(cljs.core.truth_(and__3822__auto____7825)) {
              var and__3822__auto____7826 = p3.call(null, x);
              if(cljs.core.truth_(and__3822__auto____7826)) {
                var and__3822__auto____7827 = p1.call(null, y);
                if(cljs.core.truth_(and__3822__auto____7827)) {
                  var and__3822__auto____7828 = p2.call(null, y);
                  if(cljs.core.truth_(and__3822__auto____7828)) {
                    return p3.call(null, y)
                  }else {
                    return and__3822__auto____7828
                  }
                }else {
                  return and__3822__auto____7827
                }
              }else {
                return and__3822__auto____7826
              }
            }else {
              return and__3822__auto____7825
            }
          }else {
            return and__3822__auto____7824
          }
        }())
      };
      var ep3__3 = function(x, y, z) {
        return cljs.core.boolean$.call(null, function() {
          var and__3822__auto____7829 = p1.call(null, x);
          if(cljs.core.truth_(and__3822__auto____7829)) {
            var and__3822__auto____7830 = p2.call(null, x);
            if(cljs.core.truth_(and__3822__auto____7830)) {
              var and__3822__auto____7831 = p3.call(null, x);
              if(cljs.core.truth_(and__3822__auto____7831)) {
                var and__3822__auto____7832 = p1.call(null, y);
                if(cljs.core.truth_(and__3822__auto____7832)) {
                  var and__3822__auto____7833 = p2.call(null, y);
                  if(cljs.core.truth_(and__3822__auto____7833)) {
                    var and__3822__auto____7834 = p3.call(null, y);
                    if(cljs.core.truth_(and__3822__auto____7834)) {
                      var and__3822__auto____7835 = p1.call(null, z);
                      if(cljs.core.truth_(and__3822__auto____7835)) {
                        var and__3822__auto____7836 = p2.call(null, z);
                        if(cljs.core.truth_(and__3822__auto____7836)) {
                          return p3.call(null, z)
                        }else {
                          return and__3822__auto____7836
                        }
                      }else {
                        return and__3822__auto____7835
                      }
                    }else {
                      return and__3822__auto____7834
                    }
                  }else {
                    return and__3822__auto____7833
                  }
                }else {
                  return and__3822__auto____7832
                }
              }else {
                return and__3822__auto____7831
              }
            }else {
              return and__3822__auto____7830
            }
          }else {
            return and__3822__auto____7829
          }
        }())
      };
      var ep3__4 = function() {
        var G__7853__delegate = function(x, y, z, args) {
          return cljs.core.boolean$.call(null, function() {
            var and__3822__auto____7837 = ep3.call(null, x, y, z);
            if(cljs.core.truth_(and__3822__auto____7837)) {
              return cljs.core.every_QMARK_.call(null, function(p1__7649_SHARP_) {
                var and__3822__auto____7838 = p1.call(null, p1__7649_SHARP_);
                if(cljs.core.truth_(and__3822__auto____7838)) {
                  var and__3822__auto____7839 = p2.call(null, p1__7649_SHARP_);
                  if(cljs.core.truth_(and__3822__auto____7839)) {
                    return p3.call(null, p1__7649_SHARP_)
                  }else {
                    return and__3822__auto____7839
                  }
                }else {
                  return and__3822__auto____7838
                }
              }, args)
            }else {
              return and__3822__auto____7837
            }
          }())
        };
        var G__7853 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__7853__delegate.call(this, x, y, z, args)
        };
        G__7853.cljs$lang$maxFixedArity = 3;
        G__7853.cljs$lang$applyTo = function(arglist__7854) {
          var x = cljs.core.first(arglist__7854);
          var y = cljs.core.first(cljs.core.next(arglist__7854));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7854)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7854)));
          return G__7853__delegate(x, y, z, args)
        };
        G__7853.cljs$lang$arity$variadic = G__7853__delegate;
        return G__7853
      }();
      ep3 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return ep3__0.call(this);
          case 1:
            return ep3__1.call(this, x);
          case 2:
            return ep3__2.call(this, x, y);
          case 3:
            return ep3__3.call(this, x, y, z);
          default:
            return ep3__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      ep3.cljs$lang$maxFixedArity = 3;
      ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
      ep3.cljs$lang$arity$0 = ep3__0;
      ep3.cljs$lang$arity$1 = ep3__1;
      ep3.cljs$lang$arity$2 = ep3__2;
      ep3.cljs$lang$arity$3 = ep3__3;
      ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
      return ep3
    }()
  };
  var every_pred__4 = function() {
    var G__7855__delegate = function(p1, p2, p3, ps) {
      var ps__7840 = cljs.core.list_STAR_.call(null, p1, p2, p3, ps);
      return function() {
        var epn = null;
        var epn__0 = function() {
          return true
        };
        var epn__1 = function(x) {
          return cljs.core.every_QMARK_.call(null, function(p1__7650_SHARP_) {
            return p1__7650_SHARP_.call(null, x)
          }, ps__7840)
        };
        var epn__2 = function(x, y) {
          return cljs.core.every_QMARK_.call(null, function(p1__7651_SHARP_) {
            var and__3822__auto____7845 = p1__7651_SHARP_.call(null, x);
            if(cljs.core.truth_(and__3822__auto____7845)) {
              return p1__7651_SHARP_.call(null, y)
            }else {
              return and__3822__auto____7845
            }
          }, ps__7840)
        };
        var epn__3 = function(x, y, z) {
          return cljs.core.every_QMARK_.call(null, function(p1__7652_SHARP_) {
            var and__3822__auto____7846 = p1__7652_SHARP_.call(null, x);
            if(cljs.core.truth_(and__3822__auto____7846)) {
              var and__3822__auto____7847 = p1__7652_SHARP_.call(null, y);
              if(cljs.core.truth_(and__3822__auto____7847)) {
                return p1__7652_SHARP_.call(null, z)
              }else {
                return and__3822__auto____7847
              }
            }else {
              return and__3822__auto____7846
            }
          }, ps__7840)
        };
        var epn__4 = function() {
          var G__7856__delegate = function(x, y, z, args) {
            return cljs.core.boolean$.call(null, function() {
              var and__3822__auto____7848 = epn.call(null, x, y, z);
              if(cljs.core.truth_(and__3822__auto____7848)) {
                return cljs.core.every_QMARK_.call(null, function(p1__7653_SHARP_) {
                  return cljs.core.every_QMARK_.call(null, p1__7653_SHARP_, args)
                }, ps__7840)
              }else {
                return and__3822__auto____7848
              }
            }())
          };
          var G__7856 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__7856__delegate.call(this, x, y, z, args)
          };
          G__7856.cljs$lang$maxFixedArity = 3;
          G__7856.cljs$lang$applyTo = function(arglist__7857) {
            var x = cljs.core.first(arglist__7857);
            var y = cljs.core.first(cljs.core.next(arglist__7857));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7857)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7857)));
            return G__7856__delegate(x, y, z, args)
          };
          G__7856.cljs$lang$arity$variadic = G__7856__delegate;
          return G__7856
        }();
        epn = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return epn__0.call(this);
            case 1:
              return epn__1.call(this, x);
            case 2:
              return epn__2.call(this, x, y);
            case 3:
              return epn__3.call(this, x, y, z);
            default:
              return epn__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
          }
          throw"Invalid arity: " + arguments.length;
        };
        epn.cljs$lang$maxFixedArity = 3;
        epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
        epn.cljs$lang$arity$0 = epn__0;
        epn.cljs$lang$arity$1 = epn__1;
        epn.cljs$lang$arity$2 = epn__2;
        epn.cljs$lang$arity$3 = epn__3;
        epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
        return epn
      }()
    };
    var G__7855 = function(p1, p2, p3, var_args) {
      var ps = null;
      if(goog.isDef(var_args)) {
        ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__7855__delegate.call(this, p1, p2, p3, ps)
    };
    G__7855.cljs$lang$maxFixedArity = 3;
    G__7855.cljs$lang$applyTo = function(arglist__7858) {
      var p1 = cljs.core.first(arglist__7858);
      var p2 = cljs.core.first(cljs.core.next(arglist__7858));
      var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7858)));
      var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7858)));
      return G__7855__delegate(p1, p2, p3, ps)
    };
    G__7855.cljs$lang$arity$variadic = G__7855__delegate;
    return G__7855
  }();
  every_pred = function(p1, p2, p3, var_args) {
    var ps = var_args;
    switch(arguments.length) {
      case 1:
        return every_pred__1.call(this, p1);
      case 2:
        return every_pred__2.call(this, p1, p2);
      case 3:
        return every_pred__3.call(this, p1, p2, p3);
      default:
        return every_pred__4.cljs$lang$arity$variadic(p1, p2, p3, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  every_pred.cljs$lang$maxFixedArity = 3;
  every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
  every_pred.cljs$lang$arity$1 = every_pred__1;
  every_pred.cljs$lang$arity$2 = every_pred__2;
  every_pred.cljs$lang$arity$3 = every_pred__3;
  every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
  return every_pred
}();
cljs.core.some_fn = function() {
  var some_fn = null;
  var some_fn__1 = function(p) {
    return function() {
      var sp1 = null;
      var sp1__0 = function() {
        return null
      };
      var sp1__1 = function(x) {
        return p.call(null, x)
      };
      var sp1__2 = function(x, y) {
        var or__3824__auto____7939 = p.call(null, x);
        if(cljs.core.truth_(or__3824__auto____7939)) {
          return or__3824__auto____7939
        }else {
          return p.call(null, y)
        }
      };
      var sp1__3 = function(x, y, z) {
        var or__3824__auto____7940 = p.call(null, x);
        if(cljs.core.truth_(or__3824__auto____7940)) {
          return or__3824__auto____7940
        }else {
          var or__3824__auto____7941 = p.call(null, y);
          if(cljs.core.truth_(or__3824__auto____7941)) {
            return or__3824__auto____7941
          }else {
            return p.call(null, z)
          }
        }
      };
      var sp1__4 = function() {
        var G__8010__delegate = function(x, y, z, args) {
          var or__3824__auto____7942 = sp1.call(null, x, y, z);
          if(cljs.core.truth_(or__3824__auto____7942)) {
            return or__3824__auto____7942
          }else {
            return cljs.core.some.call(null, p, args)
          }
        };
        var G__8010 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__8010__delegate.call(this, x, y, z, args)
        };
        G__8010.cljs$lang$maxFixedArity = 3;
        G__8010.cljs$lang$applyTo = function(arglist__8011) {
          var x = cljs.core.first(arglist__8011);
          var y = cljs.core.first(cljs.core.next(arglist__8011));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8011)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8011)));
          return G__8010__delegate(x, y, z, args)
        };
        G__8010.cljs$lang$arity$variadic = G__8010__delegate;
        return G__8010
      }();
      sp1 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp1__0.call(this);
          case 1:
            return sp1__1.call(this, x);
          case 2:
            return sp1__2.call(this, x, y);
          case 3:
            return sp1__3.call(this, x, y, z);
          default:
            return sp1__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp1.cljs$lang$maxFixedArity = 3;
      sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
      sp1.cljs$lang$arity$0 = sp1__0;
      sp1.cljs$lang$arity$1 = sp1__1;
      sp1.cljs$lang$arity$2 = sp1__2;
      sp1.cljs$lang$arity$3 = sp1__3;
      sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
      return sp1
    }()
  };
  var some_fn__2 = function(p1, p2) {
    return function() {
      var sp2 = null;
      var sp2__0 = function() {
        return null
      };
      var sp2__1 = function(x) {
        var or__3824__auto____7954 = p1.call(null, x);
        if(cljs.core.truth_(or__3824__auto____7954)) {
          return or__3824__auto____7954
        }else {
          return p2.call(null, x)
        }
      };
      var sp2__2 = function(x, y) {
        var or__3824__auto____7955 = p1.call(null, x);
        if(cljs.core.truth_(or__3824__auto____7955)) {
          return or__3824__auto____7955
        }else {
          var or__3824__auto____7956 = p1.call(null, y);
          if(cljs.core.truth_(or__3824__auto____7956)) {
            return or__3824__auto____7956
          }else {
            var or__3824__auto____7957 = p2.call(null, x);
            if(cljs.core.truth_(or__3824__auto____7957)) {
              return or__3824__auto____7957
            }else {
              return p2.call(null, y)
            }
          }
        }
      };
      var sp2__3 = function(x, y, z) {
        var or__3824__auto____7958 = p1.call(null, x);
        if(cljs.core.truth_(or__3824__auto____7958)) {
          return or__3824__auto____7958
        }else {
          var or__3824__auto____7959 = p1.call(null, y);
          if(cljs.core.truth_(or__3824__auto____7959)) {
            return or__3824__auto____7959
          }else {
            var or__3824__auto____7960 = p1.call(null, z);
            if(cljs.core.truth_(or__3824__auto____7960)) {
              return or__3824__auto____7960
            }else {
              var or__3824__auto____7961 = p2.call(null, x);
              if(cljs.core.truth_(or__3824__auto____7961)) {
                return or__3824__auto____7961
              }else {
                var or__3824__auto____7962 = p2.call(null, y);
                if(cljs.core.truth_(or__3824__auto____7962)) {
                  return or__3824__auto____7962
                }else {
                  return p2.call(null, z)
                }
              }
            }
          }
        }
      };
      var sp2__4 = function() {
        var G__8012__delegate = function(x, y, z, args) {
          var or__3824__auto____7963 = sp2.call(null, x, y, z);
          if(cljs.core.truth_(or__3824__auto____7963)) {
            return or__3824__auto____7963
          }else {
            return cljs.core.some.call(null, function(p1__7693_SHARP_) {
              var or__3824__auto____7964 = p1.call(null, p1__7693_SHARP_);
              if(cljs.core.truth_(or__3824__auto____7964)) {
                return or__3824__auto____7964
              }else {
                return p2.call(null, p1__7693_SHARP_)
              }
            }, args)
          }
        };
        var G__8012 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__8012__delegate.call(this, x, y, z, args)
        };
        G__8012.cljs$lang$maxFixedArity = 3;
        G__8012.cljs$lang$applyTo = function(arglist__8013) {
          var x = cljs.core.first(arglist__8013);
          var y = cljs.core.first(cljs.core.next(arglist__8013));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8013)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8013)));
          return G__8012__delegate(x, y, z, args)
        };
        G__8012.cljs$lang$arity$variadic = G__8012__delegate;
        return G__8012
      }();
      sp2 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp2__0.call(this);
          case 1:
            return sp2__1.call(this, x);
          case 2:
            return sp2__2.call(this, x, y);
          case 3:
            return sp2__3.call(this, x, y, z);
          default:
            return sp2__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp2.cljs$lang$maxFixedArity = 3;
      sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
      sp2.cljs$lang$arity$0 = sp2__0;
      sp2.cljs$lang$arity$1 = sp2__1;
      sp2.cljs$lang$arity$2 = sp2__2;
      sp2.cljs$lang$arity$3 = sp2__3;
      sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
      return sp2
    }()
  };
  var some_fn__3 = function(p1, p2, p3) {
    return function() {
      var sp3 = null;
      var sp3__0 = function() {
        return null
      };
      var sp3__1 = function(x) {
        var or__3824__auto____7983 = p1.call(null, x);
        if(cljs.core.truth_(or__3824__auto____7983)) {
          return or__3824__auto____7983
        }else {
          var or__3824__auto____7984 = p2.call(null, x);
          if(cljs.core.truth_(or__3824__auto____7984)) {
            return or__3824__auto____7984
          }else {
            return p3.call(null, x)
          }
        }
      };
      var sp3__2 = function(x, y) {
        var or__3824__auto____7985 = p1.call(null, x);
        if(cljs.core.truth_(or__3824__auto____7985)) {
          return or__3824__auto____7985
        }else {
          var or__3824__auto____7986 = p2.call(null, x);
          if(cljs.core.truth_(or__3824__auto____7986)) {
            return or__3824__auto____7986
          }else {
            var or__3824__auto____7987 = p3.call(null, x);
            if(cljs.core.truth_(or__3824__auto____7987)) {
              return or__3824__auto____7987
            }else {
              var or__3824__auto____7988 = p1.call(null, y);
              if(cljs.core.truth_(or__3824__auto____7988)) {
                return or__3824__auto____7988
              }else {
                var or__3824__auto____7989 = p2.call(null, y);
                if(cljs.core.truth_(or__3824__auto____7989)) {
                  return or__3824__auto____7989
                }else {
                  return p3.call(null, y)
                }
              }
            }
          }
        }
      };
      var sp3__3 = function(x, y, z) {
        var or__3824__auto____7990 = p1.call(null, x);
        if(cljs.core.truth_(or__3824__auto____7990)) {
          return or__3824__auto____7990
        }else {
          var or__3824__auto____7991 = p2.call(null, x);
          if(cljs.core.truth_(or__3824__auto____7991)) {
            return or__3824__auto____7991
          }else {
            var or__3824__auto____7992 = p3.call(null, x);
            if(cljs.core.truth_(or__3824__auto____7992)) {
              return or__3824__auto____7992
            }else {
              var or__3824__auto____7993 = p1.call(null, y);
              if(cljs.core.truth_(or__3824__auto____7993)) {
                return or__3824__auto____7993
              }else {
                var or__3824__auto____7994 = p2.call(null, y);
                if(cljs.core.truth_(or__3824__auto____7994)) {
                  return or__3824__auto____7994
                }else {
                  var or__3824__auto____7995 = p3.call(null, y);
                  if(cljs.core.truth_(or__3824__auto____7995)) {
                    return or__3824__auto____7995
                  }else {
                    var or__3824__auto____7996 = p1.call(null, z);
                    if(cljs.core.truth_(or__3824__auto____7996)) {
                      return or__3824__auto____7996
                    }else {
                      var or__3824__auto____7997 = p2.call(null, z);
                      if(cljs.core.truth_(or__3824__auto____7997)) {
                        return or__3824__auto____7997
                      }else {
                        return p3.call(null, z)
                      }
                    }
                  }
                }
              }
            }
          }
        }
      };
      var sp3__4 = function() {
        var G__8014__delegate = function(x, y, z, args) {
          var or__3824__auto____7998 = sp3.call(null, x, y, z);
          if(cljs.core.truth_(or__3824__auto____7998)) {
            return or__3824__auto____7998
          }else {
            return cljs.core.some.call(null, function(p1__7694_SHARP_) {
              var or__3824__auto____7999 = p1.call(null, p1__7694_SHARP_);
              if(cljs.core.truth_(or__3824__auto____7999)) {
                return or__3824__auto____7999
              }else {
                var or__3824__auto____8000 = p2.call(null, p1__7694_SHARP_);
                if(cljs.core.truth_(or__3824__auto____8000)) {
                  return or__3824__auto____8000
                }else {
                  return p3.call(null, p1__7694_SHARP_)
                }
              }
            }, args)
          }
        };
        var G__8014 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__8014__delegate.call(this, x, y, z, args)
        };
        G__8014.cljs$lang$maxFixedArity = 3;
        G__8014.cljs$lang$applyTo = function(arglist__8015) {
          var x = cljs.core.first(arglist__8015);
          var y = cljs.core.first(cljs.core.next(arglist__8015));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8015)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8015)));
          return G__8014__delegate(x, y, z, args)
        };
        G__8014.cljs$lang$arity$variadic = G__8014__delegate;
        return G__8014
      }();
      sp3 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return sp3__0.call(this);
          case 1:
            return sp3__1.call(this, x);
          case 2:
            return sp3__2.call(this, x, y);
          case 3:
            return sp3__3.call(this, x, y, z);
          default:
            return sp3__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      sp3.cljs$lang$maxFixedArity = 3;
      sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
      sp3.cljs$lang$arity$0 = sp3__0;
      sp3.cljs$lang$arity$1 = sp3__1;
      sp3.cljs$lang$arity$2 = sp3__2;
      sp3.cljs$lang$arity$3 = sp3__3;
      sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
      return sp3
    }()
  };
  var some_fn__4 = function() {
    var G__8016__delegate = function(p1, p2, p3, ps) {
      var ps__8001 = cljs.core.list_STAR_.call(null, p1, p2, p3, ps);
      return function() {
        var spn = null;
        var spn__0 = function() {
          return null
        };
        var spn__1 = function(x) {
          return cljs.core.some.call(null, function(p1__7695_SHARP_) {
            return p1__7695_SHARP_.call(null, x)
          }, ps__8001)
        };
        var spn__2 = function(x, y) {
          return cljs.core.some.call(null, function(p1__7696_SHARP_) {
            var or__3824__auto____8006 = p1__7696_SHARP_.call(null, x);
            if(cljs.core.truth_(or__3824__auto____8006)) {
              return or__3824__auto____8006
            }else {
              return p1__7696_SHARP_.call(null, y)
            }
          }, ps__8001)
        };
        var spn__3 = function(x, y, z) {
          return cljs.core.some.call(null, function(p1__7697_SHARP_) {
            var or__3824__auto____8007 = p1__7697_SHARP_.call(null, x);
            if(cljs.core.truth_(or__3824__auto____8007)) {
              return or__3824__auto____8007
            }else {
              var or__3824__auto____8008 = p1__7697_SHARP_.call(null, y);
              if(cljs.core.truth_(or__3824__auto____8008)) {
                return or__3824__auto____8008
              }else {
                return p1__7697_SHARP_.call(null, z)
              }
            }
          }, ps__8001)
        };
        var spn__4 = function() {
          var G__8017__delegate = function(x, y, z, args) {
            var or__3824__auto____8009 = spn.call(null, x, y, z);
            if(cljs.core.truth_(or__3824__auto____8009)) {
              return or__3824__auto____8009
            }else {
              return cljs.core.some.call(null, function(p1__7698_SHARP_) {
                return cljs.core.some.call(null, p1__7698_SHARP_, args)
              }, ps__8001)
            }
          };
          var G__8017 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__8017__delegate.call(this, x, y, z, args)
          };
          G__8017.cljs$lang$maxFixedArity = 3;
          G__8017.cljs$lang$applyTo = function(arglist__8018) {
            var x = cljs.core.first(arglist__8018);
            var y = cljs.core.first(cljs.core.next(arglist__8018));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8018)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8018)));
            return G__8017__delegate(x, y, z, args)
          };
          G__8017.cljs$lang$arity$variadic = G__8017__delegate;
          return G__8017
        }();
        spn = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return spn__0.call(this);
            case 1:
              return spn__1.call(this, x);
            case 2:
              return spn__2.call(this, x, y);
            case 3:
              return spn__3.call(this, x, y, z);
            default:
              return spn__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
          }
          throw"Invalid arity: " + arguments.length;
        };
        spn.cljs$lang$maxFixedArity = 3;
        spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
        spn.cljs$lang$arity$0 = spn__0;
        spn.cljs$lang$arity$1 = spn__1;
        spn.cljs$lang$arity$2 = spn__2;
        spn.cljs$lang$arity$3 = spn__3;
        spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
        return spn
      }()
    };
    var G__8016 = function(p1, p2, p3, var_args) {
      var ps = null;
      if(goog.isDef(var_args)) {
        ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__8016__delegate.call(this, p1, p2, p3, ps)
    };
    G__8016.cljs$lang$maxFixedArity = 3;
    G__8016.cljs$lang$applyTo = function(arglist__8019) {
      var p1 = cljs.core.first(arglist__8019);
      var p2 = cljs.core.first(cljs.core.next(arglist__8019));
      var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8019)));
      var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8019)));
      return G__8016__delegate(p1, p2, p3, ps)
    };
    G__8016.cljs$lang$arity$variadic = G__8016__delegate;
    return G__8016
  }();
  some_fn = function(p1, p2, p3, var_args) {
    var ps = var_args;
    switch(arguments.length) {
      case 1:
        return some_fn__1.call(this, p1);
      case 2:
        return some_fn__2.call(this, p1, p2);
      case 3:
        return some_fn__3.call(this, p1, p2, p3);
      default:
        return some_fn__4.cljs$lang$arity$variadic(p1, p2, p3, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  some_fn.cljs$lang$maxFixedArity = 3;
  some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
  some_fn.cljs$lang$arity$1 = some_fn__1;
  some_fn.cljs$lang$arity$2 = some_fn__2;
  some_fn.cljs$lang$arity$3 = some_fn__3;
  some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
  return some_fn
}();
cljs.core.map = function() {
  var map = null;
  var map__2 = function(f, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3974__auto____8038 = cljs.core.seq.call(null, coll);
      if(temp__3974__auto____8038) {
        var s__8039 = temp__3974__auto____8038;
        if(cljs.core.chunked_seq_QMARK_.call(null, s__8039)) {
          var c__8040 = cljs.core.chunk_first.call(null, s__8039);
          var size__8041 = cljs.core.count.call(null, c__8040);
          var b__8042 = cljs.core.chunk_buffer.call(null, size__8041);
          var n__2553__auto____8043 = size__8041;
          var i__8044 = 0;
          while(true) {
            if(i__8044 < n__2553__auto____8043) {
              cljs.core.chunk_append.call(null, b__8042, f.call(null, cljs.core._nth.call(null, c__8040, i__8044)));
              var G__8056 = i__8044 + 1;
              i__8044 = G__8056;
              continue
            }else {
            }
            break
          }
          return cljs.core.chunk_cons.call(null, cljs.core.chunk.call(null, b__8042), map.call(null, f, cljs.core.chunk_rest.call(null, s__8039)))
        }else {
          return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s__8039)), map.call(null, f, cljs.core.rest.call(null, s__8039)))
        }
      }else {
        return null
      }
    }, null)
  };
  var map__3 = function(f, c1, c2) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__8045 = cljs.core.seq.call(null, c1);
      var s2__8046 = cljs.core.seq.call(null, c2);
      if(function() {
        var and__3822__auto____8047 = s1__8045;
        if(and__3822__auto____8047) {
          return s2__8046
        }else {
          return and__3822__auto____8047
        }
      }()) {
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s1__8045), cljs.core.first.call(null, s2__8046)), map.call(null, f, cljs.core.rest.call(null, s1__8045), cljs.core.rest.call(null, s2__8046)))
      }else {
        return null
      }
    }, null)
  };
  var map__4 = function(f, c1, c2, c3) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__8048 = cljs.core.seq.call(null, c1);
      var s2__8049 = cljs.core.seq.call(null, c2);
      var s3__8050 = cljs.core.seq.call(null, c3);
      if(function() {
        var and__3822__auto____8051 = s1__8048;
        if(and__3822__auto____8051) {
          var and__3822__auto____8052 = s2__8049;
          if(and__3822__auto____8052) {
            return s3__8050
          }else {
            return and__3822__auto____8052
          }
        }else {
          return and__3822__auto____8051
        }
      }()) {
        return cljs.core.cons.call(null, f.call(null, cljs.core.first.call(null, s1__8048), cljs.core.first.call(null, s2__8049), cljs.core.first.call(null, s3__8050)), map.call(null, f, cljs.core.rest.call(null, s1__8048), cljs.core.rest.call(null, s2__8049), cljs.core.rest.call(null, s3__8050)))
      }else {
        return null
      }
    }, null)
  };
  var map__5 = function() {
    var G__8057__delegate = function(f, c1, c2, c3, colls) {
      var step__8055 = function step(cs) {
        return new cljs.core.LazySeq(null, false, function() {
          var ss__8054 = map.call(null, cljs.core.seq, cs);
          if(cljs.core.every_QMARK_.call(null, cljs.core.identity, ss__8054)) {
            return cljs.core.cons.call(null, map.call(null, cljs.core.first, ss__8054), step.call(null, map.call(null, cljs.core.rest, ss__8054)))
          }else {
            return null
          }
        }, null)
      };
      return map.call(null, function(p1__7859_SHARP_) {
        return cljs.core.apply.call(null, f, p1__7859_SHARP_)
      }, step__8055.call(null, cljs.core.conj.call(null, colls, c3, c2, c1)))
    };
    var G__8057 = function(f, c1, c2, c3, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__8057__delegate.call(this, f, c1, c2, c3, colls)
    };
    G__8057.cljs$lang$maxFixedArity = 4;
    G__8057.cljs$lang$applyTo = function(arglist__8058) {
      var f = cljs.core.first(arglist__8058);
      var c1 = cljs.core.first(cljs.core.next(arglist__8058));
      var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8058)));
      var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8058))));
      var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8058))));
      return G__8057__delegate(f, c1, c2, c3, colls)
    };
    G__8057.cljs$lang$arity$variadic = G__8057__delegate;
    return G__8057
  }();
  map = function(f, c1, c2, c3, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return map__2.call(this, f, c1);
      case 3:
        return map__3.call(this, f, c1, c2);
      case 4:
        return map__4.call(this, f, c1, c2, c3);
      default:
        return map__5.cljs$lang$arity$variadic(f, c1, c2, c3, cljs.core.array_seq(arguments, 4))
    }
    throw"Invalid arity: " + arguments.length;
  };
  map.cljs$lang$maxFixedArity = 4;
  map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
  map.cljs$lang$arity$2 = map__2;
  map.cljs$lang$arity$3 = map__3;
  map.cljs$lang$arity$4 = map__4;
  map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
  return map
}();
cljs.core.take = function take(n, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    if(n > 0) {
      var temp__3974__auto____8061 = cljs.core.seq.call(null, coll);
      if(temp__3974__auto____8061) {
        var s__8062 = temp__3974__auto____8061;
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__8062), take.call(null, n - 1, cljs.core.rest.call(null, s__8062)))
      }else {
        return null
      }
    }else {
      return null
    }
  }, null)
};
cljs.core.drop = function drop(n, coll) {
  var step__8068 = function(n, coll) {
    while(true) {
      var s__8066 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(function() {
        var and__3822__auto____8067 = n > 0;
        if(and__3822__auto____8067) {
          return s__8066
        }else {
          return and__3822__auto____8067
        }
      }())) {
        var G__8069 = n - 1;
        var G__8070 = cljs.core.rest.call(null, s__8066);
        n = G__8069;
        coll = G__8070;
        continue
      }else {
        return s__8066
      }
      break
    }
  };
  return new cljs.core.LazySeq(null, false, function() {
    return step__8068.call(null, n, coll)
  }, null)
};
cljs.core.drop_last = function() {
  var drop_last = null;
  var drop_last__1 = function(s) {
    return drop_last.call(null, 1, s)
  };
  var drop_last__2 = function(n, s) {
    return cljs.core.map.call(null, function(x, _) {
      return x
    }, s, cljs.core.drop.call(null, n, s))
  };
  drop_last = function(n, s) {
    switch(arguments.length) {
      case 1:
        return drop_last__1.call(this, n);
      case 2:
        return drop_last__2.call(this, n, s)
    }
    throw"Invalid arity: " + arguments.length;
  };
  drop_last.cljs$lang$arity$1 = drop_last__1;
  drop_last.cljs$lang$arity$2 = drop_last__2;
  return drop_last
}();
cljs.core.take_last = function take_last(n, coll) {
  var s__8073 = cljs.core.seq.call(null, coll);
  var lead__8074 = cljs.core.seq.call(null, cljs.core.drop.call(null, n, coll));
  while(true) {
    if(lead__8074) {
      var G__8075 = cljs.core.next.call(null, s__8073);
      var G__8076 = cljs.core.next.call(null, lead__8074);
      s__8073 = G__8075;
      lead__8074 = G__8076;
      continue
    }else {
      return s__8073
    }
    break
  }
};
cljs.core.drop_while = function drop_while(pred, coll) {
  var step__8082 = function(pred, coll) {
    while(true) {
      var s__8080 = cljs.core.seq.call(null, coll);
      if(cljs.core.truth_(function() {
        var and__3822__auto____8081 = s__8080;
        if(and__3822__auto____8081) {
          return pred.call(null, cljs.core.first.call(null, s__8080))
        }else {
          return and__3822__auto____8081
        }
      }())) {
        var G__8083 = pred;
        var G__8084 = cljs.core.rest.call(null, s__8080);
        pred = G__8083;
        coll = G__8084;
        continue
      }else {
        return s__8080
      }
      break
    }
  };
  return new cljs.core.LazySeq(null, false, function() {
    return step__8082.call(null, pred, coll)
  }, null)
};
cljs.core.cycle = function cycle(coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3974__auto____8087 = cljs.core.seq.call(null, coll);
    if(temp__3974__auto____8087) {
      var s__8088 = temp__3974__auto____8087;
      return cljs.core.concat.call(null, s__8088, cycle.call(null, s__8088))
    }else {
      return null
    }
  }, null)
};
cljs.core.split_at = function split_at(n, coll) {
  return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null, n, coll), cljs.core.drop.call(null, n, coll)], true)
};
cljs.core.repeat = function() {
  var repeat = null;
  var repeat__1 = function(x) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, x, repeat.call(null, x))
    }, null)
  };
  var repeat__2 = function(n, x) {
    return cljs.core.take.call(null, n, repeat.call(null, x))
  };
  repeat = function(n, x) {
    switch(arguments.length) {
      case 1:
        return repeat__1.call(this, n);
      case 2:
        return repeat__2.call(this, n, x)
    }
    throw"Invalid arity: " + arguments.length;
  };
  repeat.cljs$lang$arity$1 = repeat__1;
  repeat.cljs$lang$arity$2 = repeat__2;
  return repeat
}();
cljs.core.replicate = function replicate(n, x) {
  return cljs.core.take.call(null, n, cljs.core.repeat.call(null, x))
};
cljs.core.repeatedly = function() {
  var repeatedly = null;
  var repeatedly__1 = function(f) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, f.call(null), repeatedly.call(null, f))
    }, null)
  };
  var repeatedly__2 = function(n, f) {
    return cljs.core.take.call(null, n, repeatedly.call(null, f))
  };
  repeatedly = function(n, f) {
    switch(arguments.length) {
      case 1:
        return repeatedly__1.call(this, n);
      case 2:
        return repeatedly__2.call(this, n, f)
    }
    throw"Invalid arity: " + arguments.length;
  };
  repeatedly.cljs$lang$arity$1 = repeatedly__1;
  repeatedly.cljs$lang$arity$2 = repeatedly__2;
  return repeatedly
}();
cljs.core.iterate = function iterate(f, x) {
  return cljs.core.cons.call(null, x, new cljs.core.LazySeq(null, false, function() {
    return iterate.call(null, f, f.call(null, x))
  }, null))
};
cljs.core.interleave = function() {
  var interleave = null;
  var interleave__2 = function(c1, c2) {
    return new cljs.core.LazySeq(null, false, function() {
      var s1__8093 = cljs.core.seq.call(null, c1);
      var s2__8094 = cljs.core.seq.call(null, c2);
      if(function() {
        var and__3822__auto____8095 = s1__8093;
        if(and__3822__auto____8095) {
          return s2__8094
        }else {
          return and__3822__auto____8095
        }
      }()) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s1__8093), cljs.core.cons.call(null, cljs.core.first.call(null, s2__8094), interleave.call(null, cljs.core.rest.call(null, s1__8093), cljs.core.rest.call(null, s2__8094))))
      }else {
        return null
      }
    }, null)
  };
  var interleave__3 = function() {
    var G__8097__delegate = function(c1, c2, colls) {
      return new cljs.core.LazySeq(null, false, function() {
        var ss__8096 = cljs.core.map.call(null, cljs.core.seq, cljs.core.conj.call(null, colls, c2, c1));
        if(cljs.core.every_QMARK_.call(null, cljs.core.identity, ss__8096)) {
          return cljs.core.concat.call(null, cljs.core.map.call(null, cljs.core.first, ss__8096), cljs.core.apply.call(null, interleave, cljs.core.map.call(null, cljs.core.rest, ss__8096)))
        }else {
          return null
        }
      }, null)
    };
    var G__8097 = function(c1, c2, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__8097__delegate.call(this, c1, c2, colls)
    };
    G__8097.cljs$lang$maxFixedArity = 2;
    G__8097.cljs$lang$applyTo = function(arglist__8098) {
      var c1 = cljs.core.first(arglist__8098);
      var c2 = cljs.core.first(cljs.core.next(arglist__8098));
      var colls = cljs.core.rest(cljs.core.next(arglist__8098));
      return G__8097__delegate(c1, c2, colls)
    };
    G__8097.cljs$lang$arity$variadic = G__8097__delegate;
    return G__8097
  }();
  interleave = function(c1, c2, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return interleave__2.call(this, c1, c2);
      default:
        return interleave__3.cljs$lang$arity$variadic(c1, c2, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  interleave.cljs$lang$maxFixedArity = 2;
  interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
  interleave.cljs$lang$arity$2 = interleave__2;
  interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
  return interleave
}();
cljs.core.interpose = function interpose(sep, coll) {
  return cljs.core.drop.call(null, 1, cljs.core.interleave.call(null, cljs.core.repeat.call(null, sep), coll))
};
cljs.core.flatten1 = function flatten1(colls) {
  var cat__8108 = function cat(coll, colls) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3971__auto____8106 = cljs.core.seq.call(null, coll);
      if(temp__3971__auto____8106) {
        var coll__8107 = temp__3971__auto____8106;
        return cljs.core.cons.call(null, cljs.core.first.call(null, coll__8107), cat.call(null, cljs.core.rest.call(null, coll__8107), colls))
      }else {
        if(cljs.core.seq.call(null, colls)) {
          return cat.call(null, cljs.core.first.call(null, colls), cljs.core.rest.call(null, colls))
        }else {
          return null
        }
      }
    }, null)
  };
  return cat__8108.call(null, null, colls)
};
cljs.core.mapcat = function() {
  var mapcat = null;
  var mapcat__2 = function(f, coll) {
    return cljs.core.flatten1.call(null, cljs.core.map.call(null, f, coll))
  };
  var mapcat__3 = function() {
    var G__8109__delegate = function(f, coll, colls) {
      return cljs.core.flatten1.call(null, cljs.core.apply.call(null, cljs.core.map, f, coll, colls))
    };
    var G__8109 = function(f, coll, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
      }
      return G__8109__delegate.call(this, f, coll, colls)
    };
    G__8109.cljs$lang$maxFixedArity = 2;
    G__8109.cljs$lang$applyTo = function(arglist__8110) {
      var f = cljs.core.first(arglist__8110);
      var coll = cljs.core.first(cljs.core.next(arglist__8110));
      var colls = cljs.core.rest(cljs.core.next(arglist__8110));
      return G__8109__delegate(f, coll, colls)
    };
    G__8109.cljs$lang$arity$variadic = G__8109__delegate;
    return G__8109
  }();
  mapcat = function(f, coll, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return mapcat__2.call(this, f, coll);
      default:
        return mapcat__3.cljs$lang$arity$variadic(f, coll, cljs.core.array_seq(arguments, 2))
    }
    throw"Invalid arity: " + arguments.length;
  };
  mapcat.cljs$lang$maxFixedArity = 2;
  mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
  mapcat.cljs$lang$arity$2 = mapcat__2;
  mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
  return mapcat
}();
cljs.core.filter = function filter(pred, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3974__auto____8120 = cljs.core.seq.call(null, coll);
    if(temp__3974__auto____8120) {
      var s__8121 = temp__3974__auto____8120;
      if(cljs.core.chunked_seq_QMARK_.call(null, s__8121)) {
        var c__8122 = cljs.core.chunk_first.call(null, s__8121);
        var size__8123 = cljs.core.count.call(null, c__8122);
        var b__8124 = cljs.core.chunk_buffer.call(null, size__8123);
        var n__2553__auto____8125 = size__8123;
        var i__8126 = 0;
        while(true) {
          if(i__8126 < n__2553__auto____8125) {
            if(cljs.core.truth_(pred.call(null, cljs.core._nth.call(null, c__8122, i__8126)))) {
              cljs.core.chunk_append.call(null, b__8124, cljs.core._nth.call(null, c__8122, i__8126))
            }else {
            }
            var G__8129 = i__8126 + 1;
            i__8126 = G__8129;
            continue
          }else {
          }
          break
        }
        return cljs.core.chunk_cons.call(null, cljs.core.chunk.call(null, b__8124), filter.call(null, pred, cljs.core.chunk_rest.call(null, s__8121)))
      }else {
        var f__8127 = cljs.core.first.call(null, s__8121);
        var r__8128 = cljs.core.rest.call(null, s__8121);
        if(cljs.core.truth_(pred.call(null, f__8127))) {
          return cljs.core.cons.call(null, f__8127, filter.call(null, pred, r__8128))
        }else {
          return filter.call(null, pred, r__8128)
        }
      }
    }else {
      return null
    }
  }, null)
};
cljs.core.remove = function remove(pred, coll) {
  return cljs.core.filter.call(null, cljs.core.complement.call(null, pred), coll)
};
cljs.core.tree_seq = function tree_seq(branch_QMARK_, children, root) {
  var walk__8132 = function walk(node) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, node, cljs.core.truth_(branch_QMARK_.call(null, node)) ? cljs.core.mapcat.call(null, walk, children.call(null, node)) : null)
    }, null)
  };
  return walk__8132.call(null, root)
};
cljs.core.flatten = function flatten(x) {
  return cljs.core.filter.call(null, function(p1__8130_SHARP_) {
    return!cljs.core.sequential_QMARK_.call(null, p1__8130_SHARP_)
  }, cljs.core.rest.call(null, cljs.core.tree_seq.call(null, cljs.core.sequential_QMARK_, cljs.core.seq, x)))
};
cljs.core.into = function into(to, from) {
  if(function() {
    var G__8136__8137 = to;
    if(G__8136__8137) {
      if(function() {
        var or__3824__auto____8138 = G__8136__8137.cljs$lang$protocol_mask$partition1$ & 1;
        if(or__3824__auto____8138) {
          return or__3824__auto____8138
        }else {
          return G__8136__8137.cljs$core$IEditableCollection$
        }
      }()) {
        return true
      }else {
        if(!G__8136__8137.cljs$lang$protocol_mask$partition1$) {
          return cljs.core.type_satisfies_.call(null, cljs.core.IEditableCollection, G__8136__8137)
        }else {
          return false
        }
      }
    }else {
      return cljs.core.type_satisfies_.call(null, cljs.core.IEditableCollection, G__8136__8137)
    }
  }()) {
    return cljs.core.persistent_BANG_.call(null, cljs.core.reduce.call(null, cljs.core._conj_BANG_, cljs.core.transient$.call(null, to), from))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, to, from)
  }
};
cljs.core.mapv = function() {
  var mapv = null;
  var mapv__2 = function(f, coll) {
    return cljs.core.persistent_BANG_.call(null, cljs.core.reduce.call(null, function(v, o) {
      return cljs.core.conj_BANG_.call(null, v, f.call(null, o))
    }, cljs.core.transient$.call(null, cljs.core.PersistentVector.EMPTY), coll))
  };
  var mapv__3 = function(f, c1, c2) {
    return cljs.core.into.call(null, cljs.core.PersistentVector.EMPTY, cljs.core.map.call(null, f, c1, c2))
  };
  var mapv__4 = function(f, c1, c2, c3) {
    return cljs.core.into.call(null, cljs.core.PersistentVector.EMPTY, cljs.core.map.call(null, f, c1, c2, c3))
  };
  var mapv__5 = function() {
    var G__8139__delegate = function(f, c1, c2, c3, colls) {
      return cljs.core.into.call(null, cljs.core.PersistentVector.EMPTY, cljs.core.apply.call(null, cljs.core.map, f, c1, c2, c3, colls))
    };
    var G__8139 = function(f, c1, c2, c3, var_args) {
      var colls = null;
      if(goog.isDef(var_args)) {
        colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4), 0)
      }
      return G__8139__delegate.call(this, f, c1, c2, c3, colls)
    };
    G__8139.cljs$lang$maxFixedArity = 4;
    G__8139.cljs$lang$applyTo = function(arglist__8140) {
      var f = cljs.core.first(arglist__8140);
      var c1 = cljs.core.first(cljs.core.next(arglist__8140));
      var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8140)));
      var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8140))));
      var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8140))));
      return G__8139__delegate(f, c1, c2, c3, colls)
    };
    G__8139.cljs$lang$arity$variadic = G__8139__delegate;
    return G__8139
  }();
  mapv = function(f, c1, c2, c3, var_args) {
    var colls = var_args;
    switch(arguments.length) {
      case 2:
        return mapv__2.call(this, f, c1);
      case 3:
        return mapv__3.call(this, f, c1, c2);
      case 4:
        return mapv__4.call(this, f, c1, c2, c3);
      default:
        return mapv__5.cljs$lang$arity$variadic(f, c1, c2, c3, cljs.core.array_seq(arguments, 4))
    }
    throw"Invalid arity: " + arguments.length;
  };
  mapv.cljs$lang$maxFixedArity = 4;
  mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
  mapv.cljs$lang$arity$2 = mapv__2;
  mapv.cljs$lang$arity$3 = mapv__3;
  mapv.cljs$lang$arity$4 = mapv__4;
  mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
  return mapv
}();
cljs.core.filterv = function filterv(pred, coll) {
  return cljs.core.persistent_BANG_.call(null, cljs.core.reduce.call(null, function(v, o) {
    if(cljs.core.truth_(pred.call(null, o))) {
      return cljs.core.conj_BANG_.call(null, v, o)
    }else {
      return v
    }
  }, cljs.core.transient$.call(null, cljs.core.PersistentVector.EMPTY), coll))
};
cljs.core.partition = function() {
  var partition = null;
  var partition__2 = function(n, coll) {
    return partition.call(null, n, n, coll)
  };
  var partition__3 = function(n, step, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3974__auto____8147 = cljs.core.seq.call(null, coll);
      if(temp__3974__auto____8147) {
        var s__8148 = temp__3974__auto____8147;
        var p__8149 = cljs.core.take.call(null, n, s__8148);
        if(n === cljs.core.count.call(null, p__8149)) {
          return cljs.core.cons.call(null, p__8149, partition.call(null, n, step, cljs.core.drop.call(null, step, s__8148)))
        }else {
          return null
        }
      }else {
        return null
      }
    }, null)
  };
  var partition__4 = function(n, step, pad, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3974__auto____8150 = cljs.core.seq.call(null, coll);
      if(temp__3974__auto____8150) {
        var s__8151 = temp__3974__auto____8150;
        var p__8152 = cljs.core.take.call(null, n, s__8151);
        if(n === cljs.core.count.call(null, p__8152)) {
          return cljs.core.cons.call(null, p__8152, partition.call(null, n, step, pad, cljs.core.drop.call(null, step, s__8151)))
        }else {
          return cljs.core.list.call(null, cljs.core.take.call(null, n, cljs.core.concat.call(null, p__8152, pad)))
        }
      }else {
        return null
      }
    }, null)
  };
  partition = function(n, step, pad, coll) {
    switch(arguments.length) {
      case 2:
        return partition__2.call(this, n, step);
      case 3:
        return partition__3.call(this, n, step, pad);
      case 4:
        return partition__4.call(this, n, step, pad, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  partition.cljs$lang$arity$2 = partition__2;
  partition.cljs$lang$arity$3 = partition__3;
  partition.cljs$lang$arity$4 = partition__4;
  return partition
}();
cljs.core.get_in = function() {
  var get_in = null;
  var get_in__2 = function(m, ks) {
    return cljs.core.reduce.call(null, cljs.core.get, m, ks)
  };
  var get_in__3 = function(m, ks, not_found) {
    var sentinel__8157 = cljs.core.lookup_sentinel;
    var m__8158 = m;
    var ks__8159 = cljs.core.seq.call(null, ks);
    while(true) {
      if(ks__8159) {
        var m__8160 = cljs.core._lookup.call(null, m__8158, cljs.core.first.call(null, ks__8159), sentinel__8157);
        if(sentinel__8157 === m__8160) {
          return not_found
        }else {
          var G__8161 = sentinel__8157;
          var G__8162 = m__8160;
          var G__8163 = cljs.core.next.call(null, ks__8159);
          sentinel__8157 = G__8161;
          m__8158 = G__8162;
          ks__8159 = G__8163;
          continue
        }
      }else {
        return m__8158
      }
      break
    }
  };
  get_in = function(m, ks, not_found) {
    switch(arguments.length) {
      case 2:
        return get_in__2.call(this, m, ks);
      case 3:
        return get_in__3.call(this, m, ks, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  get_in.cljs$lang$arity$2 = get_in__2;
  get_in.cljs$lang$arity$3 = get_in__3;
  return get_in
}();
cljs.core.assoc_in = function assoc_in(m, p__8164, v) {
  var vec__8169__8170 = p__8164;
  var k__8171 = cljs.core.nth.call(null, vec__8169__8170, 0, null);
  var ks__8172 = cljs.core.nthnext.call(null, vec__8169__8170, 1);
  if(cljs.core.truth_(ks__8172)) {
    return cljs.core.assoc.call(null, m, k__8171, assoc_in.call(null, cljs.core._lookup.call(null, m, k__8171, null), ks__8172, v))
  }else {
    return cljs.core.assoc.call(null, m, k__8171, v)
  }
};
cljs.core.update_in = function() {
  var update_in__delegate = function(m, p__8173, f, args) {
    var vec__8178__8179 = p__8173;
    var k__8180 = cljs.core.nth.call(null, vec__8178__8179, 0, null);
    var ks__8181 = cljs.core.nthnext.call(null, vec__8178__8179, 1);
    if(cljs.core.truth_(ks__8181)) {
      return cljs.core.assoc.call(null, m, k__8180, cljs.core.apply.call(null, update_in, cljs.core._lookup.call(null, m, k__8180, null), ks__8181, f, args))
    }else {
      return cljs.core.assoc.call(null, m, k__8180, cljs.core.apply.call(null, f, cljs.core._lookup.call(null, m, k__8180, null), args))
    }
  };
  var update_in = function(m, p__8173, f, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
    }
    return update_in__delegate.call(this, m, p__8173, f, args)
  };
  update_in.cljs$lang$maxFixedArity = 3;
  update_in.cljs$lang$applyTo = function(arglist__8182) {
    var m = cljs.core.first(arglist__8182);
    var p__8173 = cljs.core.first(cljs.core.next(arglist__8182));
    var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8182)));
    var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8182)));
    return update_in__delegate(m, p__8173, f, args)
  };
  update_in.cljs$lang$arity$variadic = update_in__delegate;
  return update_in
}();
cljs.core.Vector = function(meta, array, __hash) {
  this.meta = meta;
  this.array = array;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 32400159
};
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/Vector")
};
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__8185 = this;
  var h__2218__auto____8186 = this__8185.__hash;
  if(!(h__2218__auto____8186 == null)) {
    return h__2218__auto____8186
  }else {
    var h__2218__auto____8187 = cljs.core.hash_coll.call(null, coll);
    this__8185.__hash = h__2218__auto____8187;
    return h__2218__auto____8187
  }
};
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = function(coll, k) {
  var this__8188 = this;
  return coll.cljs$core$IIndexed$_nth$arity$3(coll, k, null)
};
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = function(coll, k, not_found) {
  var this__8189 = this;
  return coll.cljs$core$IIndexed$_nth$arity$3(coll, k, not_found)
};
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(coll, k, v) {
  var this__8190 = this;
  var new_array__8191 = this__8190.array.slice();
  new_array__8191[k] = v;
  return new cljs.core.Vector(this__8190.meta, new_array__8191, null)
};
cljs.core.Vector.prototype.call = function() {
  var G__8222 = null;
  var G__8222__2 = function(this_sym8192, k) {
    var this__8194 = this;
    var this_sym8192__8195 = this;
    var coll__8196 = this_sym8192__8195;
    return coll__8196.cljs$core$ILookup$_lookup$arity$2(coll__8196, k)
  };
  var G__8222__3 = function(this_sym8193, k, not_found) {
    var this__8194 = this;
    var this_sym8193__8197 = this;
    var coll__8198 = this_sym8193__8197;
    return coll__8198.cljs$core$ILookup$_lookup$arity$3(coll__8198, k, not_found)
  };
  G__8222 = function(this_sym8193, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__8222__2.call(this, this_sym8193, k);
      case 3:
        return G__8222__3.call(this, this_sym8193, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__8222
}();
cljs.core.Vector.prototype.apply = function(this_sym8183, args8184) {
  var this__8199 = this;
  return this_sym8183.call.apply(this_sym8183, [this_sym8183].concat(args8184.slice()))
};
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__8200 = this;
  var new_array__8201 = this__8200.array.slice();
  new_array__8201.push(o);
  return new cljs.core.Vector(this__8200.meta, new_array__8201, null)
};
cljs.core.Vector.prototype.toString = function() {
  var this__8202 = this;
  var this__8203 = this;
  return cljs.core.pr_str.call(null, this__8203)
};
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = function(v, f) {
  var this__8204 = this;
  return cljs.core.ci_reduce.call(null, this__8204.array, f)
};
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = function(v, f, start) {
  var this__8205 = this;
  return cljs.core.ci_reduce.call(null, this__8205.array, f, start)
};
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__8206 = this;
  if(this__8206.array.length > 0) {
    var vector_seq__8207 = function vector_seq(i) {
      return new cljs.core.LazySeq(null, false, function() {
        if(i < this__8206.array.length) {
          return cljs.core.cons.call(null, this__8206.array[i], vector_seq.call(null, i + 1))
        }else {
          return null
        }
      }, null)
    };
    return vector_seq__8207.call(null, 0)
  }else {
    return null
  }
};
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__8208 = this;
  return this__8208.array.length
};
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = function(coll) {
  var this__8209 = this;
  var count__8210 = this__8209.array.length;
  if(count__8210 > 0) {
    return this__8209.array[count__8210 - 1]
  }else {
    return null
  }
};
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = function(coll) {
  var this__8211 = this;
  if(this__8211.array.length > 0) {
    var new_array__8212 = this__8211.array.slice();
    new_array__8212.pop();
    return new cljs.core.Vector(this__8211.meta, new_array__8212, null)
  }else {
    throw new Error("Can't pop empty vector");
  }
};
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = function(coll, n, val) {
  var this__8213 = this;
  return coll.cljs$core$IAssociative$_assoc$arity$3(coll, n, val)
};
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__8214 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__8215 = this;
  return new cljs.core.Vector(meta, this__8215.array, this__8215.__hash)
};
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__8216 = this;
  return this__8216.meta
};
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = function(coll, n) {
  var this__8217 = this;
  if(function() {
    var and__3822__auto____8218 = 0 <= n;
    if(and__3822__auto____8218) {
      return n < this__8217.array.length
    }else {
      return and__3822__auto____8218
    }
  }()) {
    return this__8217.array[n]
  }else {
    return null
  }
};
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = function(coll, n, not_found) {
  var this__8219 = this;
  if(function() {
    var and__3822__auto____8220 = 0 <= n;
    if(and__3822__auto____8220) {
      return n < this__8219.array.length
    }else {
      return and__3822__auto____8220
    }
  }()) {
    return this__8219.array[n]
  }else {
    return not_found
  }
};
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__8221 = this;
  return cljs.core.with_meta.call(null, cljs.core.Vector.EMPTY, this__8221.meta)
};
cljs.core.Vector;
cljs.core.Vector.EMPTY = new cljs.core.Vector(null, [], 0);
cljs.core.Vector.fromArray = function(xs) {
  return new cljs.core.Vector(null, xs, null)
};
cljs.core.VectorNode = function(edit, arr) {
  this.edit = edit;
  this.arr = arr
};
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = function(this__2336__auto__) {
  return cljs.core.list.call(null, "cljs.core/VectorNode")
};
cljs.core.VectorNode;
cljs.core.pv_fresh_node = function pv_fresh_node(edit) {
  return new cljs.core.VectorNode(edit, cljs.core.make_array.call(null, 32))
};
cljs.core.pv_aget = function pv_aget(node, idx) {
  return node.arr[idx]
};
cljs.core.pv_aset = function pv_aset(node, idx, val) {
  return node.arr[idx] = val
};
cljs.core.pv_clone_node = function pv_clone_node(node) {
  return new cljs.core.VectorNode(node.edit, node.arr.slice())
};
cljs.core.tail_off = function tail_off(pv) {
  var cnt__8224 = pv.cnt;
  if(cnt__8224 < 32) {
    return 0
  }else {
    return cnt__8224 - 1 >>> 5 << 5
  }
};
cljs.core.new_path = function new_path(edit, level, node) {
  var ll__8230 = level;
  var ret__8231 = node;
  while(true) {
    if(ll__8230 === 0) {
      return ret__8231
    }else {
      var embed__8232 = ret__8231;
      var r__8233 = cljs.core.pv_fresh_node.call(null, edit);
      var ___8234 = cljs.core.pv_aset.call(null, r__8233, 0, embed__8232);
      var G__8235 = ll__8230 - 5;
      var G__8236 = r__8233;
      ll__8230 = G__8235;
      ret__8231 = G__8236;
      continue
    }
    break
  }
};
cljs.core.push_tail = function push_tail(pv, level, parent, tailnode) {
  var ret__8242 = cljs.core.pv_clone_node.call(null, parent);
  var subidx__8243 = pv.cnt - 1 >>> level & 31;
  if(5 === level) {
    cljs.core.pv_aset.call(null, ret__8242, subidx__8243, tailnode);
    return ret__8242
  }else {
    var child__8244 = cljs.core.pv_aget.call(null, parent, subidx__8243);
    if(!(child__8244 == null)) {
      var node_to_insert__8245 = push_tail.call(null, pv, level - 5, child__8244, tailnode);
      cljs.core.pv_aset.call(null, ret__8242, subidx__8243, node_to_insert__8245);
      return ret__8242
    }else {
      var node_to_insert__8246 = cljs.core.new_path.call(null, null, level - 5, tailnode);
      cljs.core.pv_aset.call(null, ret__8242, subidx__8243, node_to_insert__8246);
      return ret__8242
    }
  }
};
cljs.core.array_for = function array_for(pv, i) {
  if(function() {
    var and__3822__auto____8250 = 0 <= i;
    if(and__3822__auto____8250) {
      return i < pv.cnt
    }else {
      return and__3822__auto____8250
    }
  }()) {
    if(i >= cljs.core.tail_off.call(null, pv)) {
      return pv.tail
    }else {
      var node__8251 = pv.root;
      var level__8252 = pv.shift;
      while(true) {
        if(level__8252 > 0) {
          var G__8253 = cljs.core.pv_aget.call(null, node__8251, i >>> level__8252 & 31);
          var G__8254 = level__8252 - 5;
          node__8251 = G__8253;
          level__8252 = G__8254;
          continue
        }else {
          return node__8251.arr
        }
        break
      }
    }
  }else {
    throw new Error([cljs.core.str("No item "), cljs.core.str(i), cljs.core.str(" in vector of length "), cljs.core.str(pv.cnt)].join(""));
  }
};
cljs.core.do_assoc = function do_assoc(pv, level, node, i, val) {
  var ret__8257 = cljs.core.pv_clone_node.call(null, node);
  if(level === 0) {
    cljs.core.pv_aset.call(null, ret__8257, i & 31, val);
    return ret__8257
  }else {
    var subidx__8258 = i >>> level & 31;
    cljs.core.pv_aset.call(null, ret__8257, subidx__8258, do_assoc.call(null, pv, level - 5, cljs.core.pv_aget.call(null, node, subidx__8258), i, val));
    return ret__8257
  }
};
cljs.core.pop_tail = function pop_tail(pv, level, node) {
  var subidx__8264 = pv.cnt - 2 >>> level & 31;
  if(level > 5) {
    var new_child__8265 = pop_tail.call(null, pv, level - 5, cljs.core.pv_aget.call(null, node, subidx__8264));
    if(function() {
      var and__3822__auto____8266 = new_child__8265 == null;
      if(and__3822__auto____8266) {
        return subidx__8264 === 0
      }else {
        return and__3822__auto____8266
      }
    }()) {
      return null
    }else {
      var ret__8267 = cljs.core.pv_clone_node.call(null, node);
      cljs.core.pv_aset.call(null, ret__8267, subidx__8264, new_child__8265);
      return ret__8267
    }
  }else {
    if(subidx__8264 === 0) {
      return null
    }else {
      if("\ufdd0'else") {
        var ret__8268 = cljs.core.pv_clone_node.call(null, node);
        cljs.core.pv_aset.call(null, ret__8268, subidx__8264, null);
        return ret__8268
      }else {
        return null
      }
    }
  }
};
cljs.core.PersistentVector = function(meta, cnt, shift, root, tail, __hash) {
  this.meta = meta;
  this.cnt = cnt;
  this.shift = shift;
  this.root = root;
  this.tail = tail;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 1;
  this.cljs$lang$protocol_mask$partition0$ = 167668511
};
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/PersistentVector")
};
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = function(coll) {
  var this__8271 = this;
  return new cljs.core.TransientVector(this__8271.cnt, this__8271.shift, cljs.core.tv_editable_root.call(null, this__8271.root), cljs.core.tv_editable_tail.call(null, this__8271.tail))
};
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__8272 = this;
  var h__2218__auto____8273 = this__8272.__hash;
  if(!(h__2218__auto____8273 == null)) {
    return h__2218__auto____8273
  }else {
    var h__2218__auto____8274 = cljs.core.hash_coll.call(null, coll);
    this__8272.__hash = h__2218__auto____8274;
    return h__2218__auto____8274
  }
};
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = function(coll, k) {
  var this__8275 = this;
  return coll.cljs$core$IIndexed$_nth$arity$3(coll, k, null)
};
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = function(coll, k, not_found) {
  var this__8276 = this;
  return coll.cljs$core$IIndexed$_nth$arity$3(coll, k, not_found)
};
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(coll, k, v) {
  var this__8277 = this;
  if(function() {
    var and__3822__auto____8278 = 0 <= k;
    if(and__3822__auto____8278) {
      return k < this__8277.cnt
    }else {
      return and__3822__auto____8278
    }
  }()) {
    if(cljs.core.tail_off.call(null, coll) <= k) {
      var new_tail__8279 = this__8277.tail.slice();
      new_tail__8279[k & 31] = v;
      return new cljs.core.PersistentVector(this__8277.meta, this__8277.cnt, this__8277.shift, this__8277.root, new_tail__8279, null)
    }else {
      return new cljs.core.PersistentVector(this__8277.meta, this__8277.cnt, this__8277.shift, cljs.core.do_assoc.call(null, coll, this__8277.shift, this__8277.root, k, v), this__8277.tail, null)
    }
  }else {
    if(k === this__8277.cnt) {
      return coll.cljs$core$ICollection$_conj$arity$2(coll, v)
    }else {
      if("\ufdd0'else") {
        throw new Error([cljs.core.str("Index "), cljs.core.str(k), cljs.core.str(" out of bounds  [0,"), cljs.core.str(this__8277.cnt), cljs.core.str("]")].join(""));
      }else {
        return null
      }
    }
  }
};
cljs.core.PersistentVector.prototype.call = function() {
  var G__8327 = null;
  var G__8327__2 = function(this_sym8280, k) {
    var this__8282 = this;
    var this_sym8280__8283 = this;
    var coll__8284 = this_sym8280__8283;
    return coll__8284.cljs$core$ILookup$_lookup$arity$2(coll__8284, k)
  };
  var G__8327__3 = function(this_sym8281, k, not_found) {
    var this__8282 = this;
    var this_sym8281__8285 = this;
    var coll__8286 = this_sym8281__8285;
    return coll__8286.cljs$core$ILookup$_lookup$arity$3(coll__8286, k, not_found)
  };
  G__8327 = function(this_sym8281, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__8327__2.call(this, this_sym8281, k);
      case 3:
        return G__8327__3.call(this, this_sym8281, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__8327
}();
cljs.core.PersistentVector.prototype.apply = function(this_sym8269, args8270) {
  var this__8287 = this;
  return this_sym8269.call.apply(this_sym8269, [this_sym8269].concat(args8270.slice()))
};
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function(v, f, init) {
  var this__8288 = this;
  var step_init__8289 = [0, init];
  var i__8290 = 0;
  while(true) {
    if(i__8290 < this__8288.cnt) {
      var arr__8291 = cljs.core.array_for.call(null, v, i__8290);
      var len__8292 = arr__8291.length;
      var init__8296 = function() {
        var j__8293 = 0;
        var init__8294 = step_init__8289[1];
        while(true) {
          if(j__8293 < len__8292) {
            var init__8295 = f.call(null, init__8294, j__8293 + i__8290, arr__8291[j__8293]);
            if(cljs.core.reduced_QMARK_.call(null, init__8295)) {
              return init__8295
            }else {
              var G__8328 = j__8293 + 1;
              var G__8329 = init__8295;
              j__8293 = G__8328;
              init__8294 = G__8329;
              continue
            }
          }else {
            step_init__8289[0] = len__8292;
            step_init__8289[1] = init__8294;
            return init__8294
          }
          break
        }
      }();
      if(cljs.core.reduced_QMARK_.call(null, init__8296)) {
        return cljs.core.deref.call(null, init__8296)
      }else {
        var G__8330 = i__8290 + step_init__8289[0];
        i__8290 = G__8330;
        continue
      }
    }else {
      return step_init__8289[1]
    }
    break
  }
};
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__8297 = this;
  if(this__8297.cnt - cljs.core.tail_off.call(null, coll) < 32) {
    var new_tail__8298 = this__8297.tail.slice();
    new_tail__8298.push(o);
    return new cljs.core.PersistentVector(this__8297.meta, this__8297.cnt + 1, this__8297.shift, this__8297.root, new_tail__8298, null)
  }else {
    var root_overflow_QMARK___8299 = this__8297.cnt >>> 5 > 1 << this__8297.shift;
    var new_shift__8300 = root_overflow_QMARK___8299 ? this__8297.shift + 5 : this__8297.shift;
    var new_root__8302 = root_overflow_QMARK___8299 ? function() {
      var n_r__8301 = cljs.core.pv_fresh_node.call(null, null);
      cljs.core.pv_aset.call(null, n_r__8301, 0, this__8297.root);
      cljs.core.pv_aset.call(null, n_r__8301, 1, cljs.core.new_path.call(null, null, this__8297.shift, new cljs.core.VectorNode(null, this__8297.tail)));
      return n_r__8301
    }() : cljs.core.push_tail.call(null, coll, this__8297.shift, this__8297.root, new cljs.core.VectorNode(null, this__8297.tail));
    return new cljs.core.PersistentVector(this__8297.meta, this__8297.cnt + 1, new_shift__8300, new_root__8302, [o], null)
  }
};
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = function(coll) {
  var this__8303 = this;
  if(this__8303.cnt > 0) {
    return new cljs.core.RSeq(coll, this__8303.cnt - 1, null)
  }else {
    return cljs.core.List.EMPTY
  }
};
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = function(coll) {
  var this__8304 = this;
  return coll.cljs$core$IIndexed$_nth$arity$2(coll, 0)
};
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = function(coll) {
  var this__8305 = this;
  return coll.cljs$core$IIndexed$_nth$arity$2(coll, 1)
};
cljs.core.PersistentVector.prototype.toString = function() {
  var this__8306 = this;
  var this__8307 = this;
  return cljs.core.pr_str.call(null, this__8307)
};
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = function(v, f) {
  var this__8308 = this;
  return cljs.core.ci_reduce.call(null, v, f)
};
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = function(v, f, start) {
  var this__8309 = this;
  return cljs.core.ci_reduce.call(null, v, f, start)
};
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__8310 = this;
  if(this__8310.cnt === 0) {
    return null
  }else {
    return cljs.core.chunked_seq.call(null, coll, 0, 0)
  }
};
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__8311 = this;
  return this__8311.cnt
};
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = function(coll) {
  var this__8312 = this;
  if(this__8312.cnt > 0) {
    return coll.cljs$core$IIndexed$_nth$arity$2(coll, this__8312.cnt - 1)
  }else {
    return null
  }
};
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = function(coll) {
  var this__8313 = this;
  if(this__8313.cnt === 0) {
    throw new Error("Can't pop empty vector");
  }else {
    if(1 === this__8313.cnt) {
      return cljs.core._with_meta.call(null, cljs.core.PersistentVector.EMPTY, this__8313.meta)
    }else {
      if(1 < this__8313.cnt - cljs.core.tail_off.call(null, coll)) {
        return new cljs.core.PersistentVector(this__8313.meta, this__8313.cnt - 1, this__8313.shift, this__8313.root, this__8313.tail.slice(0, -1), null)
      }else {
        if("\ufdd0'else") {
          var new_tail__8314 = cljs.core.array_for.call(null, coll, this__8313.cnt - 2);
          var nr__8315 = cljs.core.pop_tail.call(null, coll, this__8313.shift, this__8313.root);
          var new_root__8316 = nr__8315 == null ? cljs.core.PersistentVector.EMPTY_NODE : nr__8315;
          var cnt_1__8317 = this__8313.cnt - 1;
          if(function() {
            var and__3822__auto____8318 = 5 < this__8313.shift;
            if(and__3822__auto____8318) {
              return cljs.core.pv_aget.call(null, new_root__8316, 1) == null
            }else {
              return and__3822__auto____8318
            }
          }()) {
            return new cljs.core.PersistentVector(this__8313.meta, cnt_1__8317, this__8313.shift - 5, cljs.core.pv_aget.call(null, new_root__8316, 0), new_tail__8314, null)
          }else {
            return new cljs.core.PersistentVector(this__8313.meta, cnt_1__8317, this__8313.shift, new_root__8316, new_tail__8314, null)
          }
        }else {
          return null
        }
      }
    }
  }
};
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = function(coll, n, val) {
  var this__8319 = this;
  return coll.cljs$core$IAssociative$_assoc$arity$3(coll, n, val)
};
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__8320 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__8321 = this;
  return new cljs.core.PersistentVector(meta, this__8321.cnt, this__8321.shift, this__8321.root, this__8321.tail, this__8321.__hash)
};
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__8322 = this;
  return this__8322.meta
};
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = function(coll, n) {
  var this__8323 = this;
  return cljs.core.array_for.call(null, coll, n)[n & 31]
};
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = function(coll, n, not_found) {
  var this__8324 = this;
  if(function() {
    var and__3822__auto____8325 = 0 <= n;
    if(and__3822__auto____8325) {
      return n < this__8324.cnt
    }else {
      return and__3822__auto____8325
    }
  }()) {
    return coll.cljs$core$IIndexed$_nth$arity$2(coll, n)
  }else {
    return not_found
  }
};
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__8326 = this;
  return cljs.core.with_meta.call(null, cljs.core.PersistentVector.EMPTY, this__8326.meta)
};
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null, null);
cljs.core.PersistentVector.EMPTY = new cljs.core.PersistentVector(null, 0, 5, cljs.core.PersistentVector.EMPTY_NODE, [], 0);
cljs.core.PersistentVector.fromArray = function(xs, no_clone) {
  var l__8331 = xs.length;
  var xs__8332 = no_clone === true ? xs : xs.slice();
  if(l__8331 < 32) {
    return new cljs.core.PersistentVector(null, l__8331, 5, cljs.core.PersistentVector.EMPTY_NODE, xs__8332, null)
  }else {
    var node__8333 = xs__8332.slice(0, 32);
    var v__8334 = new cljs.core.PersistentVector(null, 32, 5, cljs.core.PersistentVector.EMPTY_NODE, node__8333, null);
    var i__8335 = 32;
    var out__8336 = cljs.core._as_transient.call(null, v__8334);
    while(true) {
      if(i__8335 < l__8331) {
        var G__8337 = i__8335 + 1;
        var G__8338 = cljs.core.conj_BANG_.call(null, out__8336, xs__8332[i__8335]);
        i__8335 = G__8337;
        out__8336 = G__8338;
        continue
      }else {
        return cljs.core.persistent_BANG_.call(null, out__8336)
      }
      break
    }
  }
};
cljs.core.vec = function vec(coll) {
  return cljs.core._persistent_BANG_.call(null, cljs.core.reduce.call(null, cljs.core._conj_BANG_, cljs.core._as_transient.call(null, cljs.core.PersistentVector.EMPTY), coll))
};
cljs.core.vector = function() {
  var vector__delegate = function(args) {
    return cljs.core.vec.call(null, args)
  };
  var vector = function(var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return vector__delegate.call(this, args)
  };
  vector.cljs$lang$maxFixedArity = 0;
  vector.cljs$lang$applyTo = function(arglist__8339) {
    var args = cljs.core.seq(arglist__8339);
    return vector__delegate(args)
  };
  vector.cljs$lang$arity$variadic = vector__delegate;
  return vector
}();
cljs.core.ChunkedSeq = function(vec, node, i, off, meta) {
  this.vec = vec;
  this.node = node;
  this.i = i;
  this.off = off;
  this.meta = meta;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 27525356
};
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/ChunkedSeq")
};
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = function(coll) {
  var this__8340 = this;
  if(this__8340.off + 1 < this__8340.node.length) {
    var s__8341 = cljs.core.chunked_seq.call(null, this__8340.vec, this__8340.node, this__8340.i, this__8340.off + 1);
    if(s__8341 == null) {
      return null
    }else {
      return s__8341
    }
  }else {
    return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll)
  }
};
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__8342 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__8343 = this;
  return coll
};
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = function(coll) {
  var this__8344 = this;
  return this__8344.node[this__8344.off]
};
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(coll) {
  var this__8345 = this;
  if(this__8345.off + 1 < this__8345.node.length) {
    var s__8346 = cljs.core.chunked_seq.call(null, this__8345.vec, this__8345.node, this__8345.i, this__8345.off + 1);
    if(s__8346 == null) {
      return cljs.core.List.EMPTY
    }else {
      return s__8346
    }
  }else {
    return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll)
  }
};
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = function(coll) {
  var this__8347 = this;
  var l__8348 = this__8347.node.length;
  var s__8349 = this__8347.i + l__8348 < cljs.core._count.call(null, this__8347.vec) ? cljs.core.chunked_seq.call(null, this__8347.vec, this__8347.i + l__8348, 0) : null;
  if(s__8349 == null) {
    return null
  }else {
    return s__8349
  }
};
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__8350 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, m) {
  var this__8351 = this;
  return cljs.core.chunked_seq.call(null, this__8351.vec, this__8351.node, this__8351.i, this__8351.off, m)
};
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = function(coll) {
  var this__8352 = this;
  return this__8352.meta
};
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__8353 = this;
  return cljs.core.with_meta.call(null, cljs.core.PersistentVector.EMPTY, this__8353.meta)
};
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = function(coll) {
  var this__8354 = this;
  return cljs.core.array_chunk.call(null, this__8354.node, this__8354.off)
};
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = function(coll) {
  var this__8355 = this;
  var l__8356 = this__8355.node.length;
  var s__8357 = this__8355.i + l__8356 < cljs.core._count.call(null, this__8355.vec) ? cljs.core.chunked_seq.call(null, this__8355.vec, this__8355.i + l__8356, 0) : null;
  if(s__8357 == null) {
    return cljs.core.List.EMPTY
  }else {
    return s__8357
  }
};
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = function() {
  var chunked_seq = null;
  var chunked_seq__3 = function(vec, i, off) {
    return chunked_seq.call(null, vec, cljs.core.array_for.call(null, vec, i), i, off, null)
  };
  var chunked_seq__4 = function(vec, node, i, off) {
    return chunked_seq.call(null, vec, node, i, off, null)
  };
  var chunked_seq__5 = function(vec, node, i, off, meta) {
    return new cljs.core.ChunkedSeq(vec, node, i, off, meta)
  };
  chunked_seq = function(vec, node, i, off, meta) {
    switch(arguments.length) {
      case 3:
        return chunked_seq__3.call(this, vec, node, i);
      case 4:
        return chunked_seq__4.call(this, vec, node, i, off);
      case 5:
        return chunked_seq__5.call(this, vec, node, i, off, meta)
    }
    throw"Invalid arity: " + arguments.length;
  };
  chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
  chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
  chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
  return chunked_seq
}();
cljs.core.Subvec = function(meta, v, start, end, __hash) {
  this.meta = meta;
  this.v = v;
  this.start = start;
  this.end = end;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 32400159
};
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/Subvec")
};
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__8360 = this;
  var h__2218__auto____8361 = this__8360.__hash;
  if(!(h__2218__auto____8361 == null)) {
    return h__2218__auto____8361
  }else {
    var h__2218__auto____8362 = cljs.core.hash_coll.call(null, coll);
    this__8360.__hash = h__2218__auto____8362;
    return h__2218__auto____8362
  }
};
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = function(coll, k) {
  var this__8363 = this;
  return coll.cljs$core$IIndexed$_nth$arity$3(coll, k, null)
};
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = function(coll, k, not_found) {
  var this__8364 = this;
  return coll.cljs$core$IIndexed$_nth$arity$3(coll, k, not_found)
};
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(coll, key, val) {
  var this__8365 = this;
  var v_pos__8366 = this__8365.start + key;
  return new cljs.core.Subvec(this__8365.meta, cljs.core._assoc.call(null, this__8365.v, v_pos__8366, val), this__8365.start, this__8365.end > v_pos__8366 + 1 ? this__8365.end : v_pos__8366 + 1, null)
};
cljs.core.Subvec.prototype.call = function() {
  var G__8392 = null;
  var G__8392__2 = function(this_sym8367, k) {
    var this__8369 = this;
    var this_sym8367__8370 = this;
    var coll__8371 = this_sym8367__8370;
    return coll__8371.cljs$core$ILookup$_lookup$arity$2(coll__8371, k)
  };
  var G__8392__3 = function(this_sym8368, k, not_found) {
    var this__8369 = this;
    var this_sym8368__8372 = this;
    var coll__8373 = this_sym8368__8372;
    return coll__8373.cljs$core$ILookup$_lookup$arity$3(coll__8373, k, not_found)
  };
  G__8392 = function(this_sym8368, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__8392__2.call(this, this_sym8368, k);
      case 3:
        return G__8392__3.call(this, this_sym8368, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__8392
}();
cljs.core.Subvec.prototype.apply = function(this_sym8358, args8359) {
  var this__8374 = this;
  return this_sym8358.call.apply(this_sym8358, [this_sym8358].concat(args8359.slice()))
};
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__8375 = this;
  return new cljs.core.Subvec(this__8375.meta, cljs.core._assoc_n.call(null, this__8375.v, this__8375.end, o), this__8375.start, this__8375.end + 1, null)
};
cljs.core.Subvec.prototype.toString = function() {
  var this__8376 = this;
  var this__8377 = this;
  return cljs.core.pr_str.call(null, this__8377)
};
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = function(coll, f) {
  var this__8378 = this;
  return cljs.core.ci_reduce.call(null, coll, f)
};
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = function(coll, f, start) {
  var this__8379 = this;
  return cljs.core.ci_reduce.call(null, coll, f, start)
};
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__8380 = this;
  var subvec_seq__8381 = function subvec_seq(i) {
    if(i === this__8380.end) {
      return null
    }else {
      return cljs.core.cons.call(null, cljs.core._nth.call(null, this__8380.v, i), new cljs.core.LazySeq(null, false, function() {
        return subvec_seq.call(null, i + 1)
      }, null))
    }
  };
  return subvec_seq__8381.call(null, this__8380.start)
};
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__8382 = this;
  return this__8382.end - this__8382.start
};
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = function(coll) {
  var this__8383 = this;
  return cljs.core._nth.call(null, this__8383.v, this__8383.end - 1)
};
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = function(coll) {
  var this__8384 = this;
  if(this__8384.start === this__8384.end) {
    throw new Error("Can't pop empty vector");
  }else {
    return new cljs.core.Subvec(this__8384.meta, this__8384.v, this__8384.start, this__8384.end - 1, null)
  }
};
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = function(coll, n, val) {
  var this__8385 = this;
  return coll.cljs$core$IAssociative$_assoc$arity$3(coll, n, val)
};
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__8386 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__8387 = this;
  return new cljs.core.Subvec(meta, this__8387.v, this__8387.start, this__8387.end, this__8387.__hash)
};
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__8388 = this;
  return this__8388.meta
};
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = function(coll, n) {
  var this__8389 = this;
  return cljs.core._nth.call(null, this__8389.v, this__8389.start + n)
};
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = function(coll, n, not_found) {
  var this__8390 = this;
  return cljs.core._nth.call(null, this__8390.v, this__8390.start + n, not_found)
};
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__8391 = this;
  return cljs.core.with_meta.call(null, cljs.core.Vector.EMPTY, this__8391.meta)
};
cljs.core.Subvec;
cljs.core.subvec = function() {
  var subvec = null;
  var subvec__2 = function(v, start) {
    return subvec.call(null, v, start, cljs.core.count.call(null, v))
  };
  var subvec__3 = function(v, start, end) {
    return new cljs.core.Subvec(null, v, start, end, null)
  };
  subvec = function(v, start, end) {
    switch(arguments.length) {
      case 2:
        return subvec__2.call(this, v, start);
      case 3:
        return subvec__3.call(this, v, start, end)
    }
    throw"Invalid arity: " + arguments.length;
  };
  subvec.cljs$lang$arity$2 = subvec__2;
  subvec.cljs$lang$arity$3 = subvec__3;
  return subvec
}();
cljs.core.tv_ensure_editable = function tv_ensure_editable(edit, node) {
  if(edit === node.edit) {
    return node
  }else {
    return new cljs.core.VectorNode(edit, node.arr.slice())
  }
};
cljs.core.tv_editable_root = function tv_editable_root(node) {
  return new cljs.core.VectorNode({}, node.arr.slice())
};
cljs.core.tv_editable_tail = function tv_editable_tail(tl) {
  var ret__8394 = cljs.core.make_array.call(null, 32);
  cljs.core.array_copy.call(null, tl, 0, ret__8394, 0, tl.length);
  return ret__8394
};
cljs.core.tv_push_tail = function tv_push_tail(tv, level, parent, tail_node) {
  var ret__8398 = cljs.core.tv_ensure_editable.call(null, tv.root.edit, parent);
  var subidx__8399 = tv.cnt - 1 >>> level & 31;
  cljs.core.pv_aset.call(null, ret__8398, subidx__8399, level === 5 ? tail_node : function() {
    var child__8400 = cljs.core.pv_aget.call(null, ret__8398, subidx__8399);
    if(!(child__8400 == null)) {
      return tv_push_tail.call(null, tv, level - 5, child__8400, tail_node)
    }else {
      return cljs.core.new_path.call(null, tv.root.edit, level - 5, tail_node)
    }
  }());
  return ret__8398
};
cljs.core.tv_pop_tail = function tv_pop_tail(tv, level, node) {
  var node__8405 = cljs.core.tv_ensure_editable.call(null, tv.root.edit, node);
  var subidx__8406 = tv.cnt - 2 >>> level & 31;
  if(level > 5) {
    var new_child__8407 = tv_pop_tail.call(null, tv, level - 5, cljs.core.pv_aget.call(null, node__8405, subidx__8406));
    if(function() {
      var and__3822__auto____8408 = new_child__8407 == null;
      if(and__3822__auto____8408) {
        return subidx__8406 === 0
      }else {
        return and__3822__auto____8408
      }
    }()) {
      return null
    }else {
      cljs.core.pv_aset.call(null, node__8405, subidx__8406, new_child__8407);
      return node__8405
    }
  }else {
    if(subidx__8406 === 0) {
      return null
    }else {
      if("\ufdd0'else") {
        cljs.core.pv_aset.call(null, node__8405, subidx__8406, null);
        return node__8405
      }else {
        return null
      }
    }
  }
};
cljs.core.editable_array_for = function editable_array_for(tv, i) {
  if(function() {
    var and__3822__auto____8413 = 0 <= i;
    if(and__3822__auto____8413) {
      return i < tv.cnt
    }else {
      return and__3822__auto____8413
    }
  }()) {
    if(i >= cljs.core.tail_off.call(null, tv)) {
      return tv.tail
    }else {
      var root__8414 = tv.root;
      var node__8415 = root__8414;
      var level__8416 = tv.shift;
      while(true) {
        if(level__8416 > 0) {
          var G__8417 = cljs.core.tv_ensure_editable.call(null, root__8414.edit, cljs.core.pv_aget.call(null, node__8415, i >>> level__8416 & 31));
          var G__8418 = level__8416 - 5;
          node__8415 = G__8417;
          level__8416 = G__8418;
          continue
        }else {
          return node__8415.arr
        }
        break
      }
    }
  }else {
    throw new Error([cljs.core.str("No item "), cljs.core.str(i), cljs.core.str(" in transient vector of length "), cljs.core.str(tv.cnt)].join(""));
  }
};
cljs.core.TransientVector = function(cnt, shift, root, tail) {
  this.cnt = cnt;
  this.shift = shift;
  this.root = root;
  this.tail = tail;
  this.cljs$lang$protocol_mask$partition0$ = 275;
  this.cljs$lang$protocol_mask$partition1$ = 22
};
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/TransientVector")
};
cljs.core.TransientVector.prototype.call = function() {
  var G__8458 = null;
  var G__8458__2 = function(this_sym8421, k) {
    var this__8423 = this;
    var this_sym8421__8424 = this;
    var coll__8425 = this_sym8421__8424;
    return coll__8425.cljs$core$ILookup$_lookup$arity$2(coll__8425, k)
  };
  var G__8458__3 = function(this_sym8422, k, not_found) {
    var this__8423 = this;
    var this_sym8422__8426 = this;
    var coll__8427 = this_sym8422__8426;
    return coll__8427.cljs$core$ILookup$_lookup$arity$3(coll__8427, k, not_found)
  };
  G__8458 = function(this_sym8422, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__8458__2.call(this, this_sym8422, k);
      case 3:
        return G__8458__3.call(this, this_sym8422, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__8458
}();
cljs.core.TransientVector.prototype.apply = function(this_sym8419, args8420) {
  var this__8428 = this;
  return this_sym8419.call.apply(this_sym8419, [this_sym8419].concat(args8420.slice()))
};
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = function(coll, k) {
  var this__8429 = this;
  return coll.cljs$core$IIndexed$_nth$arity$3(coll, k, null)
};
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = function(coll, k, not_found) {
  var this__8430 = this;
  return coll.cljs$core$IIndexed$_nth$arity$3(coll, k, not_found)
};
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = function(coll, n) {
  var this__8431 = this;
  if(this__8431.root.edit) {
    return cljs.core.array_for.call(null, coll, n)[n & 31]
  }else {
    throw new Error("nth after persistent!");
  }
};
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = function(coll, n, not_found) {
  var this__8432 = this;
  if(function() {
    var and__3822__auto____8433 = 0 <= n;
    if(and__3822__auto____8433) {
      return n < this__8432.cnt
    }else {
      return and__3822__auto____8433
    }
  }()) {
    return coll.cljs$core$IIndexed$_nth$arity$2(coll, n)
  }else {
    return not_found
  }
};
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__8434 = this;
  if(this__8434.root.edit) {
    return this__8434.cnt
  }else {
    throw new Error("count after persistent!");
  }
};
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = function(tcoll, n, val) {
  var this__8435 = this;
  if(this__8435.root.edit) {
    if(function() {
      var and__3822__auto____8436 = 0 <= n;
      if(and__3822__auto____8436) {
        return n < this__8435.cnt
      }else {
        return and__3822__auto____8436
      }
    }()) {
      if(cljs.core.tail_off.call(null, tcoll) <= n) {
        this__8435.tail[n & 31] = val;
        return tcoll
      }else {
        var new_root__8441 = function go(level, node) {
          var node__8439 = cljs.core.tv_ensure_editable.call(null, this__8435.root.edit, node);
          if(level === 0) {
            cljs.core.pv_aset.call(null, node__8439, n & 31, val);
            return node__8439
          }else {
            var subidx__8440 = n >>> level & 31;
            cljs.core.pv_aset.call(null, node__8439, subidx__8440, go.call(null, level - 5, cljs.core.pv_aget.call(null, node__8439, subidx__8440)));
            return node__8439
          }
        }.call(null, this__8435.shift, this__8435.root);
        this__8435.root = new_root__8441;
        return tcoll
      }
    }else {
      if(n === this__8435.cnt) {
        return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll, val)
      }else {
        if("\ufdd0'else") {
          throw new Error([cljs.core.str("Index "), cljs.core.str(n), cljs.core.str(" out of bounds for TransientVector of length"), cljs.core.str(this__8435.cnt)].join(""));
        }else {
          return null
        }
      }
    }
  }else {
    throw new Error("assoc! after persistent!");
  }
};
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = function(tcoll) {
  var this__8442 = this;
  if(this__8442.root.edit) {
    if(this__8442.cnt === 0) {
      throw new Error("Can't pop empty vector");
    }else {
      if(1 === this__8442.cnt) {
        this__8442.cnt = 0;
        return tcoll
      }else {
        if((this__8442.cnt - 1 & 31) > 0) {
          this__8442.cnt = this__8442.cnt - 1;
          return tcoll
        }else {
          if("\ufdd0'else") {
            var new_tail__8443 = cljs.core.editable_array_for.call(null, tcoll, this__8442.cnt - 2);
            var new_root__8445 = function() {
              var nr__8444 = cljs.core.tv_pop_tail.call(null, tcoll, this__8442.shift, this__8442.root);
              if(!(nr__8444 == null)) {
                return nr__8444
              }else {
                return new cljs.core.VectorNode(this__8442.root.edit, cljs.core.make_array.call(null, 32))
              }
            }();
            if(function() {
              var and__3822__auto____8446 = 5 < this__8442.shift;
              if(and__3822__auto____8446) {
                return cljs.core.pv_aget.call(null, new_root__8445, 1) == null
              }else {
                return and__3822__auto____8446
              }
            }()) {
              var new_root__8447 = cljs.core.tv_ensure_editable.call(null, this__8442.root.edit, cljs.core.pv_aget.call(null, new_root__8445, 0));
              this__8442.root = new_root__8447;
              this__8442.shift = this__8442.shift - 5;
              this__8442.cnt = this__8442.cnt - 1;
              this__8442.tail = new_tail__8443;
              return tcoll
            }else {
              this__8442.root = new_root__8445;
              this__8442.cnt = this__8442.cnt - 1;
              this__8442.tail = new_tail__8443;
              return tcoll
            }
          }else {
            return null
          }
        }
      }
    }
  }else {
    throw new Error("pop! after persistent!");
  }
};
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = function(tcoll, key, val) {
  var this__8448 = this;
  return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll, key, val)
};
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = function(tcoll, o) {
  var this__8449 = this;
  if(this__8449.root.edit) {
    if(this__8449.cnt - cljs.core.tail_off.call(null, tcoll) < 32) {
      this__8449.tail[this__8449.cnt & 31] = o;
      this__8449.cnt = this__8449.cnt + 1;
      return tcoll
    }else {
      var tail_node__8450 = new cljs.core.VectorNode(this__8449.root.edit, this__8449.tail);
      var new_tail__8451 = cljs.core.make_array.call(null, 32);
      new_tail__8451[0] = o;
      this__8449.tail = new_tail__8451;
      if(this__8449.cnt >>> 5 > 1 << this__8449.shift) {
        var new_root_array__8452 = cljs.core.make_array.call(null, 32);
        var new_shift__8453 = this__8449.shift + 5;
        new_root_array__8452[0] = this__8449.root;
        new_root_array__8452[1] = cljs.core.new_path.call(null, this__8449.root.edit, this__8449.shift, tail_node__8450);
        this__8449.root = new cljs.core.VectorNode(this__8449.root.edit, new_root_array__8452);
        this__8449.shift = new_shift__8453;
        this__8449.cnt = this__8449.cnt + 1;
        return tcoll
      }else {
        var new_root__8454 = cljs.core.tv_push_tail.call(null, tcoll, this__8449.shift, this__8449.root, tail_node__8450);
        this__8449.root = new_root__8454;
        this__8449.cnt = this__8449.cnt + 1;
        return tcoll
      }
    }
  }else {
    throw new Error("conj! after persistent!");
  }
};
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = function(tcoll) {
  var this__8455 = this;
  if(this__8455.root.edit) {
    this__8455.root.edit = null;
    var len__8456 = this__8455.cnt - cljs.core.tail_off.call(null, tcoll);
    var trimmed_tail__8457 = cljs.core.make_array.call(null, len__8456);
    cljs.core.array_copy.call(null, this__8455.tail, 0, trimmed_tail__8457, 0, len__8456);
    return new cljs.core.PersistentVector(null, this__8455.cnt, this__8455.shift, this__8455.root, trimmed_tail__8457, null)
  }else {
    throw new Error("persistent! called twice");
  }
};
cljs.core.TransientVector;
cljs.core.PersistentQueueSeq = function(meta, front, rear, __hash) {
  this.meta = meta;
  this.front = front;
  this.rear = rear;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 31850572
};
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/PersistentQueueSeq")
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__8459 = this;
  var h__2218__auto____8460 = this__8459.__hash;
  if(!(h__2218__auto____8460 == null)) {
    return h__2218__auto____8460
  }else {
    var h__2218__auto____8461 = cljs.core.hash_coll.call(null, coll);
    this__8459.__hash = h__2218__auto____8461;
    return h__2218__auto____8461
  }
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__8462 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.PersistentQueueSeq.prototype.toString = function() {
  var this__8463 = this;
  var this__8464 = this;
  return cljs.core.pr_str.call(null, this__8464)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__8465 = this;
  return coll
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = function(coll) {
  var this__8466 = this;
  return cljs.core._first.call(null, this__8466.front)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(coll) {
  var this__8467 = this;
  var temp__3971__auto____8468 = cljs.core.next.call(null, this__8467.front);
  if(temp__3971__auto____8468) {
    var f1__8469 = temp__3971__auto____8468;
    return new cljs.core.PersistentQueueSeq(this__8467.meta, f1__8469, this__8467.rear, null)
  }else {
    if(this__8467.rear == null) {
      return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll)
    }else {
      return new cljs.core.PersistentQueueSeq(this__8467.meta, this__8467.rear, null, null)
    }
  }
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__8470 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__8471 = this;
  return new cljs.core.PersistentQueueSeq(meta, this__8471.front, this__8471.rear, this__8471.__hash)
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__8472 = this;
  return this__8472.meta
};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__8473 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__8473.meta)
};
cljs.core.PersistentQueueSeq;
cljs.core.PersistentQueue = function(meta, count, front, rear, __hash) {
  this.meta = meta;
  this.count = count;
  this.front = front;
  this.rear = rear;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 31858766
};
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/PersistentQueue")
};
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__8474 = this;
  var h__2218__auto____8475 = this__8474.__hash;
  if(!(h__2218__auto____8475 == null)) {
    return h__2218__auto____8475
  }else {
    var h__2218__auto____8476 = cljs.core.hash_coll.call(null, coll);
    this__8474.__hash = h__2218__auto____8476;
    return h__2218__auto____8476
  }
};
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__8477 = this;
  if(cljs.core.truth_(this__8477.front)) {
    return new cljs.core.PersistentQueue(this__8477.meta, this__8477.count + 1, this__8477.front, cljs.core.conj.call(null, function() {
      var or__3824__auto____8478 = this__8477.rear;
      if(cljs.core.truth_(or__3824__auto____8478)) {
        return or__3824__auto____8478
      }else {
        return cljs.core.PersistentVector.EMPTY
      }
    }(), o), null)
  }else {
    return new cljs.core.PersistentQueue(this__8477.meta, this__8477.count + 1, cljs.core.conj.call(null, this__8477.front, o), cljs.core.PersistentVector.EMPTY, null)
  }
};
cljs.core.PersistentQueue.prototype.toString = function() {
  var this__8479 = this;
  var this__8480 = this;
  return cljs.core.pr_str.call(null, this__8480)
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__8481 = this;
  var rear__8482 = cljs.core.seq.call(null, this__8481.rear);
  if(cljs.core.truth_(function() {
    var or__3824__auto____8483 = this__8481.front;
    if(cljs.core.truth_(or__3824__auto____8483)) {
      return or__3824__auto____8483
    }else {
      return rear__8482
    }
  }())) {
    return new cljs.core.PersistentQueueSeq(null, this__8481.front, cljs.core.seq.call(null, rear__8482), null)
  }else {
    return null
  }
};
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__8484 = this;
  return this__8484.count
};
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = function(coll) {
  var this__8485 = this;
  return cljs.core._first.call(null, this__8485.front)
};
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = function(coll) {
  var this__8486 = this;
  if(cljs.core.truth_(this__8486.front)) {
    var temp__3971__auto____8487 = cljs.core.next.call(null, this__8486.front);
    if(temp__3971__auto____8487) {
      var f1__8488 = temp__3971__auto____8487;
      return new cljs.core.PersistentQueue(this__8486.meta, this__8486.count - 1, f1__8488, this__8486.rear, null)
    }else {
      return new cljs.core.PersistentQueue(this__8486.meta, this__8486.count - 1, cljs.core.seq.call(null, this__8486.rear), cljs.core.PersistentVector.EMPTY, null)
    }
  }else {
    return coll
  }
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = function(coll) {
  var this__8489 = this;
  return cljs.core.first.call(null, this__8489.front)
};
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = function(coll) {
  var this__8490 = this;
  return cljs.core.rest.call(null, cljs.core.seq.call(null, coll))
};
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__8491 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__8492 = this;
  return new cljs.core.PersistentQueue(meta, this__8492.count, this__8492.front, this__8492.rear, this__8492.__hash)
};
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__8493 = this;
  return this__8493.meta
};
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__8494 = this;
  return cljs.core.PersistentQueue.EMPTY
};
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = new cljs.core.PersistentQueue(null, 0, null, cljs.core.PersistentVector.EMPTY, 0);
cljs.core.NeverEquiv = function() {
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 2097152
};
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/NeverEquiv")
};
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(o, other) {
  var this__8495 = this;
  return false
};
cljs.core.NeverEquiv;
cljs.core.never_equiv = new cljs.core.NeverEquiv;
cljs.core.equiv_map = function equiv_map(x, y) {
  return cljs.core.boolean$.call(null, cljs.core.map_QMARK_.call(null, y) ? cljs.core.count.call(null, x) === cljs.core.count.call(null, y) ? cljs.core.every_QMARK_.call(null, cljs.core.identity, cljs.core.map.call(null, function(xkv) {
    return cljs.core._EQ_.call(null, cljs.core._lookup.call(null, y, cljs.core.first.call(null, xkv), cljs.core.never_equiv), cljs.core.second.call(null, xkv))
  }, x)) : null : null)
};
cljs.core.scan_array = function scan_array(incr, k, array) {
  var len__8498 = array.length;
  var i__8499 = 0;
  while(true) {
    if(i__8499 < len__8498) {
      if(k === array[i__8499]) {
        return i__8499
      }else {
        var G__8500 = i__8499 + incr;
        i__8499 = G__8500;
        continue
      }
    }else {
      return null
    }
    break
  }
};
cljs.core.obj_map_compare_keys = function obj_map_compare_keys(a, b) {
  var a__8503 = cljs.core.hash.call(null, a);
  var b__8504 = cljs.core.hash.call(null, b);
  if(a__8503 < b__8504) {
    return-1
  }else {
    if(a__8503 > b__8504) {
      return 1
    }else {
      if("\ufdd0'else") {
        return 0
      }else {
        return null
      }
    }
  }
};
cljs.core.obj_map__GT_hash_map = function obj_map__GT_hash_map(m, k, v) {
  var ks__8512 = m.keys;
  var len__8513 = ks__8512.length;
  var so__8514 = m.strobj;
  var out__8515 = cljs.core.with_meta.call(null, cljs.core.PersistentHashMap.EMPTY, cljs.core.meta.call(null, m));
  var i__8516 = 0;
  var out__8517 = cljs.core.transient$.call(null, out__8515);
  while(true) {
    if(i__8516 < len__8513) {
      var k__8518 = ks__8512[i__8516];
      var G__8519 = i__8516 + 1;
      var G__8520 = cljs.core.assoc_BANG_.call(null, out__8517, k__8518, so__8514[k__8518]);
      i__8516 = G__8519;
      out__8517 = G__8520;
      continue
    }else {
      return cljs.core.persistent_BANG_.call(null, cljs.core.assoc_BANG_.call(null, out__8517, k, v))
    }
    break
  }
};
cljs.core.obj_clone = function obj_clone(obj, ks) {
  var new_obj__8526 = {};
  var l__8527 = ks.length;
  var i__8528 = 0;
  while(true) {
    if(i__8528 < l__8527) {
      var k__8529 = ks[i__8528];
      new_obj__8526[k__8529] = obj[k__8529];
      var G__8530 = i__8528 + 1;
      i__8528 = G__8530;
      continue
    }else {
    }
    break
  }
  return new_obj__8526
};
cljs.core.ObjMap = function(meta, keys, strobj, update_count, __hash) {
  this.meta = meta;
  this.keys = keys;
  this.strobj = strobj;
  this.update_count = update_count;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 1;
  this.cljs$lang$protocol_mask$partition0$ = 15075087
};
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/ObjMap")
};
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = function(coll) {
  var this__8533 = this;
  return cljs.core.transient$.call(null, cljs.core.into.call(null, cljs.core.hash_map.call(null), coll))
};
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__8534 = this;
  var h__2218__auto____8535 = this__8534.__hash;
  if(!(h__2218__auto____8535 == null)) {
    return h__2218__auto____8535
  }else {
    var h__2218__auto____8536 = cljs.core.hash_imap.call(null, coll);
    this__8534.__hash = h__2218__auto____8536;
    return h__2218__auto____8536
  }
};
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(coll, k) {
  var this__8537 = this;
  return coll.cljs$core$ILookup$_lookup$arity$3(coll, k, null)
};
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(coll, k, not_found) {
  var this__8538 = this;
  if(function() {
    var and__3822__auto____8539 = goog.isString(k);
    if(and__3822__auto____8539) {
      return!(cljs.core.scan_array.call(null, 1, k, this__8538.keys) == null)
    }else {
      return and__3822__auto____8539
    }
  }()) {
    return this__8538.strobj[k]
  }else {
    return not_found
  }
};
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(coll, k, v) {
  var this__8540 = this;
  if(goog.isString(k)) {
    if(function() {
      var or__3824__auto____8541 = this__8540.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD;
      if(or__3824__auto____8541) {
        return or__3824__auto____8541
      }else {
        return this__8540.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD
      }
    }()) {
      return cljs.core.obj_map__GT_hash_map.call(null, coll, k, v)
    }else {
      if(!(cljs.core.scan_array.call(null, 1, k, this__8540.keys) == null)) {
        var new_strobj__8542 = cljs.core.obj_clone.call(null, this__8540.strobj, this__8540.keys);
        new_strobj__8542[k] = v;
        return new cljs.core.ObjMap(this__8540.meta, this__8540.keys, new_strobj__8542, this__8540.update_count + 1, null)
      }else {
        var new_strobj__8543 = cljs.core.obj_clone.call(null, this__8540.strobj, this__8540.keys);
        var new_keys__8544 = this__8540.keys.slice();
        new_strobj__8543[k] = v;
        new_keys__8544.push(k);
        return new cljs.core.ObjMap(this__8540.meta, new_keys__8544, new_strobj__8543, this__8540.update_count + 1, null)
      }
    }
  }else {
    return cljs.core.obj_map__GT_hash_map.call(null, coll, k, v)
  }
};
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(coll, k) {
  var this__8545 = this;
  if(function() {
    var and__3822__auto____8546 = goog.isString(k);
    if(and__3822__auto____8546) {
      return!(cljs.core.scan_array.call(null, 1, k, this__8545.keys) == null)
    }else {
      return and__3822__auto____8546
    }
  }()) {
    return true
  }else {
    return false
  }
};
cljs.core.ObjMap.prototype.call = function() {
  var G__8568 = null;
  var G__8568__2 = function(this_sym8547, k) {
    var this__8549 = this;
    var this_sym8547__8550 = this;
    var coll__8551 = this_sym8547__8550;
    return coll__8551.cljs$core$ILookup$_lookup$arity$2(coll__8551, k)
  };
  var G__8568__3 = function(this_sym8548, k, not_found) {
    var this__8549 = this;
    var this_sym8548__8552 = this;
    var coll__8553 = this_sym8548__8552;
    return coll__8553.cljs$core$ILookup$_lookup$arity$3(coll__8553, k, not_found)
  };
  G__8568 = function(this_sym8548, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__8568__2.call(this, this_sym8548, k);
      case 3:
        return G__8568__3.call(this, this_sym8548, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__8568
}();
cljs.core.ObjMap.prototype.apply = function(this_sym8531, args8532) {
  var this__8554 = this;
  return this_sym8531.call.apply(this_sym8531, [this_sym8531].concat(args8532.slice()))
};
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, entry) {
  var this__8555 = this;
  if(cljs.core.vector_QMARK_.call(null, entry)) {
    return coll.cljs$core$IAssociative$_assoc$arity$3(coll, cljs.core._nth.call(null, entry, 0), cljs.core._nth.call(null, entry, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, coll, entry)
  }
};
cljs.core.ObjMap.prototype.toString = function() {
  var this__8556 = this;
  var this__8557 = this;
  return cljs.core.pr_str.call(null, this__8557)
};
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__8558 = this;
  if(this__8558.keys.length > 0) {
    return cljs.core.map.call(null, function(p1__8521_SHARP_) {
      return cljs.core.vector.call(null, p1__8521_SHARP_, this__8558.strobj[p1__8521_SHARP_])
    }, this__8558.keys.sort(cljs.core.obj_map_compare_keys))
  }else {
    return null
  }
};
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__8559 = this;
  return this__8559.keys.length
};
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__8560 = this;
  return cljs.core.equiv_map.call(null, coll, other)
};
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__8561 = this;
  return new cljs.core.ObjMap(meta, this__8561.keys, this__8561.strobj, this__8561.update_count, this__8561.__hash)
};
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__8562 = this;
  return this__8562.meta
};
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__8563 = this;
  return cljs.core.with_meta.call(null, cljs.core.ObjMap.EMPTY, this__8563.meta)
};
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = function(coll, k) {
  var this__8564 = this;
  if(function() {
    var and__3822__auto____8565 = goog.isString(k);
    if(and__3822__auto____8565) {
      return!(cljs.core.scan_array.call(null, 1, k, this__8564.keys) == null)
    }else {
      return and__3822__auto____8565
    }
  }()) {
    var new_keys__8566 = this__8564.keys.slice();
    var new_strobj__8567 = cljs.core.obj_clone.call(null, this__8564.strobj, this__8564.keys);
    new_keys__8566.splice(cljs.core.scan_array.call(null, 1, k, new_keys__8566), 1);
    cljs.core.js_delete.call(null, new_strobj__8567, k);
    return new cljs.core.ObjMap(this__8564.meta, new_keys__8566, new_strobj__8567, this__8564.update_count + 1, null)
  }else {
    return coll
  }
};
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = new cljs.core.ObjMap(null, [], {}, 0, 0);
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = function(ks, obj) {
  return new cljs.core.ObjMap(null, ks, obj, 0, null)
};
cljs.core.HashMap = function(meta, count, hashobj, __hash) {
  this.meta = meta;
  this.count = count;
  this.hashobj = hashobj;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 15075087
};
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/HashMap")
};
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__8572 = this;
  var h__2218__auto____8573 = this__8572.__hash;
  if(!(h__2218__auto____8573 == null)) {
    return h__2218__auto____8573
  }else {
    var h__2218__auto____8574 = cljs.core.hash_imap.call(null, coll);
    this__8572.__hash = h__2218__auto____8574;
    return h__2218__auto____8574
  }
};
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(coll, k) {
  var this__8575 = this;
  return coll.cljs$core$ILookup$_lookup$arity$3(coll, k, null)
};
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(coll, k, not_found) {
  var this__8576 = this;
  var bucket__8577 = this__8576.hashobj[cljs.core.hash.call(null, k)];
  var i__8578 = cljs.core.truth_(bucket__8577) ? cljs.core.scan_array.call(null, 2, k, bucket__8577) : null;
  if(cljs.core.truth_(i__8578)) {
    return bucket__8577[i__8578 + 1]
  }else {
    return not_found
  }
};
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(coll, k, v) {
  var this__8579 = this;
  var h__8580 = cljs.core.hash.call(null, k);
  var bucket__8581 = this__8579.hashobj[h__8580];
  if(cljs.core.truth_(bucket__8581)) {
    var new_bucket__8582 = bucket__8581.slice();
    var new_hashobj__8583 = goog.object.clone(this__8579.hashobj);
    new_hashobj__8583[h__8580] = new_bucket__8582;
    var temp__3971__auto____8584 = cljs.core.scan_array.call(null, 2, k, new_bucket__8582);
    if(cljs.core.truth_(temp__3971__auto____8584)) {
      var i__8585 = temp__3971__auto____8584;
      new_bucket__8582[i__8585 + 1] = v;
      return new cljs.core.HashMap(this__8579.meta, this__8579.count, new_hashobj__8583, null)
    }else {
      new_bucket__8582.push(k, v);
      return new cljs.core.HashMap(this__8579.meta, this__8579.count + 1, new_hashobj__8583, null)
    }
  }else {
    var new_hashobj__8586 = goog.object.clone(this__8579.hashobj);
    new_hashobj__8586[h__8580] = [k, v];
    return new cljs.core.HashMap(this__8579.meta, this__8579.count + 1, new_hashobj__8586, null)
  }
};
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(coll, k) {
  var this__8587 = this;
  var bucket__8588 = this__8587.hashobj[cljs.core.hash.call(null, k)];
  var i__8589 = cljs.core.truth_(bucket__8588) ? cljs.core.scan_array.call(null, 2, k, bucket__8588) : null;
  if(cljs.core.truth_(i__8589)) {
    return true
  }else {
    return false
  }
};
cljs.core.HashMap.prototype.call = function() {
  var G__8614 = null;
  var G__8614__2 = function(this_sym8590, k) {
    var this__8592 = this;
    var this_sym8590__8593 = this;
    var coll__8594 = this_sym8590__8593;
    return coll__8594.cljs$core$ILookup$_lookup$arity$2(coll__8594, k)
  };
  var G__8614__3 = function(this_sym8591, k, not_found) {
    var this__8592 = this;
    var this_sym8591__8595 = this;
    var coll__8596 = this_sym8591__8595;
    return coll__8596.cljs$core$ILookup$_lookup$arity$3(coll__8596, k, not_found)
  };
  G__8614 = function(this_sym8591, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__8614__2.call(this, this_sym8591, k);
      case 3:
        return G__8614__3.call(this, this_sym8591, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__8614
}();
cljs.core.HashMap.prototype.apply = function(this_sym8570, args8571) {
  var this__8597 = this;
  return this_sym8570.call.apply(this_sym8570, [this_sym8570].concat(args8571.slice()))
};
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, entry) {
  var this__8598 = this;
  if(cljs.core.vector_QMARK_.call(null, entry)) {
    return coll.cljs$core$IAssociative$_assoc$arity$3(coll, cljs.core._nth.call(null, entry, 0), cljs.core._nth.call(null, entry, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, coll, entry)
  }
};
cljs.core.HashMap.prototype.toString = function() {
  var this__8599 = this;
  var this__8600 = this;
  return cljs.core.pr_str.call(null, this__8600)
};
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__8601 = this;
  if(this__8601.count > 0) {
    var hashes__8602 = cljs.core.js_keys.call(null, this__8601.hashobj).sort();
    return cljs.core.mapcat.call(null, function(p1__8569_SHARP_) {
      return cljs.core.map.call(null, cljs.core.vec, cljs.core.partition.call(null, 2, this__8601.hashobj[p1__8569_SHARP_]))
    }, hashes__8602)
  }else {
    return null
  }
};
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__8603 = this;
  return this__8603.count
};
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__8604 = this;
  return cljs.core.equiv_map.call(null, coll, other)
};
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__8605 = this;
  return new cljs.core.HashMap(meta, this__8605.count, this__8605.hashobj, this__8605.__hash)
};
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__8606 = this;
  return this__8606.meta
};
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__8607 = this;
  return cljs.core.with_meta.call(null, cljs.core.HashMap.EMPTY, this__8607.meta)
};
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = function(coll, k) {
  var this__8608 = this;
  var h__8609 = cljs.core.hash.call(null, k);
  var bucket__8610 = this__8608.hashobj[h__8609];
  var i__8611 = cljs.core.truth_(bucket__8610) ? cljs.core.scan_array.call(null, 2, k, bucket__8610) : null;
  if(cljs.core.not.call(null, i__8611)) {
    return coll
  }else {
    var new_hashobj__8612 = goog.object.clone(this__8608.hashobj);
    if(3 > bucket__8610.length) {
      cljs.core.js_delete.call(null, new_hashobj__8612, h__8609)
    }else {
      var new_bucket__8613 = bucket__8610.slice();
      new_bucket__8613.splice(i__8611, 2);
      new_hashobj__8612[h__8609] = new_bucket__8613
    }
    return new cljs.core.HashMap(this__8608.meta, this__8608.count - 1, new_hashobj__8612, null)
  }
};
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = new cljs.core.HashMap(null, 0, {}, 0);
cljs.core.HashMap.fromArrays = function(ks, vs) {
  var len__8615 = ks.length;
  var i__8616 = 0;
  var out__8617 = cljs.core.HashMap.EMPTY;
  while(true) {
    if(i__8616 < len__8615) {
      var G__8618 = i__8616 + 1;
      var G__8619 = cljs.core.assoc.call(null, out__8617, ks[i__8616], vs[i__8616]);
      i__8616 = G__8618;
      out__8617 = G__8619;
      continue
    }else {
      return out__8617
    }
    break
  }
};
cljs.core.array_map_index_of = function array_map_index_of(m, k) {
  var arr__8623 = m.arr;
  var len__8624 = arr__8623.length;
  var i__8625 = 0;
  while(true) {
    if(len__8624 <= i__8625) {
      return-1
    }else {
      if(cljs.core._EQ_.call(null, arr__8623[i__8625], k)) {
        return i__8625
      }else {
        if("\ufdd0'else") {
          var G__8626 = i__8625 + 2;
          i__8625 = G__8626;
          continue
        }else {
          return null
        }
      }
    }
    break
  }
};
cljs.core.PersistentArrayMap = function(meta, cnt, arr, __hash) {
  this.meta = meta;
  this.cnt = cnt;
  this.arr = arr;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 1;
  this.cljs$lang$protocol_mask$partition0$ = 16123663
};
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/PersistentArrayMap")
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = function(coll) {
  var this__8629 = this;
  return new cljs.core.TransientArrayMap({}, this__8629.arr.length, this__8629.arr.slice())
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__8630 = this;
  var h__2218__auto____8631 = this__8630.__hash;
  if(!(h__2218__auto____8631 == null)) {
    return h__2218__auto____8631
  }else {
    var h__2218__auto____8632 = cljs.core.hash_imap.call(null, coll);
    this__8630.__hash = h__2218__auto____8632;
    return h__2218__auto____8632
  }
};
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(coll, k) {
  var this__8633 = this;
  return coll.cljs$core$ILookup$_lookup$arity$3(coll, k, null)
};
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(coll, k, not_found) {
  var this__8634 = this;
  var idx__8635 = cljs.core.array_map_index_of.call(null, coll, k);
  if(idx__8635 === -1) {
    return not_found
  }else {
    return this__8634.arr[idx__8635 + 1]
  }
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(coll, k, v) {
  var this__8636 = this;
  var idx__8637 = cljs.core.array_map_index_of.call(null, coll, k);
  if(idx__8637 === -1) {
    if(this__8636.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD) {
      return new cljs.core.PersistentArrayMap(this__8636.meta, this__8636.cnt + 1, function() {
        var G__8638__8639 = this__8636.arr.slice();
        G__8638__8639.push(k);
        G__8638__8639.push(v);
        return G__8638__8639
      }(), null)
    }else {
      return cljs.core.persistent_BANG_.call(null, cljs.core.assoc_BANG_.call(null, cljs.core.transient$.call(null, cljs.core.into.call(null, cljs.core.PersistentHashMap.EMPTY, coll)), k, v))
    }
  }else {
    if(v === this__8636.arr[idx__8637 + 1]) {
      return coll
    }else {
      if("\ufdd0'else") {
        return new cljs.core.PersistentArrayMap(this__8636.meta, this__8636.cnt, function() {
          var G__8640__8641 = this__8636.arr.slice();
          G__8640__8641[idx__8637 + 1] = v;
          return G__8640__8641
        }(), null)
      }else {
        return null
      }
    }
  }
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(coll, k) {
  var this__8642 = this;
  return!(cljs.core.array_map_index_of.call(null, coll, k) === -1)
};
cljs.core.PersistentArrayMap.prototype.call = function() {
  var G__8674 = null;
  var G__8674__2 = function(this_sym8643, k) {
    var this__8645 = this;
    var this_sym8643__8646 = this;
    var coll__8647 = this_sym8643__8646;
    return coll__8647.cljs$core$ILookup$_lookup$arity$2(coll__8647, k)
  };
  var G__8674__3 = function(this_sym8644, k, not_found) {
    var this__8645 = this;
    var this_sym8644__8648 = this;
    var coll__8649 = this_sym8644__8648;
    return coll__8649.cljs$core$ILookup$_lookup$arity$3(coll__8649, k, not_found)
  };
  G__8674 = function(this_sym8644, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__8674__2.call(this, this_sym8644, k);
      case 3:
        return G__8674__3.call(this, this_sym8644, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__8674
}();
cljs.core.PersistentArrayMap.prototype.apply = function(this_sym8627, args8628) {
  var this__8650 = this;
  return this_sym8627.call.apply(this_sym8627, [this_sym8627].concat(args8628.slice()))
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function(coll, f, init) {
  var this__8651 = this;
  var len__8652 = this__8651.arr.length;
  var i__8653 = 0;
  var init__8654 = init;
  while(true) {
    if(i__8653 < len__8652) {
      var init__8655 = f.call(null, init__8654, this__8651.arr[i__8653], this__8651.arr[i__8653 + 1]);
      if(cljs.core.reduced_QMARK_.call(null, init__8655)) {
        return cljs.core.deref.call(null, init__8655)
      }else {
        var G__8675 = i__8653 + 2;
        var G__8676 = init__8655;
        i__8653 = G__8675;
        init__8654 = G__8676;
        continue
      }
    }else {
      return null
    }
    break
  }
};
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, entry) {
  var this__8656 = this;
  if(cljs.core.vector_QMARK_.call(null, entry)) {
    return coll.cljs$core$IAssociative$_assoc$arity$3(coll, cljs.core._nth.call(null, entry, 0), cljs.core._nth.call(null, entry, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, coll, entry)
  }
};
cljs.core.PersistentArrayMap.prototype.toString = function() {
  var this__8657 = this;
  var this__8658 = this;
  return cljs.core.pr_str.call(null, this__8658)
};
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__8659 = this;
  if(this__8659.cnt > 0) {
    var len__8660 = this__8659.arr.length;
    var array_map_seq__8661 = function array_map_seq(i) {
      return new cljs.core.LazySeq(null, false, function() {
        if(i < len__8660) {
          return cljs.core.cons.call(null, cljs.core.PersistentVector.fromArray([this__8659.arr[i], this__8659.arr[i + 1]], true), array_map_seq.call(null, i + 2))
        }else {
          return null
        }
      }, null)
    };
    return array_map_seq__8661.call(null, 0)
  }else {
    return null
  }
};
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__8662 = this;
  return this__8662.cnt
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__8663 = this;
  return cljs.core.equiv_map.call(null, coll, other)
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__8664 = this;
  return new cljs.core.PersistentArrayMap(meta, this__8664.cnt, this__8664.arr, this__8664.__hash)
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__8665 = this;
  return this__8665.meta
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__8666 = this;
  return cljs.core._with_meta.call(null, cljs.core.PersistentArrayMap.EMPTY, this__8666.meta)
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = function(coll, k) {
  var this__8667 = this;
  var idx__8668 = cljs.core.array_map_index_of.call(null, coll, k);
  if(idx__8668 >= 0) {
    var len__8669 = this__8667.arr.length;
    var new_len__8670 = len__8669 - 2;
    if(new_len__8670 === 0) {
      return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll)
    }else {
      var new_arr__8671 = cljs.core.make_array.call(null, new_len__8670);
      var s__8672 = 0;
      var d__8673 = 0;
      while(true) {
        if(s__8672 >= len__8669) {
          return new cljs.core.PersistentArrayMap(this__8667.meta, this__8667.cnt - 1, new_arr__8671, null)
        }else {
          if(cljs.core._EQ_.call(null, k, this__8667.arr[s__8672])) {
            var G__8677 = s__8672 + 2;
            var G__8678 = d__8673;
            s__8672 = G__8677;
            d__8673 = G__8678;
            continue
          }else {
            if("\ufdd0'else") {
              new_arr__8671[d__8673] = this__8667.arr[s__8672];
              new_arr__8671[d__8673 + 1] = this__8667.arr[s__8672 + 1];
              var G__8679 = s__8672 + 2;
              var G__8680 = d__8673 + 2;
              s__8672 = G__8679;
              d__8673 = G__8680;
              continue
            }else {
              return null
            }
          }
        }
        break
      }
    }
  }else {
    return coll
  }
};
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = new cljs.core.PersistentArrayMap(null, 0, [], null);
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = function(ks, vs) {
  var len__8681 = cljs.core.count.call(null, ks);
  var i__8682 = 0;
  var out__8683 = cljs.core.transient$.call(null, cljs.core.PersistentArrayMap.EMPTY);
  while(true) {
    if(i__8682 < len__8681) {
      var G__8684 = i__8682 + 1;
      var G__8685 = cljs.core.assoc_BANG_.call(null, out__8683, ks[i__8682], vs[i__8682]);
      i__8682 = G__8684;
      out__8683 = G__8685;
      continue
    }else {
      return cljs.core.persistent_BANG_.call(null, out__8683)
    }
    break
  }
};
cljs.core.TransientArrayMap = function(editable_QMARK_, len, arr) {
  this.editable_QMARK_ = editable_QMARK_;
  this.len = len;
  this.arr = arr;
  this.cljs$lang$protocol_mask$partition1$ = 14;
  this.cljs$lang$protocol_mask$partition0$ = 258
};
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/TransientArrayMap")
};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = function(tcoll, key) {
  var this__8686 = this;
  if(cljs.core.truth_(this__8686.editable_QMARK_)) {
    var idx__8687 = cljs.core.array_map_index_of.call(null, tcoll, key);
    if(idx__8687 >= 0) {
      this__8686.arr[idx__8687] = this__8686.arr[this__8686.len - 2];
      this__8686.arr[idx__8687 + 1] = this__8686.arr[this__8686.len - 1];
      var G__8688__8689 = this__8686.arr;
      G__8688__8689.pop();
      G__8688__8689.pop();
      G__8688__8689;
      this__8686.len = this__8686.len - 2
    }else {
    }
    return tcoll
  }else {
    throw new Error("dissoc! after persistent!");
  }
};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = function(tcoll, key, val) {
  var this__8690 = this;
  if(cljs.core.truth_(this__8690.editable_QMARK_)) {
    var idx__8691 = cljs.core.array_map_index_of.call(null, tcoll, key);
    if(idx__8691 === -1) {
      if(this__8690.len + 2 <= 2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD) {
        this__8690.len = this__8690.len + 2;
        this__8690.arr.push(key);
        this__8690.arr.push(val);
        return tcoll
      }else {
        return cljs.core.assoc_BANG_.call(null, cljs.core.array__GT_transient_hash_map.call(null, this__8690.len, this__8690.arr), key, val)
      }
    }else {
      if(val === this__8690.arr[idx__8691 + 1]) {
        return tcoll
      }else {
        this__8690.arr[idx__8691 + 1] = val;
        return tcoll
      }
    }
  }else {
    throw new Error("assoc! after persistent!");
  }
};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = function(tcoll, o) {
  var this__8692 = this;
  if(cljs.core.truth_(this__8692.editable_QMARK_)) {
    if(function() {
      var G__8693__8694 = o;
      if(G__8693__8694) {
        if(function() {
          var or__3824__auto____8695 = G__8693__8694.cljs$lang$protocol_mask$partition0$ & 2048;
          if(or__3824__auto____8695) {
            return or__3824__auto____8695
          }else {
            return G__8693__8694.cljs$core$IMapEntry$
          }
        }()) {
          return true
        }else {
          if(!G__8693__8694.cljs$lang$protocol_mask$partition0$) {
            return cljs.core.type_satisfies_.call(null, cljs.core.IMapEntry, G__8693__8694)
          }else {
            return false
          }
        }
      }else {
        return cljs.core.type_satisfies_.call(null, cljs.core.IMapEntry, G__8693__8694)
      }
    }()) {
      return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll, cljs.core.key.call(null, o), cljs.core.val.call(null, o))
    }else {
      var es__8696 = cljs.core.seq.call(null, o);
      var tcoll__8697 = tcoll;
      while(true) {
        var temp__3971__auto____8698 = cljs.core.first.call(null, es__8696);
        if(cljs.core.truth_(temp__3971__auto____8698)) {
          var e__8699 = temp__3971__auto____8698;
          var G__8705 = cljs.core.next.call(null, es__8696);
          var G__8706 = tcoll__8697.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__8697, cljs.core.key.call(null, e__8699), cljs.core.val.call(null, e__8699));
          es__8696 = G__8705;
          tcoll__8697 = G__8706;
          continue
        }else {
          return tcoll__8697
        }
        break
      }
    }
  }else {
    throw new Error("conj! after persistent!");
  }
};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = function(tcoll) {
  var this__8700 = this;
  if(cljs.core.truth_(this__8700.editable_QMARK_)) {
    this__8700.editable_QMARK_ = false;
    return new cljs.core.PersistentArrayMap(null, cljs.core.quot.call(null, this__8700.len, 2), this__8700.arr, null)
  }else {
    throw new Error("persistent! called twice");
  }
};
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(tcoll, k) {
  var this__8701 = this;
  return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll, k, null)
};
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(tcoll, k, not_found) {
  var this__8702 = this;
  if(cljs.core.truth_(this__8702.editable_QMARK_)) {
    var idx__8703 = cljs.core.array_map_index_of.call(null, tcoll, k);
    if(idx__8703 === -1) {
      return not_found
    }else {
      return this__8702.arr[idx__8703 + 1]
    }
  }else {
    throw new Error("lookup after persistent!");
  }
};
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = function(tcoll) {
  var this__8704 = this;
  if(cljs.core.truth_(this__8704.editable_QMARK_)) {
    return cljs.core.quot.call(null, this__8704.len, 2)
  }else {
    throw new Error("count after persistent!");
  }
};
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = function array__GT_transient_hash_map(len, arr) {
  var out__8709 = cljs.core.transient$.call(null, cljs.core.ObjMap.EMPTY);
  var i__8710 = 0;
  while(true) {
    if(i__8710 < len) {
      var G__8711 = cljs.core.assoc_BANG_.call(null, out__8709, arr[i__8710], arr[i__8710 + 1]);
      var G__8712 = i__8710 + 2;
      out__8709 = G__8711;
      i__8710 = G__8712;
      continue
    }else {
      return out__8709
    }
    break
  }
};
cljs.core.Box = function(val) {
  this.val = val
};
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = function(this__2336__auto__) {
  return cljs.core.list.call(null, "cljs.core/Box")
};
cljs.core.Box;
cljs.core.key_test = function key_test(key, other) {
  if(goog.isString(key)) {
    return key === other
  }else {
    return cljs.core._EQ_.call(null, key, other)
  }
};
cljs.core.mask = function mask(hash, shift) {
  return hash >>> shift & 31
};
cljs.core.clone_and_set = function() {
  var clone_and_set = null;
  var clone_and_set__3 = function(arr, i, a) {
    var G__8717__8718 = arr.slice();
    G__8717__8718[i] = a;
    return G__8717__8718
  };
  var clone_and_set__5 = function(arr, i, a, j, b) {
    var G__8719__8720 = arr.slice();
    G__8719__8720[i] = a;
    G__8719__8720[j] = b;
    return G__8719__8720
  };
  clone_and_set = function(arr, i, a, j, b) {
    switch(arguments.length) {
      case 3:
        return clone_and_set__3.call(this, arr, i, a);
      case 5:
        return clone_and_set__5.call(this, arr, i, a, j, b)
    }
    throw"Invalid arity: " + arguments.length;
  };
  clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
  clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
  return clone_and_set
}();
cljs.core.remove_pair = function remove_pair(arr, i) {
  var new_arr__8722 = cljs.core.make_array.call(null, arr.length - 2);
  cljs.core.array_copy.call(null, arr, 0, new_arr__8722, 0, 2 * i);
  cljs.core.array_copy.call(null, arr, 2 * (i + 1), new_arr__8722, 2 * i, new_arr__8722.length - 2 * i);
  return new_arr__8722
};
cljs.core.bitmap_indexed_node_index = function bitmap_indexed_node_index(bitmap, bit) {
  return cljs.core.bit_count.call(null, bitmap & bit - 1)
};
cljs.core.bitpos = function bitpos(hash, shift) {
  return 1 << (hash >>> shift & 31)
};
cljs.core.edit_and_set = function() {
  var edit_and_set = null;
  var edit_and_set__4 = function(inode, edit, i, a) {
    var editable__8725 = inode.ensure_editable(edit);
    editable__8725.arr[i] = a;
    return editable__8725
  };
  var edit_and_set__6 = function(inode, edit, i, a, j, b) {
    var editable__8726 = inode.ensure_editable(edit);
    editable__8726.arr[i] = a;
    editable__8726.arr[j] = b;
    return editable__8726
  };
  edit_and_set = function(inode, edit, i, a, j, b) {
    switch(arguments.length) {
      case 4:
        return edit_and_set__4.call(this, inode, edit, i, a);
      case 6:
        return edit_and_set__6.call(this, inode, edit, i, a, j, b)
    }
    throw"Invalid arity: " + arguments.length;
  };
  edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
  edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
  return edit_and_set
}();
cljs.core.inode_kv_reduce = function inode_kv_reduce(arr, f, init) {
  var len__8733 = arr.length;
  var i__8734 = 0;
  var init__8735 = init;
  while(true) {
    if(i__8734 < len__8733) {
      var init__8738 = function() {
        var k__8736 = arr[i__8734];
        if(!(k__8736 == null)) {
          return f.call(null, init__8735, k__8736, arr[i__8734 + 1])
        }else {
          var node__8737 = arr[i__8734 + 1];
          if(!(node__8737 == null)) {
            return node__8737.kv_reduce(f, init__8735)
          }else {
            return init__8735
          }
        }
      }();
      if(cljs.core.reduced_QMARK_.call(null, init__8738)) {
        return cljs.core.deref.call(null, init__8738)
      }else {
        var G__8739 = i__8734 + 2;
        var G__8740 = init__8738;
        i__8734 = G__8739;
        init__8735 = G__8740;
        continue
      }
    }else {
      return init__8735
    }
    break
  }
};
cljs.core.BitmapIndexedNode = function(edit, bitmap, arr) {
  this.edit = edit;
  this.bitmap = bitmap;
  this.arr = arr
};
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/BitmapIndexedNode")
};
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = function(e, bit, i) {
  var this__8741 = this;
  var inode__8742 = this;
  if(this__8741.bitmap === bit) {
    return null
  }else {
    var editable__8743 = inode__8742.ensure_editable(e);
    var earr__8744 = editable__8743.arr;
    var len__8745 = earr__8744.length;
    editable__8743.bitmap = bit ^ editable__8743.bitmap;
    cljs.core.array_copy.call(null, earr__8744, 2 * (i + 1), earr__8744, 2 * i, len__8745 - 2 * (i + 1));
    earr__8744[len__8745 - 2] = null;
    earr__8744[len__8745 - 1] = null;
    return editable__8743
  }
};
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = function(edit, shift, hash, key, val, added_leaf_QMARK_) {
  var this__8746 = this;
  var inode__8747 = this;
  var bit__8748 = 1 << (hash >>> shift & 31);
  var idx__8749 = cljs.core.bitmap_indexed_node_index.call(null, this__8746.bitmap, bit__8748);
  if((this__8746.bitmap & bit__8748) === 0) {
    var n__8750 = cljs.core.bit_count.call(null, this__8746.bitmap);
    if(2 * n__8750 < this__8746.arr.length) {
      var editable__8751 = inode__8747.ensure_editable(edit);
      var earr__8752 = editable__8751.arr;
      added_leaf_QMARK_.val = true;
      cljs.core.array_copy_downward.call(null, earr__8752, 2 * idx__8749, earr__8752, 2 * (idx__8749 + 1), 2 * (n__8750 - idx__8749));
      earr__8752[2 * idx__8749] = key;
      earr__8752[2 * idx__8749 + 1] = val;
      editable__8751.bitmap = editable__8751.bitmap | bit__8748;
      return editable__8751
    }else {
      if(n__8750 >= 16) {
        var nodes__8753 = cljs.core.make_array.call(null, 32);
        var jdx__8754 = hash >>> shift & 31;
        nodes__8753[jdx__8754] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit, shift + 5, hash, key, val, added_leaf_QMARK_);
        var i__8755 = 0;
        var j__8756 = 0;
        while(true) {
          if(i__8755 < 32) {
            if((this__8746.bitmap >>> i__8755 & 1) === 0) {
              var G__8809 = i__8755 + 1;
              var G__8810 = j__8756;
              i__8755 = G__8809;
              j__8756 = G__8810;
              continue
            }else {
              nodes__8753[i__8755] = !(this__8746.arr[j__8756] == null) ? cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit, shift + 5, cljs.core.hash.call(null, this__8746.arr[j__8756]), this__8746.arr[j__8756], this__8746.arr[j__8756 + 1], added_leaf_QMARK_) : this__8746.arr[j__8756 + 1];
              var G__8811 = i__8755 + 1;
              var G__8812 = j__8756 + 2;
              i__8755 = G__8811;
              j__8756 = G__8812;
              continue
            }
          }else {
          }
          break
        }
        return new cljs.core.ArrayNode(edit, n__8750 + 1, nodes__8753)
      }else {
        if("\ufdd0'else") {
          var new_arr__8757 = cljs.core.make_array.call(null, 2 * (n__8750 + 4));
          cljs.core.array_copy.call(null, this__8746.arr, 0, new_arr__8757, 0, 2 * idx__8749);
          new_arr__8757[2 * idx__8749] = key;
          new_arr__8757[2 * idx__8749 + 1] = val;
          cljs.core.array_copy.call(null, this__8746.arr, 2 * idx__8749, new_arr__8757, 2 * (idx__8749 + 1), 2 * (n__8750 - idx__8749));
          added_leaf_QMARK_.val = true;
          var editable__8758 = inode__8747.ensure_editable(edit);
          editable__8758.arr = new_arr__8757;
          editable__8758.bitmap = editable__8758.bitmap | bit__8748;
          return editable__8758
        }else {
          return null
        }
      }
    }
  }else {
    var key_or_nil__8759 = this__8746.arr[2 * idx__8749];
    var val_or_node__8760 = this__8746.arr[2 * idx__8749 + 1];
    if(key_or_nil__8759 == null) {
      var n__8761 = val_or_node__8760.inode_assoc_BANG_(edit, shift + 5, hash, key, val, added_leaf_QMARK_);
      if(n__8761 === val_or_node__8760) {
        return inode__8747
      }else {
        return cljs.core.edit_and_set.call(null, inode__8747, edit, 2 * idx__8749 + 1, n__8761)
      }
    }else {
      if(cljs.core.key_test.call(null, key, key_or_nil__8759)) {
        if(val === val_or_node__8760) {
          return inode__8747
        }else {
          return cljs.core.edit_and_set.call(null, inode__8747, edit, 2 * idx__8749 + 1, val)
        }
      }else {
        if("\ufdd0'else") {
          added_leaf_QMARK_.val = true;
          return cljs.core.edit_and_set.call(null, inode__8747, edit, 2 * idx__8749, null, 2 * idx__8749 + 1, cljs.core.create_node.call(null, edit, shift + 5, key_or_nil__8759, val_or_node__8760, hash, key, val))
        }else {
          return null
        }
      }
    }
  }
};
cljs.core.BitmapIndexedNode.prototype.inode_seq = function() {
  var this__8762 = this;
  var inode__8763 = this;
  return cljs.core.create_inode_seq.call(null, this__8762.arr)
};
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = function(edit, shift, hash, key, removed_leaf_QMARK_) {
  var this__8764 = this;
  var inode__8765 = this;
  var bit__8766 = 1 << (hash >>> shift & 31);
  if((this__8764.bitmap & bit__8766) === 0) {
    return inode__8765
  }else {
    var idx__8767 = cljs.core.bitmap_indexed_node_index.call(null, this__8764.bitmap, bit__8766);
    var key_or_nil__8768 = this__8764.arr[2 * idx__8767];
    var val_or_node__8769 = this__8764.arr[2 * idx__8767 + 1];
    if(key_or_nil__8768 == null) {
      var n__8770 = val_or_node__8769.inode_without_BANG_(edit, shift + 5, hash, key, removed_leaf_QMARK_);
      if(n__8770 === val_or_node__8769) {
        return inode__8765
      }else {
        if(!(n__8770 == null)) {
          return cljs.core.edit_and_set.call(null, inode__8765, edit, 2 * idx__8767 + 1, n__8770)
        }else {
          if(this__8764.bitmap === bit__8766) {
            return null
          }else {
            if("\ufdd0'else") {
              return inode__8765.edit_and_remove_pair(edit, bit__8766, idx__8767)
            }else {
              return null
            }
          }
        }
      }
    }else {
      if(cljs.core.key_test.call(null, key, key_or_nil__8768)) {
        removed_leaf_QMARK_[0] = true;
        return inode__8765.edit_and_remove_pair(edit, bit__8766, idx__8767)
      }else {
        if("\ufdd0'else") {
          return inode__8765
        }else {
          return null
        }
      }
    }
  }
};
cljs.core.BitmapIndexedNode.prototype.ensure_editable = function(e) {
  var this__8771 = this;
  var inode__8772 = this;
  if(e === this__8771.edit) {
    return inode__8772
  }else {
    var n__8773 = cljs.core.bit_count.call(null, this__8771.bitmap);
    var new_arr__8774 = cljs.core.make_array.call(null, n__8773 < 0 ? 4 : 2 * (n__8773 + 1));
    cljs.core.array_copy.call(null, this__8771.arr, 0, new_arr__8774, 0, 2 * n__8773);
    return new cljs.core.BitmapIndexedNode(e, this__8771.bitmap, new_arr__8774)
  }
};
cljs.core.BitmapIndexedNode.prototype.kv_reduce = function(f, init) {
  var this__8775 = this;
  var inode__8776 = this;
  return cljs.core.inode_kv_reduce.call(null, this__8775.arr, f, init)
};
cljs.core.BitmapIndexedNode.prototype.inode_find = function(shift, hash, key, not_found) {
  var this__8777 = this;
  var inode__8778 = this;
  var bit__8779 = 1 << (hash >>> shift & 31);
  if((this__8777.bitmap & bit__8779) === 0) {
    return not_found
  }else {
    var idx__8780 = cljs.core.bitmap_indexed_node_index.call(null, this__8777.bitmap, bit__8779);
    var key_or_nil__8781 = this__8777.arr[2 * idx__8780];
    var val_or_node__8782 = this__8777.arr[2 * idx__8780 + 1];
    if(key_or_nil__8781 == null) {
      return val_or_node__8782.inode_find(shift + 5, hash, key, not_found)
    }else {
      if(cljs.core.key_test.call(null, key, key_or_nil__8781)) {
        return cljs.core.PersistentVector.fromArray([key_or_nil__8781, val_or_node__8782], true)
      }else {
        if("\ufdd0'else") {
          return not_found
        }else {
          return null
        }
      }
    }
  }
};
cljs.core.BitmapIndexedNode.prototype.inode_without = function(shift, hash, key) {
  var this__8783 = this;
  var inode__8784 = this;
  var bit__8785 = 1 << (hash >>> shift & 31);
  if((this__8783.bitmap & bit__8785) === 0) {
    return inode__8784
  }else {
    var idx__8786 = cljs.core.bitmap_indexed_node_index.call(null, this__8783.bitmap, bit__8785);
    var key_or_nil__8787 = this__8783.arr[2 * idx__8786];
    var val_or_node__8788 = this__8783.arr[2 * idx__8786 + 1];
    if(key_or_nil__8787 == null) {
      var n__8789 = val_or_node__8788.inode_without(shift + 5, hash, key);
      if(n__8789 === val_or_node__8788) {
        return inode__8784
      }else {
        if(!(n__8789 == null)) {
          return new cljs.core.BitmapIndexedNode(null, this__8783.bitmap, cljs.core.clone_and_set.call(null, this__8783.arr, 2 * idx__8786 + 1, n__8789))
        }else {
          if(this__8783.bitmap === bit__8785) {
            return null
          }else {
            if("\ufdd0'else") {
              return new cljs.core.BitmapIndexedNode(null, this__8783.bitmap ^ bit__8785, cljs.core.remove_pair.call(null, this__8783.arr, idx__8786))
            }else {
              return null
            }
          }
        }
      }
    }else {
      if(cljs.core.key_test.call(null, key, key_or_nil__8787)) {
        return new cljs.core.BitmapIndexedNode(null, this__8783.bitmap ^ bit__8785, cljs.core.remove_pair.call(null, this__8783.arr, idx__8786))
      }else {
        if("\ufdd0'else") {
          return inode__8784
        }else {
          return null
        }
      }
    }
  }
};
cljs.core.BitmapIndexedNode.prototype.inode_assoc = function(shift, hash, key, val, added_leaf_QMARK_) {
  var this__8790 = this;
  var inode__8791 = this;
  var bit__8792 = 1 << (hash >>> shift & 31);
  var idx__8793 = cljs.core.bitmap_indexed_node_index.call(null, this__8790.bitmap, bit__8792);
  if((this__8790.bitmap & bit__8792) === 0) {
    var n__8794 = cljs.core.bit_count.call(null, this__8790.bitmap);
    if(n__8794 >= 16) {
      var nodes__8795 = cljs.core.make_array.call(null, 32);
      var jdx__8796 = hash >>> shift & 31;
      nodes__8795[jdx__8796] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift + 5, hash, key, val, added_leaf_QMARK_);
      var i__8797 = 0;
      var j__8798 = 0;
      while(true) {
        if(i__8797 < 32) {
          if((this__8790.bitmap >>> i__8797 & 1) === 0) {
            var G__8813 = i__8797 + 1;
            var G__8814 = j__8798;
            i__8797 = G__8813;
            j__8798 = G__8814;
            continue
          }else {
            nodes__8795[i__8797] = !(this__8790.arr[j__8798] == null) ? cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift + 5, cljs.core.hash.call(null, this__8790.arr[j__8798]), this__8790.arr[j__8798], this__8790.arr[j__8798 + 1], added_leaf_QMARK_) : this__8790.arr[j__8798 + 1];
            var G__8815 = i__8797 + 1;
            var G__8816 = j__8798 + 2;
            i__8797 = G__8815;
            j__8798 = G__8816;
            continue
          }
        }else {
        }
        break
      }
      return new cljs.core.ArrayNode(null, n__8794 + 1, nodes__8795)
    }else {
      var new_arr__8799 = cljs.core.make_array.call(null, 2 * (n__8794 + 1));
      cljs.core.array_copy.call(null, this__8790.arr, 0, new_arr__8799, 0, 2 * idx__8793);
      new_arr__8799[2 * idx__8793] = key;
      new_arr__8799[2 * idx__8793 + 1] = val;
      cljs.core.array_copy.call(null, this__8790.arr, 2 * idx__8793, new_arr__8799, 2 * (idx__8793 + 1), 2 * (n__8794 - idx__8793));
      added_leaf_QMARK_.val = true;
      return new cljs.core.BitmapIndexedNode(null, this__8790.bitmap | bit__8792, new_arr__8799)
    }
  }else {
    var key_or_nil__8800 = this__8790.arr[2 * idx__8793];
    var val_or_node__8801 = this__8790.arr[2 * idx__8793 + 1];
    if(key_or_nil__8800 == null) {
      var n__8802 = val_or_node__8801.inode_assoc(shift + 5, hash, key, val, added_leaf_QMARK_);
      if(n__8802 === val_or_node__8801) {
        return inode__8791
      }else {
        return new cljs.core.BitmapIndexedNode(null, this__8790.bitmap, cljs.core.clone_and_set.call(null, this__8790.arr, 2 * idx__8793 + 1, n__8802))
      }
    }else {
      if(cljs.core.key_test.call(null, key, key_or_nil__8800)) {
        if(val === val_or_node__8801) {
          return inode__8791
        }else {
          return new cljs.core.BitmapIndexedNode(null, this__8790.bitmap, cljs.core.clone_and_set.call(null, this__8790.arr, 2 * idx__8793 + 1, val))
        }
      }else {
        if("\ufdd0'else") {
          added_leaf_QMARK_.val = true;
          return new cljs.core.BitmapIndexedNode(null, this__8790.bitmap, cljs.core.clone_and_set.call(null, this__8790.arr, 2 * idx__8793, null, 2 * idx__8793 + 1, cljs.core.create_node.call(null, shift + 5, key_or_nil__8800, val_or_node__8801, hash, key, val)))
        }else {
          return null
        }
      }
    }
  }
};
cljs.core.BitmapIndexedNode.prototype.inode_lookup = function(shift, hash, key, not_found) {
  var this__8803 = this;
  var inode__8804 = this;
  var bit__8805 = 1 << (hash >>> shift & 31);
  if((this__8803.bitmap & bit__8805) === 0) {
    return not_found
  }else {
    var idx__8806 = cljs.core.bitmap_indexed_node_index.call(null, this__8803.bitmap, bit__8805);
    var key_or_nil__8807 = this__8803.arr[2 * idx__8806];
    var val_or_node__8808 = this__8803.arr[2 * idx__8806 + 1];
    if(key_or_nil__8807 == null) {
      return val_or_node__8808.inode_lookup(shift + 5, hash, key, not_found)
    }else {
      if(cljs.core.key_test.call(null, key, key_or_nil__8807)) {
        return val_or_node__8808
      }else {
        if("\ufdd0'else") {
          return not_found
        }else {
          return null
        }
      }
    }
  }
};
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = new cljs.core.BitmapIndexedNode(null, 0, cljs.core.make_array.call(null, 0));
cljs.core.pack_array_node = function pack_array_node(array_node, edit, idx) {
  var arr__8824 = array_node.arr;
  var len__8825 = 2 * (array_node.cnt - 1);
  var new_arr__8826 = cljs.core.make_array.call(null, len__8825);
  var i__8827 = 0;
  var j__8828 = 1;
  var bitmap__8829 = 0;
  while(true) {
    if(i__8827 < len__8825) {
      if(function() {
        var and__3822__auto____8830 = !(i__8827 === idx);
        if(and__3822__auto____8830) {
          return!(arr__8824[i__8827] == null)
        }else {
          return and__3822__auto____8830
        }
      }()) {
        new_arr__8826[j__8828] = arr__8824[i__8827];
        var G__8831 = i__8827 + 1;
        var G__8832 = j__8828 + 2;
        var G__8833 = bitmap__8829 | 1 << i__8827;
        i__8827 = G__8831;
        j__8828 = G__8832;
        bitmap__8829 = G__8833;
        continue
      }else {
        var G__8834 = i__8827 + 1;
        var G__8835 = j__8828;
        var G__8836 = bitmap__8829;
        i__8827 = G__8834;
        j__8828 = G__8835;
        bitmap__8829 = G__8836;
        continue
      }
    }else {
      return new cljs.core.BitmapIndexedNode(edit, bitmap__8829, new_arr__8826)
    }
    break
  }
};
cljs.core.ArrayNode = function(edit, cnt, arr) {
  this.edit = edit;
  this.cnt = cnt;
  this.arr = arr
};
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/ArrayNode")
};
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = function(edit, shift, hash, key, val, added_leaf_QMARK_) {
  var this__8837 = this;
  var inode__8838 = this;
  var idx__8839 = hash >>> shift & 31;
  var node__8840 = this__8837.arr[idx__8839];
  if(node__8840 == null) {
    var editable__8841 = cljs.core.edit_and_set.call(null, inode__8838, edit, idx__8839, cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit, shift + 5, hash, key, val, added_leaf_QMARK_));
    editable__8841.cnt = editable__8841.cnt + 1;
    return editable__8841
  }else {
    var n__8842 = node__8840.inode_assoc_BANG_(edit, shift + 5, hash, key, val, added_leaf_QMARK_);
    if(n__8842 === node__8840) {
      return inode__8838
    }else {
      return cljs.core.edit_and_set.call(null, inode__8838, edit, idx__8839, n__8842)
    }
  }
};
cljs.core.ArrayNode.prototype.inode_seq = function() {
  var this__8843 = this;
  var inode__8844 = this;
  return cljs.core.create_array_node_seq.call(null, this__8843.arr)
};
cljs.core.ArrayNode.prototype.inode_without_BANG_ = function(edit, shift, hash, key, removed_leaf_QMARK_) {
  var this__8845 = this;
  var inode__8846 = this;
  var idx__8847 = hash >>> shift & 31;
  var node__8848 = this__8845.arr[idx__8847];
  if(node__8848 == null) {
    return inode__8846
  }else {
    var n__8849 = node__8848.inode_without_BANG_(edit, shift + 5, hash, key, removed_leaf_QMARK_);
    if(n__8849 === node__8848) {
      return inode__8846
    }else {
      if(n__8849 == null) {
        if(this__8845.cnt <= 8) {
          return cljs.core.pack_array_node.call(null, inode__8846, edit, idx__8847)
        }else {
          var editable__8850 = cljs.core.edit_and_set.call(null, inode__8846, edit, idx__8847, n__8849);
          editable__8850.cnt = editable__8850.cnt - 1;
          return editable__8850
        }
      }else {
        if("\ufdd0'else") {
          return cljs.core.edit_and_set.call(null, inode__8846, edit, idx__8847, n__8849)
        }else {
          return null
        }
      }
    }
  }
};
cljs.core.ArrayNode.prototype.ensure_editable = function(e) {
  var this__8851 = this;
  var inode__8852 = this;
  if(e === this__8851.edit) {
    return inode__8852
  }else {
    return new cljs.core.ArrayNode(e, this__8851.cnt, this__8851.arr.slice())
  }
};
cljs.core.ArrayNode.prototype.kv_reduce = function(f, init) {
  var this__8853 = this;
  var inode__8854 = this;
  var len__8855 = this__8853.arr.length;
  var i__8856 = 0;
  var init__8857 = init;
  while(true) {
    if(i__8856 < len__8855) {
      var node__8858 = this__8853.arr[i__8856];
      if(!(node__8858 == null)) {
        var init__8859 = node__8858.kv_reduce(f, init__8857);
        if(cljs.core.reduced_QMARK_.call(null, init__8859)) {
          return cljs.core.deref.call(null, init__8859)
        }else {
          var G__8878 = i__8856 + 1;
          var G__8879 = init__8859;
          i__8856 = G__8878;
          init__8857 = G__8879;
          continue
        }
      }else {
        return null
      }
    }else {
      return init__8857
    }
    break
  }
};
cljs.core.ArrayNode.prototype.inode_find = function(shift, hash, key, not_found) {
  var this__8860 = this;
  var inode__8861 = this;
  var idx__8862 = hash >>> shift & 31;
  var node__8863 = this__8860.arr[idx__8862];
  if(!(node__8863 == null)) {
    return node__8863.inode_find(shift + 5, hash, key, not_found)
  }else {
    return not_found
  }
};
cljs.core.ArrayNode.prototype.inode_without = function(shift, hash, key) {
  var this__8864 = this;
  var inode__8865 = this;
  var idx__8866 = hash >>> shift & 31;
  var node__8867 = this__8864.arr[idx__8866];
  if(!(node__8867 == null)) {
    var n__8868 = node__8867.inode_without(shift + 5, hash, key);
    if(n__8868 === node__8867) {
      return inode__8865
    }else {
      if(n__8868 == null) {
        if(this__8864.cnt <= 8) {
          return cljs.core.pack_array_node.call(null, inode__8865, null, idx__8866)
        }else {
          return new cljs.core.ArrayNode(null, this__8864.cnt - 1, cljs.core.clone_and_set.call(null, this__8864.arr, idx__8866, n__8868))
        }
      }else {
        if("\ufdd0'else") {
          return new cljs.core.ArrayNode(null, this__8864.cnt, cljs.core.clone_and_set.call(null, this__8864.arr, idx__8866, n__8868))
        }else {
          return null
        }
      }
    }
  }else {
    return inode__8865
  }
};
cljs.core.ArrayNode.prototype.inode_assoc = function(shift, hash, key, val, added_leaf_QMARK_) {
  var this__8869 = this;
  var inode__8870 = this;
  var idx__8871 = hash >>> shift & 31;
  var node__8872 = this__8869.arr[idx__8871];
  if(node__8872 == null) {
    return new cljs.core.ArrayNode(null, this__8869.cnt + 1, cljs.core.clone_and_set.call(null, this__8869.arr, idx__8871, cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift + 5, hash, key, val, added_leaf_QMARK_)))
  }else {
    var n__8873 = node__8872.inode_assoc(shift + 5, hash, key, val, added_leaf_QMARK_);
    if(n__8873 === node__8872) {
      return inode__8870
    }else {
      return new cljs.core.ArrayNode(null, this__8869.cnt, cljs.core.clone_and_set.call(null, this__8869.arr, idx__8871, n__8873))
    }
  }
};
cljs.core.ArrayNode.prototype.inode_lookup = function(shift, hash, key, not_found) {
  var this__8874 = this;
  var inode__8875 = this;
  var idx__8876 = hash >>> shift & 31;
  var node__8877 = this__8874.arr[idx__8876];
  if(!(node__8877 == null)) {
    return node__8877.inode_lookup(shift + 5, hash, key, not_found)
  }else {
    return not_found
  }
};
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = function hash_collision_node_find_index(arr, cnt, key) {
  var lim__8882 = 2 * cnt;
  var i__8883 = 0;
  while(true) {
    if(i__8883 < lim__8882) {
      if(cljs.core.key_test.call(null, key, arr[i__8883])) {
        return i__8883
      }else {
        var G__8884 = i__8883 + 2;
        i__8883 = G__8884;
        continue
      }
    }else {
      return-1
    }
    break
  }
};
cljs.core.HashCollisionNode = function(edit, collision_hash, cnt, arr) {
  this.edit = edit;
  this.collision_hash = collision_hash;
  this.cnt = cnt;
  this.arr = arr
};
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/HashCollisionNode")
};
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = function(edit, shift, hash, key, val, added_leaf_QMARK_) {
  var this__8885 = this;
  var inode__8886 = this;
  if(hash === this__8885.collision_hash) {
    var idx__8887 = cljs.core.hash_collision_node_find_index.call(null, this__8885.arr, this__8885.cnt, key);
    if(idx__8887 === -1) {
      if(this__8885.arr.length > 2 * this__8885.cnt) {
        var editable__8888 = cljs.core.edit_and_set.call(null, inode__8886, edit, 2 * this__8885.cnt, key, 2 * this__8885.cnt + 1, val);
        added_leaf_QMARK_.val = true;
        editable__8888.cnt = editable__8888.cnt + 1;
        return editable__8888
      }else {
        var len__8889 = this__8885.arr.length;
        var new_arr__8890 = cljs.core.make_array.call(null, len__8889 + 2);
        cljs.core.array_copy.call(null, this__8885.arr, 0, new_arr__8890, 0, len__8889);
        new_arr__8890[len__8889] = key;
        new_arr__8890[len__8889 + 1] = val;
        added_leaf_QMARK_.val = true;
        return inode__8886.ensure_editable_array(edit, this__8885.cnt + 1, new_arr__8890)
      }
    }else {
      if(this__8885.arr[idx__8887 + 1] === val) {
        return inode__8886
      }else {
        return cljs.core.edit_and_set.call(null, inode__8886, edit, idx__8887 + 1, val)
      }
    }
  }else {
    return(new cljs.core.BitmapIndexedNode(edit, 1 << (this__8885.collision_hash >>> shift & 31), [null, inode__8886, null, null])).inode_assoc_BANG_(edit, shift, hash, key, val, added_leaf_QMARK_)
  }
};
cljs.core.HashCollisionNode.prototype.inode_seq = function() {
  var this__8891 = this;
  var inode__8892 = this;
  return cljs.core.create_inode_seq.call(null, this__8891.arr)
};
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = function(edit, shift, hash, key, removed_leaf_QMARK_) {
  var this__8893 = this;
  var inode__8894 = this;
  var idx__8895 = cljs.core.hash_collision_node_find_index.call(null, this__8893.arr, this__8893.cnt, key);
  if(idx__8895 === -1) {
    return inode__8894
  }else {
    removed_leaf_QMARK_[0] = true;
    if(this__8893.cnt === 1) {
      return null
    }else {
      var editable__8896 = inode__8894.ensure_editable(edit);
      var earr__8897 = editable__8896.arr;
      earr__8897[idx__8895] = earr__8897[2 * this__8893.cnt - 2];
      earr__8897[idx__8895 + 1] = earr__8897[2 * this__8893.cnt - 1];
      earr__8897[2 * this__8893.cnt - 1] = null;
      earr__8897[2 * this__8893.cnt - 2] = null;
      editable__8896.cnt = editable__8896.cnt - 1;
      return editable__8896
    }
  }
};
cljs.core.HashCollisionNode.prototype.ensure_editable = function(e) {
  var this__8898 = this;
  var inode__8899 = this;
  if(e === this__8898.edit) {
    return inode__8899
  }else {
    var new_arr__8900 = cljs.core.make_array.call(null, 2 * (this__8898.cnt + 1));
    cljs.core.array_copy.call(null, this__8898.arr, 0, new_arr__8900, 0, 2 * this__8898.cnt);
    return new cljs.core.HashCollisionNode(e, this__8898.collision_hash, this__8898.cnt, new_arr__8900)
  }
};
cljs.core.HashCollisionNode.prototype.kv_reduce = function(f, init) {
  var this__8901 = this;
  var inode__8902 = this;
  return cljs.core.inode_kv_reduce.call(null, this__8901.arr, f, init)
};
cljs.core.HashCollisionNode.prototype.inode_find = function(shift, hash, key, not_found) {
  var this__8903 = this;
  var inode__8904 = this;
  var idx__8905 = cljs.core.hash_collision_node_find_index.call(null, this__8903.arr, this__8903.cnt, key);
  if(idx__8905 < 0) {
    return not_found
  }else {
    if(cljs.core.key_test.call(null, key, this__8903.arr[idx__8905])) {
      return cljs.core.PersistentVector.fromArray([this__8903.arr[idx__8905], this__8903.arr[idx__8905 + 1]], true)
    }else {
      if("\ufdd0'else") {
        return not_found
      }else {
        return null
      }
    }
  }
};
cljs.core.HashCollisionNode.prototype.inode_without = function(shift, hash, key) {
  var this__8906 = this;
  var inode__8907 = this;
  var idx__8908 = cljs.core.hash_collision_node_find_index.call(null, this__8906.arr, this__8906.cnt, key);
  if(idx__8908 === -1) {
    return inode__8907
  }else {
    if(this__8906.cnt === 1) {
      return null
    }else {
      if("\ufdd0'else") {
        return new cljs.core.HashCollisionNode(null, this__8906.collision_hash, this__8906.cnt - 1, cljs.core.remove_pair.call(null, this__8906.arr, cljs.core.quot.call(null, idx__8908, 2)))
      }else {
        return null
      }
    }
  }
};
cljs.core.HashCollisionNode.prototype.inode_assoc = function(shift, hash, key, val, added_leaf_QMARK_) {
  var this__8909 = this;
  var inode__8910 = this;
  if(hash === this__8909.collision_hash) {
    var idx__8911 = cljs.core.hash_collision_node_find_index.call(null, this__8909.arr, this__8909.cnt, key);
    if(idx__8911 === -1) {
      var len__8912 = this__8909.arr.length;
      var new_arr__8913 = cljs.core.make_array.call(null, len__8912 + 2);
      cljs.core.array_copy.call(null, this__8909.arr, 0, new_arr__8913, 0, len__8912);
      new_arr__8913[len__8912] = key;
      new_arr__8913[len__8912 + 1] = val;
      added_leaf_QMARK_.val = true;
      return new cljs.core.HashCollisionNode(null, this__8909.collision_hash, this__8909.cnt + 1, new_arr__8913)
    }else {
      if(cljs.core._EQ_.call(null, this__8909.arr[idx__8911], val)) {
        return inode__8910
      }else {
        return new cljs.core.HashCollisionNode(null, this__8909.collision_hash, this__8909.cnt, cljs.core.clone_and_set.call(null, this__8909.arr, idx__8911 + 1, val))
      }
    }
  }else {
    return(new cljs.core.BitmapIndexedNode(null, 1 << (this__8909.collision_hash >>> shift & 31), [null, inode__8910])).inode_assoc(shift, hash, key, val, added_leaf_QMARK_)
  }
};
cljs.core.HashCollisionNode.prototype.inode_lookup = function(shift, hash, key, not_found) {
  var this__8914 = this;
  var inode__8915 = this;
  var idx__8916 = cljs.core.hash_collision_node_find_index.call(null, this__8914.arr, this__8914.cnt, key);
  if(idx__8916 < 0) {
    return not_found
  }else {
    if(cljs.core.key_test.call(null, key, this__8914.arr[idx__8916])) {
      return this__8914.arr[idx__8916 + 1]
    }else {
      if("\ufdd0'else") {
        return not_found
      }else {
        return null
      }
    }
  }
};
cljs.core.HashCollisionNode.prototype.ensure_editable_array = function(e, count, array) {
  var this__8917 = this;
  var inode__8918 = this;
  if(e === this__8917.edit) {
    this__8917.arr = array;
    this__8917.cnt = count;
    return inode__8918
  }else {
    return new cljs.core.HashCollisionNode(this__8917.edit, this__8917.collision_hash, count, array)
  }
};
cljs.core.HashCollisionNode;
cljs.core.create_node = function() {
  var create_node = null;
  var create_node__6 = function(shift, key1, val1, key2hash, key2, val2) {
    var key1hash__8923 = cljs.core.hash.call(null, key1);
    if(key1hash__8923 === key2hash) {
      return new cljs.core.HashCollisionNode(null, key1hash__8923, 2, [key1, val1, key2, val2])
    }else {
      var added_leaf_QMARK___8924 = new cljs.core.Box(false);
      return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift, key1hash__8923, key1, val1, added_leaf_QMARK___8924).inode_assoc(shift, key2hash, key2, val2, added_leaf_QMARK___8924)
    }
  };
  var create_node__7 = function(edit, shift, key1, val1, key2hash, key2, val2) {
    var key1hash__8925 = cljs.core.hash.call(null, key1);
    if(key1hash__8925 === key2hash) {
      return new cljs.core.HashCollisionNode(null, key1hash__8925, 2, [key1, val1, key2, val2])
    }else {
      var added_leaf_QMARK___8926 = new cljs.core.Box(false);
      return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit, shift, key1hash__8925, key1, val1, added_leaf_QMARK___8926).inode_assoc_BANG_(edit, shift, key2hash, key2, val2, added_leaf_QMARK___8926)
    }
  };
  create_node = function(edit, shift, key1, val1, key2hash, key2, val2) {
    switch(arguments.length) {
      case 6:
        return create_node__6.call(this, edit, shift, key1, val1, key2hash, key2);
      case 7:
        return create_node__7.call(this, edit, shift, key1, val1, key2hash, key2, val2)
    }
    throw"Invalid arity: " + arguments.length;
  };
  create_node.cljs$lang$arity$6 = create_node__6;
  create_node.cljs$lang$arity$7 = create_node__7;
  return create_node
}();
cljs.core.NodeSeq = function(meta, nodes, i, s, __hash) {
  this.meta = meta;
  this.nodes = nodes;
  this.i = i;
  this.s = s;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 31850572
};
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/NodeSeq")
};
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__8927 = this;
  var h__2218__auto____8928 = this__8927.__hash;
  if(!(h__2218__auto____8928 == null)) {
    return h__2218__auto____8928
  }else {
    var h__2218__auto____8929 = cljs.core.hash_coll.call(null, coll);
    this__8927.__hash = h__2218__auto____8929;
    return h__2218__auto____8929
  }
};
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__8930 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.NodeSeq.prototype.toString = function() {
  var this__8931 = this;
  var this__8932 = this;
  return cljs.core.pr_str.call(null, this__8932)
};
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(this$) {
  var this__8933 = this;
  return this$
};
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = function(coll) {
  var this__8934 = this;
  if(this__8934.s == null) {
    return cljs.core.PersistentVector.fromArray([this__8934.nodes[this__8934.i], this__8934.nodes[this__8934.i + 1]], true)
  }else {
    return cljs.core.first.call(null, this__8934.s)
  }
};
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(coll) {
  var this__8935 = this;
  if(this__8935.s == null) {
    return cljs.core.create_inode_seq.call(null, this__8935.nodes, this__8935.i + 2, null)
  }else {
    return cljs.core.create_inode_seq.call(null, this__8935.nodes, this__8935.i, cljs.core.next.call(null, this__8935.s))
  }
};
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__8936 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__8937 = this;
  return new cljs.core.NodeSeq(meta, this__8937.nodes, this__8937.i, this__8937.s, this__8937.__hash)
};
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__8938 = this;
  return this__8938.meta
};
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__8939 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__8939.meta)
};
cljs.core.NodeSeq;
cljs.core.create_inode_seq = function() {
  var create_inode_seq = null;
  var create_inode_seq__1 = function(nodes) {
    return create_inode_seq.call(null, nodes, 0, null)
  };
  var create_inode_seq__3 = function(nodes, i, s) {
    if(s == null) {
      var len__8946 = nodes.length;
      var j__8947 = i;
      while(true) {
        if(j__8947 < len__8946) {
          if(!(nodes[j__8947] == null)) {
            return new cljs.core.NodeSeq(null, nodes, j__8947, null, null)
          }else {
            var temp__3971__auto____8948 = nodes[j__8947 + 1];
            if(cljs.core.truth_(temp__3971__auto____8948)) {
              var node__8949 = temp__3971__auto____8948;
              var temp__3971__auto____8950 = node__8949.inode_seq();
              if(cljs.core.truth_(temp__3971__auto____8950)) {
                var node_seq__8951 = temp__3971__auto____8950;
                return new cljs.core.NodeSeq(null, nodes, j__8947 + 2, node_seq__8951, null)
              }else {
                var G__8952 = j__8947 + 2;
                j__8947 = G__8952;
                continue
              }
            }else {
              var G__8953 = j__8947 + 2;
              j__8947 = G__8953;
              continue
            }
          }
        }else {
          return null
        }
        break
      }
    }else {
      return new cljs.core.NodeSeq(null, nodes, i, s, null)
    }
  };
  create_inode_seq = function(nodes, i, s) {
    switch(arguments.length) {
      case 1:
        return create_inode_seq__1.call(this, nodes);
      case 3:
        return create_inode_seq__3.call(this, nodes, i, s)
    }
    throw"Invalid arity: " + arguments.length;
  };
  create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
  create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
  return create_inode_seq
}();
cljs.core.ArrayNodeSeq = function(meta, nodes, i, s, __hash) {
  this.meta = meta;
  this.nodes = nodes;
  this.i = i;
  this.s = s;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 31850572
};
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/ArrayNodeSeq")
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__8954 = this;
  var h__2218__auto____8955 = this__8954.__hash;
  if(!(h__2218__auto____8955 == null)) {
    return h__2218__auto____8955
  }else {
    var h__2218__auto____8956 = cljs.core.hash_coll.call(null, coll);
    this__8954.__hash = h__2218__auto____8956;
    return h__2218__auto____8956
  }
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__8957 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.ArrayNodeSeq.prototype.toString = function() {
  var this__8958 = this;
  var this__8959 = this;
  return cljs.core.pr_str.call(null, this__8959)
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(this$) {
  var this__8960 = this;
  return this$
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = function(coll) {
  var this__8961 = this;
  return cljs.core.first.call(null, this__8961.s)
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(coll) {
  var this__8962 = this;
  return cljs.core.create_array_node_seq.call(null, null, this__8962.nodes, this__8962.i, cljs.core.next.call(null, this__8962.s))
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__8963 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__8964 = this;
  return new cljs.core.ArrayNodeSeq(meta, this__8964.nodes, this__8964.i, this__8964.s, this__8964.__hash)
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__8965 = this;
  return this__8965.meta
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__8966 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__8966.meta)
};
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = function() {
  var create_array_node_seq = null;
  var create_array_node_seq__1 = function(nodes) {
    return create_array_node_seq.call(null, null, nodes, 0, null)
  };
  var create_array_node_seq__4 = function(meta, nodes, i, s) {
    if(s == null) {
      var len__8973 = nodes.length;
      var j__8974 = i;
      while(true) {
        if(j__8974 < len__8973) {
          var temp__3971__auto____8975 = nodes[j__8974];
          if(cljs.core.truth_(temp__3971__auto____8975)) {
            var nj__8976 = temp__3971__auto____8975;
            var temp__3971__auto____8977 = nj__8976.inode_seq();
            if(cljs.core.truth_(temp__3971__auto____8977)) {
              var ns__8978 = temp__3971__auto____8977;
              return new cljs.core.ArrayNodeSeq(meta, nodes, j__8974 + 1, ns__8978, null)
            }else {
              var G__8979 = j__8974 + 1;
              j__8974 = G__8979;
              continue
            }
          }else {
            var G__8980 = j__8974 + 1;
            j__8974 = G__8980;
            continue
          }
        }else {
          return null
        }
        break
      }
    }else {
      return new cljs.core.ArrayNodeSeq(meta, nodes, i, s, null)
    }
  };
  create_array_node_seq = function(meta, nodes, i, s) {
    switch(arguments.length) {
      case 1:
        return create_array_node_seq__1.call(this, meta);
      case 4:
        return create_array_node_seq__4.call(this, meta, nodes, i, s)
    }
    throw"Invalid arity: " + arguments.length;
  };
  create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
  create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
  return create_array_node_seq
}();
cljs.core.PersistentHashMap = function(meta, cnt, root, has_nil_QMARK_, nil_val, __hash) {
  this.meta = meta;
  this.cnt = cnt;
  this.root = root;
  this.has_nil_QMARK_ = has_nil_QMARK_;
  this.nil_val = nil_val;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 1;
  this.cljs$lang$protocol_mask$partition0$ = 16123663
};
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/PersistentHashMap")
};
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = function(coll) {
  var this__8983 = this;
  return new cljs.core.TransientHashMap({}, this__8983.root, this__8983.cnt, this__8983.has_nil_QMARK_, this__8983.nil_val)
};
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__8984 = this;
  var h__2218__auto____8985 = this__8984.__hash;
  if(!(h__2218__auto____8985 == null)) {
    return h__2218__auto____8985
  }else {
    var h__2218__auto____8986 = cljs.core.hash_imap.call(null, coll);
    this__8984.__hash = h__2218__auto____8986;
    return h__2218__auto____8986
  }
};
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(coll, k) {
  var this__8987 = this;
  return coll.cljs$core$ILookup$_lookup$arity$3(coll, k, null)
};
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(coll, k, not_found) {
  var this__8988 = this;
  if(k == null) {
    if(this__8988.has_nil_QMARK_) {
      return this__8988.nil_val
    }else {
      return not_found
    }
  }else {
    if(this__8988.root == null) {
      return not_found
    }else {
      if("\ufdd0'else") {
        return this__8988.root.inode_lookup(0, cljs.core.hash.call(null, k), k, not_found)
      }else {
        return null
      }
    }
  }
};
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(coll, k, v) {
  var this__8989 = this;
  if(k == null) {
    if(function() {
      var and__3822__auto____8990 = this__8989.has_nil_QMARK_;
      if(and__3822__auto____8990) {
        return v === this__8989.nil_val
      }else {
        return and__3822__auto____8990
      }
    }()) {
      return coll
    }else {
      return new cljs.core.PersistentHashMap(this__8989.meta, this__8989.has_nil_QMARK_ ? this__8989.cnt : this__8989.cnt + 1, this__8989.root, true, v, null)
    }
  }else {
    var added_leaf_QMARK___8991 = new cljs.core.Box(false);
    var new_root__8992 = (this__8989.root == null ? cljs.core.BitmapIndexedNode.EMPTY : this__8989.root).inode_assoc(0, cljs.core.hash.call(null, k), k, v, added_leaf_QMARK___8991);
    if(new_root__8992 === this__8989.root) {
      return coll
    }else {
      return new cljs.core.PersistentHashMap(this__8989.meta, added_leaf_QMARK___8991.val ? this__8989.cnt + 1 : this__8989.cnt, new_root__8992, this__8989.has_nil_QMARK_, this__8989.nil_val, null)
    }
  }
};
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(coll, k) {
  var this__8993 = this;
  if(k == null) {
    return this__8993.has_nil_QMARK_
  }else {
    if(this__8993.root == null) {
      return false
    }else {
      if("\ufdd0'else") {
        return!(this__8993.root.inode_lookup(0, cljs.core.hash.call(null, k), k, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)
      }else {
        return null
      }
    }
  }
};
cljs.core.PersistentHashMap.prototype.call = function() {
  var G__9016 = null;
  var G__9016__2 = function(this_sym8994, k) {
    var this__8996 = this;
    var this_sym8994__8997 = this;
    var coll__8998 = this_sym8994__8997;
    return coll__8998.cljs$core$ILookup$_lookup$arity$2(coll__8998, k)
  };
  var G__9016__3 = function(this_sym8995, k, not_found) {
    var this__8996 = this;
    var this_sym8995__8999 = this;
    var coll__9000 = this_sym8995__8999;
    return coll__9000.cljs$core$ILookup$_lookup$arity$3(coll__9000, k, not_found)
  };
  G__9016 = function(this_sym8995, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__9016__2.call(this, this_sym8995, k);
      case 3:
        return G__9016__3.call(this, this_sym8995, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__9016
}();
cljs.core.PersistentHashMap.prototype.apply = function(this_sym8981, args8982) {
  var this__9001 = this;
  return this_sym8981.call.apply(this_sym8981, [this_sym8981].concat(args8982.slice()))
};
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function(coll, f, init) {
  var this__9002 = this;
  var init__9003 = this__9002.has_nil_QMARK_ ? f.call(null, init, null, this__9002.nil_val) : init;
  if(cljs.core.reduced_QMARK_.call(null, init__9003)) {
    return cljs.core.deref.call(null, init__9003)
  }else {
    if(!(this__9002.root == null)) {
      return this__9002.root.kv_reduce(f, init__9003)
    }else {
      if("\ufdd0'else") {
        return init__9003
      }else {
        return null
      }
    }
  }
};
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, entry) {
  var this__9004 = this;
  if(cljs.core.vector_QMARK_.call(null, entry)) {
    return coll.cljs$core$IAssociative$_assoc$arity$3(coll, cljs.core._nth.call(null, entry, 0), cljs.core._nth.call(null, entry, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, coll, entry)
  }
};
cljs.core.PersistentHashMap.prototype.toString = function() {
  var this__9005 = this;
  var this__9006 = this;
  return cljs.core.pr_str.call(null, this__9006)
};
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__9007 = this;
  if(this__9007.cnt > 0) {
    var s__9008 = !(this__9007.root == null) ? this__9007.root.inode_seq() : null;
    if(this__9007.has_nil_QMARK_) {
      return cljs.core.cons.call(null, cljs.core.PersistentVector.fromArray([null, this__9007.nil_val], true), s__9008)
    }else {
      return s__9008
    }
  }else {
    return null
  }
};
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__9009 = this;
  return this__9009.cnt
};
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__9010 = this;
  return cljs.core.equiv_map.call(null, coll, other)
};
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__9011 = this;
  return new cljs.core.PersistentHashMap(meta, this__9011.cnt, this__9011.root, this__9011.has_nil_QMARK_, this__9011.nil_val, this__9011.__hash)
};
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__9012 = this;
  return this__9012.meta
};
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__9013 = this;
  return cljs.core._with_meta.call(null, cljs.core.PersistentHashMap.EMPTY, this__9013.meta)
};
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = function(coll, k) {
  var this__9014 = this;
  if(k == null) {
    if(this__9014.has_nil_QMARK_) {
      return new cljs.core.PersistentHashMap(this__9014.meta, this__9014.cnt - 1, this__9014.root, false, null, null)
    }else {
      return coll
    }
  }else {
    if(this__9014.root == null) {
      return coll
    }else {
      if("\ufdd0'else") {
        var new_root__9015 = this__9014.root.inode_without(0, cljs.core.hash.call(null, k), k);
        if(new_root__9015 === this__9014.root) {
          return coll
        }else {
          return new cljs.core.PersistentHashMap(this__9014.meta, this__9014.cnt - 1, new_root__9015, this__9014.has_nil_QMARK_, this__9014.nil_val, null)
        }
      }else {
        return null
      }
    }
  }
};
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = new cljs.core.PersistentHashMap(null, 0, null, false, null, 0);
cljs.core.PersistentHashMap.fromArrays = function(ks, vs) {
  var len__9017 = ks.length;
  var i__9018 = 0;
  var out__9019 = cljs.core.transient$.call(null, cljs.core.PersistentHashMap.EMPTY);
  while(true) {
    if(i__9018 < len__9017) {
      var G__9020 = i__9018 + 1;
      var G__9021 = cljs.core.assoc_BANG_.call(null, out__9019, ks[i__9018], vs[i__9018]);
      i__9018 = G__9020;
      out__9019 = G__9021;
      continue
    }else {
      return cljs.core.persistent_BANG_.call(null, out__9019)
    }
    break
  }
};
cljs.core.TransientHashMap = function(edit, root, count, has_nil_QMARK_, nil_val) {
  this.edit = edit;
  this.root = root;
  this.count = count;
  this.has_nil_QMARK_ = has_nil_QMARK_;
  this.nil_val = nil_val;
  this.cljs$lang$protocol_mask$partition1$ = 14;
  this.cljs$lang$protocol_mask$partition0$ = 258
};
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/TransientHashMap")
};
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = function(tcoll, key) {
  var this__9022 = this;
  return tcoll.without_BANG_(key)
};
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = function(tcoll, key, val) {
  var this__9023 = this;
  return tcoll.assoc_BANG_(key, val)
};
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = function(tcoll, val) {
  var this__9024 = this;
  return tcoll.conj_BANG_(val)
};
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = function(tcoll) {
  var this__9025 = this;
  return tcoll.persistent_BANG_()
};
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(tcoll, k) {
  var this__9026 = this;
  if(k == null) {
    if(this__9026.has_nil_QMARK_) {
      return this__9026.nil_val
    }else {
      return null
    }
  }else {
    if(this__9026.root == null) {
      return null
    }else {
      return this__9026.root.inode_lookup(0, cljs.core.hash.call(null, k), k)
    }
  }
};
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(tcoll, k, not_found) {
  var this__9027 = this;
  if(k == null) {
    if(this__9027.has_nil_QMARK_) {
      return this__9027.nil_val
    }else {
      return not_found
    }
  }else {
    if(this__9027.root == null) {
      return not_found
    }else {
      return this__9027.root.inode_lookup(0, cljs.core.hash.call(null, k), k, not_found)
    }
  }
};
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__9028 = this;
  if(this__9028.edit) {
    return this__9028.count
  }else {
    throw new Error("count after persistent!");
  }
};
cljs.core.TransientHashMap.prototype.conj_BANG_ = function(o) {
  var this__9029 = this;
  var tcoll__9030 = this;
  if(this__9029.edit) {
    if(function() {
      var G__9031__9032 = o;
      if(G__9031__9032) {
        if(function() {
          var or__3824__auto____9033 = G__9031__9032.cljs$lang$protocol_mask$partition0$ & 2048;
          if(or__3824__auto____9033) {
            return or__3824__auto____9033
          }else {
            return G__9031__9032.cljs$core$IMapEntry$
          }
        }()) {
          return true
        }else {
          if(!G__9031__9032.cljs$lang$protocol_mask$partition0$) {
            return cljs.core.type_satisfies_.call(null, cljs.core.IMapEntry, G__9031__9032)
          }else {
            return false
          }
        }
      }else {
        return cljs.core.type_satisfies_.call(null, cljs.core.IMapEntry, G__9031__9032)
      }
    }()) {
      return tcoll__9030.assoc_BANG_(cljs.core.key.call(null, o), cljs.core.val.call(null, o))
    }else {
      var es__9034 = cljs.core.seq.call(null, o);
      var tcoll__9035 = tcoll__9030;
      while(true) {
        var temp__3971__auto____9036 = cljs.core.first.call(null, es__9034);
        if(cljs.core.truth_(temp__3971__auto____9036)) {
          var e__9037 = temp__3971__auto____9036;
          var G__9048 = cljs.core.next.call(null, es__9034);
          var G__9049 = tcoll__9035.assoc_BANG_(cljs.core.key.call(null, e__9037), cljs.core.val.call(null, e__9037));
          es__9034 = G__9048;
          tcoll__9035 = G__9049;
          continue
        }else {
          return tcoll__9035
        }
        break
      }
    }
  }else {
    throw new Error("conj! after persistent");
  }
};
cljs.core.TransientHashMap.prototype.assoc_BANG_ = function(k, v) {
  var this__9038 = this;
  var tcoll__9039 = this;
  if(this__9038.edit) {
    if(k == null) {
      if(this__9038.nil_val === v) {
      }else {
        this__9038.nil_val = v
      }
      if(this__9038.has_nil_QMARK_) {
      }else {
        this__9038.count = this__9038.count + 1;
        this__9038.has_nil_QMARK_ = true
      }
      return tcoll__9039
    }else {
      var added_leaf_QMARK___9040 = new cljs.core.Box(false);
      var node__9041 = (this__9038.root == null ? cljs.core.BitmapIndexedNode.EMPTY : this__9038.root).inode_assoc_BANG_(this__9038.edit, 0, cljs.core.hash.call(null, k), k, v, added_leaf_QMARK___9040);
      if(node__9041 === this__9038.root) {
      }else {
        this__9038.root = node__9041
      }
      if(added_leaf_QMARK___9040.val) {
        this__9038.count = this__9038.count + 1
      }else {
      }
      return tcoll__9039
    }
  }else {
    throw new Error("assoc! after persistent!");
  }
};
cljs.core.TransientHashMap.prototype.without_BANG_ = function(k) {
  var this__9042 = this;
  var tcoll__9043 = this;
  if(this__9042.edit) {
    if(k == null) {
      if(this__9042.has_nil_QMARK_) {
        this__9042.has_nil_QMARK_ = false;
        this__9042.nil_val = null;
        this__9042.count = this__9042.count - 1;
        return tcoll__9043
      }else {
        return tcoll__9043
      }
    }else {
      if(this__9042.root == null) {
        return tcoll__9043
      }else {
        var removed_leaf_QMARK___9044 = new cljs.core.Box(false);
        var node__9045 = this__9042.root.inode_without_BANG_(this__9042.edit, 0, cljs.core.hash.call(null, k), k, removed_leaf_QMARK___9044);
        if(node__9045 === this__9042.root) {
        }else {
          this__9042.root = node__9045
        }
        if(cljs.core.truth_(removed_leaf_QMARK___9044[0])) {
          this__9042.count = this__9042.count - 1
        }else {
        }
        return tcoll__9043
      }
    }
  }else {
    throw new Error("dissoc! after persistent!");
  }
};
cljs.core.TransientHashMap.prototype.persistent_BANG_ = function() {
  var this__9046 = this;
  var tcoll__9047 = this;
  if(this__9046.edit) {
    this__9046.edit = null;
    return new cljs.core.PersistentHashMap(null, this__9046.count, this__9046.root, this__9046.has_nil_QMARK_, this__9046.nil_val, null)
  }else {
    throw new Error("persistent! called twice");
  }
};
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = function tree_map_seq_push(node, stack, ascending_QMARK_) {
  var t__9052 = node;
  var stack__9053 = stack;
  while(true) {
    if(!(t__9052 == null)) {
      var G__9054 = ascending_QMARK_ ? t__9052.left : t__9052.right;
      var G__9055 = cljs.core.conj.call(null, stack__9053, t__9052);
      t__9052 = G__9054;
      stack__9053 = G__9055;
      continue
    }else {
      return stack__9053
    }
    break
  }
};
cljs.core.PersistentTreeMapSeq = function(meta, stack, ascending_QMARK_, cnt, __hash) {
  this.meta = meta;
  this.stack = stack;
  this.ascending_QMARK_ = ascending_QMARK_;
  this.cnt = cnt;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 31850570
};
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/PersistentTreeMapSeq")
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__9056 = this;
  var h__2218__auto____9057 = this__9056.__hash;
  if(!(h__2218__auto____9057 == null)) {
    return h__2218__auto____9057
  }else {
    var h__2218__auto____9058 = cljs.core.hash_coll.call(null, coll);
    this__9056.__hash = h__2218__auto____9058;
    return h__2218__auto____9058
  }
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__9059 = this;
  return cljs.core.cons.call(null, o, coll)
};
cljs.core.PersistentTreeMapSeq.prototype.toString = function() {
  var this__9060 = this;
  var this__9061 = this;
  return cljs.core.pr_str.call(null, this__9061)
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = function(this$) {
  var this__9062 = this;
  return this$
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__9063 = this;
  if(this__9063.cnt < 0) {
    return cljs.core.count.call(null, cljs.core.next.call(null, coll)) + 1
  }else {
    return this__9063.cnt
  }
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = function(this$) {
  var this__9064 = this;
  return cljs.core.peek.call(null, this__9064.stack)
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = function(this$) {
  var this__9065 = this;
  var t__9066 = cljs.core.first.call(null, this__9065.stack);
  var next_stack__9067 = cljs.core.tree_map_seq_push.call(null, this__9065.ascending_QMARK_ ? t__9066.right : t__9066.left, cljs.core.next.call(null, this__9065.stack), this__9065.ascending_QMARK_);
  if(!(next_stack__9067 == null)) {
    return new cljs.core.PersistentTreeMapSeq(null, next_stack__9067, this__9065.ascending_QMARK_, this__9065.cnt - 1, null)
  }else {
    return cljs.core.List.EMPTY
  }
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__9068 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__9069 = this;
  return new cljs.core.PersistentTreeMapSeq(meta, this__9069.stack, this__9069.ascending_QMARK_, this__9069.cnt, this__9069.__hash)
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__9070 = this;
  return this__9070.meta
};
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = function create_tree_map_seq(tree, ascending_QMARK_, cnt) {
  return new cljs.core.PersistentTreeMapSeq(null, cljs.core.tree_map_seq_push.call(null, tree, null, ascending_QMARK_), ascending_QMARK_, cnt, null)
};
cljs.core.balance_left = function balance_left(key, val, ins, right) {
  if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, ins)) {
    if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, ins.left)) {
      return new cljs.core.RedNode(ins.key, ins.val, ins.left.blacken(), new cljs.core.BlackNode(key, val, ins.right, right, null), null)
    }else {
      if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, ins.right)) {
        return new cljs.core.RedNode(ins.right.key, ins.right.val, new cljs.core.BlackNode(ins.key, ins.val, ins.left, ins.right.left, null), new cljs.core.BlackNode(key, val, ins.right.right, right, null), null)
      }else {
        if("\ufdd0'else") {
          return new cljs.core.BlackNode(key, val, ins, right, null)
        }else {
          return null
        }
      }
    }
  }else {
    return new cljs.core.BlackNode(key, val, ins, right, null)
  }
};
cljs.core.balance_right = function balance_right(key, val, left, ins) {
  if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, ins)) {
    if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, ins.right)) {
      return new cljs.core.RedNode(ins.key, ins.val, new cljs.core.BlackNode(key, val, left, ins.left, null), ins.right.blacken(), null)
    }else {
      if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, ins.left)) {
        return new cljs.core.RedNode(ins.left.key, ins.left.val, new cljs.core.BlackNode(key, val, left, ins.left.left, null), new cljs.core.BlackNode(ins.key, ins.val, ins.left.right, ins.right, null), null)
      }else {
        if("\ufdd0'else") {
          return new cljs.core.BlackNode(key, val, left, ins, null)
        }else {
          return null
        }
      }
    }
  }else {
    return new cljs.core.BlackNode(key, val, left, ins, null)
  }
};
cljs.core.balance_left_del = function balance_left_del(key, val, del, right) {
  if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, del)) {
    return new cljs.core.RedNode(key, val, del.blacken(), right, null)
  }else {
    if(cljs.core.instance_QMARK_.call(null, cljs.core.BlackNode, right)) {
      return cljs.core.balance_right.call(null, key, val, del, right.redden())
    }else {
      if(function() {
        var and__3822__auto____9072 = cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, right);
        if(and__3822__auto____9072) {
          return cljs.core.instance_QMARK_.call(null, cljs.core.BlackNode, right.left)
        }else {
          return and__3822__auto____9072
        }
      }()) {
        return new cljs.core.RedNode(right.left.key, right.left.val, new cljs.core.BlackNode(key, val, del, right.left.left, null), cljs.core.balance_right.call(null, right.key, right.val, right.left.right, right.right.redden()), null)
      }else {
        if("\ufdd0'else") {
          throw new Error("red-black tree invariant violation");
        }else {
          return null
        }
      }
    }
  }
};
cljs.core.balance_right_del = function balance_right_del(key, val, left, del) {
  if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, del)) {
    return new cljs.core.RedNode(key, val, left, del.blacken(), null)
  }else {
    if(cljs.core.instance_QMARK_.call(null, cljs.core.BlackNode, left)) {
      return cljs.core.balance_left.call(null, key, val, left.redden(), del)
    }else {
      if(function() {
        var and__3822__auto____9074 = cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, left);
        if(and__3822__auto____9074) {
          return cljs.core.instance_QMARK_.call(null, cljs.core.BlackNode, left.right)
        }else {
          return and__3822__auto____9074
        }
      }()) {
        return new cljs.core.RedNode(left.right.key, left.right.val, cljs.core.balance_left.call(null, left.key, left.val, left.left.redden(), left.right.left), new cljs.core.BlackNode(key, val, left.right.right, del, null), null)
      }else {
        if("\ufdd0'else") {
          throw new Error("red-black tree invariant violation");
        }else {
          return null
        }
      }
    }
  }
};
cljs.core.tree_map_kv_reduce = function tree_map_kv_reduce(node, f, init) {
  var init__9078 = f.call(null, init, node.key, node.val);
  if(cljs.core.reduced_QMARK_.call(null, init__9078)) {
    return cljs.core.deref.call(null, init__9078)
  }else {
    var init__9079 = !(node.left == null) ? tree_map_kv_reduce.call(null, node.left, f, init__9078) : init__9078;
    if(cljs.core.reduced_QMARK_.call(null, init__9079)) {
      return cljs.core.deref.call(null, init__9079)
    }else {
      var init__9080 = !(node.right == null) ? tree_map_kv_reduce.call(null, node.right, f, init__9079) : init__9079;
      if(cljs.core.reduced_QMARK_.call(null, init__9080)) {
        return cljs.core.deref.call(null, init__9080)
      }else {
        return init__9080
      }
    }
  }
};
cljs.core.BlackNode = function(key, val, left, right, __hash) {
  this.key = key;
  this.val = val;
  this.left = left;
  this.right = right;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 32402207
};
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/BlackNode")
};
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__9083 = this;
  var h__2218__auto____9084 = this__9083.__hash;
  if(!(h__2218__auto____9084 == null)) {
    return h__2218__auto____9084
  }else {
    var h__2218__auto____9085 = cljs.core.hash_coll.call(null, coll);
    this__9083.__hash = h__2218__auto____9085;
    return h__2218__auto____9085
  }
};
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = function(node, k) {
  var this__9086 = this;
  return node.cljs$core$IIndexed$_nth$arity$3(node, k, null)
};
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = function(node, k, not_found) {
  var this__9087 = this;
  return node.cljs$core$IIndexed$_nth$arity$3(node, k, not_found)
};
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(node, k, v) {
  var this__9088 = this;
  return cljs.core.assoc.call(null, cljs.core.PersistentVector.fromArray([this__9088.key, this__9088.val], true), k, v)
};
cljs.core.BlackNode.prototype.call = function() {
  var G__9136 = null;
  var G__9136__2 = function(this_sym9089, k) {
    var this__9091 = this;
    var this_sym9089__9092 = this;
    var node__9093 = this_sym9089__9092;
    return node__9093.cljs$core$ILookup$_lookup$arity$2(node__9093, k)
  };
  var G__9136__3 = function(this_sym9090, k, not_found) {
    var this__9091 = this;
    var this_sym9090__9094 = this;
    var node__9095 = this_sym9090__9094;
    return node__9095.cljs$core$ILookup$_lookup$arity$3(node__9095, k, not_found)
  };
  G__9136 = function(this_sym9090, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__9136__2.call(this, this_sym9090, k);
      case 3:
        return G__9136__3.call(this, this_sym9090, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__9136
}();
cljs.core.BlackNode.prototype.apply = function(this_sym9081, args9082) {
  var this__9096 = this;
  return this_sym9081.call.apply(this_sym9081, [this_sym9081].concat(args9082.slice()))
};
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = function(node, o) {
  var this__9097 = this;
  return cljs.core.PersistentVector.fromArray([this__9097.key, this__9097.val, o], true)
};
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = function(node) {
  var this__9098 = this;
  return this__9098.key
};
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = function(node) {
  var this__9099 = this;
  return this__9099.val
};
cljs.core.BlackNode.prototype.add_right = function(ins) {
  var this__9100 = this;
  var node__9101 = this;
  return ins.balance_right(node__9101)
};
cljs.core.BlackNode.prototype.redden = function() {
  var this__9102 = this;
  var node__9103 = this;
  return new cljs.core.RedNode(this__9102.key, this__9102.val, this__9102.left, this__9102.right, null)
};
cljs.core.BlackNode.prototype.remove_right = function(del) {
  var this__9104 = this;
  var node__9105 = this;
  return cljs.core.balance_right_del.call(null, this__9104.key, this__9104.val, this__9104.left, del)
};
cljs.core.BlackNode.prototype.replace = function(key, val, left, right) {
  var this__9106 = this;
  var node__9107 = this;
  return new cljs.core.BlackNode(key, val, left, right, null)
};
cljs.core.BlackNode.prototype.kv_reduce = function(f, init) {
  var this__9108 = this;
  var node__9109 = this;
  return cljs.core.tree_map_kv_reduce.call(null, node__9109, f, init)
};
cljs.core.BlackNode.prototype.remove_left = function(del) {
  var this__9110 = this;
  var node__9111 = this;
  return cljs.core.balance_left_del.call(null, this__9110.key, this__9110.val, del, this__9110.right)
};
cljs.core.BlackNode.prototype.add_left = function(ins) {
  var this__9112 = this;
  var node__9113 = this;
  return ins.balance_left(node__9113)
};
cljs.core.BlackNode.prototype.balance_left = function(parent) {
  var this__9114 = this;
  var node__9115 = this;
  return new cljs.core.BlackNode(parent.key, parent.val, node__9115, parent.right, null)
};
cljs.core.BlackNode.prototype.toString = function() {
  var G__9137 = null;
  var G__9137__0 = function() {
    var this__9116 = this;
    var this__9118 = this;
    return cljs.core.pr_str.call(null, this__9118)
  };
  G__9137 = function() {
    switch(arguments.length) {
      case 0:
        return G__9137__0.call(this)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__9137
}();
cljs.core.BlackNode.prototype.balance_right = function(parent) {
  var this__9119 = this;
  var node__9120 = this;
  return new cljs.core.BlackNode(parent.key, parent.val, parent.left, node__9120, null)
};
cljs.core.BlackNode.prototype.blacken = function() {
  var this__9121 = this;
  var node__9122 = this;
  return node__9122
};
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = function(node, f) {
  var this__9123 = this;
  return cljs.core.ci_reduce.call(null, node, f)
};
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = function(node, f, start) {
  var this__9124 = this;
  return cljs.core.ci_reduce.call(null, node, f, start)
};
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = function(node) {
  var this__9125 = this;
  return cljs.core.list.call(null, this__9125.key, this__9125.val)
};
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = function(node) {
  var this__9126 = this;
  return 2
};
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = function(node) {
  var this__9127 = this;
  return this__9127.val
};
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = function(node) {
  var this__9128 = this;
  return cljs.core.PersistentVector.fromArray([this__9128.key], true)
};
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = function(node, n, v) {
  var this__9129 = this;
  return cljs.core._assoc_n.call(null, cljs.core.PersistentVector.fromArray([this__9129.key, this__9129.val], true), n, v)
};
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__9130 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(node, meta) {
  var this__9131 = this;
  return cljs.core.with_meta.call(null, cljs.core.PersistentVector.fromArray([this__9131.key, this__9131.val], true), meta)
};
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = function(node) {
  var this__9132 = this;
  return null
};
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = function(node, n) {
  var this__9133 = this;
  if(n === 0) {
    return this__9133.key
  }else {
    if(n === 1) {
      return this__9133.val
    }else {
      if("\ufdd0'else") {
        return null
      }else {
        return null
      }
    }
  }
};
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = function(node, n, not_found) {
  var this__9134 = this;
  if(n === 0) {
    return this__9134.key
  }else {
    if(n === 1) {
      return this__9134.val
    }else {
      if("\ufdd0'else") {
        return not_found
      }else {
        return null
      }
    }
  }
};
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(node) {
  var this__9135 = this;
  return cljs.core.PersistentVector.EMPTY
};
cljs.core.BlackNode;
cljs.core.RedNode = function(key, val, left, right, __hash) {
  this.key = key;
  this.val = val;
  this.left = left;
  this.right = right;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 32402207
};
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/RedNode")
};
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__9140 = this;
  var h__2218__auto____9141 = this__9140.__hash;
  if(!(h__2218__auto____9141 == null)) {
    return h__2218__auto____9141
  }else {
    var h__2218__auto____9142 = cljs.core.hash_coll.call(null, coll);
    this__9140.__hash = h__2218__auto____9142;
    return h__2218__auto____9142
  }
};
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = function(node, k) {
  var this__9143 = this;
  return node.cljs$core$IIndexed$_nth$arity$3(node, k, null)
};
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = function(node, k, not_found) {
  var this__9144 = this;
  return node.cljs$core$IIndexed$_nth$arity$3(node, k, not_found)
};
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(node, k, v) {
  var this__9145 = this;
  return cljs.core.assoc.call(null, cljs.core.PersistentVector.fromArray([this__9145.key, this__9145.val], true), k, v)
};
cljs.core.RedNode.prototype.call = function() {
  var G__9193 = null;
  var G__9193__2 = function(this_sym9146, k) {
    var this__9148 = this;
    var this_sym9146__9149 = this;
    var node__9150 = this_sym9146__9149;
    return node__9150.cljs$core$ILookup$_lookup$arity$2(node__9150, k)
  };
  var G__9193__3 = function(this_sym9147, k, not_found) {
    var this__9148 = this;
    var this_sym9147__9151 = this;
    var node__9152 = this_sym9147__9151;
    return node__9152.cljs$core$ILookup$_lookup$arity$3(node__9152, k, not_found)
  };
  G__9193 = function(this_sym9147, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__9193__2.call(this, this_sym9147, k);
      case 3:
        return G__9193__3.call(this, this_sym9147, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__9193
}();
cljs.core.RedNode.prototype.apply = function(this_sym9138, args9139) {
  var this__9153 = this;
  return this_sym9138.call.apply(this_sym9138, [this_sym9138].concat(args9139.slice()))
};
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = function(node, o) {
  var this__9154 = this;
  return cljs.core.PersistentVector.fromArray([this__9154.key, this__9154.val, o], true)
};
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = function(node) {
  var this__9155 = this;
  return this__9155.key
};
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = function(node) {
  var this__9156 = this;
  return this__9156.val
};
cljs.core.RedNode.prototype.add_right = function(ins) {
  var this__9157 = this;
  var node__9158 = this;
  return new cljs.core.RedNode(this__9157.key, this__9157.val, this__9157.left, ins, null)
};
cljs.core.RedNode.prototype.redden = function() {
  var this__9159 = this;
  var node__9160 = this;
  throw new Error("red-black tree invariant violation");
};
cljs.core.RedNode.prototype.remove_right = function(del) {
  var this__9161 = this;
  var node__9162 = this;
  return new cljs.core.RedNode(this__9161.key, this__9161.val, this__9161.left, del, null)
};
cljs.core.RedNode.prototype.replace = function(key, val, left, right) {
  var this__9163 = this;
  var node__9164 = this;
  return new cljs.core.RedNode(key, val, left, right, null)
};
cljs.core.RedNode.prototype.kv_reduce = function(f, init) {
  var this__9165 = this;
  var node__9166 = this;
  return cljs.core.tree_map_kv_reduce.call(null, node__9166, f, init)
};
cljs.core.RedNode.prototype.remove_left = function(del) {
  var this__9167 = this;
  var node__9168 = this;
  return new cljs.core.RedNode(this__9167.key, this__9167.val, del, this__9167.right, null)
};
cljs.core.RedNode.prototype.add_left = function(ins) {
  var this__9169 = this;
  var node__9170 = this;
  return new cljs.core.RedNode(this__9169.key, this__9169.val, ins, this__9169.right, null)
};
cljs.core.RedNode.prototype.balance_left = function(parent) {
  var this__9171 = this;
  var node__9172 = this;
  if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, this__9171.left)) {
    return new cljs.core.RedNode(this__9171.key, this__9171.val, this__9171.left.blacken(), new cljs.core.BlackNode(parent.key, parent.val, this__9171.right, parent.right, null), null)
  }else {
    if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, this__9171.right)) {
      return new cljs.core.RedNode(this__9171.right.key, this__9171.right.val, new cljs.core.BlackNode(this__9171.key, this__9171.val, this__9171.left, this__9171.right.left, null), new cljs.core.BlackNode(parent.key, parent.val, this__9171.right.right, parent.right, null), null)
    }else {
      if("\ufdd0'else") {
        return new cljs.core.BlackNode(parent.key, parent.val, node__9172, parent.right, null)
      }else {
        return null
      }
    }
  }
};
cljs.core.RedNode.prototype.toString = function() {
  var G__9194 = null;
  var G__9194__0 = function() {
    var this__9173 = this;
    var this__9175 = this;
    return cljs.core.pr_str.call(null, this__9175)
  };
  G__9194 = function() {
    switch(arguments.length) {
      case 0:
        return G__9194__0.call(this)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__9194
}();
cljs.core.RedNode.prototype.balance_right = function(parent) {
  var this__9176 = this;
  var node__9177 = this;
  if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, this__9176.right)) {
    return new cljs.core.RedNode(this__9176.key, this__9176.val, new cljs.core.BlackNode(parent.key, parent.val, parent.left, this__9176.left, null), this__9176.right.blacken(), null)
  }else {
    if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, this__9176.left)) {
      return new cljs.core.RedNode(this__9176.left.key, this__9176.left.val, new cljs.core.BlackNode(parent.key, parent.val, parent.left, this__9176.left.left, null), new cljs.core.BlackNode(this__9176.key, this__9176.val, this__9176.left.right, this__9176.right, null), null)
    }else {
      if("\ufdd0'else") {
        return new cljs.core.BlackNode(parent.key, parent.val, parent.left, node__9177, null)
      }else {
        return null
      }
    }
  }
};
cljs.core.RedNode.prototype.blacken = function() {
  var this__9178 = this;
  var node__9179 = this;
  return new cljs.core.BlackNode(this__9178.key, this__9178.val, this__9178.left, this__9178.right, null)
};
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = function(node, f) {
  var this__9180 = this;
  return cljs.core.ci_reduce.call(null, node, f)
};
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = function(node, f, start) {
  var this__9181 = this;
  return cljs.core.ci_reduce.call(null, node, f, start)
};
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = function(node) {
  var this__9182 = this;
  return cljs.core.list.call(null, this__9182.key, this__9182.val)
};
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = function(node) {
  var this__9183 = this;
  return 2
};
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = function(node) {
  var this__9184 = this;
  return this__9184.val
};
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = function(node) {
  var this__9185 = this;
  return cljs.core.PersistentVector.fromArray([this__9185.key], true)
};
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = function(node, n, v) {
  var this__9186 = this;
  return cljs.core._assoc_n.call(null, cljs.core.PersistentVector.fromArray([this__9186.key, this__9186.val], true), n, v)
};
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__9187 = this;
  return cljs.core.equiv_sequential.call(null, coll, other)
};
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(node, meta) {
  var this__9188 = this;
  return cljs.core.with_meta.call(null, cljs.core.PersistentVector.fromArray([this__9188.key, this__9188.val], true), meta)
};
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = function(node) {
  var this__9189 = this;
  return null
};
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = function(node, n) {
  var this__9190 = this;
  if(n === 0) {
    return this__9190.key
  }else {
    if(n === 1) {
      return this__9190.val
    }else {
      if("\ufdd0'else") {
        return null
      }else {
        return null
      }
    }
  }
};
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = function(node, n, not_found) {
  var this__9191 = this;
  if(n === 0) {
    return this__9191.key
  }else {
    if(n === 1) {
      return this__9191.val
    }else {
      if("\ufdd0'else") {
        return not_found
      }else {
        return null
      }
    }
  }
};
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(node) {
  var this__9192 = this;
  return cljs.core.PersistentVector.EMPTY
};
cljs.core.RedNode;
cljs.core.tree_map_add = function tree_map_add(comp, tree, k, v, found) {
  if(tree == null) {
    return new cljs.core.RedNode(k, v, null, null, null)
  }else {
    var c__9198 = comp.call(null, k, tree.key);
    if(c__9198 === 0) {
      found[0] = tree;
      return null
    }else {
      if(c__9198 < 0) {
        var ins__9199 = tree_map_add.call(null, comp, tree.left, k, v, found);
        if(!(ins__9199 == null)) {
          return tree.add_left(ins__9199)
        }else {
          return null
        }
      }else {
        if("\ufdd0'else") {
          var ins__9200 = tree_map_add.call(null, comp, tree.right, k, v, found);
          if(!(ins__9200 == null)) {
            return tree.add_right(ins__9200)
          }else {
            return null
          }
        }else {
          return null
        }
      }
    }
  }
};
cljs.core.tree_map_append = function tree_map_append(left, right) {
  if(left == null) {
    return right
  }else {
    if(right == null) {
      return left
    }else {
      if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, left)) {
        if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, right)) {
          var app__9203 = tree_map_append.call(null, left.right, right.left);
          if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, app__9203)) {
            return new cljs.core.RedNode(app__9203.key, app__9203.val, new cljs.core.RedNode(left.key, left.val, left.left, app__9203.left, null), new cljs.core.RedNode(right.key, right.val, app__9203.right, right.right, null), null)
          }else {
            return new cljs.core.RedNode(left.key, left.val, left.left, new cljs.core.RedNode(right.key, right.val, app__9203, right.right, null), null)
          }
        }else {
          return new cljs.core.RedNode(left.key, left.val, left.left, tree_map_append.call(null, left.right, right), null)
        }
      }else {
        if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, right)) {
          return new cljs.core.RedNode(right.key, right.val, tree_map_append.call(null, left, right.left), right.right, null)
        }else {
          if("\ufdd0'else") {
            var app__9204 = tree_map_append.call(null, left.right, right.left);
            if(cljs.core.instance_QMARK_.call(null, cljs.core.RedNode, app__9204)) {
              return new cljs.core.RedNode(app__9204.key, app__9204.val, new cljs.core.BlackNode(left.key, left.val, left.left, app__9204.left, null), new cljs.core.BlackNode(right.key, right.val, app__9204.right, right.right, null), null)
            }else {
              return cljs.core.balance_left_del.call(null, left.key, left.val, left.left, new cljs.core.BlackNode(right.key, right.val, app__9204, right.right, null))
            }
          }else {
            return null
          }
        }
      }
    }
  }
};
cljs.core.tree_map_remove = function tree_map_remove(comp, tree, k, found) {
  if(!(tree == null)) {
    var c__9210 = comp.call(null, k, tree.key);
    if(c__9210 === 0) {
      found[0] = tree;
      return cljs.core.tree_map_append.call(null, tree.left, tree.right)
    }else {
      if(c__9210 < 0) {
        var del__9211 = tree_map_remove.call(null, comp, tree.left, k, found);
        if(function() {
          var or__3824__auto____9212 = !(del__9211 == null);
          if(or__3824__auto____9212) {
            return or__3824__auto____9212
          }else {
            return!(found[0] == null)
          }
        }()) {
          if(cljs.core.instance_QMARK_.call(null, cljs.core.BlackNode, tree.left)) {
            return cljs.core.balance_left_del.call(null, tree.key, tree.val, del__9211, tree.right)
          }else {
            return new cljs.core.RedNode(tree.key, tree.val, del__9211, tree.right, null)
          }
        }else {
          return null
        }
      }else {
        if("\ufdd0'else") {
          var del__9213 = tree_map_remove.call(null, comp, tree.right, k, found);
          if(function() {
            var or__3824__auto____9214 = !(del__9213 == null);
            if(or__3824__auto____9214) {
              return or__3824__auto____9214
            }else {
              return!(found[0] == null)
            }
          }()) {
            if(cljs.core.instance_QMARK_.call(null, cljs.core.BlackNode, tree.right)) {
              return cljs.core.balance_right_del.call(null, tree.key, tree.val, tree.left, del__9213)
            }else {
              return new cljs.core.RedNode(tree.key, tree.val, tree.left, del__9213, null)
            }
          }else {
            return null
          }
        }else {
          return null
        }
      }
    }
  }else {
    return null
  }
};
cljs.core.tree_map_replace = function tree_map_replace(comp, tree, k, v) {
  var tk__9217 = tree.key;
  var c__9218 = comp.call(null, k, tk__9217);
  if(c__9218 === 0) {
    return tree.replace(tk__9217, v, tree.left, tree.right)
  }else {
    if(c__9218 < 0) {
      return tree.replace(tk__9217, tree.val, tree_map_replace.call(null, comp, tree.left, k, v), tree.right)
    }else {
      if("\ufdd0'else") {
        return tree.replace(tk__9217, tree.val, tree.left, tree_map_replace.call(null, comp, tree.right, k, v))
      }else {
        return null
      }
    }
  }
};
cljs.core.PersistentTreeMap = function(comp, tree, cnt, meta, __hash) {
  this.comp = comp;
  this.tree = tree;
  this.cnt = cnt;
  this.meta = meta;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 418776847
};
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/PersistentTreeMap")
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__9221 = this;
  var h__2218__auto____9222 = this__9221.__hash;
  if(!(h__2218__auto____9222 == null)) {
    return h__2218__auto____9222
  }else {
    var h__2218__auto____9223 = cljs.core.hash_imap.call(null, coll);
    this__9221.__hash = h__2218__auto____9223;
    return h__2218__auto____9223
  }
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = function(coll, k) {
  var this__9224 = this;
  return coll.cljs$core$ILookup$_lookup$arity$3(coll, k, null)
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = function(coll, k, not_found) {
  var this__9225 = this;
  var n__9226 = coll.entry_at(k);
  if(!(n__9226 == null)) {
    return n__9226.val
  }else {
    return not_found
  }
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = function(coll, k, v) {
  var this__9227 = this;
  var found__9228 = [null];
  var t__9229 = cljs.core.tree_map_add.call(null, this__9227.comp, this__9227.tree, k, v, found__9228);
  if(t__9229 == null) {
    var found_node__9230 = cljs.core.nth.call(null, found__9228, 0);
    if(cljs.core._EQ_.call(null, v, found_node__9230.val)) {
      return coll
    }else {
      return new cljs.core.PersistentTreeMap(this__9227.comp, cljs.core.tree_map_replace.call(null, this__9227.comp, this__9227.tree, k, v), this__9227.cnt, this__9227.meta, null)
    }
  }else {
    return new cljs.core.PersistentTreeMap(this__9227.comp, t__9229.blacken(), this__9227.cnt + 1, this__9227.meta, null)
  }
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = function(coll, k) {
  var this__9231 = this;
  return!(coll.entry_at(k) == null)
};
cljs.core.PersistentTreeMap.prototype.call = function() {
  var G__9265 = null;
  var G__9265__2 = function(this_sym9232, k) {
    var this__9234 = this;
    var this_sym9232__9235 = this;
    var coll__9236 = this_sym9232__9235;
    return coll__9236.cljs$core$ILookup$_lookup$arity$2(coll__9236, k)
  };
  var G__9265__3 = function(this_sym9233, k, not_found) {
    var this__9234 = this;
    var this_sym9233__9237 = this;
    var coll__9238 = this_sym9233__9237;
    return coll__9238.cljs$core$ILookup$_lookup$arity$3(coll__9238, k, not_found)
  };
  G__9265 = function(this_sym9233, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__9265__2.call(this, this_sym9233, k);
      case 3:
        return G__9265__3.call(this, this_sym9233, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__9265
}();
cljs.core.PersistentTreeMap.prototype.apply = function(this_sym9219, args9220) {
  var this__9239 = this;
  return this_sym9219.call.apply(this_sym9219, [this_sym9219].concat(args9220.slice()))
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = function(coll, f, init) {
  var this__9240 = this;
  if(!(this__9240.tree == null)) {
    return cljs.core.tree_map_kv_reduce.call(null, this__9240.tree, f, init)
  }else {
    return init
  }
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, entry) {
  var this__9241 = this;
  if(cljs.core.vector_QMARK_.call(null, entry)) {
    return coll.cljs$core$IAssociative$_assoc$arity$3(coll, cljs.core._nth.call(null, entry, 0), cljs.core._nth.call(null, entry, 1))
  }else {
    return cljs.core.reduce.call(null, cljs.core._conj, coll, entry)
  }
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = function(coll) {
  var this__9242 = this;
  if(this__9242.cnt > 0) {
    return cljs.core.create_tree_map_seq.call(null, this__9242.tree, false, this__9242.cnt)
  }else {
    return null
  }
};
cljs.core.PersistentTreeMap.prototype.toString = function() {
  var this__9243 = this;
  var this__9244 = this;
  return cljs.core.pr_str.call(null, this__9244)
};
cljs.core.PersistentTreeMap.prototype.entry_at = function(k) {
  var this__9245 = this;
  var coll__9246 = this;
  var t__9247 = this__9245.tree;
  while(true) {
    if(!(t__9247 == null)) {
      var c__9248 = this__9245.comp.call(null, k, t__9247.key);
      if(c__9248 === 0) {
        return t__9247
      }else {
        if(c__9248 < 0) {
          var G__9266 = t__9247.left;
          t__9247 = G__9266;
          continue
        }else {
          if("\ufdd0'else") {
            var G__9267 = t__9247.right;
            t__9247 = G__9267;
            continue
          }else {
            return null
          }
        }
      }
    }else {
      return null
    }
    break
  }
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = function(coll, ascending_QMARK_) {
  var this__9249 = this;
  if(this__9249.cnt > 0) {
    return cljs.core.create_tree_map_seq.call(null, this__9249.tree, ascending_QMARK_, this__9249.cnt)
  }else {
    return null
  }
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = function(coll, k, ascending_QMARK_) {
  var this__9250 = this;
  if(this__9250.cnt > 0) {
    var stack__9251 = null;
    var t__9252 = this__9250.tree;
    while(true) {
      if(!(t__9252 == null)) {
        var c__9253 = this__9250.comp.call(null, k, t__9252.key);
        if(c__9253 === 0) {
          return new cljs.core.PersistentTreeMapSeq(null, cljs.core.conj.call(null, stack__9251, t__9252), ascending_QMARK_, -1, null)
        }else {
          if(cljs.core.truth_(ascending_QMARK_)) {
            if(c__9253 < 0) {
              var G__9268 = cljs.core.conj.call(null, stack__9251, t__9252);
              var G__9269 = t__9252.left;
              stack__9251 = G__9268;
              t__9252 = G__9269;
              continue
            }else {
              var G__9270 = stack__9251;
              var G__9271 = t__9252.right;
              stack__9251 = G__9270;
              t__9252 = G__9271;
              continue
            }
          }else {
            if("\ufdd0'else") {
              if(c__9253 > 0) {
                var G__9272 = cljs.core.conj.call(null, stack__9251, t__9252);
                var G__9273 = t__9252.right;
                stack__9251 = G__9272;
                t__9252 = G__9273;
                continue
              }else {
                var G__9274 = stack__9251;
                var G__9275 = t__9252.left;
                stack__9251 = G__9274;
                t__9252 = G__9275;
                continue
              }
            }else {
              return null
            }
          }
        }
      }else {
        if(stack__9251 == null) {
          return new cljs.core.PersistentTreeMapSeq(null, stack__9251, ascending_QMARK_, -1, null)
        }else {
          return null
        }
      }
      break
    }
  }else {
    return null
  }
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = function(coll, entry) {
  var this__9254 = this;
  return cljs.core.key.call(null, entry)
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = function(coll) {
  var this__9255 = this;
  return this__9255.comp
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__9256 = this;
  if(this__9256.cnt > 0) {
    return cljs.core.create_tree_map_seq.call(null, this__9256.tree, true, this__9256.cnt)
  }else {
    return null
  }
};
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__9257 = this;
  return this__9257.cnt
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__9258 = this;
  return cljs.core.equiv_map.call(null, coll, other)
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__9259 = this;
  return new cljs.core.PersistentTreeMap(this__9259.comp, this__9259.tree, this__9259.cnt, meta, this__9259.__hash)
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__9260 = this;
  return this__9260.meta
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__9261 = this;
  return cljs.core.with_meta.call(null, cljs.core.PersistentTreeMap.EMPTY, this__9261.meta)
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = function(coll, k) {
  var this__9262 = this;
  var found__9263 = [null];
  var t__9264 = cljs.core.tree_map_remove.call(null, this__9262.comp, this__9262.tree, k, found__9263);
  if(t__9264 == null) {
    if(cljs.core.nth.call(null, found__9263, 0) == null) {
      return coll
    }else {
      return new cljs.core.PersistentTreeMap(this__9262.comp, null, 0, this__9262.meta, null)
    }
  }else {
    return new cljs.core.PersistentTreeMap(this__9262.comp, t__9264.blacken(), this__9262.cnt - 1, this__9262.meta, null)
  }
};
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = new cljs.core.PersistentTreeMap(cljs.core.compare, null, 0, null, 0);
cljs.core.hash_map = function() {
  var hash_map__delegate = function(keyvals) {
    var in__9278 = cljs.core.seq.call(null, keyvals);
    var out__9279 = cljs.core.transient$.call(null, cljs.core.PersistentHashMap.EMPTY);
    while(true) {
      if(in__9278) {
        var G__9280 = cljs.core.nnext.call(null, in__9278);
        var G__9281 = cljs.core.assoc_BANG_.call(null, out__9279, cljs.core.first.call(null, in__9278), cljs.core.second.call(null, in__9278));
        in__9278 = G__9280;
        out__9279 = G__9281;
        continue
      }else {
        return cljs.core.persistent_BANG_.call(null, out__9279)
      }
      break
    }
  };
  var hash_map = function(var_args) {
    var keyvals = null;
    if(goog.isDef(var_args)) {
      keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return hash_map__delegate.call(this, keyvals)
  };
  hash_map.cljs$lang$maxFixedArity = 0;
  hash_map.cljs$lang$applyTo = function(arglist__9282) {
    var keyvals = cljs.core.seq(arglist__9282);
    return hash_map__delegate(keyvals)
  };
  hash_map.cljs$lang$arity$variadic = hash_map__delegate;
  return hash_map
}();
cljs.core.array_map = function() {
  var array_map__delegate = function(keyvals) {
    return new cljs.core.PersistentArrayMap(null, cljs.core.quot.call(null, cljs.core.count.call(null, keyvals), 2), cljs.core.apply.call(null, cljs.core.array, keyvals), null)
  };
  var array_map = function(var_args) {
    var keyvals = null;
    if(goog.isDef(var_args)) {
      keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return array_map__delegate.call(this, keyvals)
  };
  array_map.cljs$lang$maxFixedArity = 0;
  array_map.cljs$lang$applyTo = function(arglist__9283) {
    var keyvals = cljs.core.seq(arglist__9283);
    return array_map__delegate(keyvals)
  };
  array_map.cljs$lang$arity$variadic = array_map__delegate;
  return array_map
}();
cljs.core.obj_map = function() {
  var obj_map__delegate = function(keyvals) {
    var ks__9287 = [];
    var obj__9288 = {};
    var kvs__9289 = cljs.core.seq.call(null, keyvals);
    while(true) {
      if(kvs__9289) {
        ks__9287.push(cljs.core.first.call(null, kvs__9289));
        obj__9288[cljs.core.first.call(null, kvs__9289)] = cljs.core.second.call(null, kvs__9289);
        var G__9290 = cljs.core.nnext.call(null, kvs__9289);
        kvs__9289 = G__9290;
        continue
      }else {
        return cljs.core.ObjMap.fromObject.call(null, ks__9287, obj__9288)
      }
      break
    }
  };
  var obj_map = function(var_args) {
    var keyvals = null;
    if(goog.isDef(var_args)) {
      keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return obj_map__delegate.call(this, keyvals)
  };
  obj_map.cljs$lang$maxFixedArity = 0;
  obj_map.cljs$lang$applyTo = function(arglist__9291) {
    var keyvals = cljs.core.seq(arglist__9291);
    return obj_map__delegate(keyvals)
  };
  obj_map.cljs$lang$arity$variadic = obj_map__delegate;
  return obj_map
}();
cljs.core.sorted_map = function() {
  var sorted_map__delegate = function(keyvals) {
    var in__9294 = cljs.core.seq.call(null, keyvals);
    var out__9295 = cljs.core.PersistentTreeMap.EMPTY;
    while(true) {
      if(in__9294) {
        var G__9296 = cljs.core.nnext.call(null, in__9294);
        var G__9297 = cljs.core.assoc.call(null, out__9295, cljs.core.first.call(null, in__9294), cljs.core.second.call(null, in__9294));
        in__9294 = G__9296;
        out__9295 = G__9297;
        continue
      }else {
        return out__9295
      }
      break
    }
  };
  var sorted_map = function(var_args) {
    var keyvals = null;
    if(goog.isDef(var_args)) {
      keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return sorted_map__delegate.call(this, keyvals)
  };
  sorted_map.cljs$lang$maxFixedArity = 0;
  sorted_map.cljs$lang$applyTo = function(arglist__9298) {
    var keyvals = cljs.core.seq(arglist__9298);
    return sorted_map__delegate(keyvals)
  };
  sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
  return sorted_map
}();
cljs.core.sorted_map_by = function() {
  var sorted_map_by__delegate = function(comparator, keyvals) {
    var in__9301 = cljs.core.seq.call(null, keyvals);
    var out__9302 = new cljs.core.PersistentTreeMap(comparator, null, 0, null, 0);
    while(true) {
      if(in__9301) {
        var G__9303 = cljs.core.nnext.call(null, in__9301);
        var G__9304 = cljs.core.assoc.call(null, out__9302, cljs.core.first.call(null, in__9301), cljs.core.second.call(null, in__9301));
        in__9301 = G__9303;
        out__9302 = G__9304;
        continue
      }else {
        return out__9302
      }
      break
    }
  };
  var sorted_map_by = function(comparator, var_args) {
    var keyvals = null;
    if(goog.isDef(var_args)) {
      keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return sorted_map_by__delegate.call(this, comparator, keyvals)
  };
  sorted_map_by.cljs$lang$maxFixedArity = 1;
  sorted_map_by.cljs$lang$applyTo = function(arglist__9305) {
    var comparator = cljs.core.first(arglist__9305);
    var keyvals = cljs.core.rest(arglist__9305);
    return sorted_map_by__delegate(comparator, keyvals)
  };
  sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
  return sorted_map_by
}();
cljs.core.keys = function keys(hash_map) {
  return cljs.core.seq.call(null, cljs.core.map.call(null, cljs.core.first, hash_map))
};
cljs.core.key = function key(map_entry) {
  return cljs.core._key.call(null, map_entry)
};
cljs.core.vals = function vals(hash_map) {
  return cljs.core.seq.call(null, cljs.core.map.call(null, cljs.core.second, hash_map))
};
cljs.core.val = function val(map_entry) {
  return cljs.core._val.call(null, map_entry)
};
cljs.core.merge = function() {
  var merge__delegate = function(maps) {
    if(cljs.core.truth_(cljs.core.some.call(null, cljs.core.identity, maps))) {
      return cljs.core.reduce.call(null, function(p1__9306_SHARP_, p2__9307_SHARP_) {
        return cljs.core.conj.call(null, function() {
          var or__3824__auto____9309 = p1__9306_SHARP_;
          if(cljs.core.truth_(or__3824__auto____9309)) {
            return or__3824__auto____9309
          }else {
            return cljs.core.ObjMap.EMPTY
          }
        }(), p2__9307_SHARP_)
      }, maps)
    }else {
      return null
    }
  };
  var merge = function(var_args) {
    var maps = null;
    if(goog.isDef(var_args)) {
      maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return merge__delegate.call(this, maps)
  };
  merge.cljs$lang$maxFixedArity = 0;
  merge.cljs$lang$applyTo = function(arglist__9310) {
    var maps = cljs.core.seq(arglist__9310);
    return merge__delegate(maps)
  };
  merge.cljs$lang$arity$variadic = merge__delegate;
  return merge
}();
cljs.core.merge_with = function() {
  var merge_with__delegate = function(f, maps) {
    if(cljs.core.truth_(cljs.core.some.call(null, cljs.core.identity, maps))) {
      var merge_entry__9318 = function(m, e) {
        var k__9316 = cljs.core.first.call(null, e);
        var v__9317 = cljs.core.second.call(null, e);
        if(cljs.core.contains_QMARK_.call(null, m, k__9316)) {
          return cljs.core.assoc.call(null, m, k__9316, f.call(null, cljs.core._lookup.call(null, m, k__9316, null), v__9317))
        }else {
          return cljs.core.assoc.call(null, m, k__9316, v__9317)
        }
      };
      var merge2__9320 = function(m1, m2) {
        return cljs.core.reduce.call(null, merge_entry__9318, function() {
          var or__3824__auto____9319 = m1;
          if(cljs.core.truth_(or__3824__auto____9319)) {
            return or__3824__auto____9319
          }else {
            return cljs.core.ObjMap.EMPTY
          }
        }(), cljs.core.seq.call(null, m2))
      };
      return cljs.core.reduce.call(null, merge2__9320, maps)
    }else {
      return null
    }
  };
  var merge_with = function(f, var_args) {
    var maps = null;
    if(goog.isDef(var_args)) {
      maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return merge_with__delegate.call(this, f, maps)
  };
  merge_with.cljs$lang$maxFixedArity = 1;
  merge_with.cljs$lang$applyTo = function(arglist__9321) {
    var f = cljs.core.first(arglist__9321);
    var maps = cljs.core.rest(arglist__9321);
    return merge_with__delegate(f, maps)
  };
  merge_with.cljs$lang$arity$variadic = merge_with__delegate;
  return merge_with
}();
cljs.core.select_keys = function select_keys(map, keyseq) {
  var ret__9326 = cljs.core.ObjMap.EMPTY;
  var keys__9327 = cljs.core.seq.call(null, keyseq);
  while(true) {
    if(keys__9327) {
      var key__9328 = cljs.core.first.call(null, keys__9327);
      var entry__9329 = cljs.core._lookup.call(null, map, key__9328, "\ufdd0'user/not-found");
      var G__9330 = cljs.core.not_EQ_.call(null, entry__9329, "\ufdd0'user/not-found") ? cljs.core.assoc.call(null, ret__9326, key__9328, entry__9329) : ret__9326;
      var G__9331 = cljs.core.next.call(null, keys__9327);
      ret__9326 = G__9330;
      keys__9327 = G__9331;
      continue
    }else {
      return ret__9326
    }
    break
  }
};
cljs.core.PersistentHashSet = function(meta, hash_map, __hash) {
  this.meta = meta;
  this.hash_map = hash_map;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 1;
  this.cljs$lang$protocol_mask$partition0$ = 15077647
};
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/PersistentHashSet")
};
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = function(coll) {
  var this__9335 = this;
  return new cljs.core.TransientHashSet(cljs.core.transient$.call(null, this__9335.hash_map))
};
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__9336 = this;
  var h__2218__auto____9337 = this__9336.__hash;
  if(!(h__2218__auto____9337 == null)) {
    return h__2218__auto____9337
  }else {
    var h__2218__auto____9338 = cljs.core.hash_iset.call(null, coll);
    this__9336.__hash = h__2218__auto____9338;
    return h__2218__auto____9338
  }
};
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = function(coll, v) {
  var this__9339 = this;
  return coll.cljs$core$ILookup$_lookup$arity$3(coll, v, null)
};
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = function(coll, v, not_found) {
  var this__9340 = this;
  if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null, this__9340.hash_map, v))) {
    return v
  }else {
    return not_found
  }
};
cljs.core.PersistentHashSet.prototype.call = function() {
  var G__9361 = null;
  var G__9361__2 = function(this_sym9341, k) {
    var this__9343 = this;
    var this_sym9341__9344 = this;
    var coll__9345 = this_sym9341__9344;
    return coll__9345.cljs$core$ILookup$_lookup$arity$2(coll__9345, k)
  };
  var G__9361__3 = function(this_sym9342, k, not_found) {
    var this__9343 = this;
    var this_sym9342__9346 = this;
    var coll__9347 = this_sym9342__9346;
    return coll__9347.cljs$core$ILookup$_lookup$arity$3(coll__9347, k, not_found)
  };
  G__9361 = function(this_sym9342, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__9361__2.call(this, this_sym9342, k);
      case 3:
        return G__9361__3.call(this, this_sym9342, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__9361
}();
cljs.core.PersistentHashSet.prototype.apply = function(this_sym9333, args9334) {
  var this__9348 = this;
  return this_sym9333.call.apply(this_sym9333, [this_sym9333].concat(args9334.slice()))
};
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__9349 = this;
  return new cljs.core.PersistentHashSet(this__9349.meta, cljs.core.assoc.call(null, this__9349.hash_map, o, null), null)
};
cljs.core.PersistentHashSet.prototype.toString = function() {
  var this__9350 = this;
  var this__9351 = this;
  return cljs.core.pr_str.call(null, this__9351)
};
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__9352 = this;
  return cljs.core.keys.call(null, this__9352.hash_map)
};
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = function(coll, v) {
  var this__9353 = this;
  return new cljs.core.PersistentHashSet(this__9353.meta, cljs.core.dissoc.call(null, this__9353.hash_map, v), null)
};
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__9354 = this;
  return cljs.core.count.call(null, cljs.core.seq.call(null, coll))
};
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__9355 = this;
  var and__3822__auto____9356 = cljs.core.set_QMARK_.call(null, other);
  if(and__3822__auto____9356) {
    var and__3822__auto____9357 = cljs.core.count.call(null, coll) === cljs.core.count.call(null, other);
    if(and__3822__auto____9357) {
      return cljs.core.every_QMARK_.call(null, function(p1__9332_SHARP_) {
        return cljs.core.contains_QMARK_.call(null, coll, p1__9332_SHARP_)
      }, other)
    }else {
      return and__3822__auto____9357
    }
  }else {
    return and__3822__auto____9356
  }
};
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__9358 = this;
  return new cljs.core.PersistentHashSet(meta, this__9358.hash_map, this__9358.__hash)
};
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__9359 = this;
  return this__9359.meta
};
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__9360 = this;
  return cljs.core.with_meta.call(null, cljs.core.PersistentHashSet.EMPTY, this__9360.meta)
};
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = new cljs.core.PersistentHashSet(null, cljs.core.hash_map.call(null), 0);
cljs.core.PersistentHashSet.fromArray = function(items) {
  var len__9362 = cljs.core.count.call(null, items);
  var i__9363 = 0;
  var out__9364 = cljs.core.transient$.call(null, cljs.core.PersistentHashSet.EMPTY);
  while(true) {
    if(i__9363 < len__9362) {
      var G__9365 = i__9363 + 1;
      var G__9366 = cljs.core.conj_BANG_.call(null, out__9364, items[i__9363]);
      i__9363 = G__9365;
      out__9364 = G__9366;
      continue
    }else {
      return cljs.core.persistent_BANG_.call(null, out__9364)
    }
    break
  }
};
cljs.core.TransientHashSet = function(transient_map) {
  this.transient_map = transient_map;
  this.cljs$lang$protocol_mask$partition0$ = 259;
  this.cljs$lang$protocol_mask$partition1$ = 34
};
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/TransientHashSet")
};
cljs.core.TransientHashSet.prototype.call = function() {
  var G__9384 = null;
  var G__9384__2 = function(this_sym9370, k) {
    var this__9372 = this;
    var this_sym9370__9373 = this;
    var tcoll__9374 = this_sym9370__9373;
    if(cljs.core._lookup.call(null, this__9372.transient_map, k, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel) {
      return null
    }else {
      return k
    }
  };
  var G__9384__3 = function(this_sym9371, k, not_found) {
    var this__9372 = this;
    var this_sym9371__9375 = this;
    var tcoll__9376 = this_sym9371__9375;
    if(cljs.core._lookup.call(null, this__9372.transient_map, k, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel) {
      return not_found
    }else {
      return k
    }
  };
  G__9384 = function(this_sym9371, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__9384__2.call(this, this_sym9371, k);
      case 3:
        return G__9384__3.call(this, this_sym9371, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__9384
}();
cljs.core.TransientHashSet.prototype.apply = function(this_sym9368, args9369) {
  var this__9377 = this;
  return this_sym9368.call.apply(this_sym9368, [this_sym9368].concat(args9369.slice()))
};
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = function(tcoll, v) {
  var this__9378 = this;
  return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll, v, null)
};
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = function(tcoll, v, not_found) {
  var this__9379 = this;
  if(cljs.core._lookup.call(null, this__9379.transient_map, v, cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel) {
    return not_found
  }else {
    return v
  }
};
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = function(tcoll) {
  var this__9380 = this;
  return cljs.core.count.call(null, this__9380.transient_map)
};
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = function(tcoll, v) {
  var this__9381 = this;
  this__9381.transient_map = cljs.core.dissoc_BANG_.call(null, this__9381.transient_map, v);
  return tcoll
};
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = function(tcoll, o) {
  var this__9382 = this;
  this__9382.transient_map = cljs.core.assoc_BANG_.call(null, this__9382.transient_map, o, null);
  return tcoll
};
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = function(tcoll) {
  var this__9383 = this;
  return new cljs.core.PersistentHashSet(null, cljs.core.persistent_BANG_.call(null, this__9383.transient_map), null)
};
cljs.core.TransientHashSet;
cljs.core.PersistentTreeSet = function(meta, tree_map, __hash) {
  this.meta = meta;
  this.tree_map = tree_map;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 417730831
};
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/PersistentTreeSet")
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = function(coll) {
  var this__9387 = this;
  var h__2218__auto____9388 = this__9387.__hash;
  if(!(h__2218__auto____9388 == null)) {
    return h__2218__auto____9388
  }else {
    var h__2218__auto____9389 = cljs.core.hash_iset.call(null, coll);
    this__9387.__hash = h__2218__auto____9389;
    return h__2218__auto____9389
  }
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = function(coll, v) {
  var this__9390 = this;
  return coll.cljs$core$ILookup$_lookup$arity$3(coll, v, null)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = function(coll, v, not_found) {
  var this__9391 = this;
  if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null, this__9391.tree_map, v))) {
    return v
  }else {
    return not_found
  }
};
cljs.core.PersistentTreeSet.prototype.call = function() {
  var G__9417 = null;
  var G__9417__2 = function(this_sym9392, k) {
    var this__9394 = this;
    var this_sym9392__9395 = this;
    var coll__9396 = this_sym9392__9395;
    return coll__9396.cljs$core$ILookup$_lookup$arity$2(coll__9396, k)
  };
  var G__9417__3 = function(this_sym9393, k, not_found) {
    var this__9394 = this;
    var this_sym9393__9397 = this;
    var coll__9398 = this_sym9393__9397;
    return coll__9398.cljs$core$ILookup$_lookup$arity$3(coll__9398, k, not_found)
  };
  G__9417 = function(this_sym9393, k, not_found) {
    switch(arguments.length) {
      case 2:
        return G__9417__2.call(this, this_sym9393, k);
      case 3:
        return G__9417__3.call(this, this_sym9393, k, not_found)
    }
    throw"Invalid arity: " + arguments.length;
  };
  return G__9417
}();
cljs.core.PersistentTreeSet.prototype.apply = function(this_sym9385, args9386) {
  var this__9399 = this;
  return this_sym9385.call.apply(this_sym9385, [this_sym9385].concat(args9386.slice()))
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = function(coll, o) {
  var this__9400 = this;
  return new cljs.core.PersistentTreeSet(this__9400.meta, cljs.core.assoc.call(null, this__9400.tree_map, o, null), null)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = function(coll) {
  var this__9401 = this;
  return cljs.core.map.call(null, cljs.core.key, cljs.core.rseq.call(null, this__9401.tree_map))
};
cljs.core.PersistentTreeSet.prototype.toString = function() {
  var this__9402 = this;
  var this__9403 = this;
  return cljs.core.pr_str.call(null, this__9403)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = function(coll, ascending_QMARK_) {
  var this__9404 = this;
  return cljs.core.map.call(null, cljs.core.key, cljs.core._sorted_seq.call(null, this__9404.tree_map, ascending_QMARK_))
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = function(coll, k, ascending_QMARK_) {
  var this__9405 = this;
  return cljs.core.map.call(null, cljs.core.key, cljs.core._sorted_seq_from.call(null, this__9405.tree_map, k, ascending_QMARK_))
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = function(coll, entry) {
  var this__9406 = this;
  return entry
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = function(coll) {
  var this__9407 = this;
  return cljs.core._comparator.call(null, this__9407.tree_map)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
  var this__9408 = this;
  return cljs.core.keys.call(null, this__9408.tree_map)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = function(coll, v) {
  var this__9409 = this;
  return new cljs.core.PersistentTreeSet(this__9409.meta, cljs.core.dissoc.call(null, this__9409.tree_map, v), null)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
  var this__9410 = this;
  return cljs.core.count.call(null, this__9410.tree_map)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(coll, other) {
  var this__9411 = this;
  var and__3822__auto____9412 = cljs.core.set_QMARK_.call(null, other);
  if(and__3822__auto____9412) {
    var and__3822__auto____9413 = cljs.core.count.call(null, coll) === cljs.core.count.call(null, other);
    if(and__3822__auto____9413) {
      return cljs.core.every_QMARK_.call(null, function(p1__9367_SHARP_) {
        return cljs.core.contains_QMARK_.call(null, coll, p1__9367_SHARP_)
      }, other)
    }else {
      return and__3822__auto____9413
    }
  }else {
    return and__3822__auto____9412
  }
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(coll, meta) {
  var this__9414 = this;
  return new cljs.core.PersistentTreeSet(meta, this__9414.tree_map, this__9414.__hash)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = function(coll) {
  var this__9415 = this;
  return this__9415.meta
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(coll) {
  var this__9416 = this;
  return cljs.core.with_meta.call(null, cljs.core.PersistentTreeSet.EMPTY, this__9416.meta)
};
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = new cljs.core.PersistentTreeSet(null, cljs.core.sorted_map.call(null), 0);
cljs.core.hash_set = function() {
  var hash_set = null;
  var hash_set__0 = function() {
    return cljs.core.PersistentHashSet.EMPTY
  };
  var hash_set__1 = function() {
    var G__9422__delegate = function(keys) {
      var in__9420 = cljs.core.seq.call(null, keys);
      var out__9421 = cljs.core.transient$.call(null, cljs.core.PersistentHashSet.EMPTY);
      while(true) {
        if(cljs.core.seq.call(null, in__9420)) {
          var G__9423 = cljs.core.next.call(null, in__9420);
          var G__9424 = cljs.core.conj_BANG_.call(null, out__9421, cljs.core.first.call(null, in__9420));
          in__9420 = G__9423;
          out__9421 = G__9424;
          continue
        }else {
          return cljs.core.persistent_BANG_.call(null, out__9421)
        }
        break
      }
    };
    var G__9422 = function(var_args) {
      var keys = null;
      if(goog.isDef(var_args)) {
        keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
      }
      return G__9422__delegate.call(this, keys)
    };
    G__9422.cljs$lang$maxFixedArity = 0;
    G__9422.cljs$lang$applyTo = function(arglist__9425) {
      var keys = cljs.core.seq(arglist__9425);
      return G__9422__delegate(keys)
    };
    G__9422.cljs$lang$arity$variadic = G__9422__delegate;
    return G__9422
  }();
  hash_set = function(var_args) {
    var keys = var_args;
    switch(arguments.length) {
      case 0:
        return hash_set__0.call(this);
      default:
        return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0))
    }
    throw"Invalid arity: " + arguments.length;
  };
  hash_set.cljs$lang$maxFixedArity = 0;
  hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
  hash_set.cljs$lang$arity$0 = hash_set__0;
  hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
  return hash_set
}();
cljs.core.set = function set(coll) {
  return cljs.core.apply.call(null, cljs.core.hash_set, coll)
};
cljs.core.sorted_set = function() {
  var sorted_set__delegate = function(keys) {
    return cljs.core.reduce.call(null, cljs.core._conj, cljs.core.PersistentTreeSet.EMPTY, keys)
  };
  var sorted_set = function(var_args) {
    var keys = null;
    if(goog.isDef(var_args)) {
      keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return sorted_set__delegate.call(this, keys)
  };
  sorted_set.cljs$lang$maxFixedArity = 0;
  sorted_set.cljs$lang$applyTo = function(arglist__9426) {
    var keys = cljs.core.seq(arglist__9426);
    return sorted_set__delegate(keys)
  };
  sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
  return sorted_set
}();
cljs.core.sorted_set_by = function() {
  var sorted_set_by__delegate = function(comparator, keys) {
    return cljs.core.reduce.call(null, cljs.core._conj, new cljs.core.PersistentTreeSet(null, cljs.core.sorted_map_by.call(null, comparator), 0), keys)
  };
  var sorted_set_by = function(comparator, var_args) {
    var keys = null;
    if(goog.isDef(var_args)) {
      keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return sorted_set_by__delegate.call(this, comparator, keys)
  };
  sorted_set_by.cljs$lang$maxFixedArity = 1;
  sorted_set_by.cljs$lang$applyTo = function(arglist__9428) {
    var comparator = cljs.core.first(arglist__9428);
    var keys = cljs.core.rest(arglist__9428);
    return sorted_set_by__delegate(comparator, keys)
  };
  sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
  return sorted_set_by
}();
cljs.core.replace = function replace(smap, coll) {
  if(cljs.core.vector_QMARK_.call(null, coll)) {
    var n__9434 = cljs.core.count.call(null, coll);
    return cljs.core.reduce.call(null, function(v, i) {
      var temp__3971__auto____9435 = cljs.core.find.call(null, smap, cljs.core.nth.call(null, v, i));
      if(cljs.core.truth_(temp__3971__auto____9435)) {
        var e__9436 = temp__3971__auto____9435;
        return cljs.core.assoc.call(null, v, i, cljs.core.second.call(null, e__9436))
      }else {
        return v
      }
    }, coll, cljs.core.take.call(null, n__9434, cljs.core.iterate.call(null, cljs.core.inc, 0)))
  }else {
    return cljs.core.map.call(null, function(p1__9427_SHARP_) {
      var temp__3971__auto____9437 = cljs.core.find.call(null, smap, p1__9427_SHARP_);
      if(cljs.core.truth_(temp__3971__auto____9437)) {
        var e__9438 = temp__3971__auto____9437;
        return cljs.core.second.call(null, e__9438)
      }else {
        return p1__9427_SHARP_
      }
    }, coll)
  }
};
cljs.core.distinct = function distinct(coll) {
  var step__9468 = function step(xs, seen) {
    return new cljs.core.LazySeq(null, false, function() {
      return function(p__9461, seen) {
        while(true) {
          var vec__9462__9463 = p__9461;
          var f__9464 = cljs.core.nth.call(null, vec__9462__9463, 0, null);
          var xs__9465 = vec__9462__9463;
          var temp__3974__auto____9466 = cljs.core.seq.call(null, xs__9465);
          if(temp__3974__auto____9466) {
            var s__9467 = temp__3974__auto____9466;
            if(cljs.core.contains_QMARK_.call(null, seen, f__9464)) {
              var G__9469 = cljs.core.rest.call(null, s__9467);
              var G__9470 = seen;
              p__9461 = G__9469;
              seen = G__9470;
              continue
            }else {
              return cljs.core.cons.call(null, f__9464, step.call(null, cljs.core.rest.call(null, s__9467), cljs.core.conj.call(null, seen, f__9464)))
            }
          }else {
            return null
          }
          break
        }
      }.call(null, xs, seen)
    }, null)
  };
  return step__9468.call(null, coll, cljs.core.PersistentHashSet.EMPTY)
};
cljs.core.butlast = function butlast(s) {
  var ret__9473 = cljs.core.PersistentVector.EMPTY;
  var s__9474 = s;
  while(true) {
    if(cljs.core.next.call(null, s__9474)) {
      var G__9475 = cljs.core.conj.call(null, ret__9473, cljs.core.first.call(null, s__9474));
      var G__9476 = cljs.core.next.call(null, s__9474);
      ret__9473 = G__9475;
      s__9474 = G__9476;
      continue
    }else {
      return cljs.core.seq.call(null, ret__9473)
    }
    break
  }
};
cljs.core.name = function name(x) {
  if(cljs.core.string_QMARK_.call(null, x)) {
    return x
  }else {
    if(function() {
      var or__3824__auto____9479 = cljs.core.keyword_QMARK_.call(null, x);
      if(or__3824__auto____9479) {
        return or__3824__auto____9479
      }else {
        return cljs.core.symbol_QMARK_.call(null, x)
      }
    }()) {
      var i__9480 = x.lastIndexOf("/");
      if(i__9480 < 0) {
        return cljs.core.subs.call(null, x, 2)
      }else {
        return cljs.core.subs.call(null, x, i__9480 + 1)
      }
    }else {
      if("\ufdd0'else") {
        throw new Error([cljs.core.str("Doesn't support name: "), cljs.core.str(x)].join(""));
      }else {
        return null
      }
    }
  }
};
cljs.core.namespace = function namespace(x) {
  if(function() {
    var or__3824__auto____9483 = cljs.core.keyword_QMARK_.call(null, x);
    if(or__3824__auto____9483) {
      return or__3824__auto____9483
    }else {
      return cljs.core.symbol_QMARK_.call(null, x)
    }
  }()) {
    var i__9484 = x.lastIndexOf("/");
    if(i__9484 > -1) {
      return cljs.core.subs.call(null, x, 2, i__9484)
    }else {
      return null
    }
  }else {
    throw new Error([cljs.core.str("Doesn't support namespace: "), cljs.core.str(x)].join(""));
  }
};
cljs.core.zipmap = function zipmap(keys, vals) {
  var map__9491 = cljs.core.ObjMap.EMPTY;
  var ks__9492 = cljs.core.seq.call(null, keys);
  var vs__9493 = cljs.core.seq.call(null, vals);
  while(true) {
    if(function() {
      var and__3822__auto____9494 = ks__9492;
      if(and__3822__auto____9494) {
        return vs__9493
      }else {
        return and__3822__auto____9494
      }
    }()) {
      var G__9495 = cljs.core.assoc.call(null, map__9491, cljs.core.first.call(null, ks__9492), cljs.core.first.call(null, vs__9493));
      var G__9496 = cljs.core.next.call(null, ks__9492);
      var G__9497 = cljs.core.next.call(null, vs__9493);
      map__9491 = G__9495;
      ks__9492 = G__9496;
      vs__9493 = G__9497;
      continue
    }else {
      return map__9491
    }
    break
  }
};
cljs.core.max_key = function() {
  var max_key = null;
  var max_key__2 = function(k, x) {
    return x
  };
  var max_key__3 = function(k, x, y) {
    if(k.call(null, x) > k.call(null, y)) {
      return x
    }else {
      return y
    }
  };
  var max_key__4 = function() {
    var G__9500__delegate = function(k, x, y, more) {
      return cljs.core.reduce.call(null, function(p1__9485_SHARP_, p2__9486_SHARP_) {
        return max_key.call(null, k, p1__9485_SHARP_, p2__9486_SHARP_)
      }, max_key.call(null, k, x, y), more)
    };
    var G__9500 = function(k, x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__9500__delegate.call(this, k, x, y, more)
    };
    G__9500.cljs$lang$maxFixedArity = 3;
    G__9500.cljs$lang$applyTo = function(arglist__9501) {
      var k = cljs.core.first(arglist__9501);
      var x = cljs.core.first(cljs.core.next(arglist__9501));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9501)));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9501)));
      return G__9500__delegate(k, x, y, more)
    };
    G__9500.cljs$lang$arity$variadic = G__9500__delegate;
    return G__9500
  }();
  max_key = function(k, x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return max_key__2.call(this, k, x);
      case 3:
        return max_key__3.call(this, k, x, y);
      default:
        return max_key__4.cljs$lang$arity$variadic(k, x, y, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  max_key.cljs$lang$maxFixedArity = 3;
  max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
  max_key.cljs$lang$arity$2 = max_key__2;
  max_key.cljs$lang$arity$3 = max_key__3;
  max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
  return max_key
}();
cljs.core.min_key = function() {
  var min_key = null;
  var min_key__2 = function(k, x) {
    return x
  };
  var min_key__3 = function(k, x, y) {
    if(k.call(null, x) < k.call(null, y)) {
      return x
    }else {
      return y
    }
  };
  var min_key__4 = function() {
    var G__9502__delegate = function(k, x, y, more) {
      return cljs.core.reduce.call(null, function(p1__9498_SHARP_, p2__9499_SHARP_) {
        return min_key.call(null, k, p1__9498_SHARP_, p2__9499_SHARP_)
      }, min_key.call(null, k, x, y), more)
    };
    var G__9502 = function(k, x, y, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__9502__delegate.call(this, k, x, y, more)
    };
    G__9502.cljs$lang$maxFixedArity = 3;
    G__9502.cljs$lang$applyTo = function(arglist__9503) {
      var k = cljs.core.first(arglist__9503);
      var x = cljs.core.first(cljs.core.next(arglist__9503));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9503)));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9503)));
      return G__9502__delegate(k, x, y, more)
    };
    G__9502.cljs$lang$arity$variadic = G__9502__delegate;
    return G__9502
  }();
  min_key = function(k, x, y, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return min_key__2.call(this, k, x);
      case 3:
        return min_key__3.call(this, k, x, y);
      default:
        return min_key__4.cljs$lang$arity$variadic(k, x, y, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  min_key.cljs$lang$maxFixedArity = 3;
  min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
  min_key.cljs$lang$arity$2 = min_key__2;
  min_key.cljs$lang$arity$3 = min_key__3;
  min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
  return min_key
}();
cljs.core.partition_all = function() {
  var partition_all = null;
  var partition_all__2 = function(n, coll) {
    return partition_all.call(null, n, n, coll)
  };
  var partition_all__3 = function(n, step, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3974__auto____9506 = cljs.core.seq.call(null, coll);
      if(temp__3974__auto____9506) {
        var s__9507 = temp__3974__auto____9506;
        return cljs.core.cons.call(null, cljs.core.take.call(null, n, s__9507), partition_all.call(null, n, step, cljs.core.drop.call(null, step, s__9507)))
      }else {
        return null
      }
    }, null)
  };
  partition_all = function(n, step, coll) {
    switch(arguments.length) {
      case 2:
        return partition_all__2.call(this, n, step);
      case 3:
        return partition_all__3.call(this, n, step, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  partition_all.cljs$lang$arity$2 = partition_all__2;
  partition_all.cljs$lang$arity$3 = partition_all__3;
  return partition_all
}();
cljs.core.take_while = function take_while(pred, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3974__auto____9510 = cljs.core.seq.call(null, coll);
    if(temp__3974__auto____9510) {
      var s__9511 = temp__3974__auto____9510;
      if(cljs.core.truth_(pred.call(null, cljs.core.first.call(null, s__9511)))) {
        return cljs.core.cons.call(null, cljs.core.first.call(null, s__9511), take_while.call(null, pred, cljs.core.rest.call(null, s__9511)))
      }else {
        return null
      }
    }else {
      return null
    }
  }, null)
};
cljs.core.mk_bound_fn = function mk_bound_fn(sc, test, key) {
  return function(e) {
    var comp__9513 = cljs.core._comparator.call(null, sc);
    return test.call(null, comp__9513.call(null, cljs.core._entry_key.call(null, sc, e), key), 0)
  }
};
cljs.core.subseq = function() {
  var subseq = null;
  var subseq__3 = function(sc, test, key) {
    var include__9525 = cljs.core.mk_bound_fn.call(null, sc, test, key);
    if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_, cljs.core._GT__EQ_]).call(null, test))) {
      var temp__3974__auto____9526 = cljs.core._sorted_seq_from.call(null, sc, key, true);
      if(cljs.core.truth_(temp__3974__auto____9526)) {
        var vec__9527__9528 = temp__3974__auto____9526;
        var e__9529 = cljs.core.nth.call(null, vec__9527__9528, 0, null);
        var s__9530 = vec__9527__9528;
        if(cljs.core.truth_(include__9525.call(null, e__9529))) {
          return s__9530
        }else {
          return cljs.core.next.call(null, s__9530)
        }
      }else {
        return null
      }
    }else {
      return cljs.core.take_while.call(null, include__9525, cljs.core._sorted_seq.call(null, sc, true))
    }
  };
  var subseq__5 = function(sc, start_test, start_key, end_test, end_key) {
    var temp__3974__auto____9531 = cljs.core._sorted_seq_from.call(null, sc, start_key, true);
    if(cljs.core.truth_(temp__3974__auto____9531)) {
      var vec__9532__9533 = temp__3974__auto____9531;
      var e__9534 = cljs.core.nth.call(null, vec__9532__9533, 0, null);
      var s__9535 = vec__9532__9533;
      return cljs.core.take_while.call(null, cljs.core.mk_bound_fn.call(null, sc, end_test, end_key), cljs.core.truth_(cljs.core.mk_bound_fn.call(null, sc, start_test, start_key).call(null, e__9534)) ? s__9535 : cljs.core.next.call(null, s__9535))
    }else {
      return null
    }
  };
  subseq = function(sc, start_test, start_key, end_test, end_key) {
    switch(arguments.length) {
      case 3:
        return subseq__3.call(this, sc, start_test, start_key);
      case 5:
        return subseq__5.call(this, sc, start_test, start_key, end_test, end_key)
    }
    throw"Invalid arity: " + arguments.length;
  };
  subseq.cljs$lang$arity$3 = subseq__3;
  subseq.cljs$lang$arity$5 = subseq__5;
  return subseq
}();
cljs.core.rsubseq = function() {
  var rsubseq = null;
  var rsubseq__3 = function(sc, test, key) {
    var include__9547 = cljs.core.mk_bound_fn.call(null, sc, test, key);
    if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_, cljs.core._LT__EQ_]).call(null, test))) {
      var temp__3974__auto____9548 = cljs.core._sorted_seq_from.call(null, sc, key, false);
      if(cljs.core.truth_(temp__3974__auto____9548)) {
        var vec__9549__9550 = temp__3974__auto____9548;
        var e__9551 = cljs.core.nth.call(null, vec__9549__9550, 0, null);
        var s__9552 = vec__9549__9550;
        if(cljs.core.truth_(include__9547.call(null, e__9551))) {
          return s__9552
        }else {
          return cljs.core.next.call(null, s__9552)
        }
      }else {
        return null
      }
    }else {
      return cljs.core.take_while.call(null, include__9547, cljs.core._sorted_seq.call(null, sc, false))
    }
  };
  var rsubseq__5 = function(sc, start_test, start_key, end_test, end_key) {
    var temp__3974__auto____9553 = cljs.core._sorted_seq_from.call(null, sc, end_key, false);
    if(cljs.core.truth_(temp__3974__auto____9553)) {
      var vec__9554__9555 = temp__3974__auto____9553;
      var e__9556 = cljs.core.nth.call(null, vec__9554__9555, 0, null);
      var s__9557 = vec__9554__9555;
      return cljs.core.take_while.call(null, cljs.core.mk_bound_fn.call(null, sc, start_test, start_key), cljs.core.truth_(cljs.core.mk_bound_fn.call(null, sc, end_test, end_key).call(null, e__9556)) ? s__9557 : cljs.core.next.call(null, s__9557))
    }else {
      return null
    }
  };
  rsubseq = function(sc, start_test, start_key, end_test, end_key) {
    switch(arguments.length) {
      case 3:
        return rsubseq__3.call(this, sc, start_test, start_key);
      case 5:
        return rsubseq__5.call(this, sc, start_test, start_key, end_test, end_key)
    }
    throw"Invalid arity: " + arguments.length;
  };
  rsubseq.cljs$lang$arity$3 = rsubseq__3;
  rsubseq.cljs$lang$arity$5 = rsubseq__5;
  return rsubseq
}();
cljs.core.Range = function(meta, start, end, step, __hash) {
  this.meta = meta;
  this.start = start;
  this.end = end;
  this.step = step;
  this.__hash = __hash;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 32375006
};
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/Range")
};
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = function(rng) {
  var this__9558 = this;
  var h__2218__auto____9559 = this__9558.__hash;
  if(!(h__2218__auto____9559 == null)) {
    return h__2218__auto____9559
  }else {
    var h__2218__auto____9560 = cljs.core.hash_coll.call(null, rng);
    this__9558.__hash = h__2218__auto____9560;
    return h__2218__auto____9560
  }
};
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = function(rng) {
  var this__9561 = this;
  if(this__9561.step > 0) {
    if(this__9561.start + this__9561.step < this__9561.end) {
      return new cljs.core.Range(this__9561.meta, this__9561.start + this__9561.step, this__9561.end, this__9561.step, null)
    }else {
      return null
    }
  }else {
    if(this__9561.start + this__9561.step > this__9561.end) {
      return new cljs.core.Range(this__9561.meta, this__9561.start + this__9561.step, this__9561.end, this__9561.step, null)
    }else {
      return null
    }
  }
};
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = function(rng, o) {
  var this__9562 = this;
  return cljs.core.cons.call(null, o, rng)
};
cljs.core.Range.prototype.toString = function() {
  var this__9563 = this;
  var this__9564 = this;
  return cljs.core.pr_str.call(null, this__9564)
};
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = function(rng, f) {
  var this__9565 = this;
  return cljs.core.ci_reduce.call(null, rng, f)
};
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = function(rng, f, s) {
  var this__9566 = this;
  return cljs.core.ci_reduce.call(null, rng, f, s)
};
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = function(rng) {
  var this__9567 = this;
  if(this__9567.step > 0) {
    if(this__9567.start < this__9567.end) {
      return rng
    }else {
      return null
    }
  }else {
    if(this__9567.start > this__9567.end) {
      return rng
    }else {
      return null
    }
  }
};
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = function(rng) {
  var this__9568 = this;
  if(cljs.core.not.call(null, rng.cljs$core$ISeqable$_seq$arity$1(rng))) {
    return 0
  }else {
    return Math.ceil((this__9568.end - this__9568.start) / this__9568.step)
  }
};
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = function(rng) {
  var this__9569 = this;
  return this__9569.start
};
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = function(rng) {
  var this__9570 = this;
  if(!(rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)) {
    return new cljs.core.Range(this__9570.meta, this__9570.start + this__9570.step, this__9570.end, this__9570.step, null)
  }else {
    return cljs.core.List.EMPTY
  }
};
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(rng, other) {
  var this__9571 = this;
  return cljs.core.equiv_sequential.call(null, rng, other)
};
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(rng, meta) {
  var this__9572 = this;
  return new cljs.core.Range(meta, this__9572.start, this__9572.end, this__9572.step, this__9572.__hash)
};
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = function(rng) {
  var this__9573 = this;
  return this__9573.meta
};
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = function(rng, n) {
  var this__9574 = this;
  if(n < rng.cljs$core$ICounted$_count$arity$1(rng)) {
    return this__9574.start + n * this__9574.step
  }else {
    if(function() {
      var and__3822__auto____9575 = this__9574.start > this__9574.end;
      if(and__3822__auto____9575) {
        return this__9574.step === 0
      }else {
        return and__3822__auto____9575
      }
    }()) {
      return this__9574.start
    }else {
      throw new Error("Index out of bounds");
    }
  }
};
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = function(rng, n, not_found) {
  var this__9576 = this;
  if(n < rng.cljs$core$ICounted$_count$arity$1(rng)) {
    return this__9576.start + n * this__9576.step
  }else {
    if(function() {
      var and__3822__auto____9577 = this__9576.start > this__9576.end;
      if(and__3822__auto____9577) {
        return this__9576.step === 0
      }else {
        return and__3822__auto____9577
      }
    }()) {
      return this__9576.start
    }else {
      return not_found
    }
  }
};
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = function(rng) {
  var this__9578 = this;
  return cljs.core.with_meta.call(null, cljs.core.List.EMPTY, this__9578.meta)
};
cljs.core.Range;
cljs.core.range = function() {
  var range = null;
  var range__0 = function() {
    return range.call(null, 0, Number.MAX_VALUE, 1)
  };
  var range__1 = function(end) {
    return range.call(null, 0, end, 1)
  };
  var range__2 = function(start, end) {
    return range.call(null, start, end, 1)
  };
  var range__3 = function(start, end, step) {
    return new cljs.core.Range(null, start, end, step, null)
  };
  range = function(start, end, step) {
    switch(arguments.length) {
      case 0:
        return range__0.call(this);
      case 1:
        return range__1.call(this, start);
      case 2:
        return range__2.call(this, start, end);
      case 3:
        return range__3.call(this, start, end, step)
    }
    throw"Invalid arity: " + arguments.length;
  };
  range.cljs$lang$arity$0 = range__0;
  range.cljs$lang$arity$1 = range__1;
  range.cljs$lang$arity$2 = range__2;
  range.cljs$lang$arity$3 = range__3;
  return range
}();
cljs.core.take_nth = function take_nth(n, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3974__auto____9581 = cljs.core.seq.call(null, coll);
    if(temp__3974__auto____9581) {
      var s__9582 = temp__3974__auto____9581;
      return cljs.core.cons.call(null, cljs.core.first.call(null, s__9582), take_nth.call(null, n, cljs.core.drop.call(null, n, s__9582)))
    }else {
      return null
    }
  }, null)
};
cljs.core.split_with = function split_with(pred, coll) {
  return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null, pred, coll), cljs.core.drop_while.call(null, pred, coll)], true)
};
cljs.core.partition_by = function partition_by(f, coll) {
  return new cljs.core.LazySeq(null, false, function() {
    var temp__3974__auto____9589 = cljs.core.seq.call(null, coll);
    if(temp__3974__auto____9589) {
      var s__9590 = temp__3974__auto____9589;
      var fst__9591 = cljs.core.first.call(null, s__9590);
      var fv__9592 = f.call(null, fst__9591);
      var run__9593 = cljs.core.cons.call(null, fst__9591, cljs.core.take_while.call(null, function(p1__9583_SHARP_) {
        return cljs.core._EQ_.call(null, fv__9592, f.call(null, p1__9583_SHARP_))
      }, cljs.core.next.call(null, s__9590)));
      return cljs.core.cons.call(null, run__9593, partition_by.call(null, f, cljs.core.seq.call(null, cljs.core.drop.call(null, cljs.core.count.call(null, run__9593), s__9590))))
    }else {
      return null
    }
  }, null)
};
cljs.core.frequencies = function frequencies(coll) {
  return cljs.core.persistent_BANG_.call(null, cljs.core.reduce.call(null, function(counts, x) {
    return cljs.core.assoc_BANG_.call(null, counts, x, cljs.core._lookup.call(null, counts, x, 0) + 1)
  }, cljs.core.transient$.call(null, cljs.core.ObjMap.EMPTY), coll))
};
cljs.core.reductions = function() {
  var reductions = null;
  var reductions__2 = function(f, coll) {
    return new cljs.core.LazySeq(null, false, function() {
      var temp__3971__auto____9608 = cljs.core.seq.call(null, coll);
      if(temp__3971__auto____9608) {
        var s__9609 = temp__3971__auto____9608;
        return reductions.call(null, f, cljs.core.first.call(null, s__9609), cljs.core.rest.call(null, s__9609))
      }else {
        return cljs.core.list.call(null, f.call(null))
      }
    }, null)
  };
  var reductions__3 = function(f, init, coll) {
    return cljs.core.cons.call(null, init, new cljs.core.LazySeq(null, false, function() {
      var temp__3974__auto____9610 = cljs.core.seq.call(null, coll);
      if(temp__3974__auto____9610) {
        var s__9611 = temp__3974__auto____9610;
        return reductions.call(null, f, f.call(null, init, cljs.core.first.call(null, s__9611)), cljs.core.rest.call(null, s__9611))
      }else {
        return null
      }
    }, null))
  };
  reductions = function(f, init, coll) {
    switch(arguments.length) {
      case 2:
        return reductions__2.call(this, f, init);
      case 3:
        return reductions__3.call(this, f, init, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  reductions.cljs$lang$arity$2 = reductions__2;
  reductions.cljs$lang$arity$3 = reductions__3;
  return reductions
}();
cljs.core.juxt = function() {
  var juxt = null;
  var juxt__1 = function(f) {
    return function() {
      var G__9614 = null;
      var G__9614__0 = function() {
        return cljs.core.vector.call(null, f.call(null))
      };
      var G__9614__1 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x))
      };
      var G__9614__2 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y))
      };
      var G__9614__3 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z))
      };
      var G__9614__4 = function() {
        var G__9615__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args))
        };
        var G__9615 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__9615__delegate.call(this, x, y, z, args)
        };
        G__9615.cljs$lang$maxFixedArity = 3;
        G__9615.cljs$lang$applyTo = function(arglist__9616) {
          var x = cljs.core.first(arglist__9616);
          var y = cljs.core.first(cljs.core.next(arglist__9616));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9616)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9616)));
          return G__9615__delegate(x, y, z, args)
        };
        G__9615.cljs$lang$arity$variadic = G__9615__delegate;
        return G__9615
      }();
      G__9614 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__9614__0.call(this);
          case 1:
            return G__9614__1.call(this, x);
          case 2:
            return G__9614__2.call(this, x, y);
          case 3:
            return G__9614__3.call(this, x, y, z);
          default:
            return G__9614__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__9614.cljs$lang$maxFixedArity = 3;
      G__9614.cljs$lang$applyTo = G__9614__4.cljs$lang$applyTo;
      return G__9614
    }()
  };
  var juxt__2 = function(f, g) {
    return function() {
      var G__9617 = null;
      var G__9617__0 = function() {
        return cljs.core.vector.call(null, f.call(null), g.call(null))
      };
      var G__9617__1 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x), g.call(null, x))
      };
      var G__9617__2 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y), g.call(null, x, y))
      };
      var G__9617__3 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z), g.call(null, x, y, z))
      };
      var G__9617__4 = function() {
        var G__9618__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args), cljs.core.apply.call(null, g, x, y, z, args))
        };
        var G__9618 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__9618__delegate.call(this, x, y, z, args)
        };
        G__9618.cljs$lang$maxFixedArity = 3;
        G__9618.cljs$lang$applyTo = function(arglist__9619) {
          var x = cljs.core.first(arglist__9619);
          var y = cljs.core.first(cljs.core.next(arglist__9619));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9619)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9619)));
          return G__9618__delegate(x, y, z, args)
        };
        G__9618.cljs$lang$arity$variadic = G__9618__delegate;
        return G__9618
      }();
      G__9617 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__9617__0.call(this);
          case 1:
            return G__9617__1.call(this, x);
          case 2:
            return G__9617__2.call(this, x, y);
          case 3:
            return G__9617__3.call(this, x, y, z);
          default:
            return G__9617__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__9617.cljs$lang$maxFixedArity = 3;
      G__9617.cljs$lang$applyTo = G__9617__4.cljs$lang$applyTo;
      return G__9617
    }()
  };
  var juxt__3 = function(f, g, h) {
    return function() {
      var G__9620 = null;
      var G__9620__0 = function() {
        return cljs.core.vector.call(null, f.call(null), g.call(null), h.call(null))
      };
      var G__9620__1 = function(x) {
        return cljs.core.vector.call(null, f.call(null, x), g.call(null, x), h.call(null, x))
      };
      var G__9620__2 = function(x, y) {
        return cljs.core.vector.call(null, f.call(null, x, y), g.call(null, x, y), h.call(null, x, y))
      };
      var G__9620__3 = function(x, y, z) {
        return cljs.core.vector.call(null, f.call(null, x, y, z), g.call(null, x, y, z), h.call(null, x, y, z))
      };
      var G__9620__4 = function() {
        var G__9621__delegate = function(x, y, z, args) {
          return cljs.core.vector.call(null, cljs.core.apply.call(null, f, x, y, z, args), cljs.core.apply.call(null, g, x, y, z, args), cljs.core.apply.call(null, h, x, y, z, args))
        };
        var G__9621 = function(x, y, z, var_args) {
          var args = null;
          if(goog.isDef(var_args)) {
            args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
          }
          return G__9621__delegate.call(this, x, y, z, args)
        };
        G__9621.cljs$lang$maxFixedArity = 3;
        G__9621.cljs$lang$applyTo = function(arglist__9622) {
          var x = cljs.core.first(arglist__9622);
          var y = cljs.core.first(cljs.core.next(arglist__9622));
          var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9622)));
          var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9622)));
          return G__9621__delegate(x, y, z, args)
        };
        G__9621.cljs$lang$arity$variadic = G__9621__delegate;
        return G__9621
      }();
      G__9620 = function(x, y, z, var_args) {
        var args = var_args;
        switch(arguments.length) {
          case 0:
            return G__9620__0.call(this);
          case 1:
            return G__9620__1.call(this, x);
          case 2:
            return G__9620__2.call(this, x, y);
          case 3:
            return G__9620__3.call(this, x, y, z);
          default:
            return G__9620__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
        }
        throw"Invalid arity: " + arguments.length;
      };
      G__9620.cljs$lang$maxFixedArity = 3;
      G__9620.cljs$lang$applyTo = G__9620__4.cljs$lang$applyTo;
      return G__9620
    }()
  };
  var juxt__4 = function() {
    var G__9623__delegate = function(f, g, h, fs) {
      var fs__9613 = cljs.core.list_STAR_.call(null, f, g, h, fs);
      return function() {
        var G__9624 = null;
        var G__9624__0 = function() {
          return cljs.core.reduce.call(null, function(p1__9594_SHARP_, p2__9595_SHARP_) {
            return cljs.core.conj.call(null, p1__9594_SHARP_, p2__9595_SHARP_.call(null))
          }, cljs.core.PersistentVector.EMPTY, fs__9613)
        };
        var G__9624__1 = function(x) {
          return cljs.core.reduce.call(null, function(p1__9596_SHARP_, p2__9597_SHARP_) {
            return cljs.core.conj.call(null, p1__9596_SHARP_, p2__9597_SHARP_.call(null, x))
          }, cljs.core.PersistentVector.EMPTY, fs__9613)
        };
        var G__9624__2 = function(x, y) {
          return cljs.core.reduce.call(null, function(p1__9598_SHARP_, p2__9599_SHARP_) {
            return cljs.core.conj.call(null, p1__9598_SHARP_, p2__9599_SHARP_.call(null, x, y))
          }, cljs.core.PersistentVector.EMPTY, fs__9613)
        };
        var G__9624__3 = function(x, y, z) {
          return cljs.core.reduce.call(null, function(p1__9600_SHARP_, p2__9601_SHARP_) {
            return cljs.core.conj.call(null, p1__9600_SHARP_, p2__9601_SHARP_.call(null, x, y, z))
          }, cljs.core.PersistentVector.EMPTY, fs__9613)
        };
        var G__9624__4 = function() {
          var G__9625__delegate = function(x, y, z, args) {
            return cljs.core.reduce.call(null, function(p1__9602_SHARP_, p2__9603_SHARP_) {
              return cljs.core.conj.call(null, p1__9602_SHARP_, cljs.core.apply.call(null, p2__9603_SHARP_, x, y, z, args))
            }, cljs.core.PersistentVector.EMPTY, fs__9613)
          };
          var G__9625 = function(x, y, z, var_args) {
            var args = null;
            if(goog.isDef(var_args)) {
              args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
            }
            return G__9625__delegate.call(this, x, y, z, args)
          };
          G__9625.cljs$lang$maxFixedArity = 3;
          G__9625.cljs$lang$applyTo = function(arglist__9626) {
            var x = cljs.core.first(arglist__9626);
            var y = cljs.core.first(cljs.core.next(arglist__9626));
            var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9626)));
            var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9626)));
            return G__9625__delegate(x, y, z, args)
          };
          G__9625.cljs$lang$arity$variadic = G__9625__delegate;
          return G__9625
        }();
        G__9624 = function(x, y, z, var_args) {
          var args = var_args;
          switch(arguments.length) {
            case 0:
              return G__9624__0.call(this);
            case 1:
              return G__9624__1.call(this, x);
            case 2:
              return G__9624__2.call(this, x, y);
            case 3:
              return G__9624__3.call(this, x, y, z);
            default:
              return G__9624__4.cljs$lang$arity$variadic(x, y, z, cljs.core.array_seq(arguments, 3))
          }
          throw"Invalid arity: " + arguments.length;
        };
        G__9624.cljs$lang$maxFixedArity = 3;
        G__9624.cljs$lang$applyTo = G__9624__4.cljs$lang$applyTo;
        return G__9624
      }()
    };
    var G__9623 = function(f, g, h, var_args) {
      var fs = null;
      if(goog.isDef(var_args)) {
        fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3), 0)
      }
      return G__9623__delegate.call(this, f, g, h, fs)
    };
    G__9623.cljs$lang$maxFixedArity = 3;
    G__9623.cljs$lang$applyTo = function(arglist__9627) {
      var f = cljs.core.first(arglist__9627);
      var g = cljs.core.first(cljs.core.next(arglist__9627));
      var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9627)));
      var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9627)));
      return G__9623__delegate(f, g, h, fs)
    };
    G__9623.cljs$lang$arity$variadic = G__9623__delegate;
    return G__9623
  }();
  juxt = function(f, g, h, var_args) {
    var fs = var_args;
    switch(arguments.length) {
      case 1:
        return juxt__1.call(this, f);
      case 2:
        return juxt__2.call(this, f, g);
      case 3:
        return juxt__3.call(this, f, g, h);
      default:
        return juxt__4.cljs$lang$arity$variadic(f, g, h, cljs.core.array_seq(arguments, 3))
    }
    throw"Invalid arity: " + arguments.length;
  };
  juxt.cljs$lang$maxFixedArity = 3;
  juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
  juxt.cljs$lang$arity$1 = juxt__1;
  juxt.cljs$lang$arity$2 = juxt__2;
  juxt.cljs$lang$arity$3 = juxt__3;
  juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
  return juxt
}();
cljs.core.dorun = function() {
  var dorun = null;
  var dorun__1 = function(coll) {
    while(true) {
      if(cljs.core.seq.call(null, coll)) {
        var G__9630 = cljs.core.next.call(null, coll);
        coll = G__9630;
        continue
      }else {
        return null
      }
      break
    }
  };
  var dorun__2 = function(n, coll) {
    while(true) {
      if(cljs.core.truth_(function() {
        var and__3822__auto____9629 = cljs.core.seq.call(null, coll);
        if(and__3822__auto____9629) {
          return n > 0
        }else {
          return and__3822__auto____9629
        }
      }())) {
        var G__9631 = n - 1;
        var G__9632 = cljs.core.next.call(null, coll);
        n = G__9631;
        coll = G__9632;
        continue
      }else {
        return null
      }
      break
    }
  };
  dorun = function(n, coll) {
    switch(arguments.length) {
      case 1:
        return dorun__1.call(this, n);
      case 2:
        return dorun__2.call(this, n, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  dorun.cljs$lang$arity$1 = dorun__1;
  dorun.cljs$lang$arity$2 = dorun__2;
  return dorun
}();
cljs.core.doall = function() {
  var doall = null;
  var doall__1 = function(coll) {
    cljs.core.dorun.call(null, coll);
    return coll
  };
  var doall__2 = function(n, coll) {
    cljs.core.dorun.call(null, n, coll);
    return coll
  };
  doall = function(n, coll) {
    switch(arguments.length) {
      case 1:
        return doall__1.call(this, n);
      case 2:
        return doall__2.call(this, n, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  doall.cljs$lang$arity$1 = doall__1;
  doall.cljs$lang$arity$2 = doall__2;
  return doall
}();
cljs.core.regexp_QMARK_ = function regexp_QMARK_(o) {
  return o instanceof RegExp
};
cljs.core.re_matches = function re_matches(re, s) {
  var matches__9634 = re.exec(s);
  if(cljs.core._EQ_.call(null, cljs.core.first.call(null, matches__9634), s)) {
    if(cljs.core.count.call(null, matches__9634) === 1) {
      return cljs.core.first.call(null, matches__9634)
    }else {
      return cljs.core.vec.call(null, matches__9634)
    }
  }else {
    return null
  }
};
cljs.core.re_find = function re_find(re, s) {
  var matches__9636 = re.exec(s);
  if(matches__9636 == null) {
    return null
  }else {
    if(cljs.core.count.call(null, matches__9636) === 1) {
      return cljs.core.first.call(null, matches__9636)
    }else {
      return cljs.core.vec.call(null, matches__9636)
    }
  }
};
cljs.core.re_seq = function re_seq(re, s) {
  var match_data__9641 = cljs.core.re_find.call(null, re, s);
  var match_idx__9642 = s.search(re);
  var match_str__9643 = cljs.core.coll_QMARK_.call(null, match_data__9641) ? cljs.core.first.call(null, match_data__9641) : match_data__9641;
  var post_match__9644 = cljs.core.subs.call(null, s, match_idx__9642 + cljs.core.count.call(null, match_str__9643));
  if(cljs.core.truth_(match_data__9641)) {
    return new cljs.core.LazySeq(null, false, function() {
      return cljs.core.cons.call(null, match_data__9641, re_seq.call(null, re, post_match__9644))
    }, null)
  }else {
    return null
  }
};
cljs.core.re_pattern = function re_pattern(s) {
  var vec__9651__9652 = cljs.core.re_find.call(null, /^(?:\(\?([idmsux]*)\))?(.*)/, s);
  var ___9653 = cljs.core.nth.call(null, vec__9651__9652, 0, null);
  var flags__9654 = cljs.core.nth.call(null, vec__9651__9652, 1, null);
  var pattern__9655 = cljs.core.nth.call(null, vec__9651__9652, 2, null);
  return new RegExp(pattern__9655, flags__9654)
};
cljs.core.pr_sequential = function pr_sequential(print_one, begin, sep, end, opts, coll) {
  return cljs.core.concat.call(null, cljs.core.PersistentVector.fromArray([begin], true), cljs.core.flatten1.call(null, cljs.core.interpose.call(null, cljs.core.PersistentVector.fromArray([sep], true), cljs.core.map.call(null, function(p1__9645_SHARP_) {
    return print_one.call(null, p1__9645_SHARP_, opts)
  }, coll))), cljs.core.PersistentVector.fromArray([end], true))
};
cljs.core.string_print = function string_print(x) {
  cljs.core._STAR_print_fn_STAR_.call(null, x);
  return null
};
cljs.core.flush = function flush() {
  return null
};
cljs.core.pr_seq = function pr_seq(obj, opts) {
  if(obj == null) {
    return cljs.core.list.call(null, "nil")
  }else {
    if(void 0 === obj) {
      return cljs.core.list.call(null, "#<undefined>")
    }else {
      if("\ufdd0'else") {
        return cljs.core.concat.call(null, cljs.core.truth_(function() {
          var and__3822__auto____9665 = cljs.core._lookup.call(null, opts, "\ufdd0'meta", null);
          if(cljs.core.truth_(and__3822__auto____9665)) {
            var and__3822__auto____9669 = function() {
              var G__9666__9667 = obj;
              if(G__9666__9667) {
                if(function() {
                  var or__3824__auto____9668 = G__9666__9667.cljs$lang$protocol_mask$partition0$ & 131072;
                  if(or__3824__auto____9668) {
                    return or__3824__auto____9668
                  }else {
                    return G__9666__9667.cljs$core$IMeta$
                  }
                }()) {
                  return true
                }else {
                  if(!G__9666__9667.cljs$lang$protocol_mask$partition0$) {
                    return cljs.core.type_satisfies_.call(null, cljs.core.IMeta, G__9666__9667)
                  }else {
                    return false
                  }
                }
              }else {
                return cljs.core.type_satisfies_.call(null, cljs.core.IMeta, G__9666__9667)
              }
            }();
            if(cljs.core.truth_(and__3822__auto____9669)) {
              return cljs.core.meta.call(null, obj)
            }else {
              return and__3822__auto____9669
            }
          }else {
            return and__3822__auto____9665
          }
        }()) ? cljs.core.concat.call(null, cljs.core.PersistentVector.fromArray(["^"], true), pr_seq.call(null, cljs.core.meta.call(null, obj), opts), cljs.core.PersistentVector.fromArray([" "], true)) : null, function() {
          var and__3822__auto____9670 = !(obj == null);
          if(and__3822__auto____9670) {
            return obj.cljs$lang$type
          }else {
            return and__3822__auto____9670
          }
        }() ? obj.cljs$lang$ctorPrSeq(obj) : function() {
          var G__9671__9672 = obj;
          if(G__9671__9672) {
            if(function() {
              var or__3824__auto____9673 = G__9671__9672.cljs$lang$protocol_mask$partition0$ & 536870912;
              if(or__3824__auto____9673) {
                return or__3824__auto____9673
              }else {
                return G__9671__9672.cljs$core$IPrintable$
              }
            }()) {
              return true
            }else {
              if(!G__9671__9672.cljs$lang$protocol_mask$partition0$) {
                return cljs.core.type_satisfies_.call(null, cljs.core.IPrintable, G__9671__9672)
              }else {
                return false
              }
            }
          }else {
            return cljs.core.type_satisfies_.call(null, cljs.core.IPrintable, G__9671__9672)
          }
        }() ? cljs.core._pr_seq.call(null, obj, opts) : cljs.core.truth_(cljs.core.regexp_QMARK_.call(null, obj)) ? cljs.core.list.call(null, '#"', obj.source, '"') : "\ufdd0'else" ? cljs.core.list.call(null, "#<", [cljs.core.str(obj)].join(""), ">") : null)
      }else {
        return null
      }
    }
  }
};
cljs.core.pr_sb = function pr_sb(objs, opts) {
  var sb__9693 = new goog.string.StringBuffer;
  var G__9694__9695 = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, cljs.core.first.call(null, objs), opts));
  if(G__9694__9695) {
    var string__9696 = cljs.core.first.call(null, G__9694__9695);
    var G__9694__9697 = G__9694__9695;
    while(true) {
      sb__9693.append(string__9696);
      var temp__3974__auto____9698 = cljs.core.next.call(null, G__9694__9697);
      if(temp__3974__auto____9698) {
        var G__9694__9699 = temp__3974__auto____9698;
        var G__9712 = cljs.core.first.call(null, G__9694__9699);
        var G__9713 = G__9694__9699;
        string__9696 = G__9712;
        G__9694__9697 = G__9713;
        continue
      }else {
      }
      break
    }
  }else {
  }
  var G__9700__9701 = cljs.core.seq.call(null, cljs.core.next.call(null, objs));
  if(G__9700__9701) {
    var obj__9702 = cljs.core.first.call(null, G__9700__9701);
    var G__9700__9703 = G__9700__9701;
    while(true) {
      sb__9693.append(" ");
      var G__9704__9705 = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, obj__9702, opts));
      if(G__9704__9705) {
        var string__9706 = cljs.core.first.call(null, G__9704__9705);
        var G__9704__9707 = G__9704__9705;
        while(true) {
          sb__9693.append(string__9706);
          var temp__3974__auto____9708 = cljs.core.next.call(null, G__9704__9707);
          if(temp__3974__auto____9708) {
            var G__9704__9709 = temp__3974__auto____9708;
            var G__9714 = cljs.core.first.call(null, G__9704__9709);
            var G__9715 = G__9704__9709;
            string__9706 = G__9714;
            G__9704__9707 = G__9715;
            continue
          }else {
          }
          break
        }
      }else {
      }
      var temp__3974__auto____9710 = cljs.core.next.call(null, G__9700__9703);
      if(temp__3974__auto____9710) {
        var G__9700__9711 = temp__3974__auto____9710;
        var G__9716 = cljs.core.first.call(null, G__9700__9711);
        var G__9717 = G__9700__9711;
        obj__9702 = G__9716;
        G__9700__9703 = G__9717;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return sb__9693
};
cljs.core.pr_str_with_opts = function pr_str_with_opts(objs, opts) {
  return[cljs.core.str(cljs.core.pr_sb.call(null, objs, opts))].join("")
};
cljs.core.prn_str_with_opts = function prn_str_with_opts(objs, opts) {
  var sb__9719 = cljs.core.pr_sb.call(null, objs, opts);
  sb__9719.append("\n");
  return[cljs.core.str(sb__9719)].join("")
};
cljs.core.pr_with_opts = function pr_with_opts(objs, opts) {
  var G__9738__9739 = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, cljs.core.first.call(null, objs), opts));
  if(G__9738__9739) {
    var string__9740 = cljs.core.first.call(null, G__9738__9739);
    var G__9738__9741 = G__9738__9739;
    while(true) {
      cljs.core.string_print.call(null, string__9740);
      var temp__3974__auto____9742 = cljs.core.next.call(null, G__9738__9741);
      if(temp__3974__auto____9742) {
        var G__9738__9743 = temp__3974__auto____9742;
        var G__9756 = cljs.core.first.call(null, G__9738__9743);
        var G__9757 = G__9738__9743;
        string__9740 = G__9756;
        G__9738__9741 = G__9757;
        continue
      }else {
      }
      break
    }
  }else {
  }
  var G__9744__9745 = cljs.core.seq.call(null, cljs.core.next.call(null, objs));
  if(G__9744__9745) {
    var obj__9746 = cljs.core.first.call(null, G__9744__9745);
    var G__9744__9747 = G__9744__9745;
    while(true) {
      cljs.core.string_print.call(null, " ");
      var G__9748__9749 = cljs.core.seq.call(null, cljs.core.pr_seq.call(null, obj__9746, opts));
      if(G__9748__9749) {
        var string__9750 = cljs.core.first.call(null, G__9748__9749);
        var G__9748__9751 = G__9748__9749;
        while(true) {
          cljs.core.string_print.call(null, string__9750);
          var temp__3974__auto____9752 = cljs.core.next.call(null, G__9748__9751);
          if(temp__3974__auto____9752) {
            var G__9748__9753 = temp__3974__auto____9752;
            var G__9758 = cljs.core.first.call(null, G__9748__9753);
            var G__9759 = G__9748__9753;
            string__9750 = G__9758;
            G__9748__9751 = G__9759;
            continue
          }else {
          }
          break
        }
      }else {
      }
      var temp__3974__auto____9754 = cljs.core.next.call(null, G__9744__9747);
      if(temp__3974__auto____9754) {
        var G__9744__9755 = temp__3974__auto____9754;
        var G__9760 = cljs.core.first.call(null, G__9744__9755);
        var G__9761 = G__9744__9755;
        obj__9746 = G__9760;
        G__9744__9747 = G__9761;
        continue
      }else {
        return null
      }
      break
    }
  }else {
    return null
  }
};
cljs.core.newline = function newline(opts) {
  cljs.core.string_print.call(null, "\n");
  if(cljs.core.truth_(cljs.core._lookup.call(null, opts, "\ufdd0'flush-on-newline", null))) {
    return cljs.core.flush.call(null)
  }else {
    return null
  }
};
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = function pr_opts() {
  return cljs.core.ObjMap.fromObject(["\ufdd0'flush-on-newline", "\ufdd0'readably", "\ufdd0'meta", "\ufdd0'dup"], {"\ufdd0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_, "\ufdd0'readably":cljs.core._STAR_print_readably_STAR_, "\ufdd0'meta":cljs.core._STAR_print_meta_STAR_, "\ufdd0'dup":cljs.core._STAR_print_dup_STAR_})
};
cljs.core.pr_str = function() {
  var pr_str__delegate = function(objs) {
    return cljs.core.pr_str_with_opts.call(null, objs, cljs.core.pr_opts.call(null))
  };
  var pr_str = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return pr_str__delegate.call(this, objs)
  };
  pr_str.cljs$lang$maxFixedArity = 0;
  pr_str.cljs$lang$applyTo = function(arglist__9762) {
    var objs = cljs.core.seq(arglist__9762);
    return pr_str__delegate(objs)
  };
  pr_str.cljs$lang$arity$variadic = pr_str__delegate;
  return pr_str
}();
cljs.core.prn_str = function() {
  var prn_str__delegate = function(objs) {
    return cljs.core.prn_str_with_opts.call(null, objs, cljs.core.pr_opts.call(null))
  };
  var prn_str = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return prn_str__delegate.call(this, objs)
  };
  prn_str.cljs$lang$maxFixedArity = 0;
  prn_str.cljs$lang$applyTo = function(arglist__9763) {
    var objs = cljs.core.seq(arglist__9763);
    return prn_str__delegate(objs)
  };
  prn_str.cljs$lang$arity$variadic = prn_str__delegate;
  return prn_str
}();
cljs.core.pr = function() {
  var pr__delegate = function(objs) {
    return cljs.core.pr_with_opts.call(null, objs, cljs.core.pr_opts.call(null))
  };
  var pr = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return pr__delegate.call(this, objs)
  };
  pr.cljs$lang$maxFixedArity = 0;
  pr.cljs$lang$applyTo = function(arglist__9764) {
    var objs = cljs.core.seq(arglist__9764);
    return pr__delegate(objs)
  };
  pr.cljs$lang$arity$variadic = pr__delegate;
  return pr
}();
cljs.core.print = function() {
  var cljs_core_print__delegate = function(objs) {
    return cljs.core.pr_with_opts.call(null, objs, cljs.core.assoc.call(null, cljs.core.pr_opts.call(null), "\ufdd0'readably", false))
  };
  var cljs_core_print = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return cljs_core_print__delegate.call(this, objs)
  };
  cljs_core_print.cljs$lang$maxFixedArity = 0;
  cljs_core_print.cljs$lang$applyTo = function(arglist__9765) {
    var objs = cljs.core.seq(arglist__9765);
    return cljs_core_print__delegate(objs)
  };
  cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
  return cljs_core_print
}();
cljs.core.print_str = function() {
  var print_str__delegate = function(objs) {
    return cljs.core.pr_str_with_opts.call(null, objs, cljs.core.assoc.call(null, cljs.core.pr_opts.call(null), "\ufdd0'readably", false))
  };
  var print_str = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return print_str__delegate.call(this, objs)
  };
  print_str.cljs$lang$maxFixedArity = 0;
  print_str.cljs$lang$applyTo = function(arglist__9766) {
    var objs = cljs.core.seq(arglist__9766);
    return print_str__delegate(objs)
  };
  print_str.cljs$lang$arity$variadic = print_str__delegate;
  return print_str
}();
cljs.core.println = function() {
  var println__delegate = function(objs) {
    cljs.core.pr_with_opts.call(null, objs, cljs.core.assoc.call(null, cljs.core.pr_opts.call(null), "\ufdd0'readably", false));
    return cljs.core.newline.call(null, cljs.core.pr_opts.call(null))
  };
  var println = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return println__delegate.call(this, objs)
  };
  println.cljs$lang$maxFixedArity = 0;
  println.cljs$lang$applyTo = function(arglist__9767) {
    var objs = cljs.core.seq(arglist__9767);
    return println__delegate(objs)
  };
  println.cljs$lang$arity$variadic = println__delegate;
  return println
}();
cljs.core.println_str = function() {
  var println_str__delegate = function(objs) {
    return cljs.core.prn_str_with_opts.call(null, objs, cljs.core.assoc.call(null, cljs.core.pr_opts.call(null), "\ufdd0'readably", false))
  };
  var println_str = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return println_str__delegate.call(this, objs)
  };
  println_str.cljs$lang$maxFixedArity = 0;
  println_str.cljs$lang$applyTo = function(arglist__9768) {
    var objs = cljs.core.seq(arglist__9768);
    return println_str__delegate(objs)
  };
  println_str.cljs$lang$arity$variadic = println_str__delegate;
  return println_str
}();
cljs.core.prn = function() {
  var prn__delegate = function(objs) {
    cljs.core.pr_with_opts.call(null, objs, cljs.core.pr_opts.call(null));
    return cljs.core.newline.call(null, cljs.core.pr_opts.call(null))
  };
  var prn = function(var_args) {
    var objs = null;
    if(goog.isDef(var_args)) {
      objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return prn__delegate.call(this, objs)
  };
  prn.cljs$lang$maxFixedArity = 0;
  prn.cljs$lang$applyTo = function(arglist__9769) {
    var objs = cljs.core.seq(arglist__9769);
    return prn__delegate(objs)
  };
  prn.cljs$lang$arity$variadic = prn__delegate;
  return prn
}();
cljs.core.printf = function() {
  var printf__delegate = function(fmt, args) {
    return cljs.core.print.call(null, cljs.core.apply.call(null, cljs.core.format, fmt, args))
  };
  var printf = function(fmt, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return printf__delegate.call(this, fmt, args)
  };
  printf.cljs$lang$maxFixedArity = 1;
  printf.cljs$lang$applyTo = function(arglist__9770) {
    var fmt = cljs.core.first(arglist__9770);
    var args = cljs.core.rest(arglist__9770);
    return printf__delegate(fmt, args)
  };
  printf.cljs$lang$arity$variadic = printf__delegate;
  return printf
}();
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  var pr_pair__9771 = function(keyval) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__9771, "{", ", ", "}", opts, coll)
};
cljs.core.IPrintable["number"] = true;
cljs.core._pr_seq["number"] = function(n, opts) {
  return cljs.core.list.call(null, [cljs.core.str(n)].join(""))
};
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "[", " ", "]", opts, coll)
};
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  var pr_pair__9772 = function(keyval) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__9772, "{", ", ", "}", opts, coll)
};
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  var pr_pair__9773 = function(keyval) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__9773, "{", ", ", "}", opts, coll)
};
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "#queue [", " ", "]", opts, cljs.core.seq.call(null, coll))
};
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "#{", " ", "}", opts, coll)
};
cljs.core.IPrintable["boolean"] = true;
cljs.core._pr_seq["boolean"] = function(bool, opts) {
  return cljs.core.list.call(null, [cljs.core.str(bool)].join(""))
};
cljs.core.IPrintable["string"] = true;
cljs.core._pr_seq["string"] = function(obj, opts) {
  if(cljs.core.keyword_QMARK_.call(null, obj)) {
    return cljs.core.list.call(null, [cljs.core.str(":"), cljs.core.str(function() {
      var temp__3974__auto____9774 = cljs.core.namespace.call(null, obj);
      if(cljs.core.truth_(temp__3974__auto____9774)) {
        var nspc__9775 = temp__3974__auto____9774;
        return[cljs.core.str(nspc__9775), cljs.core.str("/")].join("")
      }else {
        return null
      }
    }()), cljs.core.str(cljs.core.name.call(null, obj))].join(""))
  }else {
    if(cljs.core.symbol_QMARK_.call(null, obj)) {
      return cljs.core.list.call(null, [cljs.core.str(function() {
        var temp__3974__auto____9776 = cljs.core.namespace.call(null, obj);
        if(cljs.core.truth_(temp__3974__auto____9776)) {
          var nspc__9777 = temp__3974__auto____9776;
          return[cljs.core.str(nspc__9777), cljs.core.str("/")].join("")
        }else {
          return null
        }
      }()), cljs.core.str(cljs.core.name.call(null, obj))].join(""))
    }else {
      if("\ufdd0'else") {
        return cljs.core.list.call(null, cljs.core.truth_((new cljs.core.Keyword("\ufdd0'readably")).call(null, opts)) ? goog.string.quote(obj) : obj)
      }else {
        return null
      }
    }
  }
};
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "[", " ", "]", opts, coll)
};
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  var pr_pair__9778 = function(keyval) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__9778, "{", ", ", "}", opts, coll)
};
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "[", " ", "]", opts, coll)
};
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "#{", " ", "}", opts, coll)
};
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "[", " ", "]", opts, coll)
};
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.IPrintable["array"] = true;
cljs.core._pr_seq["array"] = function(a, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "#<Array [", ", ", "]>", opts, a)
};
cljs.core.IPrintable["function"] = true;
cljs.core._pr_seq["function"] = function(this$) {
  return cljs.core.list.call(null, "#<", [cljs.core.str(this$)].join(""), ">")
};
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.list.call(null, "()")
};
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "[", " ", "]", opts, coll)
};
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(d, _) {
  var normalize__9780 = function(n, len) {
    var ns__9779 = [cljs.core.str(n)].join("");
    while(true) {
      if(cljs.core.count.call(null, ns__9779) < len) {
        var G__9782 = [cljs.core.str("0"), cljs.core.str(ns__9779)].join("");
        ns__9779 = G__9782;
        continue
      }else {
        return ns__9779
      }
      break
    }
  };
  return cljs.core.list.call(null, [cljs.core.str('#inst "'), cljs.core.str(d.getUTCFullYear()), cljs.core.str("-"), cljs.core.str(normalize__9780.call(null, d.getUTCMonth() + 1, 2)), cljs.core.str("-"), cljs.core.str(normalize__9780.call(null, d.getUTCDate(), 2)), cljs.core.str("T"), cljs.core.str(normalize__9780.call(null, d.getUTCHours(), 2)), cljs.core.str(":"), cljs.core.str(normalize__9780.call(null, d.getUTCMinutes(), 2)), cljs.core.str(":"), cljs.core.str(normalize__9780.call(null, d.getUTCSeconds(), 
  2)), cljs.core.str("."), cljs.core.str(normalize__9780.call(null, d.getUTCMilliseconds(), 3)), cljs.core.str("-"), cljs.core.str('00:00"')].join(""))
};
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  var pr_pair__9781 = function(keyval) {
    return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "", " ", "", opts, keyval)
  };
  return cljs.core.pr_sequential.call(null, pr_pair__9781, "{", ", ", "}", opts, coll)
};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(coll, opts) {
  return cljs.core.pr_sequential.call(null, cljs.core.pr_seq, "(", " ", ")", opts, coll)
};
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = function(x, y) {
  return cljs.core.compare_indexed.call(null, x, y)
};
cljs.core.Atom = function(state, meta, validator, watches) {
  this.state = state;
  this.meta = meta;
  this.validator = validator;
  this.watches = watches;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 2690809856
};
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/Atom")
};
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = function(this$) {
  var this__9783 = this;
  return goog.getUid(this$)
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = function(this$, oldval, newval) {
  var this__9784 = this;
  var G__9785__9786 = cljs.core.seq.call(null, this__9784.watches);
  if(G__9785__9786) {
    var G__9788__9790 = cljs.core.first.call(null, G__9785__9786);
    var vec__9789__9791 = G__9788__9790;
    var key__9792 = cljs.core.nth.call(null, vec__9789__9791, 0, null);
    var f__9793 = cljs.core.nth.call(null, vec__9789__9791, 1, null);
    var G__9785__9794 = G__9785__9786;
    var G__9788__9795 = G__9788__9790;
    var G__9785__9796 = G__9785__9794;
    while(true) {
      var vec__9797__9798 = G__9788__9795;
      var key__9799 = cljs.core.nth.call(null, vec__9797__9798, 0, null);
      var f__9800 = cljs.core.nth.call(null, vec__9797__9798, 1, null);
      var G__9785__9801 = G__9785__9796;
      f__9800.call(null, key__9799, this$, oldval, newval);
      var temp__3974__auto____9802 = cljs.core.next.call(null, G__9785__9801);
      if(temp__3974__auto____9802) {
        var G__9785__9803 = temp__3974__auto____9802;
        var G__9810 = cljs.core.first.call(null, G__9785__9803);
        var G__9811 = G__9785__9803;
        G__9788__9795 = G__9810;
        G__9785__9796 = G__9811;
        continue
      }else {
        return null
      }
      break
    }
  }else {
    return null
  }
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = function(this$, key, f) {
  var this__9804 = this;
  return this$.watches = cljs.core.assoc.call(null, this__9804.watches, key, f)
};
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = function(this$, key) {
  var this__9805 = this;
  return this$.watches = cljs.core.dissoc.call(null, this__9805.watches, key)
};
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(a, opts) {
  var this__9806 = this;
  return cljs.core.concat.call(null, cljs.core.PersistentVector.fromArray(["#<Atom: "], true), cljs.core._pr_seq.call(null, this__9806.state, opts), ">")
};
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = function(_) {
  var this__9807 = this;
  return this__9807.meta
};
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = function(_) {
  var this__9808 = this;
  return this__9808.state
};
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(o, other) {
  var this__9809 = this;
  return o === other
};
cljs.core.Atom;
cljs.core.atom = function() {
  var atom = null;
  var atom__1 = function(x) {
    return new cljs.core.Atom(x, null, null, null)
  };
  var atom__2 = function() {
    var G__9823__delegate = function(x, p__9812) {
      var map__9818__9819 = p__9812;
      var map__9818__9820 = cljs.core.seq_QMARK_.call(null, map__9818__9819) ? cljs.core.apply.call(null, cljs.core.hash_map, map__9818__9819) : map__9818__9819;
      var validator__9821 = cljs.core._lookup.call(null, map__9818__9820, "\ufdd0'validator", null);
      var meta__9822 = cljs.core._lookup.call(null, map__9818__9820, "\ufdd0'meta", null);
      return new cljs.core.Atom(x, meta__9822, validator__9821, null)
    };
    var G__9823 = function(x, var_args) {
      var p__9812 = null;
      if(goog.isDef(var_args)) {
        p__9812 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__9823__delegate.call(this, x, p__9812)
    };
    G__9823.cljs$lang$maxFixedArity = 1;
    G__9823.cljs$lang$applyTo = function(arglist__9824) {
      var x = cljs.core.first(arglist__9824);
      var p__9812 = cljs.core.rest(arglist__9824);
      return G__9823__delegate(x, p__9812)
    };
    G__9823.cljs$lang$arity$variadic = G__9823__delegate;
    return G__9823
  }();
  atom = function(x, var_args) {
    var p__9812 = var_args;
    switch(arguments.length) {
      case 1:
        return atom__1.call(this, x);
      default:
        return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1))
    }
    throw"Invalid arity: " + arguments.length;
  };
  atom.cljs$lang$maxFixedArity = 1;
  atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
  atom.cljs$lang$arity$1 = atom__1;
  atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
  return atom
}();
cljs.core.reset_BANG_ = function reset_BANG_(a, new_value) {
  var temp__3974__auto____9828 = a.validator;
  if(cljs.core.truth_(temp__3974__auto____9828)) {
    var validate__9829 = temp__3974__auto____9828;
    if(cljs.core.truth_(validate__9829.call(null, new_value))) {
    }else {
      throw new Error([cljs.core.str("Assert failed: "), cljs.core.str("Validator rejected reference state"), cljs.core.str("\n"), cljs.core.str(cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'validate", "\ufdd1'new-value"), cljs.core.hash_map("\ufdd0'line", 6440))))].join(""));
    }
  }else {
  }
  var old_value__9830 = a.state;
  a.state = new_value;
  cljs.core._notify_watches.call(null, a, old_value__9830, new_value);
  return new_value
};
cljs.core.swap_BANG_ = function() {
  var swap_BANG_ = null;
  var swap_BANG___2 = function(a, f) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state))
  };
  var swap_BANG___3 = function(a, f, x) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x))
  };
  var swap_BANG___4 = function(a, f, x, y) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x, y))
  };
  var swap_BANG___5 = function(a, f, x, y, z) {
    return cljs.core.reset_BANG_.call(null, a, f.call(null, a.state, x, y, z))
  };
  var swap_BANG___6 = function() {
    var G__9831__delegate = function(a, f, x, y, z, more) {
      return cljs.core.reset_BANG_.call(null, a, cljs.core.apply.call(null, f, a.state, x, y, z, more))
    };
    var G__9831 = function(a, f, x, y, z, var_args) {
      var more = null;
      if(goog.isDef(var_args)) {
        more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5), 0)
      }
      return G__9831__delegate.call(this, a, f, x, y, z, more)
    };
    G__9831.cljs$lang$maxFixedArity = 5;
    G__9831.cljs$lang$applyTo = function(arglist__9832) {
      var a = cljs.core.first(arglist__9832);
      var f = cljs.core.first(cljs.core.next(arglist__9832));
      var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9832)));
      var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9832))));
      var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9832)))));
      var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9832)))));
      return G__9831__delegate(a, f, x, y, z, more)
    };
    G__9831.cljs$lang$arity$variadic = G__9831__delegate;
    return G__9831
  }();
  swap_BANG_ = function(a, f, x, y, z, var_args) {
    var more = var_args;
    switch(arguments.length) {
      case 2:
        return swap_BANG___2.call(this, a, f);
      case 3:
        return swap_BANG___3.call(this, a, f, x);
      case 4:
        return swap_BANG___4.call(this, a, f, x, y);
      case 5:
        return swap_BANG___5.call(this, a, f, x, y, z);
      default:
        return swap_BANG___6.cljs$lang$arity$variadic(a, f, x, y, z, cljs.core.array_seq(arguments, 5))
    }
    throw"Invalid arity: " + arguments.length;
  };
  swap_BANG_.cljs$lang$maxFixedArity = 5;
  swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
  swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
  swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
  swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
  swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
  swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
  return swap_BANG_
}();
cljs.core.compare_and_set_BANG_ = function compare_and_set_BANG_(a, oldval, newval) {
  if(cljs.core._EQ_.call(null, a.state, oldval)) {
    cljs.core.reset_BANG_.call(null, a, newval);
    return true
  }else {
    return false
  }
};
cljs.core.deref = function deref(o) {
  return cljs.core._deref.call(null, o)
};
cljs.core.set_validator_BANG_ = function set_validator_BANG_(iref, val) {
  return iref.validator = val
};
cljs.core.get_validator = function get_validator(iref) {
  return iref.validator
};
cljs.core.alter_meta_BANG_ = function() {
  var alter_meta_BANG___delegate = function(iref, f, args) {
    return iref.meta = cljs.core.apply.call(null, f, iref.meta, args)
  };
  var alter_meta_BANG_ = function(iref, f, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
    }
    return alter_meta_BANG___delegate.call(this, iref, f, args)
  };
  alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
  alter_meta_BANG_.cljs$lang$applyTo = function(arglist__9833) {
    var iref = cljs.core.first(arglist__9833);
    var f = cljs.core.first(cljs.core.next(arglist__9833));
    var args = cljs.core.rest(cljs.core.next(arglist__9833));
    return alter_meta_BANG___delegate(iref, f, args)
  };
  alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
  return alter_meta_BANG_
}();
cljs.core.reset_meta_BANG_ = function reset_meta_BANG_(iref, m) {
  return iref.meta = m
};
cljs.core.add_watch = function add_watch(iref, key, f) {
  return cljs.core._add_watch.call(null, iref, key, f)
};
cljs.core.remove_watch = function remove_watch(iref, key) {
  return cljs.core._remove_watch.call(null, iref, key)
};
cljs.core.gensym_counter = null;
cljs.core.gensym = function() {
  var gensym = null;
  var gensym__0 = function() {
    return gensym.call(null, "G__")
  };
  var gensym__1 = function(prefix_string) {
    if(cljs.core.gensym_counter == null) {
      cljs.core.gensym_counter = cljs.core.atom.call(null, 0)
    }else {
    }
    return cljs.core.symbol.call(null, [cljs.core.str(prefix_string), cljs.core.str(cljs.core.swap_BANG_.call(null, cljs.core.gensym_counter, cljs.core.inc))].join(""))
  };
  gensym = function(prefix_string) {
    switch(arguments.length) {
      case 0:
        return gensym__0.call(this);
      case 1:
        return gensym__1.call(this, prefix_string)
    }
    throw"Invalid arity: " + arguments.length;
  };
  gensym.cljs$lang$arity$0 = gensym__0;
  gensym.cljs$lang$arity$1 = gensym__1;
  return gensym
}();
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;
cljs.core.Delay = function(state, f) {
  this.state = state;
  this.f = f;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 1073774592
};
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/Delay")
};
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = function(d) {
  var this__9834 = this;
  return(new cljs.core.Keyword("\ufdd0'done")).call(null, cljs.core.deref.call(null, this__9834.state))
};
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = function(_) {
  var this__9835 = this;
  return(new cljs.core.Keyword("\ufdd0'value")).call(null, cljs.core.swap_BANG_.call(null, this__9835.state, function(p__9836) {
    var map__9837__9838 = p__9836;
    var map__9837__9839 = cljs.core.seq_QMARK_.call(null, map__9837__9838) ? cljs.core.apply.call(null, cljs.core.hash_map, map__9837__9838) : map__9837__9838;
    var curr_state__9840 = map__9837__9839;
    var done__9841 = cljs.core._lookup.call(null, map__9837__9839, "\ufdd0'done", null);
    if(cljs.core.truth_(done__9841)) {
      return curr_state__9840
    }else {
      return cljs.core.ObjMap.fromObject(["\ufdd0'done", "\ufdd0'value"], {"\ufdd0'done":true, "\ufdd0'value":this__9835.f.call(null)})
    }
  }))
};
cljs.core.Delay;
cljs.core.delay_QMARK_ = function delay_QMARK_(x) {
  return cljs.core.instance_QMARK_.call(null, cljs.core.Delay, x)
};
cljs.core.force = function force(x) {
  if(cljs.core.delay_QMARK_.call(null, x)) {
    return cljs.core.deref.call(null, x)
  }else {
    return x
  }
};
cljs.core.realized_QMARK_ = function realized_QMARK_(d) {
  return cljs.core._realized_QMARK_.call(null, d)
};
cljs.core.js__GT_clj = function() {
  var js__GT_clj__delegate = function(x, options) {
    var map__9862__9863 = options;
    var map__9862__9864 = cljs.core.seq_QMARK_.call(null, map__9862__9863) ? cljs.core.apply.call(null, cljs.core.hash_map, map__9862__9863) : map__9862__9863;
    var keywordize_keys__9865 = cljs.core._lookup.call(null, map__9862__9864, "\ufdd0'keywordize-keys", null);
    var keyfn__9866 = cljs.core.truth_(keywordize_keys__9865) ? cljs.core.keyword : cljs.core.str;
    var f__9881 = function thisfn(x) {
      if(cljs.core.seq_QMARK_.call(null, x)) {
        return cljs.core.doall.call(null, cljs.core.map.call(null, thisfn, x))
      }else {
        if(cljs.core.coll_QMARK_.call(null, x)) {
          return cljs.core.into.call(null, cljs.core.empty.call(null, x), cljs.core.map.call(null, thisfn, x))
        }else {
          if(cljs.core.truth_(goog.isArray(x))) {
            return cljs.core.vec.call(null, cljs.core.map.call(null, thisfn, x))
          }else {
            if(cljs.core.type.call(null, x) === Object) {
              return cljs.core.into.call(null, cljs.core.ObjMap.EMPTY, function() {
                var iter__2488__auto____9880 = function iter__9874(s__9875) {
                  return new cljs.core.LazySeq(null, false, function() {
                    var s__9875__9878 = s__9875;
                    while(true) {
                      if(cljs.core.seq.call(null, s__9875__9878)) {
                        var k__9879 = cljs.core.first.call(null, s__9875__9878);
                        return cljs.core.cons.call(null, cljs.core.PersistentVector.fromArray([keyfn__9866.call(null, k__9879), thisfn.call(null, x[k__9879])], true), iter__9874.call(null, cljs.core.rest.call(null, s__9875__9878)))
                      }else {
                        return null
                      }
                      break
                    }
                  }, null)
                };
                return iter__2488__auto____9880.call(null, cljs.core.js_keys.call(null, x))
              }())
            }else {
              if("\ufdd0'else") {
                return x
              }else {
                return null
              }
            }
          }
        }
      }
    };
    return f__9881.call(null, x)
  };
  var js__GT_clj = function(x, var_args) {
    var options = null;
    if(goog.isDef(var_args)) {
      options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return js__GT_clj__delegate.call(this, x, options)
  };
  js__GT_clj.cljs$lang$maxFixedArity = 1;
  js__GT_clj.cljs$lang$applyTo = function(arglist__9882) {
    var x = cljs.core.first(arglist__9882);
    var options = cljs.core.rest(arglist__9882);
    return js__GT_clj__delegate(x, options)
  };
  js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
  return js__GT_clj
}();
cljs.core.memoize = function memoize(f) {
  var mem__9887 = cljs.core.atom.call(null, cljs.core.ObjMap.EMPTY);
  return function() {
    var G__9891__delegate = function(args) {
      var temp__3971__auto____9888 = cljs.core._lookup.call(null, cljs.core.deref.call(null, mem__9887), args, null);
      if(cljs.core.truth_(temp__3971__auto____9888)) {
        var v__9889 = temp__3971__auto____9888;
        return v__9889
      }else {
        var ret__9890 = cljs.core.apply.call(null, f, args);
        cljs.core.swap_BANG_.call(null, mem__9887, cljs.core.assoc, args, ret__9890);
        return ret__9890
      }
    };
    var G__9891 = function(var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
      }
      return G__9891__delegate.call(this, args)
    };
    G__9891.cljs$lang$maxFixedArity = 0;
    G__9891.cljs$lang$applyTo = function(arglist__9892) {
      var args = cljs.core.seq(arglist__9892);
      return G__9891__delegate(args)
    };
    G__9891.cljs$lang$arity$variadic = G__9891__delegate;
    return G__9891
  }()
};
cljs.core.trampoline = function() {
  var trampoline = null;
  var trampoline__1 = function(f) {
    while(true) {
      var ret__9894 = f.call(null);
      if(cljs.core.fn_QMARK_.call(null, ret__9894)) {
        var G__9895 = ret__9894;
        f = G__9895;
        continue
      }else {
        return ret__9894
      }
      break
    }
  };
  var trampoline__2 = function() {
    var G__9896__delegate = function(f, args) {
      return trampoline.call(null, function() {
        return cljs.core.apply.call(null, f, args)
      })
    };
    var G__9896 = function(f, var_args) {
      var args = null;
      if(goog.isDef(var_args)) {
        args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
      }
      return G__9896__delegate.call(this, f, args)
    };
    G__9896.cljs$lang$maxFixedArity = 1;
    G__9896.cljs$lang$applyTo = function(arglist__9897) {
      var f = cljs.core.first(arglist__9897);
      var args = cljs.core.rest(arglist__9897);
      return G__9896__delegate(f, args)
    };
    G__9896.cljs$lang$arity$variadic = G__9896__delegate;
    return G__9896
  }();
  trampoline = function(f, var_args) {
    var args = var_args;
    switch(arguments.length) {
      case 1:
        return trampoline__1.call(this, f);
      default:
        return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1))
    }
    throw"Invalid arity: " + arguments.length;
  };
  trampoline.cljs$lang$maxFixedArity = 1;
  trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
  trampoline.cljs$lang$arity$1 = trampoline__1;
  trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
  return trampoline
}();
cljs.core.rand = function() {
  var rand = null;
  var rand__0 = function() {
    return rand.call(null, 1)
  };
  var rand__1 = function(n) {
    return Math.random.call(null) * n
  };
  rand = function(n) {
    switch(arguments.length) {
      case 0:
        return rand__0.call(this);
      case 1:
        return rand__1.call(this, n)
    }
    throw"Invalid arity: " + arguments.length;
  };
  rand.cljs$lang$arity$0 = rand__0;
  rand.cljs$lang$arity$1 = rand__1;
  return rand
}();
cljs.core.rand_int = function rand_int(n) {
  return Math.floor.call(null, Math.random.call(null) * n)
};
cljs.core.rand_nth = function rand_nth(coll) {
  return cljs.core.nth.call(null, coll, cljs.core.rand_int.call(null, cljs.core.count.call(null, coll)))
};
cljs.core.group_by = function group_by(f, coll) {
  return cljs.core.reduce.call(null, function(ret, x) {
    var k__9899 = f.call(null, x);
    return cljs.core.assoc.call(null, ret, k__9899, cljs.core.conj.call(null, cljs.core._lookup.call(null, ret, k__9899, cljs.core.PersistentVector.EMPTY), x))
  }, cljs.core.ObjMap.EMPTY, coll)
};
cljs.core.make_hierarchy = function make_hierarchy() {
  return cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":cljs.core.ObjMap.EMPTY, "\ufdd0'descendants":cljs.core.ObjMap.EMPTY, "\ufdd0'ancestors":cljs.core.ObjMap.EMPTY})
};
cljs.core.global_hierarchy = cljs.core.atom.call(null, cljs.core.make_hierarchy.call(null));
cljs.core.isa_QMARK_ = function() {
  var isa_QMARK_ = null;
  var isa_QMARK___2 = function(child, parent) {
    return isa_QMARK_.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), child, parent)
  };
  var isa_QMARK___3 = function(h, child, parent) {
    var or__3824__auto____9908 = cljs.core._EQ_.call(null, child, parent);
    if(or__3824__auto____9908) {
      return or__3824__auto____9908
    }else {
      var or__3824__auto____9909 = cljs.core.contains_QMARK_.call(null, (new cljs.core.Keyword("\ufdd0'ancestors")).call(null, h).call(null, child), parent);
      if(or__3824__auto____9909) {
        return or__3824__auto____9909
      }else {
        var and__3822__auto____9910 = cljs.core.vector_QMARK_.call(null, parent);
        if(and__3822__auto____9910) {
          var and__3822__auto____9911 = cljs.core.vector_QMARK_.call(null, child);
          if(and__3822__auto____9911) {
            var and__3822__auto____9912 = cljs.core.count.call(null, parent) === cljs.core.count.call(null, child);
            if(and__3822__auto____9912) {
              var ret__9913 = true;
              var i__9914 = 0;
              while(true) {
                if(function() {
                  var or__3824__auto____9915 = cljs.core.not.call(null, ret__9913);
                  if(or__3824__auto____9915) {
                    return or__3824__auto____9915
                  }else {
                    return i__9914 === cljs.core.count.call(null, parent)
                  }
                }()) {
                  return ret__9913
                }else {
                  var G__9916 = isa_QMARK_.call(null, h, child.call(null, i__9914), parent.call(null, i__9914));
                  var G__9917 = i__9914 + 1;
                  ret__9913 = G__9916;
                  i__9914 = G__9917;
                  continue
                }
                break
              }
            }else {
              return and__3822__auto____9912
            }
          }else {
            return and__3822__auto____9911
          }
        }else {
          return and__3822__auto____9910
        }
      }
    }
  };
  isa_QMARK_ = function(h, child, parent) {
    switch(arguments.length) {
      case 2:
        return isa_QMARK___2.call(this, h, child);
      case 3:
        return isa_QMARK___3.call(this, h, child, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
  isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
  return isa_QMARK_
}();
cljs.core.parents = function() {
  var parents = null;
  var parents__1 = function(tag) {
    return parents.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var parents__2 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core._lookup.call(null, (new cljs.core.Keyword("\ufdd0'parents")).call(null, h), tag, null))
  };
  parents = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return parents__1.call(this, h);
      case 2:
        return parents__2.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  parents.cljs$lang$arity$1 = parents__1;
  parents.cljs$lang$arity$2 = parents__2;
  return parents
}();
cljs.core.ancestors = function() {
  var ancestors = null;
  var ancestors__1 = function(tag) {
    return ancestors.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var ancestors__2 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core._lookup.call(null, (new cljs.core.Keyword("\ufdd0'ancestors")).call(null, h), tag, null))
  };
  ancestors = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return ancestors__1.call(this, h);
      case 2:
        return ancestors__2.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  ancestors.cljs$lang$arity$1 = ancestors__1;
  ancestors.cljs$lang$arity$2 = ancestors__2;
  return ancestors
}();
cljs.core.descendants = function() {
  var descendants = null;
  var descendants__1 = function(tag) {
    return descendants.call(null, cljs.core.deref.call(null, cljs.core.global_hierarchy), tag)
  };
  var descendants__2 = function(h, tag) {
    return cljs.core.not_empty.call(null, cljs.core._lookup.call(null, (new cljs.core.Keyword("\ufdd0'descendants")).call(null, h), tag, null))
  };
  descendants = function(h, tag) {
    switch(arguments.length) {
      case 1:
        return descendants__1.call(this, h);
      case 2:
        return descendants__2.call(this, h, tag)
    }
    throw"Invalid arity: " + arguments.length;
  };
  descendants.cljs$lang$arity$1 = descendants__1;
  descendants.cljs$lang$arity$2 = descendants__2;
  return descendants
}();
cljs.core.derive = function() {
  var derive = null;
  var derive__2 = function(tag, parent) {
    if(cljs.core.truth_(cljs.core.namespace.call(null, parent))) {
    }else {
      throw new Error([cljs.core.str("Assert failed: "), cljs.core.str(cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'namespace", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 6724))))].join(""));
    }
    cljs.core.swap_BANG_.call(null, cljs.core.global_hierarchy, derive, tag, parent);
    return null
  };
  var derive__3 = function(h, tag, parent) {
    if(cljs.core.not_EQ_.call(null, tag, parent)) {
    }else {
      throw new Error([cljs.core.str("Assert failed: "), cljs.core.str(cljs.core.pr_str.call(null, cljs.core.with_meta(cljs.core.list("\ufdd1'not=", "\ufdd1'tag", "\ufdd1'parent"), cljs.core.hash_map("\ufdd0'line", 6728))))].join(""));
    }
    var tp__9926 = (new cljs.core.Keyword("\ufdd0'parents")).call(null, h);
    var td__9927 = (new cljs.core.Keyword("\ufdd0'descendants")).call(null, h);
    var ta__9928 = (new cljs.core.Keyword("\ufdd0'ancestors")).call(null, h);
    var tf__9929 = function(m, source, sources, target, targets) {
      return cljs.core.reduce.call(null, function(ret, k) {
        return cljs.core.assoc.call(null, ret, k, cljs.core.reduce.call(null, cljs.core.conj, cljs.core._lookup.call(null, targets, k, cljs.core.PersistentHashSet.EMPTY), cljs.core.cons.call(null, target, targets.call(null, target))))
      }, m, cljs.core.cons.call(null, source, sources.call(null, source)))
    };
    var or__3824__auto____9930 = cljs.core.contains_QMARK_.call(null, tp__9926.call(null, tag), parent) ? null : function() {
      if(cljs.core.contains_QMARK_.call(null, ta__9928.call(null, tag), parent)) {
        throw new Error([cljs.core.str(tag), cljs.core.str("already has"), cljs.core.str(parent), cljs.core.str("as ancestor")].join(""));
      }else {
      }
      if(cljs.core.contains_QMARK_.call(null, ta__9928.call(null, parent), tag)) {
        throw new Error([cljs.core.str("Cyclic derivation:"), cljs.core.str(parent), cljs.core.str("has"), cljs.core.str(tag), cljs.core.str("as ancestor")].join(""));
      }else {
      }
      return cljs.core.ObjMap.fromObject(["\ufdd0'parents", "\ufdd0'ancestors", "\ufdd0'descendants"], {"\ufdd0'parents":cljs.core.assoc.call(null, (new cljs.core.Keyword("\ufdd0'parents")).call(null, h), tag, cljs.core.conj.call(null, cljs.core._lookup.call(null, tp__9926, tag, cljs.core.PersistentHashSet.EMPTY), parent)), "\ufdd0'ancestors":tf__9929.call(null, (new cljs.core.Keyword("\ufdd0'ancestors")).call(null, h), tag, td__9927, parent, ta__9928), "\ufdd0'descendants":tf__9929.call(null, (new cljs.core.Keyword("\ufdd0'descendants")).call(null, 
      h), parent, ta__9928, tag, td__9927)})
    }();
    if(cljs.core.truth_(or__3824__auto____9930)) {
      return or__3824__auto____9930
    }else {
      return h
    }
  };
  derive = function(h, tag, parent) {
    switch(arguments.length) {
      case 2:
        return derive__2.call(this, h, tag);
      case 3:
        return derive__3.call(this, h, tag, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  derive.cljs$lang$arity$2 = derive__2;
  derive.cljs$lang$arity$3 = derive__3;
  return derive
}();
cljs.core.underive = function() {
  var underive = null;
  var underive__2 = function(tag, parent) {
    cljs.core.swap_BANG_.call(null, cljs.core.global_hierarchy, underive, tag, parent);
    return null
  };
  var underive__3 = function(h, tag, parent) {
    var parentMap__9935 = (new cljs.core.Keyword("\ufdd0'parents")).call(null, h);
    var childsParents__9936 = cljs.core.truth_(parentMap__9935.call(null, tag)) ? cljs.core.disj.call(null, parentMap__9935.call(null, tag), parent) : cljs.core.PersistentHashSet.EMPTY;
    var newParents__9937 = cljs.core.truth_(cljs.core.not_empty.call(null, childsParents__9936)) ? cljs.core.assoc.call(null, parentMap__9935, tag, childsParents__9936) : cljs.core.dissoc.call(null, parentMap__9935, tag);
    var deriv_seq__9938 = cljs.core.flatten.call(null, cljs.core.map.call(null, function(p1__9918_SHARP_) {
      return cljs.core.cons.call(null, cljs.core.first.call(null, p1__9918_SHARP_), cljs.core.interpose.call(null, cljs.core.first.call(null, p1__9918_SHARP_), cljs.core.second.call(null, p1__9918_SHARP_)))
    }, cljs.core.seq.call(null, newParents__9937)));
    if(cljs.core.contains_QMARK_.call(null, parentMap__9935.call(null, tag), parent)) {
      return cljs.core.reduce.call(null, function(p1__9919_SHARP_, p2__9920_SHARP_) {
        return cljs.core.apply.call(null, cljs.core.derive, p1__9919_SHARP_, p2__9920_SHARP_)
      }, cljs.core.make_hierarchy.call(null), cljs.core.partition.call(null, 2, deriv_seq__9938))
    }else {
      return h
    }
  };
  underive = function(h, tag, parent) {
    switch(arguments.length) {
      case 2:
        return underive__2.call(this, h, tag);
      case 3:
        return underive__3.call(this, h, tag, parent)
    }
    throw"Invalid arity: " + arguments.length;
  };
  underive.cljs$lang$arity$2 = underive__2;
  underive.cljs$lang$arity$3 = underive__3;
  return underive
}();
cljs.core.reset_cache = function reset_cache(method_cache, method_table, cached_hierarchy, hierarchy) {
  cljs.core.swap_BANG_.call(null, method_cache, function(_) {
    return cljs.core.deref.call(null, method_table)
  });
  return cljs.core.swap_BANG_.call(null, cached_hierarchy, function(_) {
    return cljs.core.deref.call(null, hierarchy)
  })
};
cljs.core.prefers_STAR_ = function prefers_STAR_(x, y, prefer_table) {
  var xprefs__9946 = cljs.core.deref.call(null, prefer_table).call(null, x);
  var or__3824__auto____9948 = cljs.core.truth_(function() {
    var and__3822__auto____9947 = xprefs__9946;
    if(cljs.core.truth_(and__3822__auto____9947)) {
      return xprefs__9946.call(null, y)
    }else {
      return and__3822__auto____9947
    }
  }()) ? true : null;
  if(cljs.core.truth_(or__3824__auto____9948)) {
    return or__3824__auto____9948
  }else {
    var or__3824__auto____9950 = function() {
      var ps__9949 = cljs.core.parents.call(null, y);
      while(true) {
        if(cljs.core.count.call(null, ps__9949) > 0) {
          if(cljs.core.truth_(prefers_STAR_.call(null, x, cljs.core.first.call(null, ps__9949), prefer_table))) {
          }else {
          }
          var G__9953 = cljs.core.rest.call(null, ps__9949);
          ps__9949 = G__9953;
          continue
        }else {
          return null
        }
        break
      }
    }();
    if(cljs.core.truth_(or__3824__auto____9950)) {
      return or__3824__auto____9950
    }else {
      var or__3824__auto____9952 = function() {
        var ps__9951 = cljs.core.parents.call(null, x);
        while(true) {
          if(cljs.core.count.call(null, ps__9951) > 0) {
            if(cljs.core.truth_(prefers_STAR_.call(null, cljs.core.first.call(null, ps__9951), y, prefer_table))) {
            }else {
            }
            var G__9954 = cljs.core.rest.call(null, ps__9951);
            ps__9951 = G__9954;
            continue
          }else {
            return null
          }
          break
        }
      }();
      if(cljs.core.truth_(or__3824__auto____9952)) {
        return or__3824__auto____9952
      }else {
        return false
      }
    }
  }
};
cljs.core.dominates = function dominates(x, y, prefer_table) {
  var or__3824__auto____9956 = cljs.core.prefers_STAR_.call(null, x, y, prefer_table);
  if(cljs.core.truth_(or__3824__auto____9956)) {
    return or__3824__auto____9956
  }else {
    return cljs.core.isa_QMARK_.call(null, x, y)
  }
};
cljs.core.find_and_cache_best_method = function find_and_cache_best_method(name, dispatch_val, hierarchy, method_table, prefer_table, method_cache, cached_hierarchy) {
  var best_entry__9974 = cljs.core.reduce.call(null, function(be, p__9966) {
    var vec__9967__9968 = p__9966;
    var k__9969 = cljs.core.nth.call(null, vec__9967__9968, 0, null);
    var ___9970 = cljs.core.nth.call(null, vec__9967__9968, 1, null);
    var e__9971 = vec__9967__9968;
    if(cljs.core.isa_QMARK_.call(null, dispatch_val, k__9969)) {
      var be2__9973 = cljs.core.truth_(function() {
        var or__3824__auto____9972 = be == null;
        if(or__3824__auto____9972) {
          return or__3824__auto____9972
        }else {
          return cljs.core.dominates.call(null, k__9969, cljs.core.first.call(null, be), prefer_table)
        }
      }()) ? e__9971 : be;
      if(cljs.core.truth_(cljs.core.dominates.call(null, cljs.core.first.call(null, be2__9973), k__9969, prefer_table))) {
      }else {
        throw new Error([cljs.core.str("Multiple methods in multimethod '"), cljs.core.str(name), cljs.core.str("' match dispatch value: "), cljs.core.str(dispatch_val), cljs.core.str(" -> "), cljs.core.str(k__9969), cljs.core.str(" and "), cljs.core.str(cljs.core.first.call(null, be2__9973)), cljs.core.str(", and neither is preferred")].join(""));
      }
      return be2__9973
    }else {
      return be
    }
  }, null, cljs.core.deref.call(null, method_table));
  if(cljs.core.truth_(best_entry__9974)) {
    if(cljs.core._EQ_.call(null, cljs.core.deref.call(null, cached_hierarchy), cljs.core.deref.call(null, hierarchy))) {
      cljs.core.swap_BANG_.call(null, method_cache, cljs.core.assoc, dispatch_val, cljs.core.second.call(null, best_entry__9974));
      return cljs.core.second.call(null, best_entry__9974)
    }else {
      cljs.core.reset_cache.call(null, method_cache, method_table, cached_hierarchy, hierarchy);
      return find_and_cache_best_method.call(null, name, dispatch_val, hierarchy, method_table, prefer_table, method_cache, cached_hierarchy)
    }
  }else {
    return null
  }
};
cljs.core.IMultiFn = {};
cljs.core._reset = function _reset(mf) {
  if(function() {
    var and__3822__auto____9979 = mf;
    if(and__3822__auto____9979) {
      return mf.cljs$core$IMultiFn$_reset$arity$1
    }else {
      return and__3822__auto____9979
    }
  }()) {
    return mf.cljs$core$IMultiFn$_reset$arity$1(mf)
  }else {
    var x__2389__auto____9980 = mf == null ? null : mf;
    return function() {
      var or__3824__auto____9981 = cljs.core._reset[goog.typeOf(x__2389__auto____9980)];
      if(or__3824__auto____9981) {
        return or__3824__auto____9981
      }else {
        var or__3824__auto____9982 = cljs.core._reset["_"];
        if(or__3824__auto____9982) {
          return or__3824__auto____9982
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-reset", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._add_method = function _add_method(mf, dispatch_val, method) {
  if(function() {
    var and__3822__auto____9987 = mf;
    if(and__3822__auto____9987) {
      return mf.cljs$core$IMultiFn$_add_method$arity$3
    }else {
      return and__3822__auto____9987
    }
  }()) {
    return mf.cljs$core$IMultiFn$_add_method$arity$3(mf, dispatch_val, method)
  }else {
    var x__2389__auto____9988 = mf == null ? null : mf;
    return function() {
      var or__3824__auto____9989 = cljs.core._add_method[goog.typeOf(x__2389__auto____9988)];
      if(or__3824__auto____9989) {
        return or__3824__auto____9989
      }else {
        var or__3824__auto____9990 = cljs.core._add_method["_"];
        if(or__3824__auto____9990) {
          return or__3824__auto____9990
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-add-method", mf);
        }
      }
    }().call(null, mf, dispatch_val, method)
  }
};
cljs.core._remove_method = function _remove_method(mf, dispatch_val) {
  if(function() {
    var and__3822__auto____9995 = mf;
    if(and__3822__auto____9995) {
      return mf.cljs$core$IMultiFn$_remove_method$arity$2
    }else {
      return and__3822__auto____9995
    }
  }()) {
    return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf, dispatch_val)
  }else {
    var x__2389__auto____9996 = mf == null ? null : mf;
    return function() {
      var or__3824__auto____9997 = cljs.core._remove_method[goog.typeOf(x__2389__auto____9996)];
      if(or__3824__auto____9997) {
        return or__3824__auto____9997
      }else {
        var or__3824__auto____9998 = cljs.core._remove_method["_"];
        if(or__3824__auto____9998) {
          return or__3824__auto____9998
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-remove-method", mf);
        }
      }
    }().call(null, mf, dispatch_val)
  }
};
cljs.core._prefer_method = function _prefer_method(mf, dispatch_val, dispatch_val_y) {
  if(function() {
    var and__3822__auto____10003 = mf;
    if(and__3822__auto____10003) {
      return mf.cljs$core$IMultiFn$_prefer_method$arity$3
    }else {
      return and__3822__auto____10003
    }
  }()) {
    return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf, dispatch_val, dispatch_val_y)
  }else {
    var x__2389__auto____10004 = mf == null ? null : mf;
    return function() {
      var or__3824__auto____10005 = cljs.core._prefer_method[goog.typeOf(x__2389__auto____10004)];
      if(or__3824__auto____10005) {
        return or__3824__auto____10005
      }else {
        var or__3824__auto____10006 = cljs.core._prefer_method["_"];
        if(or__3824__auto____10006) {
          return or__3824__auto____10006
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-prefer-method", mf);
        }
      }
    }().call(null, mf, dispatch_val, dispatch_val_y)
  }
};
cljs.core._get_method = function _get_method(mf, dispatch_val) {
  if(function() {
    var and__3822__auto____10011 = mf;
    if(and__3822__auto____10011) {
      return mf.cljs$core$IMultiFn$_get_method$arity$2
    }else {
      return and__3822__auto____10011
    }
  }()) {
    return mf.cljs$core$IMultiFn$_get_method$arity$2(mf, dispatch_val)
  }else {
    var x__2389__auto____10012 = mf == null ? null : mf;
    return function() {
      var or__3824__auto____10013 = cljs.core._get_method[goog.typeOf(x__2389__auto____10012)];
      if(or__3824__auto____10013) {
        return or__3824__auto____10013
      }else {
        var or__3824__auto____10014 = cljs.core._get_method["_"];
        if(or__3824__auto____10014) {
          return or__3824__auto____10014
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-get-method", mf);
        }
      }
    }().call(null, mf, dispatch_val)
  }
};
cljs.core._methods = function _methods(mf) {
  if(function() {
    var and__3822__auto____10019 = mf;
    if(and__3822__auto____10019) {
      return mf.cljs$core$IMultiFn$_methods$arity$1
    }else {
      return and__3822__auto____10019
    }
  }()) {
    return mf.cljs$core$IMultiFn$_methods$arity$1(mf)
  }else {
    var x__2389__auto____10020 = mf == null ? null : mf;
    return function() {
      var or__3824__auto____10021 = cljs.core._methods[goog.typeOf(x__2389__auto____10020)];
      if(or__3824__auto____10021) {
        return or__3824__auto____10021
      }else {
        var or__3824__auto____10022 = cljs.core._methods["_"];
        if(or__3824__auto____10022) {
          return or__3824__auto____10022
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-methods", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._prefers = function _prefers(mf) {
  if(function() {
    var and__3822__auto____10027 = mf;
    if(and__3822__auto____10027) {
      return mf.cljs$core$IMultiFn$_prefers$arity$1
    }else {
      return and__3822__auto____10027
    }
  }()) {
    return mf.cljs$core$IMultiFn$_prefers$arity$1(mf)
  }else {
    var x__2389__auto____10028 = mf == null ? null : mf;
    return function() {
      var or__3824__auto____10029 = cljs.core._prefers[goog.typeOf(x__2389__auto____10028)];
      if(or__3824__auto____10029) {
        return or__3824__auto____10029
      }else {
        var or__3824__auto____10030 = cljs.core._prefers["_"];
        if(or__3824__auto____10030) {
          return or__3824__auto____10030
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-prefers", mf);
        }
      }
    }().call(null, mf)
  }
};
cljs.core._dispatch = function _dispatch(mf, args) {
  if(function() {
    var and__3822__auto____10035 = mf;
    if(and__3822__auto____10035) {
      return mf.cljs$core$IMultiFn$_dispatch$arity$2
    }else {
      return and__3822__auto____10035
    }
  }()) {
    return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf, args)
  }else {
    var x__2389__auto____10036 = mf == null ? null : mf;
    return function() {
      var or__3824__auto____10037 = cljs.core._dispatch[goog.typeOf(x__2389__auto____10036)];
      if(or__3824__auto____10037) {
        return or__3824__auto____10037
      }else {
        var or__3824__auto____10038 = cljs.core._dispatch["_"];
        if(or__3824__auto____10038) {
          return or__3824__auto____10038
        }else {
          throw cljs.core.missing_protocol.call(null, "IMultiFn.-dispatch", mf);
        }
      }
    }().call(null, mf, args)
  }
};
cljs.core.do_dispatch = function do_dispatch(mf, dispatch_fn, args) {
  var dispatch_val__10041 = cljs.core.apply.call(null, dispatch_fn, args);
  var target_fn__10042 = cljs.core._get_method.call(null, mf, dispatch_val__10041);
  if(cljs.core.truth_(target_fn__10042)) {
  }else {
    throw new Error([cljs.core.str("No method in multimethod '"), cljs.core.str(cljs.core.name), cljs.core.str("' for dispatch value: "), cljs.core.str(dispatch_val__10041)].join(""));
  }
  return cljs.core.apply.call(null, target_fn__10042, args)
};
cljs.core.MultiFn = function(name, dispatch_fn, default_dispatch_val, hierarchy, method_table, prefer_table, method_cache, cached_hierarchy) {
  this.name = name;
  this.dispatch_fn = dispatch_fn;
  this.default_dispatch_val = default_dispatch_val;
  this.hierarchy = hierarchy;
  this.method_table = method_table;
  this.prefer_table = prefer_table;
  this.method_cache = method_cache;
  this.cached_hierarchy = cached_hierarchy;
  this.cljs$lang$protocol_mask$partition0$ = 4194304;
  this.cljs$lang$protocol_mask$partition1$ = 64
};
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/MultiFn")
};
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = function(this$) {
  var this__10043 = this;
  return goog.getUid(this$)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = function(mf) {
  var this__10044 = this;
  cljs.core.swap_BANG_.call(null, this__10044.method_table, function(mf) {
    return cljs.core.ObjMap.EMPTY
  });
  cljs.core.swap_BANG_.call(null, this__10044.method_cache, function(mf) {
    return cljs.core.ObjMap.EMPTY
  });
  cljs.core.swap_BANG_.call(null, this__10044.prefer_table, function(mf) {
    return cljs.core.ObjMap.EMPTY
  });
  cljs.core.swap_BANG_.call(null, this__10044.cached_hierarchy, function(mf) {
    return null
  });
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = function(mf, dispatch_val, method) {
  var this__10045 = this;
  cljs.core.swap_BANG_.call(null, this__10045.method_table, cljs.core.assoc, dispatch_val, method);
  cljs.core.reset_cache.call(null, this__10045.method_cache, this__10045.method_table, this__10045.cached_hierarchy, this__10045.hierarchy);
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = function(mf, dispatch_val) {
  var this__10046 = this;
  cljs.core.swap_BANG_.call(null, this__10046.method_table, cljs.core.dissoc, dispatch_val);
  cljs.core.reset_cache.call(null, this__10046.method_cache, this__10046.method_table, this__10046.cached_hierarchy, this__10046.hierarchy);
  return mf
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = function(mf, dispatch_val) {
  var this__10047 = this;
  if(cljs.core._EQ_.call(null, cljs.core.deref.call(null, this__10047.cached_hierarchy), cljs.core.deref.call(null, this__10047.hierarchy))) {
  }else {
    cljs.core.reset_cache.call(null, this__10047.method_cache, this__10047.method_table, this__10047.cached_hierarchy, this__10047.hierarchy)
  }
  var temp__3971__auto____10048 = cljs.core.deref.call(null, this__10047.method_cache).call(null, dispatch_val);
  if(cljs.core.truth_(temp__3971__auto____10048)) {
    var target_fn__10049 = temp__3971__auto____10048;
    return target_fn__10049
  }else {
    var temp__3971__auto____10050 = cljs.core.find_and_cache_best_method.call(null, this__10047.name, dispatch_val, this__10047.hierarchy, this__10047.method_table, this__10047.prefer_table, this__10047.method_cache, this__10047.cached_hierarchy);
    if(cljs.core.truth_(temp__3971__auto____10050)) {
      var target_fn__10051 = temp__3971__auto____10050;
      return target_fn__10051
    }else {
      return cljs.core.deref.call(null, this__10047.method_table).call(null, this__10047.default_dispatch_val)
    }
  }
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = function(mf, dispatch_val_x, dispatch_val_y) {
  var this__10052 = this;
  if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null, dispatch_val_x, dispatch_val_y, this__10052.prefer_table))) {
    throw new Error([cljs.core.str("Preference conflict in multimethod '"), cljs.core.str(this__10052.name), cljs.core.str("': "), cljs.core.str(dispatch_val_y), cljs.core.str(" is already preferred to "), cljs.core.str(dispatch_val_x)].join(""));
  }else {
  }
  cljs.core.swap_BANG_.call(null, this__10052.prefer_table, function(old) {
    return cljs.core.assoc.call(null, old, dispatch_val_x, cljs.core.conj.call(null, cljs.core._lookup.call(null, old, dispatch_val_x, cljs.core.PersistentHashSet.EMPTY), dispatch_val_y))
  });
  return cljs.core.reset_cache.call(null, this__10052.method_cache, this__10052.method_table, this__10052.cached_hierarchy, this__10052.hierarchy)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = function(mf) {
  var this__10053 = this;
  return cljs.core.deref.call(null, this__10053.method_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = function(mf) {
  var this__10054 = this;
  return cljs.core.deref.call(null, this__10054.prefer_table)
};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = function(mf, args) {
  var this__10055 = this;
  return cljs.core.do_dispatch.call(null, mf, this__10055.dispatch_fn, args)
};
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = function() {
  var G__10057__delegate = function(_, args) {
    var self__10056 = this;
    return cljs.core._dispatch.call(null, self__10056, args)
  };
  var G__10057 = function(_, var_args) {
    var args = null;
    if(goog.isDef(var_args)) {
      args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1), 0)
    }
    return G__10057__delegate.call(this, _, args)
  };
  G__10057.cljs$lang$maxFixedArity = 1;
  G__10057.cljs$lang$applyTo = function(arglist__10058) {
    var _ = cljs.core.first(arglist__10058);
    var args = cljs.core.rest(arglist__10058);
    return G__10057__delegate(_, args)
  };
  G__10057.cljs$lang$arity$variadic = G__10057__delegate;
  return G__10057
}();
cljs.core.MultiFn.prototype.apply = function(_, args) {
  var self__10059 = this;
  return cljs.core._dispatch.call(null, self__10059, args)
};
cljs.core.remove_all_methods = function remove_all_methods(multifn) {
  return cljs.core._reset.call(null, multifn)
};
cljs.core.remove_method = function remove_method(multifn, dispatch_val) {
  return cljs.core._remove_method.call(null, multifn, dispatch_val)
};
cljs.core.prefer_method = function prefer_method(multifn, dispatch_val_x, dispatch_val_y) {
  return cljs.core._prefer_method.call(null, multifn, dispatch_val_x, dispatch_val_y)
};
cljs.core.methods$ = function methods$(multifn) {
  return cljs.core._methods.call(null, multifn)
};
cljs.core.get_method = function get_method(multifn, dispatch_val) {
  return cljs.core._get_method.call(null, multifn, dispatch_val)
};
cljs.core.prefers = function prefers(multifn) {
  return cljs.core._prefers.call(null, multifn)
};
cljs.core.UUID = function(uuid) {
  this.uuid = uuid;
  this.cljs$lang$protocol_mask$partition1$ = 0;
  this.cljs$lang$protocol_mask$partition0$ = 543162368
};
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
  return cljs.core.list.call(null, "cljs.core/UUID")
};
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = function(this$) {
  var this__10060 = this;
  return goog.string.hashCode(cljs.core.pr_str.call(null, this$))
};
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = function(_10062, _) {
  var this__10061 = this;
  return cljs.core.list.call(null, [cljs.core.str('#uuid "'), cljs.core.str(this__10061.uuid), cljs.core.str('"')].join(""))
};
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = function(_, other) {
  var this__10063 = this;
  var and__3822__auto____10064 = cljs.core.instance_QMARK_.call(null, cljs.core.UUID, other);
  if(and__3822__auto____10064) {
    return this__10063.uuid === other.uuid
  }else {
    return and__3822__auto____10064
  }
};
cljs.core.UUID.prototype.toString = function() {
  var this__10065 = this;
  var this__10066 = this;
  return cljs.core.pr_str.call(null, this__10066)
};
cljs.core.UUID;
goog.provide("goog.userAgent");
goog.require("goog.string");
goog.userAgent.ASSUME_IE = false;
goog.userAgent.ASSUME_GECKO = false;
goog.userAgent.ASSUME_WEBKIT = false;
goog.userAgent.ASSUME_MOBILE_WEBKIT = false;
goog.userAgent.ASSUME_OPERA = false;
goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
goog.userAgent.getUserAgentString = function() {
  return goog.global["navigator"] ? goog.global["navigator"].userAgent : null
};
goog.userAgent.getNavigator = function() {
  return goog.global["navigator"]
};
goog.userAgent.init_ = function() {
  goog.userAgent.detectedOpera_ = false;
  goog.userAgent.detectedIe_ = false;
  goog.userAgent.detectedWebkit_ = false;
  goog.userAgent.detectedMobile_ = false;
  goog.userAgent.detectedGecko_ = false;
  var ua;
  if(!goog.userAgent.BROWSER_KNOWN_ && (ua = goog.userAgent.getUserAgentString())) {
    var navigator = goog.userAgent.getNavigator();
    goog.userAgent.detectedOpera_ = ua.indexOf("Opera") == 0;
    goog.userAgent.detectedIe_ = !goog.userAgent.detectedOpera_ && ua.indexOf("MSIE") != -1;
    goog.userAgent.detectedWebkit_ = !goog.userAgent.detectedOpera_ && ua.indexOf("WebKit") != -1;
    goog.userAgent.detectedMobile_ = goog.userAgent.detectedWebkit_ && ua.indexOf("Mobile") != -1;
    goog.userAgent.detectedGecko_ = !goog.userAgent.detectedOpera_ && !goog.userAgent.detectedWebkit_ && navigator.product == "Gecko"
  }
};
if(!goog.userAgent.BROWSER_KNOWN_) {
  goog.userAgent.init_()
}
goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.userAgent.detectedOpera_;
goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.userAgent.detectedIe_;
goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.userAgent.detectedGecko_;
goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.userAgent.detectedWebkit_;
goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.detectedMobile_;
goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
goog.userAgent.determinePlatform_ = function() {
  var navigator = goog.userAgent.getNavigator();
  return navigator && navigator.platform || ""
};
goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
goog.userAgent.ASSUME_MAC = false;
goog.userAgent.ASSUME_WINDOWS = false;
goog.userAgent.ASSUME_LINUX = false;
goog.userAgent.ASSUME_X11 = false;
goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11;
goog.userAgent.initPlatform_ = function() {
  goog.userAgent.detectedMac_ = goog.string.contains(goog.userAgent.PLATFORM, "Mac");
  goog.userAgent.detectedWindows_ = goog.string.contains(goog.userAgent.PLATFORM, "Win");
  goog.userAgent.detectedLinux_ = goog.string.contains(goog.userAgent.PLATFORM, "Linux");
  goog.userAgent.detectedX11_ = !!goog.userAgent.getNavigator() && goog.string.contains(goog.userAgent.getNavigator()["appVersion"] || "", "X11")
};
if(!goog.userAgent.PLATFORM_KNOWN_) {
  goog.userAgent.initPlatform_()
}
goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.userAgent.detectedMac_;
goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.userAgent.detectedWindows_;
goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.detectedLinux_;
goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.detectedX11_;
goog.userAgent.determineVersion_ = function() {
  var version = "", re;
  if(goog.userAgent.OPERA && goog.global["opera"]) {
    var operaVersion = goog.global["opera"].version;
    version = typeof operaVersion == "function" ? operaVersion() : operaVersion
  }else {
    if(goog.userAgent.GECKO) {
      re = /rv\:([^\);]+)(\)|;)/
    }else {
      if(goog.userAgent.IE) {
        re = /MSIE\s+([^\);]+)(\)|;)/
      }else {
        if(goog.userAgent.WEBKIT) {
          re = /WebKit\/(\S+)/
        }
      }
    }
    if(re) {
      var arr = re.exec(goog.userAgent.getUserAgentString());
      version = arr ? arr[1] : ""
    }
  }
  if(goog.userAgent.IE) {
    var docMode = goog.userAgent.getDocumentMode_();
    if(docMode > parseFloat(version)) {
      return String(docMode)
    }
  }
  return version
};
goog.userAgent.getDocumentMode_ = function() {
  var doc = goog.global["document"];
  return doc ? doc["documentMode"] : undefined
};
goog.userAgent.VERSION = goog.userAgent.determineVersion_();
goog.userAgent.compare = function(v1, v2) {
  return goog.string.compareVersions(v1, v2)
};
goog.userAgent.isVersionCache_ = {};
goog.userAgent.isVersion = function(version) {
  return goog.userAgent.isVersionCache_[version] || (goog.userAgent.isVersionCache_[version] = goog.string.compareVersions(goog.userAgent.VERSION, version) >= 0)
};
goog.provide("goog.events.EventType");
goog.require("goog.userAgent");
goog.events.EventType = {CLICK:"click", DBLCLICK:"dblclick", MOUSEDOWN:"mousedown", MOUSEUP:"mouseup", MOUSEOVER:"mouseover", MOUSEOUT:"mouseout", MOUSEMOVE:"mousemove", SELECTSTART:"selectstart", KEYPRESS:"keypress", KEYDOWN:"keydown", KEYUP:"keyup", BLUR:"blur", FOCUS:"focus", DEACTIVATE:"deactivate", FOCUSIN:goog.userAgent.IE ? "focusin" : "DOMFocusIn", FOCUSOUT:goog.userAgent.IE ? "focusout" : "DOMFocusOut", CHANGE:"change", SELECT:"select", SUBMIT:"submit", INPUT:"input", PROPERTYCHANGE:"propertychange", 
DRAGSTART:"dragstart", DRAGENTER:"dragenter", DRAGOVER:"dragover", DRAGLEAVE:"dragleave", DROP:"drop", TOUCHSTART:"touchstart", TOUCHMOVE:"touchmove", TOUCHEND:"touchend", TOUCHCANCEL:"touchcancel", CONTEXTMENU:"contextmenu", ERROR:"error", HELP:"help", LOAD:"load", LOSECAPTURE:"losecapture", READYSTATECHANGE:"readystatechange", RESIZE:"resize", SCROLL:"scroll", UNLOAD:"unload", HASHCHANGE:"hashchange", PAGEHIDE:"pagehide", PAGESHOW:"pageshow", POPSTATE:"popstate", COPY:"copy", PASTE:"paste", CUT:"cut", 
MESSAGE:"message", CONNECT:"connect"};
goog.provide("goog.disposable.IDisposable");
goog.disposable.IDisposable = function() {
};
goog.disposable.IDisposable.prototype.dispose;
goog.disposable.IDisposable.prototype.isDisposed;
goog.provide("goog.Disposable");
goog.provide("goog.dispose");
goog.require("goog.disposable.IDisposable");
goog.Disposable = function() {
  if(goog.Disposable.ENABLE_MONITORING) {
    goog.Disposable.instances_[goog.getUid(this)] = this
  }
};
goog.Disposable.ENABLE_MONITORING = false;
goog.Disposable.instances_ = {};
goog.Disposable.getUndisposedObjects = function() {
  var ret = [];
  for(var id in goog.Disposable.instances_) {
    if(goog.Disposable.instances_.hasOwnProperty(id)) {
      ret.push(goog.Disposable.instances_[Number(id)])
    }
  }
  return ret
};
goog.Disposable.clearUndisposedObjects = function() {
  goog.Disposable.instances_ = {}
};
goog.Disposable.prototype.disposed_ = false;
goog.Disposable.prototype.isDisposed = function() {
  return this.disposed_
};
goog.Disposable.prototype.getDisposed = goog.Disposable.prototype.isDisposed;
goog.Disposable.prototype.dispose = function() {
  if(!this.disposed_) {
    this.disposed_ = true;
    this.disposeInternal();
    if(goog.Disposable.ENABLE_MONITORING) {
      var uid = goog.getUid(this);
      if(!goog.Disposable.instances_.hasOwnProperty(uid)) {
        throw Error(this + " did not call the goog.Disposable base " + "constructor or was disposed of after a clearUndisposedObjects " + "call");
      }
      delete goog.Disposable.instances_[uid]
    }
  }
};
goog.Disposable.prototype.disposeInternal = function() {
};
goog.dispose = function(obj) {
  if(obj && typeof obj.dispose == "function") {
    obj.dispose()
  }
};
goog.provide("goog.debug.EntryPointMonitor");
goog.provide("goog.debug.entryPointRegistry");
goog.debug.EntryPointMonitor = function() {
};
goog.debug.EntryPointMonitor.prototype.wrap;
goog.debug.EntryPointMonitor.prototype.unwrap;
goog.debug.entryPointRegistry.refList_ = [];
goog.debug.entryPointRegistry.register = function(callback) {
  goog.debug.entryPointRegistry.refList_[goog.debug.entryPointRegistry.refList_.length] = callback
};
goog.debug.entryPointRegistry.monitorAll = function(monitor) {
  var transformer = goog.bind(monitor.wrap, monitor);
  for(var i = 0;i < goog.debug.entryPointRegistry.refList_.length;i++) {
    goog.debug.entryPointRegistry.refList_[i](transformer)
  }
};
goog.debug.entryPointRegistry.unmonitorAllIfPossible = function(monitor) {
  var transformer = goog.bind(monitor.unwrap, monitor);
  for(var i = 0;i < goog.debug.entryPointRegistry.refList_.length;i++) {
    goog.debug.entryPointRegistry.refList_[i](transformer)
  }
};
goog.provide("goog.debug.errorHandlerWeakDep");
goog.debug.errorHandlerWeakDep = {protectEntryPoint:function(fn, opt_tracers) {
  return fn
}};
goog.provide("goog.events.BrowserFeature");
goog.require("goog.userAgent");
goog.events.BrowserFeature = {HAS_W3C_BUTTON:!goog.userAgent.IE || goog.userAgent.isVersion("9"), SET_KEY_CODE_TO_PREVENT_DEFAULT:goog.userAgent.IE && !goog.userAgent.isVersion("8")};
goog.provide("goog.events.Event");
goog.require("goog.Disposable");
goog.events.Event = function(type, opt_target) {
  goog.Disposable.call(this);
  this.type = type;
  this.target = opt_target;
  this.currentTarget = this.target
};
goog.inherits(goog.events.Event, goog.Disposable);
goog.events.Event.prototype.disposeInternal = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
goog.events.Event.prototype.propagationStopped_ = false;
goog.events.Event.prototype.returnValue_ = true;
goog.events.Event.prototype.stopPropagation = function() {
  this.propagationStopped_ = true
};
goog.events.Event.prototype.preventDefault = function() {
  this.returnValue_ = false
};
goog.events.Event.stopPropagation = function(e) {
  e.stopPropagation()
};
goog.events.Event.preventDefault = function(e) {
  e.preventDefault()
};
goog.provide("goog.reflect");
goog.reflect.object = function(type, object) {
  return object
};
goog.reflect.sinkValue = new Function("a", "return a");
goog.provide("goog.events.BrowserEvent");
goog.provide("goog.events.BrowserEvent.MouseButton");
goog.require("goog.events.BrowserFeature");
goog.require("goog.events.Event");
goog.require("goog.events.EventType");
goog.require("goog.reflect");
goog.require("goog.userAgent");
goog.events.BrowserEvent = function(opt_e, opt_currentTarget) {
  if(opt_e) {
    this.init(opt_e, opt_currentTarget)
  }
};
goog.inherits(goog.events.BrowserEvent, goog.events.Event);
goog.events.BrowserEvent.MouseButton = {LEFT:0, MIDDLE:1, RIGHT:2};
goog.events.BrowserEvent.IEButtonMap = [1, 4, 2];
goog.events.BrowserEvent.prototype.target = null;
goog.events.BrowserEvent.prototype.currentTarget;
goog.events.BrowserEvent.prototype.relatedTarget = null;
goog.events.BrowserEvent.prototype.offsetX = 0;
goog.events.BrowserEvent.prototype.offsetY = 0;
goog.events.BrowserEvent.prototype.clientX = 0;
goog.events.BrowserEvent.prototype.clientY = 0;
goog.events.BrowserEvent.prototype.screenX = 0;
goog.events.BrowserEvent.prototype.screenY = 0;
goog.events.BrowserEvent.prototype.button = 0;
goog.events.BrowserEvent.prototype.keyCode = 0;
goog.events.BrowserEvent.prototype.charCode = 0;
goog.events.BrowserEvent.prototype.ctrlKey = false;
goog.events.BrowserEvent.prototype.altKey = false;
goog.events.BrowserEvent.prototype.shiftKey = false;
goog.events.BrowserEvent.prototype.metaKey = false;
goog.events.BrowserEvent.prototype.state;
goog.events.BrowserEvent.prototype.platformModifierKey = false;
goog.events.BrowserEvent.prototype.event_ = null;
goog.events.BrowserEvent.prototype.init = function(e, opt_currentTarget) {
  var type = this.type = e.type;
  goog.events.Event.call(this, type);
  this.target = e.target || e.srcElement;
  this.currentTarget = opt_currentTarget;
  var relatedTarget = e.relatedTarget;
  if(relatedTarget) {
    if(goog.userAgent.GECKO) {
      try {
        goog.reflect.sinkValue(relatedTarget.nodeName)
      }catch(err) {
        relatedTarget = null
      }
    }
  }else {
    if(type == goog.events.EventType.MOUSEOVER) {
      relatedTarget = e.fromElement
    }else {
      if(type == goog.events.EventType.MOUSEOUT) {
        relatedTarget = e.toElement
      }
    }
  }
  this.relatedTarget = relatedTarget;
  this.offsetX = e.offsetX !== undefined ? e.offsetX : e.layerX;
  this.offsetY = e.offsetY !== undefined ? e.offsetY : e.layerY;
  this.clientX = e.clientX !== undefined ? e.clientX : e.pageX;
  this.clientY = e.clientY !== undefined ? e.clientY : e.pageY;
  this.screenX = e.screenX || 0;
  this.screenY = e.screenY || 0;
  this.button = e.button;
  this.keyCode = e.keyCode || 0;
  this.charCode = e.charCode || (type == "keypress" ? e.keyCode : 0);
  this.ctrlKey = e.ctrlKey;
  this.altKey = e.altKey;
  this.shiftKey = e.shiftKey;
  this.metaKey = e.metaKey;
  this.platformModifierKey = goog.userAgent.MAC ? e.metaKey : e.ctrlKey;
  this.state = e.state;
  this.event_ = e;
  delete this.returnValue_;
  delete this.propagationStopped_
};
goog.events.BrowserEvent.prototype.isButton = function(button) {
  if(!goog.events.BrowserFeature.HAS_W3C_BUTTON) {
    if(this.type == "click") {
      return button == goog.events.BrowserEvent.MouseButton.LEFT
    }else {
      return!!(this.event_.button & goog.events.BrowserEvent.IEButtonMap[button])
    }
  }else {
    return this.event_.button == button
  }
};
goog.events.BrowserEvent.prototype.isMouseActionButton = function() {
  return this.isButton(goog.events.BrowserEvent.MouseButton.LEFT) && !(goog.userAgent.WEBKIT && goog.userAgent.MAC && this.ctrlKey)
};
goog.events.BrowserEvent.prototype.stopPropagation = function() {
  goog.events.BrowserEvent.superClass_.stopPropagation.call(this);
  if(this.event_.stopPropagation) {
    this.event_.stopPropagation()
  }else {
    this.event_.cancelBubble = true
  }
};
goog.events.BrowserEvent.prototype.preventDefault = function() {
  goog.events.BrowserEvent.superClass_.preventDefault.call(this);
  var be = this.event_;
  if(!be.preventDefault) {
    be.returnValue = false;
    if(goog.events.BrowserFeature.SET_KEY_CODE_TO_PREVENT_DEFAULT) {
      try {
        var VK_F1 = 112;
        var VK_F12 = 123;
        if(be.ctrlKey || be.keyCode >= VK_F1 && be.keyCode <= VK_F12) {
          be.keyCode = -1
        }
      }catch(ex) {
      }
    }
  }else {
    be.preventDefault()
  }
};
goog.events.BrowserEvent.prototype.getBrowserEvent = function() {
  return this.event_
};
goog.events.BrowserEvent.prototype.disposeInternal = function() {
  goog.events.BrowserEvent.superClass_.disposeInternal.call(this);
  this.event_ = null;
  this.target = null;
  this.currentTarget = null;
  this.relatedTarget = null
};
goog.provide("goog.events.EventWrapper");
goog.events.EventWrapper = function() {
};
goog.events.EventWrapper.prototype.listen = function(src, listener, opt_capt, opt_scope, opt_eventHandler) {
};
goog.events.EventWrapper.prototype.unlisten = function(src, listener, opt_capt, opt_scope, opt_eventHandler) {
};
goog.provide("goog.events.Listener");
goog.events.Listener = function() {
};
goog.events.Listener.counter_ = 0;
goog.events.Listener.prototype.isFunctionListener_;
goog.events.Listener.prototype.listener;
goog.events.Listener.prototype.proxy;
goog.events.Listener.prototype.src;
goog.events.Listener.prototype.type;
goog.events.Listener.prototype.capture;
goog.events.Listener.prototype.handler;
goog.events.Listener.prototype.key = 0;
goog.events.Listener.prototype.removed = false;
goog.events.Listener.prototype.callOnce = false;
goog.events.Listener.prototype.init = function(listener, proxy, src, type, capture, opt_handler) {
  if(goog.isFunction(listener)) {
    this.isFunctionListener_ = true
  }else {
    if(listener && listener.handleEvent && goog.isFunction(listener.handleEvent)) {
      this.isFunctionListener_ = false
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.listener = listener;
  this.proxy = proxy;
  this.src = src;
  this.type = type;
  this.capture = !!capture;
  this.handler = opt_handler;
  this.callOnce = false;
  this.key = ++goog.events.Listener.counter_;
  this.removed = false
};
goog.events.Listener.prototype.handleEvent = function(eventObject) {
  if(this.isFunctionListener_) {
    return this.listener.call(this.handler || this.src, eventObject)
  }
  return this.listener.handleEvent.call(this.listener, eventObject)
};
goog.provide("goog.structs.SimplePool");
goog.require("goog.Disposable");
goog.structs.SimplePool = function(initialCount, maxCount) {
  goog.Disposable.call(this);
  this.maxCount_ = maxCount;
  this.freeQueue_ = [];
  this.createInitial_(initialCount)
};
goog.inherits(goog.structs.SimplePool, goog.Disposable);
goog.structs.SimplePool.prototype.createObjectFn_ = null;
goog.structs.SimplePool.prototype.disposeObjectFn_ = null;
goog.structs.SimplePool.prototype.setCreateObjectFn = function(createObjectFn) {
  this.createObjectFn_ = createObjectFn
};
goog.structs.SimplePool.prototype.setDisposeObjectFn = function(disposeObjectFn) {
  this.disposeObjectFn_ = disposeObjectFn
};
goog.structs.SimplePool.prototype.getObject = function() {
  if(this.freeQueue_.length) {
    return this.freeQueue_.pop()
  }
  return this.createObject()
};
goog.structs.SimplePool.prototype.releaseObject = function(obj) {
  if(this.freeQueue_.length < this.maxCount_) {
    this.freeQueue_.push(obj)
  }else {
    this.disposeObject(obj)
  }
};
goog.structs.SimplePool.prototype.createInitial_ = function(initialCount) {
  if(initialCount > this.maxCount_) {
    throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");
  }
  for(var i = 0;i < initialCount;i++) {
    this.freeQueue_.push(this.createObject())
  }
};
goog.structs.SimplePool.prototype.createObject = function() {
  if(this.createObjectFn_) {
    return this.createObjectFn_()
  }else {
    return{}
  }
};
goog.structs.SimplePool.prototype.disposeObject = function(obj) {
  if(this.disposeObjectFn_) {
    this.disposeObjectFn_(obj)
  }else {
    if(goog.isObject(obj)) {
      if(goog.isFunction(obj.dispose)) {
        obj.dispose()
      }else {
        for(var i in obj) {
          delete obj[i]
        }
      }
    }
  }
};
goog.structs.SimplePool.prototype.disposeInternal = function() {
  goog.structs.SimplePool.superClass_.disposeInternal.call(this);
  var freeQueue = this.freeQueue_;
  while(freeQueue.length) {
    this.disposeObject(freeQueue.pop())
  }
  delete this.freeQueue_
};
goog.provide("goog.events.pools");
goog.require("goog.events.BrowserEvent");
goog.require("goog.events.Listener");
goog.require("goog.structs.SimplePool");
goog.require("goog.userAgent.jscript");
goog.events.ASSUME_GOOD_GC = false;
goog.events.pools.getObject;
goog.events.pools.releaseObject;
goog.events.pools.getArray;
goog.events.pools.releaseArray;
goog.events.pools.getProxy;
goog.events.pools.setProxyCallbackFunction;
goog.events.pools.releaseProxy;
goog.events.pools.getListener;
goog.events.pools.releaseListener;
goog.events.pools.getEvent;
goog.events.pools.releaseEvent;
(function() {
  var BAD_GC = !goog.events.ASSUME_GOOD_GC && goog.userAgent.jscript.HAS_JSCRIPT && !goog.userAgent.jscript.isVersion("5.7");
  function getObject() {
    return{count_:0, remaining_:0}
  }
  function getArray() {
    return[]
  }
  var proxyCallbackFunction;
  goog.events.pools.setProxyCallbackFunction = function(cb) {
    proxyCallbackFunction = cb
  };
  function getProxy() {
    var f = function(eventObject) {
      return proxyCallbackFunction.call(f.src, f.key, eventObject)
    };
    return f
  }
  function getListener() {
    return new goog.events.Listener
  }
  function getEvent() {
    return new goog.events.BrowserEvent
  }
  if(!BAD_GC) {
    goog.events.pools.getObject = getObject;
    goog.events.pools.releaseObject = goog.nullFunction;
    goog.events.pools.getArray = getArray;
    goog.events.pools.releaseArray = goog.nullFunction;
    goog.events.pools.getProxy = getProxy;
    goog.events.pools.releaseProxy = goog.nullFunction;
    goog.events.pools.getListener = getListener;
    goog.events.pools.releaseListener = goog.nullFunction;
    goog.events.pools.getEvent = getEvent;
    goog.events.pools.releaseEvent = goog.nullFunction
  }else {
    goog.events.pools.getObject = function() {
      return objectPool.getObject()
    };
    goog.events.pools.releaseObject = function(obj) {
      objectPool.releaseObject(obj)
    };
    goog.events.pools.getArray = function() {
      return arrayPool.getObject()
    };
    goog.events.pools.releaseArray = function(obj) {
      arrayPool.releaseObject(obj)
    };
    goog.events.pools.getProxy = function() {
      return proxyPool.getObject()
    };
    goog.events.pools.releaseProxy = function(obj) {
      proxyPool.releaseObject(getProxy())
    };
    goog.events.pools.getListener = function() {
      return listenerPool.getObject()
    };
    goog.events.pools.releaseListener = function(obj) {
      listenerPool.releaseObject(obj)
    };
    goog.events.pools.getEvent = function() {
      return eventPool.getObject()
    };
    goog.events.pools.releaseEvent = function(obj) {
      eventPool.releaseObject(obj)
    };
    var OBJECT_POOL_INITIAL_COUNT = 0;
    var OBJECT_POOL_MAX_COUNT = 600;
    var objectPool = new goog.structs.SimplePool(OBJECT_POOL_INITIAL_COUNT, OBJECT_POOL_MAX_COUNT);
    objectPool.setCreateObjectFn(getObject);
    var ARRAY_POOL_INITIAL_COUNT = 0;
    var ARRAY_POOL_MAX_COUNT = 600;
    var arrayPool = new goog.structs.SimplePool(ARRAY_POOL_INITIAL_COUNT, ARRAY_POOL_MAX_COUNT);
    arrayPool.setCreateObjectFn(getArray);
    var HANDLE_EVENT_PROXY_POOL_INITIAL_COUNT = 0;
    var HANDLE_EVENT_PROXY_POOL_MAX_COUNT = 600;
    var proxyPool = new goog.structs.SimplePool(HANDLE_EVENT_PROXY_POOL_INITIAL_COUNT, HANDLE_EVENT_PROXY_POOL_MAX_COUNT);
    proxyPool.setCreateObjectFn(getProxy);
    var LISTENER_POOL_INITIAL_COUNT = 0;
    var LISTENER_POOL_MAX_COUNT = 600;
    var listenerPool = new goog.structs.SimplePool(LISTENER_POOL_INITIAL_COUNT, LISTENER_POOL_MAX_COUNT);
    listenerPool.setCreateObjectFn(getListener);
    var EVENT_POOL_INITIAL_COUNT = 0;
    var EVENT_POOL_MAX_COUNT = 600;
    var eventPool = new goog.structs.SimplePool(EVENT_POOL_INITIAL_COUNT, EVENT_POOL_MAX_COUNT);
    eventPool.setCreateObjectFn(getEvent)
  }
})();
goog.provide("goog.events");
goog.require("goog.array");
goog.require("goog.debug.entryPointRegistry");
goog.require("goog.debug.errorHandlerWeakDep");
goog.require("goog.events.BrowserEvent");
goog.require("goog.events.Event");
goog.require("goog.events.EventWrapper");
goog.require("goog.events.pools");
goog.require("goog.object");
goog.require("goog.userAgent");
goog.events.listeners_ = {};
goog.events.listenerTree_ = {};
goog.events.sources_ = {};
goog.events.onString_ = "on";
goog.events.onStringMap_ = {};
goog.events.keySeparator_ = "_";
goog.events.requiresSyntheticEventPropagation_;
goog.events.listen = function(src, type, listener, opt_capt, opt_handler) {
  if(!type) {
    throw Error("Invalid event type");
  }else {
    if(goog.isArray(type)) {
      for(var i = 0;i < type.length;i++) {
        goog.events.listen(src, type[i], listener, opt_capt, opt_handler)
      }
      return null
    }else {
      var capture = !!opt_capt;
      var map = goog.events.listenerTree_;
      if(!(type in map)) {
        map[type] = goog.events.pools.getObject()
      }
      map = map[type];
      if(!(capture in map)) {
        map[capture] = goog.events.pools.getObject();
        map.count_++
      }
      map = map[capture];
      var srcUid = goog.getUid(src);
      var listenerArray, listenerObj;
      map.remaining_++;
      if(!map[srcUid]) {
        listenerArray = map[srcUid] = goog.events.pools.getArray();
        map.count_++
      }else {
        listenerArray = map[srcUid];
        for(var i = 0;i < listenerArray.length;i++) {
          listenerObj = listenerArray[i];
          if(listenerObj.listener == listener && listenerObj.handler == opt_handler) {
            if(listenerObj.removed) {
              break
            }
            return listenerArray[i].key
          }
        }
      }
      var proxy = goog.events.pools.getProxy();
      proxy.src = src;
      listenerObj = goog.events.pools.getListener();
      listenerObj.init(listener, proxy, src, type, capture, opt_handler);
      var key = listenerObj.key;
      proxy.key = key;
      listenerArray.push(listenerObj);
      goog.events.listeners_[key] = listenerObj;
      if(!goog.events.sources_[srcUid]) {
        goog.events.sources_[srcUid] = goog.events.pools.getArray()
      }
      goog.events.sources_[srcUid].push(listenerObj);
      if(src.addEventListener) {
        if(src == goog.global || !src.customEvent_) {
          src.addEventListener(type, proxy, capture)
        }
      }else {
        src.attachEvent(goog.events.getOnString_(type), proxy)
      }
      return key
    }
  }
};
goog.events.listenOnce = function(src, type, listener, opt_capt, opt_handler) {
  if(goog.isArray(type)) {
    for(var i = 0;i < type.length;i++) {
      goog.events.listenOnce(src, type[i], listener, opt_capt, opt_handler)
    }
    return null
  }
  var key = goog.events.listen(src, type, listener, opt_capt, opt_handler);
  var listenerObj = goog.events.listeners_[key];
  listenerObj.callOnce = true;
  return key
};
goog.events.listenWithWrapper = function(src, wrapper, listener, opt_capt, opt_handler) {
  wrapper.listen(src, listener, opt_capt, opt_handler)
};
goog.events.unlisten = function(src, type, listener, opt_capt, opt_handler) {
  if(goog.isArray(type)) {
    for(var i = 0;i < type.length;i++) {
      goog.events.unlisten(src, type[i], listener, opt_capt, opt_handler)
    }
    return null
  }
  var capture = !!opt_capt;
  var listenerArray = goog.events.getListeners_(src, type, capture);
  if(!listenerArray) {
    return false
  }
  for(var i = 0;i < listenerArray.length;i++) {
    if(listenerArray[i].listener == listener && listenerArray[i].capture == capture && listenerArray[i].handler == opt_handler) {
      return goog.events.unlistenByKey(listenerArray[i].key)
    }
  }
  return false
};
goog.events.unlistenByKey = function(key) {
  if(!goog.events.listeners_[key]) {
    return false
  }
  var listener = goog.events.listeners_[key];
  if(listener.removed) {
    return false
  }
  var src = listener.src;
  var type = listener.type;
  var proxy = listener.proxy;
  var capture = listener.capture;
  if(src.removeEventListener) {
    if(src == goog.global || !src.customEvent_) {
      src.removeEventListener(type, proxy, capture)
    }
  }else {
    if(src.detachEvent) {
      src.detachEvent(goog.events.getOnString_(type), proxy)
    }
  }
  var srcUid = goog.getUid(src);
  var listenerArray = goog.events.listenerTree_[type][capture][srcUid];
  if(goog.events.sources_[srcUid]) {
    var sourcesArray = goog.events.sources_[srcUid];
    goog.array.remove(sourcesArray, listener);
    if(sourcesArray.length == 0) {
      delete goog.events.sources_[srcUid]
    }
  }
  listener.removed = true;
  listenerArray.needsCleanup_ = true;
  goog.events.cleanUp_(type, capture, srcUid, listenerArray);
  delete goog.events.listeners_[key];
  return true
};
goog.events.unlistenWithWrapper = function(src, wrapper, listener, opt_capt, opt_handler) {
  wrapper.unlisten(src, listener, opt_capt, opt_handler)
};
goog.events.cleanUp_ = function(type, capture, srcUid, listenerArray) {
  if(!listenerArray.locked_) {
    if(listenerArray.needsCleanup_) {
      for(var oldIndex = 0, newIndex = 0;oldIndex < listenerArray.length;oldIndex++) {
        if(listenerArray[oldIndex].removed) {
          var proxy = listenerArray[oldIndex].proxy;
          proxy.src = null;
          goog.events.pools.releaseProxy(proxy);
          goog.events.pools.releaseListener(listenerArray[oldIndex]);
          continue
        }
        if(oldIndex != newIndex) {
          listenerArray[newIndex] = listenerArray[oldIndex]
        }
        newIndex++
      }
      listenerArray.length = newIndex;
      listenerArray.needsCleanup_ = false;
      if(newIndex == 0) {
        goog.events.pools.releaseArray(listenerArray);
        delete goog.events.listenerTree_[type][capture][srcUid];
        goog.events.listenerTree_[type][capture].count_--;
        if(goog.events.listenerTree_[type][capture].count_ == 0) {
          goog.events.pools.releaseObject(goog.events.listenerTree_[type][capture]);
          delete goog.events.listenerTree_[type][capture];
          goog.events.listenerTree_[type].count_--
        }
        if(goog.events.listenerTree_[type].count_ == 0) {
          goog.events.pools.releaseObject(goog.events.listenerTree_[type]);
          delete goog.events.listenerTree_[type]
        }
      }
    }
  }
};
goog.events.removeAll = function(opt_obj, opt_type, opt_capt) {
  var count = 0;
  var noObj = opt_obj == null;
  var noType = opt_type == null;
  var noCapt = opt_capt == null;
  opt_capt = !!opt_capt;
  if(!noObj) {
    var srcUid = goog.getUid(opt_obj);
    if(goog.events.sources_[srcUid]) {
      var sourcesArray = goog.events.sources_[srcUid];
      for(var i = sourcesArray.length - 1;i >= 0;i--) {
        var listener = sourcesArray[i];
        if((noType || opt_type == listener.type) && (noCapt || opt_capt == listener.capture)) {
          goog.events.unlistenByKey(listener.key);
          count++
        }
      }
    }
  }else {
    goog.object.forEach(goog.events.sources_, function(listeners) {
      for(var i = listeners.length - 1;i >= 0;i--) {
        var listener = listeners[i];
        if((noType || opt_type == listener.type) && (noCapt || opt_capt == listener.capture)) {
          goog.events.unlistenByKey(listener.key);
          count++
        }
      }
    })
  }
  return count
};
goog.events.getListeners = function(obj, type, capture) {
  return goog.events.getListeners_(obj, type, capture) || []
};
goog.events.getListeners_ = function(obj, type, capture) {
  var map = goog.events.listenerTree_;
  if(type in map) {
    map = map[type];
    if(capture in map) {
      map = map[capture];
      var objUid = goog.getUid(obj);
      if(map[objUid]) {
        return map[objUid]
      }
    }
  }
  return null
};
goog.events.getListener = function(src, type, listener, opt_capt, opt_handler) {
  var capture = !!opt_capt;
  var listenerArray = goog.events.getListeners_(src, type, capture);
  if(listenerArray) {
    for(var i = 0;i < listenerArray.length;i++) {
      if(listenerArray[i].listener == listener && listenerArray[i].capture == capture && listenerArray[i].handler == opt_handler) {
        return listenerArray[i]
      }
    }
  }
  return null
};
goog.events.hasListener = function(obj, opt_type, opt_capture) {
  var objUid = goog.getUid(obj);
  var listeners = goog.events.sources_[objUid];
  if(listeners) {
    var hasType = goog.isDef(opt_type);
    var hasCapture = goog.isDef(opt_capture);
    if(hasType && hasCapture) {
      var map = goog.events.listenerTree_[opt_type];
      return!!map && !!map[opt_capture] && objUid in map[opt_capture]
    }else {
      if(!(hasType || hasCapture)) {
        return true
      }else {
        return goog.array.some(listeners, function(listener) {
          return hasType && listener.type == opt_type || hasCapture && listener.capture == opt_capture
        })
      }
    }
  }
  return false
};
goog.events.expose = function(e) {
  var str = [];
  for(var key in e) {
    if(e[key] && e[key].id) {
      str.push(key + " = " + e[key] + " (" + e[key].id + ")")
    }else {
      str.push(key + " = " + e[key])
    }
  }
  return str.join("\n")
};
goog.events.getOnString_ = function(type) {
  if(type in goog.events.onStringMap_) {
    return goog.events.onStringMap_[type]
  }
  return goog.events.onStringMap_[type] = goog.events.onString_ + type
};
goog.events.fireListeners = function(obj, type, capture, eventObject) {
  var map = goog.events.listenerTree_;
  if(type in map) {
    map = map[type];
    if(capture in map) {
      return goog.events.fireListeners_(map[capture], obj, type, capture, eventObject)
    }
  }
  return true
};
goog.events.fireListeners_ = function(map, obj, type, capture, eventObject) {
  var retval = 1;
  var objUid = goog.getUid(obj);
  if(map[objUid]) {
    map.remaining_--;
    var listenerArray = map[objUid];
    if(!listenerArray.locked_) {
      listenerArray.locked_ = 1
    }else {
      listenerArray.locked_++
    }
    try {
      var length = listenerArray.length;
      for(var i = 0;i < length;i++) {
        var listener = listenerArray[i];
        if(listener && !listener.removed) {
          retval &= goog.events.fireListener(listener, eventObject) !== false
        }
      }
    }finally {
      listenerArray.locked_--;
      goog.events.cleanUp_(type, capture, objUid, listenerArray)
    }
  }
  return Boolean(retval)
};
goog.events.fireListener = function(listener, eventObject) {
  var rv = listener.handleEvent(eventObject);
  if(listener.callOnce) {
    goog.events.unlistenByKey(listener.key)
  }
  return rv
};
goog.events.getTotalListenerCount = function() {
  return goog.object.getCount(goog.events.listeners_)
};
goog.events.dispatchEvent = function(src, e) {
  var type = e.type || e;
  var map = goog.events.listenerTree_;
  if(!(type in map)) {
    return true
  }
  if(goog.isString(e)) {
    e = new goog.events.Event(e, src)
  }else {
    if(!(e instanceof goog.events.Event)) {
      var oldEvent = e;
      e = new goog.events.Event(type, src);
      goog.object.extend(e, oldEvent)
    }else {
      e.target = e.target || src
    }
  }
  var rv = 1, ancestors;
  map = map[type];
  var hasCapture = true in map;
  var targetsMap;
  if(hasCapture) {
    ancestors = [];
    for(var parent = src;parent;parent = parent.getParentEventTarget()) {
      ancestors.push(parent)
    }
    targetsMap = map[true];
    targetsMap.remaining_ = targetsMap.count_;
    for(var i = ancestors.length - 1;!e.propagationStopped_ && i >= 0 && targetsMap.remaining_;i--) {
      e.currentTarget = ancestors[i];
      rv &= goog.events.fireListeners_(targetsMap, ancestors[i], e.type, true, e) && e.returnValue_ != false
    }
  }
  var hasBubble = false in map;
  if(hasBubble) {
    targetsMap = map[false];
    targetsMap.remaining_ = targetsMap.count_;
    if(hasCapture) {
      for(var i = 0;!e.propagationStopped_ && i < ancestors.length && targetsMap.remaining_;i++) {
        e.currentTarget = ancestors[i];
        rv &= goog.events.fireListeners_(targetsMap, ancestors[i], e.type, false, e) && e.returnValue_ != false
      }
    }else {
      for(var current = src;!e.propagationStopped_ && current && targetsMap.remaining_;current = current.getParentEventTarget()) {
        e.currentTarget = current;
        rv &= goog.events.fireListeners_(targetsMap, current, e.type, false, e) && e.returnValue_ != false
      }
    }
  }
  return Boolean(rv)
};
goog.events.protectBrowserEventEntryPoint = function(errorHandler) {
  goog.events.handleBrowserEvent_ = errorHandler.protectEntryPoint(goog.events.handleBrowserEvent_);
  goog.events.pools.setProxyCallbackFunction(goog.events.handleBrowserEvent_)
};
goog.events.handleBrowserEvent_ = function(key, opt_evt) {
  if(!goog.events.listeners_[key]) {
    return true
  }
  var listener = goog.events.listeners_[key];
  var type = listener.type;
  var map = goog.events.listenerTree_;
  if(!(type in map)) {
    return true
  }
  map = map[type];
  var retval, targetsMap;
  if(goog.events.synthesizeEventPropagation_()) {
    var ieEvent = opt_evt || goog.getObjectByName("window.event");
    var hasCapture = true in map;
    var hasBubble = false in map;
    if(hasCapture) {
      if(goog.events.isMarkedIeEvent_(ieEvent)) {
        return true
      }
      goog.events.markIeEvent_(ieEvent)
    }
    var evt = goog.events.pools.getEvent();
    evt.init(ieEvent, this);
    retval = true;
    try {
      if(hasCapture) {
        var ancestors = goog.events.pools.getArray();
        for(var parent = evt.currentTarget;parent;parent = parent.parentNode) {
          ancestors.push(parent)
        }
        targetsMap = map[true];
        targetsMap.remaining_ = targetsMap.count_;
        for(var i = ancestors.length - 1;!evt.propagationStopped_ && i >= 0 && targetsMap.remaining_;i--) {
          evt.currentTarget = ancestors[i];
          retval &= goog.events.fireListeners_(targetsMap, ancestors[i], type, true, evt)
        }
        if(hasBubble) {
          targetsMap = map[false];
          targetsMap.remaining_ = targetsMap.count_;
          for(var i = 0;!evt.propagationStopped_ && i < ancestors.length && targetsMap.remaining_;i++) {
            evt.currentTarget = ancestors[i];
            retval &= goog.events.fireListeners_(targetsMap, ancestors[i], type, false, evt)
          }
        }
      }else {
        retval = goog.events.fireListener(listener, evt)
      }
    }finally {
      if(ancestors) {
        ancestors.length = 0;
        goog.events.pools.releaseArray(ancestors)
      }
      evt.dispose();
      goog.events.pools.releaseEvent(evt)
    }
    return retval
  }
  var be = new goog.events.BrowserEvent(opt_evt, this);
  try {
    retval = goog.events.fireListener(listener, be)
  }finally {
    be.dispose()
  }
  return retval
};
goog.events.pools.setProxyCallbackFunction(goog.events.handleBrowserEvent_);
goog.events.markIeEvent_ = function(e) {
  var useReturnValue = false;
  if(e.keyCode == 0) {
    try {
      e.keyCode = -1;
      return
    }catch(ex) {
      useReturnValue = true
    }
  }
  if(useReturnValue || e.returnValue == undefined) {
    e.returnValue = true
  }
};
goog.events.isMarkedIeEvent_ = function(e) {
  return e.keyCode < 0 || e.returnValue != undefined
};
goog.events.uniqueIdCounter_ = 0;
goog.events.getUniqueId = function(identifier) {
  return identifier + "_" + goog.events.uniqueIdCounter_++
};
goog.events.synthesizeEventPropagation_ = function() {
  if(goog.events.requiresSyntheticEventPropagation_ === undefined) {
    goog.events.requiresSyntheticEventPropagation_ = goog.userAgent.IE && !goog.global["addEventListener"]
  }
  return goog.events.requiresSyntheticEventPropagation_
};
goog.debug.entryPointRegistry.register(function(transformer) {
  goog.events.handleBrowserEvent_ = transformer(goog.events.handleBrowserEvent_);
  goog.events.pools.setProxyCallbackFunction(goog.events.handleBrowserEvent_)
});
goog.provide("goog.events.EventTarget");
goog.require("goog.Disposable");
goog.require("goog.events");
goog.events.EventTarget = function() {
  goog.Disposable.call(this)
};
goog.inherits(goog.events.EventTarget, goog.Disposable);
goog.events.EventTarget.prototype.customEvent_ = true;
goog.events.EventTarget.prototype.parentEventTarget_ = null;
goog.events.EventTarget.prototype.getParentEventTarget = function() {
  return this.parentEventTarget_
};
goog.events.EventTarget.prototype.setParentEventTarget = function(parent) {
  this.parentEventTarget_ = parent
};
goog.events.EventTarget.prototype.addEventListener = function(type, handler, opt_capture, opt_handlerScope) {
  goog.events.listen(this, type, handler, opt_capture, opt_handlerScope)
};
goog.events.EventTarget.prototype.removeEventListener = function(type, handler, opt_capture, opt_handlerScope) {
  goog.events.unlisten(this, type, handler, opt_capture, opt_handlerScope)
};
goog.events.EventTarget.prototype.dispatchEvent = function(e) {
  return goog.events.dispatchEvent(this, e)
};
goog.events.EventTarget.prototype.disposeInternal = function() {
  goog.events.EventTarget.superClass_.disposeInternal.call(this);
  goog.events.removeAll(this);
  this.parentEventTarget_ = null
};
goog.provide("clojure.browser.event");
goog.require("cljs.core");
goog.require("goog.events.EventType");
goog.require("goog.events.EventTarget");
goog.require("goog.events");
clojure.browser.event.EventType = {};
clojure.browser.event.event_types = function event_types(this$) {
  if(function() {
    var and__3822__auto____6573 = this$;
    if(and__3822__auto____6573) {
      return this$.clojure$browser$event$EventType$event_types$arity$1
    }else {
      return and__3822__auto____6573
    }
  }()) {
    return this$.clojure$browser$event$EventType$event_types$arity$1(this$)
  }else {
    var x__2389__auto____6574 = this$ == null ? null : this$;
    return function() {
      var or__3824__auto____6575 = clojure.browser.event.event_types[goog.typeOf(x__2389__auto____6574)];
      if(or__3824__auto____6575) {
        return or__3824__auto____6575
      }else {
        var or__3824__auto____6576 = clojure.browser.event.event_types["_"];
        if(or__3824__auto____6576) {
          return or__3824__auto____6576
        }else {
          throw cljs.core.missing_protocol.call(null, "EventType.event-types", this$);
        }
      }
    }().call(null, this$)
  }
};
Element.prototype.clojure$browser$event$EventType$ = true;
Element.prototype.clojure$browser$event$EventType$event_types$arity$1 = function(this$) {
  return cljs.core.into.call(null, cljs.core.ObjMap.EMPTY, cljs.core.map.call(null, function(p__6577) {
    var vec__6578__6579 = p__6577;
    var k__6580 = cljs.core.nth.call(null, vec__6578__6579, 0, null);
    var v__6581 = cljs.core.nth.call(null, vec__6578__6579, 1, null);
    return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null, k__6580.toLowerCase()), v__6581], true)
  }, cljs.core.merge.call(null, cljs.core.js__GT_clj.call(null, goog.events.EventType))))
};
goog.events.EventTarget.prototype.clojure$browser$event$EventType$ = true;
goog.events.EventTarget.prototype.clojure$browser$event$EventType$event_types$arity$1 = function(this$) {
  return cljs.core.into.call(null, cljs.core.ObjMap.EMPTY, cljs.core.map.call(null, function(p__6582) {
    var vec__6583__6584 = p__6582;
    var k__6585 = cljs.core.nth.call(null, vec__6583__6584, 0, null);
    var v__6586 = cljs.core.nth.call(null, vec__6583__6584, 1, null);
    return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null, k__6585.toLowerCase()), v__6586], true)
  }, cljs.core.merge.call(null, cljs.core.js__GT_clj.call(null, goog.events.EventType))))
};
clojure.browser.event.listen = function() {
  var listen = null;
  var listen__3 = function(src, type, fn) {
    return listen.call(null, src, type, fn, false)
  };
  var listen__4 = function(src, type, fn, capture_QMARK_) {
    return goog.events.listen(src, cljs.core._lookup.call(null, clojure.browser.event.event_types.call(null, src), type, type), fn, capture_QMARK_)
  };
  listen = function(src, type, fn, capture_QMARK_) {
    switch(arguments.length) {
      case 3:
        return listen__3.call(this, src, type, fn);
      case 4:
        return listen__4.call(this, src, type, fn, capture_QMARK_)
    }
    throw"Invalid arity: " + arguments.length;
  };
  listen.cljs$lang$arity$3 = listen__3;
  listen.cljs$lang$arity$4 = listen__4;
  return listen
}();
clojure.browser.event.listen_once = function() {
  var listen_once = null;
  var listen_once__3 = function(src, type, fn) {
    return listen_once.call(null, src, type, fn, false)
  };
  var listen_once__4 = function(src, type, fn, capture_QMARK_) {
    return goog.events.listenOnce(src, cljs.core._lookup.call(null, clojure.browser.event.event_types.call(null, src), type, type), fn, capture_QMARK_)
  };
  listen_once = function(src, type, fn, capture_QMARK_) {
    switch(arguments.length) {
      case 3:
        return listen_once__3.call(this, src, type, fn);
      case 4:
        return listen_once__4.call(this, src, type, fn, capture_QMARK_)
    }
    throw"Invalid arity: " + arguments.length;
  };
  listen_once.cljs$lang$arity$3 = listen_once__3;
  listen_once.cljs$lang$arity$4 = listen_once__4;
  return listen_once
}();
clojure.browser.event.unlisten = function() {
  var unlisten = null;
  var unlisten__3 = function(src, type, fn) {
    return unlisten.call(null, src, type, fn, false)
  };
  var unlisten__4 = function(src, type, fn, capture_QMARK_) {
    return goog.events.unlisten(src, cljs.core._lookup.call(null, clojure.browser.event.event_types.call(null, src), type, type), fn, capture_QMARK_)
  };
  unlisten = function(src, type, fn, capture_QMARK_) {
    switch(arguments.length) {
      case 3:
        return unlisten__3.call(this, src, type, fn);
      case 4:
        return unlisten__4.call(this, src, type, fn, capture_QMARK_)
    }
    throw"Invalid arity: " + arguments.length;
  };
  unlisten.cljs$lang$arity$3 = unlisten__3;
  unlisten.cljs$lang$arity$4 = unlisten__4;
  return unlisten
}();
clojure.browser.event.unlisten_by_key = function unlisten_by_key(key) {
  return goog.events.unlistenByKey(key)
};
clojure.browser.event.dispatch_event = function dispatch_event(src, event) {
  return goog.events.dispatchEvent(src, event)
};
clojure.browser.event.expose = function expose(e) {
  return goog.events.expose(e)
};
clojure.browser.event.fire_listeners = function fire_listeners(obj, type, capture, event) {
  return null
};
clojure.browser.event.total_listener_count = function total_listener_count() {
  return goog.events.getTotalListenerCount()
};
clojure.browser.event.get_listener = function get_listener(src, type, listener, opt_capt, opt_handler) {
  return null
};
clojure.browser.event.all_listeners = function all_listeners(obj, type, capture) {
  return null
};
clojure.browser.event.unique_event_id = function unique_event_id(event_type) {
  return null
};
clojure.browser.event.has_listener = function has_listener(obj, opt_type, opt_capture) {
  return null
};
clojure.browser.event.remove_all = function remove_all(opt_obj, opt_type, opt_capt) {
  return null
};
goog.provide("goog.dom.BrowserFeature");
goog.require("goog.userAgent");
goog.dom.BrowserFeature = {CAN_ADD_NAME_OR_TYPE_ATTRIBUTES:!goog.userAgent.IE || goog.userAgent.isVersion("9"), CAN_USE_CHILDREN_ATTRIBUTE:!goog.userAgent.GECKO && !goog.userAgent.IE || goog.userAgent.IE && goog.userAgent.isVersion("9") || goog.userAgent.GECKO && goog.userAgent.isVersion("1.9.1"), CAN_USE_INNER_TEXT:goog.userAgent.IE && !goog.userAgent.isVersion("9"), INNER_HTML_NEEDS_SCOPED_ELEMENT:goog.userAgent.IE};
goog.provide("goog.dom.TagName");
goog.dom.TagName = {A:"A", ABBR:"ABBR", ACRONYM:"ACRONYM", ADDRESS:"ADDRESS", APPLET:"APPLET", AREA:"AREA", B:"B", BASE:"BASE", BASEFONT:"BASEFONT", BDO:"BDO", BIG:"BIG", BLOCKQUOTE:"BLOCKQUOTE", BODY:"BODY", BR:"BR", BUTTON:"BUTTON", CANVAS:"CANVAS", CAPTION:"CAPTION", CENTER:"CENTER", CITE:"CITE", CODE:"CODE", COL:"COL", COLGROUP:"COLGROUP", DD:"DD", DEL:"DEL", DFN:"DFN", DIR:"DIR", DIV:"DIV", DL:"DL", DT:"DT", EM:"EM", FIELDSET:"FIELDSET", FONT:"FONT", FORM:"FORM", FRAME:"FRAME", FRAMESET:"FRAMESET", 
H1:"H1", H2:"H2", H3:"H3", H4:"H4", H5:"H5", H6:"H6", HEAD:"HEAD", HR:"HR", HTML:"HTML", I:"I", IFRAME:"IFRAME", IMG:"IMG", INPUT:"INPUT", INS:"INS", ISINDEX:"ISINDEX", KBD:"KBD", LABEL:"LABEL", LEGEND:"LEGEND", LI:"LI", LINK:"LINK", MAP:"MAP", MENU:"MENU", META:"META", NOFRAMES:"NOFRAMES", NOSCRIPT:"NOSCRIPT", OBJECT:"OBJECT", OL:"OL", OPTGROUP:"OPTGROUP", OPTION:"OPTION", P:"P", PARAM:"PARAM", PRE:"PRE", Q:"Q", S:"S", SAMP:"SAMP", SCRIPT:"SCRIPT", SELECT:"SELECT", SMALL:"SMALL", SPAN:"SPAN", STRIKE:"STRIKE", 
STRONG:"STRONG", STYLE:"STYLE", SUB:"SUB", SUP:"SUP", TABLE:"TABLE", TBODY:"TBODY", TD:"TD", TEXTAREA:"TEXTAREA", TFOOT:"TFOOT", TH:"TH", THEAD:"THEAD", TITLE:"TITLE", TR:"TR", TT:"TT", U:"U", UL:"UL", VAR:"VAR"};
goog.provide("goog.dom.classes");
goog.require("goog.array");
goog.dom.classes.set = function(element, className) {
  element.className = className
};
goog.dom.classes.get = function(element) {
  var className = element.className;
  return className && typeof className.split == "function" ? className.split(/\s+/) : []
};
goog.dom.classes.add = function(element, var_args) {
  var classes = goog.dom.classes.get(element);
  var args = goog.array.slice(arguments, 1);
  var b = goog.dom.classes.add_(classes, args);
  element.className = classes.join(" ");
  return b
};
goog.dom.classes.remove = function(element, var_args) {
  var classes = goog.dom.classes.get(element);
  var args = goog.array.slice(arguments, 1);
  var b = goog.dom.classes.remove_(classes, args);
  element.className = classes.join(" ");
  return b
};
goog.dom.classes.add_ = function(classes, args) {
  var rv = 0;
  for(var i = 0;i < args.length;i++) {
    if(!goog.array.contains(classes, args[i])) {
      classes.push(args[i]);
      rv++
    }
  }
  return rv == args.length
};
goog.dom.classes.remove_ = function(classes, args) {
  var rv = 0;
  for(var i = 0;i < classes.length;i++) {
    if(goog.array.contains(args, classes[i])) {
      goog.array.splice(classes, i--, 1);
      rv++
    }
  }
  return rv == args.length
};
goog.dom.classes.swap = function(element, fromClass, toClass) {
  var classes = goog.dom.classes.get(element);
  var removed = false;
  for(var i = 0;i < classes.length;i++) {
    if(classes[i] == fromClass) {
      goog.array.splice(classes, i--, 1);
      removed = true
    }
  }
  if(removed) {
    classes.push(toClass);
    element.className = classes.join(" ")
  }
  return removed
};
goog.dom.classes.addRemove = function(element, classesToRemove, classesToAdd) {
  var classes = goog.dom.classes.get(element);
  if(goog.isString(classesToRemove)) {
    goog.array.remove(classes, classesToRemove)
  }else {
    if(goog.isArray(classesToRemove)) {
      goog.dom.classes.remove_(classes, classesToRemove)
    }
  }
  if(goog.isString(classesToAdd) && !goog.array.contains(classes, classesToAdd)) {
    classes.push(classesToAdd)
  }else {
    if(goog.isArray(classesToAdd)) {
      goog.dom.classes.add_(classes, classesToAdd)
    }
  }
  element.className = classes.join(" ")
};
goog.dom.classes.has = function(element, className) {
  return goog.array.contains(goog.dom.classes.get(element), className)
};
goog.dom.classes.enable = function(element, className, enabled) {
  if(enabled) {
    goog.dom.classes.add(element, className)
  }else {
    goog.dom.classes.remove(element, className)
  }
};
goog.dom.classes.toggle = function(element, className) {
  var add = !goog.dom.classes.has(element, className);
  goog.dom.classes.enable(element, className, add);
  return add
};
goog.provide("goog.math.Coordinate");
goog.math.Coordinate = function(opt_x, opt_y) {
  this.x = goog.isDef(opt_x) ? opt_x : 0;
  this.y = goog.isDef(opt_y) ? opt_y : 0
};
goog.math.Coordinate.prototype.clone = function() {
  return new goog.math.Coordinate(this.x, this.y)
};
if(goog.DEBUG) {
  goog.math.Coordinate.prototype.toString = function() {
    return"(" + this.x + ", " + this.y + ")"
  }
}
goog.math.Coordinate.equals = function(a, b) {
  if(a == b) {
    return true
  }
  if(!a || !b) {
    return false
  }
  return a.x == b.x && a.y == b.y
};
goog.math.Coordinate.distance = function(a, b) {
  var dx = a.x - b.x;
  var dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy)
};
goog.math.Coordinate.squaredDistance = function(a, b) {
  var dx = a.x - b.x;
  var dy = a.y - b.y;
  return dx * dx + dy * dy
};
goog.math.Coordinate.difference = function(a, b) {
  return new goog.math.Coordinate(a.x - b.x, a.y - b.y)
};
goog.math.Coordinate.sum = function(a, b) {
  return new goog.math.Coordinate(a.x + b.x, a.y + b.y)
};
goog.provide("goog.math.Size");
goog.math.Size = function(width, height) {
  this.width = width;
  this.height = height
};
goog.math.Size.equals = function(a, b) {
  if(a == b) {
    return true
  }
  if(!a || !b) {
    return false
  }
  return a.width == b.width && a.height == b.height
};
goog.math.Size.prototype.clone = function() {
  return new goog.math.Size(this.width, this.height)
};
if(goog.DEBUG) {
  goog.math.Size.prototype.toString = function() {
    return"(" + this.width + " x " + this.height + ")"
  }
}
goog.math.Size.prototype.getLongest = function() {
  return Math.max(this.width, this.height)
};
goog.math.Size.prototype.getShortest = function() {
  return Math.min(this.width, this.height)
};
goog.math.Size.prototype.area = function() {
  return this.width * this.height
};
goog.math.Size.prototype.perimeter = function() {
  return(this.width + this.height) * 2
};
goog.math.Size.prototype.aspectRatio = function() {
  return this.width / this.height
};
goog.math.Size.prototype.isEmpty = function() {
  return!this.area()
};
goog.math.Size.prototype.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
goog.math.Size.prototype.fitsInside = function(target) {
  return this.width <= target.width && this.height <= target.height
};
goog.math.Size.prototype.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
goog.math.Size.prototype.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
goog.math.Size.prototype.scale = function(s) {
  this.width *= s;
  this.height *= s;
  return this
};
goog.math.Size.prototype.scaleToFit = function(target) {
  var s = this.aspectRatio() > target.aspectRatio() ? target.width / this.width : target.height / this.height;
  return this.scale(s)
};
goog.provide("goog.dom");
goog.provide("goog.dom.DomHelper");
goog.provide("goog.dom.NodeType");
goog.require("goog.array");
goog.require("goog.dom.BrowserFeature");
goog.require("goog.dom.TagName");
goog.require("goog.dom.classes");
goog.require("goog.math.Coordinate");
goog.require("goog.math.Size");
goog.require("goog.object");
goog.require("goog.string");
goog.require("goog.userAgent");
goog.dom.ASSUME_QUIRKS_MODE = false;
goog.dom.ASSUME_STANDARDS_MODE = false;
goog.dom.COMPAT_MODE_KNOWN_ = goog.dom.ASSUME_QUIRKS_MODE || goog.dom.ASSUME_STANDARDS_MODE;
goog.dom.NodeType = {ELEMENT:1, ATTRIBUTE:2, TEXT:3, CDATA_SECTION:4, ENTITY_REFERENCE:5, ENTITY:6, PROCESSING_INSTRUCTION:7, COMMENT:8, DOCUMENT:9, DOCUMENT_TYPE:10, DOCUMENT_FRAGMENT:11, NOTATION:12};
goog.dom.getDomHelper = function(opt_element) {
  return opt_element ? new goog.dom.DomHelper(goog.dom.getOwnerDocument(opt_element)) : goog.dom.defaultDomHelper_ || (goog.dom.defaultDomHelper_ = new goog.dom.DomHelper)
};
goog.dom.defaultDomHelper_;
goog.dom.getDocument = function() {
  return document
};
goog.dom.getElement = function(element) {
  return goog.isString(element) ? document.getElementById(element) : element
};
goog.dom.$ = goog.dom.getElement;
goog.dom.getElementsByTagNameAndClass = function(opt_tag, opt_class, opt_el) {
  return goog.dom.getElementsByTagNameAndClass_(document, opt_tag, opt_class, opt_el)
};
goog.dom.getElementsByClass = function(className, opt_el) {
  var parent = opt_el || document;
  if(goog.dom.canUseQuerySelector_(parent)) {
    return parent.querySelectorAll("." + className)
  }else {
    if(parent.getElementsByClassName) {
      return parent.getElementsByClassName(className)
    }
  }
  return goog.dom.getElementsByTagNameAndClass_(document, "*", className, opt_el)
};
goog.dom.getElementByClass = function(className, opt_el) {
  var parent = opt_el || document;
  var retVal = null;
  if(goog.dom.canUseQuerySelector_(parent)) {
    retVal = parent.querySelector("." + className)
  }else {
    retVal = goog.dom.getElementsByClass(className, opt_el)[0]
  }
  return retVal || null
};
goog.dom.canUseQuerySelector_ = function(parent) {
  return parent.querySelectorAll && parent.querySelector && (!goog.userAgent.WEBKIT || goog.dom.isCss1CompatMode_(document) || goog.userAgent.isVersion("528"))
};
goog.dom.getElementsByTagNameAndClass_ = function(doc, opt_tag, opt_class, opt_el) {
  var parent = opt_el || doc;
  var tagName = opt_tag && opt_tag != "*" ? opt_tag.toUpperCase() : "";
  if(goog.dom.canUseQuerySelector_(parent) && (tagName || opt_class)) {
    var query = tagName + (opt_class ? "." + opt_class : "");
    return parent.querySelectorAll(query)
  }
  if(opt_class && parent.getElementsByClassName) {
    var els = parent.getElementsByClassName(opt_class);
    if(tagName) {
      var arrayLike = {};
      var len = 0;
      for(var i = 0, el;el = els[i];i++) {
        if(tagName == el.nodeName) {
          arrayLike[len++] = el
        }
      }
      arrayLike.length = len;
      return arrayLike
    }else {
      return els
    }
  }
  var els = parent.getElementsByTagName(tagName || "*");
  if(opt_class) {
    var arrayLike = {};
    var len = 0;
    for(var i = 0, el;el = els[i];i++) {
      var className = el.className;
      if(typeof className.split == "function" && goog.array.contains(className.split(/\s+/), opt_class)) {
        arrayLike[len++] = el
      }
    }
    arrayLike.length = len;
    return arrayLike
  }else {
    return els
  }
};
goog.dom.$$ = goog.dom.getElementsByTagNameAndClass;
goog.dom.setProperties = function(element, properties) {
  goog.object.forEach(properties, function(val, key) {
    if(key == "style") {
      element.style.cssText = val
    }else {
      if(key == "class") {
        element.className = val
      }else {
        if(key == "for") {
          element.htmlFor = val
        }else {
          if(key in goog.dom.DIRECT_ATTRIBUTE_MAP_) {
            element.setAttribute(goog.dom.DIRECT_ATTRIBUTE_MAP_[key], val)
          }else {
            element[key] = val
          }
        }
      }
    }
  })
};
goog.dom.DIRECT_ATTRIBUTE_MAP_ = {"cellpadding":"cellPadding", "cellspacing":"cellSpacing", "colspan":"colSpan", "rowspan":"rowSpan", "valign":"vAlign", "height":"height", "width":"width", "usemap":"useMap", "frameborder":"frameBorder", "maxlength":"maxLength", "type":"type"};
goog.dom.getViewportSize = function(opt_window) {
  return goog.dom.getViewportSize_(opt_window || window)
};
goog.dom.getViewportSize_ = function(win) {
  var doc = win.document;
  if(goog.userAgent.WEBKIT && !goog.userAgent.isVersion("500") && !goog.userAgent.MOBILE) {
    if(typeof win.innerHeight == "undefined") {
      win = window
    }
    var innerHeight = win.innerHeight;
    var scrollHeight = win.document.documentElement.scrollHeight;
    if(win == win.top) {
      if(scrollHeight < innerHeight) {
        innerHeight -= 15
      }
    }
    return new goog.math.Size(win.innerWidth, innerHeight)
  }
  var el = goog.dom.isCss1CompatMode_(doc) ? doc.documentElement : doc.body;
  return new goog.math.Size(el.clientWidth, el.clientHeight)
};
goog.dom.getDocumentHeight = function() {
  return goog.dom.getDocumentHeight_(window)
};
goog.dom.getDocumentHeight_ = function(win) {
  var doc = win.document;
  var height = 0;
  if(doc) {
    var vh = goog.dom.getViewportSize_(win).height;
    var body = doc.body;
    var docEl = doc.documentElement;
    if(goog.dom.isCss1CompatMode_(doc) && docEl.scrollHeight) {
      height = docEl.scrollHeight != vh ? docEl.scrollHeight : docEl.offsetHeight
    }else {
      var sh = docEl.scrollHeight;
      var oh = docEl.offsetHeight;
      if(docEl.clientHeight != oh) {
        sh = body.scrollHeight;
        oh = body.offsetHeight
      }
      if(sh > vh) {
        height = sh > oh ? sh : oh
      }else {
        height = sh < oh ? sh : oh
      }
    }
  }
  return height
};
goog.dom.getPageScroll = function(opt_window) {
  var win = opt_window || goog.global || window;
  return goog.dom.getDomHelper(win.document).getDocumentScroll()
};
goog.dom.getDocumentScroll = function() {
  return goog.dom.getDocumentScroll_(document)
};
goog.dom.getDocumentScroll_ = function(doc) {
  var el = goog.dom.getDocumentScrollElement_(doc);
  var win = goog.dom.getWindow_(doc);
  return new goog.math.Coordinate(win.pageXOffset || el.scrollLeft, win.pageYOffset || el.scrollTop)
};
goog.dom.getDocumentScrollElement = function() {
  return goog.dom.getDocumentScrollElement_(document)
};
goog.dom.getDocumentScrollElement_ = function(doc) {
  return!goog.userAgent.WEBKIT && goog.dom.isCss1CompatMode_(doc) ? doc.documentElement : doc.body
};
goog.dom.getWindow = function(opt_doc) {
  return opt_doc ? goog.dom.getWindow_(opt_doc) : window
};
goog.dom.getWindow_ = function(doc) {
  return doc.parentWindow || doc.defaultView
};
goog.dom.createDom = function(tagName, opt_attributes, var_args) {
  return goog.dom.createDom_(document, arguments)
};
goog.dom.createDom_ = function(doc, args) {
  var tagName = args[0];
  var attributes = args[1];
  if(!goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES && attributes && (attributes.name || attributes.type)) {
    var tagNameArr = ["<", tagName];
    if(attributes.name) {
      tagNameArr.push(' name="', goog.string.htmlEscape(attributes.name), '"')
    }
    if(attributes.type) {
      tagNameArr.push(' type="', goog.string.htmlEscape(attributes.type), '"');
      var clone = {};
      goog.object.extend(clone, attributes);
      attributes = clone;
      delete attributes.type
    }
    tagNameArr.push(">");
    tagName = tagNameArr.join("")
  }
  var element = doc.createElement(tagName);
  if(attributes) {
    if(goog.isString(attributes)) {
      element.className = attributes
    }else {
      if(goog.isArray(attributes)) {
        goog.dom.classes.add.apply(null, [element].concat(attributes))
      }else {
        goog.dom.setProperties(element, attributes)
      }
    }
  }
  if(args.length > 2) {
    goog.dom.append_(doc, element, args, 2)
  }
  return element
};
goog.dom.append_ = function(doc, parent, args, startIndex) {
  function childHandler(child) {
    if(child) {
      parent.appendChild(goog.isString(child) ? doc.createTextNode(child) : child)
    }
  }
  for(var i = startIndex;i < args.length;i++) {
    var arg = args[i];
    if(goog.isArrayLike(arg) && !goog.dom.isNodeLike(arg)) {
      goog.array.forEach(goog.dom.isNodeList(arg) ? goog.array.clone(arg) : arg, childHandler)
    }else {
      childHandler(arg)
    }
  }
};
goog.dom.$dom = goog.dom.createDom;
goog.dom.createElement = function(name) {
  return document.createElement(name)
};
goog.dom.createTextNode = function(content) {
  return document.createTextNode(content)
};
goog.dom.createTable = function(rows, columns, opt_fillWithNbsp) {
  return goog.dom.createTable_(document, rows, columns, !!opt_fillWithNbsp)
};
goog.dom.createTable_ = function(doc, rows, columns, fillWithNbsp) {
  var rowHtml = ["<tr>"];
  for(var i = 0;i < columns;i++) {
    rowHtml.push(fillWithNbsp ? "<td>&nbsp;</td>" : "<td></td>")
  }
  rowHtml.push("</tr>");
  rowHtml = rowHtml.join("");
  var totalHtml = ["<table>"];
  for(i = 0;i < rows;i++) {
    totalHtml.push(rowHtml)
  }
  totalHtml.push("</table>");
  var elem = doc.createElement(goog.dom.TagName.DIV);
  elem.innerHTML = totalHtml.join("");
  return elem.removeChild(elem.firstChild)
};
goog.dom.htmlToDocumentFragment = function(htmlString) {
  return goog.dom.htmlToDocumentFragment_(document, htmlString)
};
goog.dom.htmlToDocumentFragment_ = function(doc, htmlString) {
  var tempDiv = doc.createElement("div");
  if(goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT) {
    tempDiv.innerHTML = "<br>" + htmlString;
    tempDiv.removeChild(tempDiv.firstChild)
  }else {
    tempDiv.innerHTML = htmlString
  }
  if(tempDiv.childNodes.length == 1) {
    return tempDiv.removeChild(tempDiv.firstChild)
  }else {
    var fragment = doc.createDocumentFragment();
    while(tempDiv.firstChild) {
      fragment.appendChild(tempDiv.firstChild)
    }
    return fragment
  }
};
goog.dom.getCompatMode = function() {
  return goog.dom.isCss1CompatMode() ? "CSS1Compat" : "BackCompat"
};
goog.dom.isCss1CompatMode = function() {
  return goog.dom.isCss1CompatMode_(document)
};
goog.dom.isCss1CompatMode_ = function(doc) {
  if(goog.dom.COMPAT_MODE_KNOWN_) {
    return goog.dom.ASSUME_STANDARDS_MODE
  }
  return doc.compatMode == "CSS1Compat"
};
goog.dom.canHaveChildren = function(node) {
  if(node.nodeType != goog.dom.NodeType.ELEMENT) {
    return false
  }
  switch(node.tagName) {
    case goog.dom.TagName.APPLET:
    ;
    case goog.dom.TagName.AREA:
    ;
    case goog.dom.TagName.BASE:
    ;
    case goog.dom.TagName.BR:
    ;
    case goog.dom.TagName.COL:
    ;
    case goog.dom.TagName.FRAME:
    ;
    case goog.dom.TagName.HR:
    ;
    case goog.dom.TagName.IMG:
    ;
    case goog.dom.TagName.INPUT:
    ;
    case goog.dom.TagName.IFRAME:
    ;
    case goog.dom.TagName.ISINDEX:
    ;
    case goog.dom.TagName.LINK:
    ;
    case goog.dom.TagName.NOFRAMES:
    ;
    case goog.dom.TagName.NOSCRIPT:
    ;
    case goog.dom.TagName.META:
    ;
    case goog.dom.TagName.OBJECT:
    ;
    case goog.dom.TagName.PARAM:
    ;
    case goog.dom.TagName.SCRIPT:
    ;
    case goog.dom.TagName.STYLE:
      return false
  }
  return true
};
goog.dom.appendChild = function(parent, child) {
  parent.appendChild(child)
};
goog.dom.append = function(parent, var_args) {
  goog.dom.append_(goog.dom.getOwnerDocument(parent), parent, arguments, 1)
};
goog.dom.removeChildren = function(node) {
  var child;
  while(child = node.firstChild) {
    node.removeChild(child)
  }
};
goog.dom.insertSiblingBefore = function(newNode, refNode) {
  if(refNode.parentNode) {
    refNode.parentNode.insertBefore(newNode, refNode)
  }
};
goog.dom.insertSiblingAfter = function(newNode, refNode) {
  if(refNode.parentNode) {
    refNode.parentNode.insertBefore(newNode, refNode.nextSibling)
  }
};
goog.dom.insertChildAt = function(parent, child, index) {
  parent.insertBefore(child, parent.childNodes[index] || null)
};
goog.dom.removeNode = function(node) {
  return node && node.parentNode ? node.parentNode.removeChild(node) : null
};
goog.dom.replaceNode = function(newNode, oldNode) {
  var parent = oldNode.parentNode;
  if(parent) {
    parent.replaceChild(newNode, oldNode)
  }
};
goog.dom.flattenElement = function(element) {
  var child, parent = element.parentNode;
  if(parent && parent.nodeType != goog.dom.NodeType.DOCUMENT_FRAGMENT) {
    if(element.removeNode) {
      return element.removeNode(false)
    }else {
      while(child = element.firstChild) {
        parent.insertBefore(child, element)
      }
      return goog.dom.removeNode(element)
    }
  }
};
goog.dom.getChildren = function(element) {
  if(goog.dom.BrowserFeature.CAN_USE_CHILDREN_ATTRIBUTE && element.children != undefined) {
    return element.children
  }
  return goog.array.filter(element.childNodes, function(node) {
    return node.nodeType == goog.dom.NodeType.ELEMENT
  })
};
goog.dom.getFirstElementChild = function(node) {
  if(node.firstElementChild != undefined) {
    return node.firstElementChild
  }
  return goog.dom.getNextElementNode_(node.firstChild, true)
};
goog.dom.getLastElementChild = function(node) {
  if(node.lastElementChild != undefined) {
    return node.lastElementChild
  }
  return goog.dom.getNextElementNode_(node.lastChild, false)
};
goog.dom.getNextElementSibling = function(node) {
  if(node.nextElementSibling != undefined) {
    return node.nextElementSibling
  }
  return goog.dom.getNextElementNode_(node.nextSibling, true)
};
goog.dom.getPreviousElementSibling = function(node) {
  if(node.previousElementSibling != undefined) {
    return node.previousElementSibling
  }
  return goog.dom.getNextElementNode_(node.previousSibling, false)
};
goog.dom.getNextElementNode_ = function(node, forward) {
  while(node && node.nodeType != goog.dom.NodeType.ELEMENT) {
    node = forward ? node.nextSibling : node.previousSibling
  }
  return node
};
goog.dom.getNextNode = function(node) {
  if(!node) {
    return null
  }
  if(node.firstChild) {
    return node.firstChild
  }
  while(node && !node.nextSibling) {
    node = node.parentNode
  }
  return node ? node.nextSibling : null
};
goog.dom.getPreviousNode = function(node) {
  if(!node) {
    return null
  }
  if(!node.previousSibling) {
    return node.parentNode
  }
  node = node.previousSibling;
  while(node && node.lastChild) {
    node = node.lastChild
  }
  return node
};
goog.dom.isNodeLike = function(obj) {
  return goog.isObject(obj) && obj.nodeType > 0
};
goog.dom.isWindow = function(obj) {
  return goog.isObject(obj) && obj["window"] == obj
};
goog.dom.contains = function(parent, descendant) {
  if(parent.contains && descendant.nodeType == goog.dom.NodeType.ELEMENT) {
    return parent == descendant || parent.contains(descendant)
  }
  if(typeof parent.compareDocumentPosition != "undefined") {
    return parent == descendant || Boolean(parent.compareDocumentPosition(descendant) & 16)
  }
  while(descendant && parent != descendant) {
    descendant = descendant.parentNode
  }
  return descendant == parent
};
goog.dom.compareNodeOrder = function(node1, node2) {
  if(node1 == node2) {
    return 0
  }
  if(node1.compareDocumentPosition) {
    return node1.compareDocumentPosition(node2) & 2 ? 1 : -1
  }
  if("sourceIndex" in node1 || node1.parentNode && "sourceIndex" in node1.parentNode) {
    var isElement1 = node1.nodeType == goog.dom.NodeType.ELEMENT;
    var isElement2 = node2.nodeType == goog.dom.NodeType.ELEMENT;
    if(isElement1 && isElement2) {
      return node1.sourceIndex - node2.sourceIndex
    }else {
      var parent1 = node1.parentNode;
      var parent2 = node2.parentNode;
      if(parent1 == parent2) {
        return goog.dom.compareSiblingOrder_(node1, node2)
      }
      if(!isElement1 && goog.dom.contains(parent1, node2)) {
        return-1 * goog.dom.compareParentsDescendantNodeIe_(node1, node2)
      }
      if(!isElement2 && goog.dom.contains(parent2, node1)) {
        return goog.dom.compareParentsDescendantNodeIe_(node2, node1)
      }
      return(isElement1 ? node1.sourceIndex : parent1.sourceIndex) - (isElement2 ? node2.sourceIndex : parent2.sourceIndex)
    }
  }
  var doc = goog.dom.getOwnerDocument(node1);
  var range1, range2;
  range1 = doc.createRange();
  range1.selectNode(node1);
  range1.collapse(true);
  range2 = doc.createRange();
  range2.selectNode(node2);
  range2.collapse(true);
  return range1.compareBoundaryPoints(goog.global["Range"].START_TO_END, range2)
};
goog.dom.compareParentsDescendantNodeIe_ = function(textNode, node) {
  var parent = textNode.parentNode;
  if(parent == node) {
    return-1
  }
  var sibling = node;
  while(sibling.parentNode != parent) {
    sibling = sibling.parentNode
  }
  return goog.dom.compareSiblingOrder_(sibling, textNode)
};
goog.dom.compareSiblingOrder_ = function(node1, node2) {
  var s = node2;
  while(s = s.previousSibling) {
    if(s == node1) {
      return-1
    }
  }
  return 1
};
goog.dom.findCommonAncestor = function(var_args) {
  var i, count = arguments.length;
  if(!count) {
    return null
  }else {
    if(count == 1) {
      return arguments[0]
    }
  }
  var paths = [];
  var minLength = Infinity;
  for(i = 0;i < count;i++) {
    var ancestors = [];
    var node = arguments[i];
    while(node) {
      ancestors.unshift(node);
      node = node.parentNode
    }
    paths.push(ancestors);
    minLength = Math.min(minLength, ancestors.length)
  }
  var output = null;
  for(i = 0;i < minLength;i++) {
    var first = paths[0][i];
    for(var j = 1;j < count;j++) {
      if(first != paths[j][i]) {
        return output
      }
    }
    output = first
  }
  return output
};
goog.dom.getOwnerDocument = function(node) {
  return node.nodeType == goog.dom.NodeType.DOCUMENT ? node : node.ownerDocument || node.document
};
goog.dom.getFrameContentDocument = function(frame) {
  var doc;
  if(goog.userAgent.WEBKIT) {
    doc = frame.document || frame.contentWindow.document
  }else {
    doc = frame.contentDocument || frame.contentWindow.document
  }
  return doc
};
goog.dom.getFrameContentWindow = function(frame) {
  return frame.contentWindow || goog.dom.getWindow_(goog.dom.getFrameContentDocument(frame))
};
goog.dom.setTextContent = function(element, text) {
  if("textContent" in element) {
    element.textContent = text
  }else {
    if(element.firstChild && element.firstChild.nodeType == goog.dom.NodeType.TEXT) {
      while(element.lastChild != element.firstChild) {
        element.removeChild(element.lastChild)
      }
      element.firstChild.data = text
    }else {
      goog.dom.removeChildren(element);
      var doc = goog.dom.getOwnerDocument(element);
      element.appendChild(doc.createTextNode(text))
    }
  }
};
goog.dom.getOuterHtml = function(element) {
  if("outerHTML" in element) {
    return element.outerHTML
  }else {
    var doc = goog.dom.getOwnerDocument(element);
    var div = doc.createElement("div");
    div.appendChild(element.cloneNode(true));
    return div.innerHTML
  }
};
goog.dom.findNode = function(root, p) {
  var rv = [];
  var found = goog.dom.findNodes_(root, p, rv, true);
  return found ? rv[0] : undefined
};
goog.dom.findNodes = function(root, p) {
  var rv = [];
  goog.dom.findNodes_(root, p, rv, false);
  return rv
};
goog.dom.findNodes_ = function(root, p, rv, findOne) {
  if(root != null) {
    for(var i = 0, child;child = root.childNodes[i];i++) {
      if(p(child)) {
        rv.push(child);
        if(findOne) {
          return true
        }
      }
      if(goog.dom.findNodes_(child, p, rv, findOne)) {
        return true
      }
    }
  }
  return false
};
goog.dom.TAGS_TO_IGNORE_ = {"SCRIPT":1, "STYLE":1, "HEAD":1, "IFRAME":1, "OBJECT":1};
goog.dom.PREDEFINED_TAG_VALUES_ = {"IMG":" ", "BR":"\n"};
goog.dom.isFocusableTabIndex = function(element) {
  var attrNode = element.getAttributeNode("tabindex");
  if(attrNode && attrNode.specified) {
    var index = element.tabIndex;
    return goog.isNumber(index) && index >= 0
  }
  return false
};
goog.dom.setFocusableTabIndex = function(element, enable) {
  if(enable) {
    element.tabIndex = 0
  }else {
    element.removeAttribute("tabIndex")
  }
};
goog.dom.getTextContent = function(node) {
  var textContent;
  if(goog.dom.BrowserFeature.CAN_USE_INNER_TEXT && "innerText" in node) {
    textContent = goog.string.canonicalizeNewlines(node.innerText)
  }else {
    var buf = [];
    goog.dom.getTextContent_(node, buf, true);
    textContent = buf.join("")
  }
  textContent = textContent.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  textContent = textContent.replace(/\u200B/g, "");
  if(!goog.userAgent.IE) {
    textContent = textContent.replace(/ +/g, " ")
  }
  if(textContent != " ") {
    textContent = textContent.replace(/^\s*/, "")
  }
  return textContent
};
goog.dom.getRawTextContent = function(node) {
  var buf = [];
  goog.dom.getTextContent_(node, buf, false);
  return buf.join("")
};
goog.dom.getTextContent_ = function(node, buf, normalizeWhitespace) {
  if(node.nodeName in goog.dom.TAGS_TO_IGNORE_) {
  }else {
    if(node.nodeType == goog.dom.NodeType.TEXT) {
      if(normalizeWhitespace) {
        buf.push(String(node.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
      }else {
        buf.push(node.nodeValue)
      }
    }else {
      if(node.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
        buf.push(goog.dom.PREDEFINED_TAG_VALUES_[node.nodeName])
      }else {
        var child = node.firstChild;
        while(child) {
          goog.dom.getTextContent_(child, buf, normalizeWhitespace);
          child = child.nextSibling
        }
      }
    }
  }
};
goog.dom.getNodeTextLength = function(node) {
  return goog.dom.getTextContent(node).length
};
goog.dom.getNodeTextOffset = function(node, opt_offsetParent) {
  var root = opt_offsetParent || goog.dom.getOwnerDocument(node).body;
  var buf = [];
  while(node && node != root) {
    var cur = node;
    while(cur = cur.previousSibling) {
      buf.unshift(goog.dom.getTextContent(cur))
    }
    node = node.parentNode
  }
  return goog.string.trimLeft(buf.join("")).replace(/ +/g, " ").length
};
goog.dom.getNodeAtOffset = function(parent, offset, opt_result) {
  var stack = [parent], pos = 0, cur;
  while(stack.length > 0 && pos < offset) {
    cur = stack.pop();
    if(cur.nodeName in goog.dom.TAGS_TO_IGNORE_) {
    }else {
      if(cur.nodeType == goog.dom.NodeType.TEXT) {
        var text = cur.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " ");
        pos += text.length
      }else {
        if(cur.nodeName in goog.dom.PREDEFINED_TAG_VALUES_) {
          pos += goog.dom.PREDEFINED_TAG_VALUES_[cur.nodeName].length
        }else {
          for(var i = cur.childNodes.length - 1;i >= 0;i--) {
            stack.push(cur.childNodes[i])
          }
        }
      }
    }
  }
  if(goog.isObject(opt_result)) {
    opt_result.remainder = cur ? cur.nodeValue.length + offset - pos - 1 : 0;
    opt_result.node = cur
  }
  return cur
};
goog.dom.isNodeList = function(val) {
  if(val && typeof val.length == "number") {
    if(goog.isObject(val)) {
      return typeof val.item == "function" || typeof val.item == "string"
    }else {
      if(goog.isFunction(val)) {
        return typeof val.item == "function"
      }
    }
  }
  return false
};
goog.dom.getAncestorByTagNameAndClass = function(element, opt_tag, opt_class) {
  var tagName = opt_tag ? opt_tag.toUpperCase() : null;
  return goog.dom.getAncestor(element, function(node) {
    return(!tagName || node.nodeName == tagName) && (!opt_class || goog.dom.classes.has(node, opt_class))
  }, true)
};
goog.dom.getAncestorByClass = function(element, opt_class) {
  return goog.dom.getAncestorByTagNameAndClass(element, null, opt_class)
};
goog.dom.getAncestor = function(element, matcher, opt_includeNode, opt_maxSearchSteps) {
  if(!opt_includeNode) {
    element = element.parentNode
  }
  var ignoreSearchSteps = opt_maxSearchSteps == null;
  var steps = 0;
  while(element && (ignoreSearchSteps || steps <= opt_maxSearchSteps)) {
    if(matcher(element)) {
      return element
    }
    element = element.parentNode;
    steps++
  }
  return null
};
goog.dom.DomHelper = function(opt_document) {
  this.document_ = opt_document || goog.global.document || document
};
goog.dom.DomHelper.prototype.getDomHelper = goog.dom.getDomHelper;
goog.dom.DomHelper.prototype.setDocument = function(document) {
  this.document_ = document
};
goog.dom.DomHelper.prototype.getDocument = function() {
  return this.document_
};
goog.dom.DomHelper.prototype.getElement = function(element) {
  if(goog.isString(element)) {
    return this.document_.getElementById(element)
  }else {
    return element
  }
};
goog.dom.DomHelper.prototype.$ = goog.dom.DomHelper.prototype.getElement;
goog.dom.DomHelper.prototype.getElementsByTagNameAndClass = function(opt_tag, opt_class, opt_el) {
  return goog.dom.getElementsByTagNameAndClass_(this.document_, opt_tag, opt_class, opt_el)
};
goog.dom.DomHelper.prototype.getElementsByClass = function(className, opt_el) {
  var doc = opt_el || this.document_;
  return goog.dom.getElementsByClass(className, doc)
};
goog.dom.DomHelper.prototype.getElementByClass = function(className, opt_el) {
  var doc = opt_el || this.document_;
  return goog.dom.getElementByClass(className, doc)
};
goog.dom.DomHelper.prototype.$$ = goog.dom.DomHelper.prototype.getElementsByTagNameAndClass;
goog.dom.DomHelper.prototype.setProperties = goog.dom.setProperties;
goog.dom.DomHelper.prototype.getViewportSize = function(opt_window) {
  return goog.dom.getViewportSize(opt_window || this.getWindow())
};
goog.dom.DomHelper.prototype.getDocumentHeight = function() {
  return goog.dom.getDocumentHeight_(this.getWindow())
};
goog.dom.Appendable;
goog.dom.DomHelper.prototype.createDom = function(tagName, opt_attributes, var_args) {
  return goog.dom.createDom_(this.document_, arguments)
};
goog.dom.DomHelper.prototype.$dom = goog.dom.DomHelper.prototype.createDom;
goog.dom.DomHelper.prototype.createElement = function(name) {
  return this.document_.createElement(name)
};
goog.dom.DomHelper.prototype.createTextNode = function(content) {
  return this.document_.createTextNode(content)
};
goog.dom.DomHelper.prototype.createTable = function(rows, columns, opt_fillWithNbsp) {
  return goog.dom.createTable_(this.document_, rows, columns, !!opt_fillWithNbsp)
};
goog.dom.DomHelper.prototype.htmlToDocumentFragment = function(htmlString) {
  return goog.dom.htmlToDocumentFragment_(this.document_, htmlString)
};
goog.dom.DomHelper.prototype.getCompatMode = function() {
  return this.isCss1CompatMode() ? "CSS1Compat" : "BackCompat"
};
goog.dom.DomHelper.prototype.isCss1CompatMode = function() {
  return goog.dom.isCss1CompatMode_(this.document_)
};
goog.dom.DomHelper.prototype.getWindow = function() {
  return goog.dom.getWindow_(this.document_)
};
goog.dom.DomHelper.prototype.getDocumentScrollElement = function() {
  return goog.dom.getDocumentScrollElement_(this.document_)
};
goog.dom.DomHelper.prototype.getDocumentScroll = function() {
  return goog.dom.getDocumentScroll_(this.document_)
};
goog.dom.DomHelper.prototype.appendChild = goog.dom.appendChild;
goog.dom.DomHelper.prototype.append = goog.dom.append;
goog.dom.DomHelper.prototype.removeChildren = goog.dom.removeChildren;
goog.dom.DomHelper.prototype.insertSiblingBefore = goog.dom.insertSiblingBefore;
goog.dom.DomHelper.prototype.insertSiblingAfter = goog.dom.insertSiblingAfter;
goog.dom.DomHelper.prototype.removeNode = goog.dom.removeNode;
goog.dom.DomHelper.prototype.replaceNode = goog.dom.replaceNode;
goog.dom.DomHelper.prototype.flattenElement = goog.dom.flattenElement;
goog.dom.DomHelper.prototype.getFirstElementChild = goog.dom.getFirstElementChild;
goog.dom.DomHelper.prototype.getLastElementChild = goog.dom.getLastElementChild;
goog.dom.DomHelper.prototype.getNextElementSibling = goog.dom.getNextElementSibling;
goog.dom.DomHelper.prototype.getPreviousElementSibling = goog.dom.getPreviousElementSibling;
goog.dom.DomHelper.prototype.getNextNode = goog.dom.getNextNode;
goog.dom.DomHelper.prototype.getPreviousNode = goog.dom.getPreviousNode;
goog.dom.DomHelper.prototype.isNodeLike = goog.dom.isNodeLike;
goog.dom.DomHelper.prototype.contains = goog.dom.contains;
goog.dom.DomHelper.prototype.getOwnerDocument = goog.dom.getOwnerDocument;
goog.dom.DomHelper.prototype.getFrameContentDocument = goog.dom.getFrameContentDocument;
goog.dom.DomHelper.prototype.getFrameContentWindow = goog.dom.getFrameContentWindow;
goog.dom.DomHelper.prototype.setTextContent = goog.dom.setTextContent;
goog.dom.DomHelper.prototype.findNode = goog.dom.findNode;
goog.dom.DomHelper.prototype.findNodes = goog.dom.findNodes;
goog.dom.DomHelper.prototype.getTextContent = goog.dom.getTextContent;
goog.dom.DomHelper.prototype.getNodeTextLength = goog.dom.getNodeTextLength;
goog.dom.DomHelper.prototype.getNodeTextOffset = goog.dom.getNodeTextOffset;
goog.dom.DomHelper.prototype.getAncestorByTagNameAndClass = goog.dom.getAncestorByTagNameAndClass;
goog.dom.DomHelper.prototype.getAncestor = goog.dom.getAncestor;
goog.provide("domina.support");
goog.require("cljs.core");
goog.require("goog.events");
goog.require("goog.dom");
var div__6994 = document.createElement("div");
var test_html__6995 = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
div__6994.innerHTML = test_html__6995;
domina.support.leading_whitespace_QMARK_ = cljs.core._EQ_.call(null, div__6994.firstChild.nodeType, 3);
domina.support.extraneous_tbody_QMARK_ = cljs.core._EQ_.call(null, div__6994.getElementsByTagName("tbody").length, 0);
domina.support.unscoped_html_elements_QMARK_ = cljs.core._EQ_.call(null, div__6994.getElementsByTagName("link").length, 0);
goog.provide("goog.dom.xml");
goog.require("goog.dom");
goog.require("goog.dom.NodeType");
goog.dom.xml.MAX_XML_SIZE_KB = 2 * 1024;
goog.dom.xml.MAX_ELEMENT_DEPTH = 256;
goog.dom.xml.createDocument = function(opt_rootTagName, opt_namespaceUri) {
  if(opt_namespaceUri && !opt_rootTagName) {
    throw Error("Can't create document with namespace and no root tag");
  }
  if(document.implementation && document.implementation.createDocument) {
    return document.implementation.createDocument(opt_namespaceUri || "", opt_rootTagName || "", null)
  }else {
    if(typeof ActiveXObject != "undefined") {
      var doc = goog.dom.xml.createMsXmlDocument_();
      if(doc) {
        if(opt_rootTagName) {
          doc.appendChild(doc.createNode(goog.dom.NodeType.ELEMENT, opt_rootTagName, opt_namespaceUri || ""))
        }
        return doc
      }
    }
  }
  throw Error("Your browser does not support creating new documents");
};
goog.dom.xml.loadXml = function(xml) {
  if(typeof DOMParser != "undefined") {
    return(new DOMParser).parseFromString(xml, "application/xml")
  }else {
    if(typeof ActiveXObject != "undefined") {
      var doc = goog.dom.xml.createMsXmlDocument_();
      doc.loadXML(xml);
      return doc
    }
  }
  throw Error("Your browser does not support loading xml documents");
};
goog.dom.xml.serialize = function(xml) {
  if(typeof XMLSerializer != "undefined") {
    return(new XMLSerializer).serializeToString(xml)
  }
  var text = xml.xml;
  if(text) {
    return text
  }
  throw Error("Your browser does not support serializing XML documents");
};
goog.dom.xml.selectSingleNode = function(node, path) {
  if(typeof node.selectSingleNode != "undefined") {
    var doc = goog.dom.getOwnerDocument(node);
    if(typeof doc.setProperty != "undefined") {
      doc.setProperty("SelectionLanguage", "XPath")
    }
    return node.selectSingleNode(path)
  }else {
    if(document.implementation.hasFeature("XPath", "3.0")) {
      var doc = goog.dom.getOwnerDocument(node);
      var resolver = doc.createNSResolver(doc.documentElement);
      var result = doc.evaluate(path, node, resolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      return result.singleNodeValue
    }
  }
  return null
};
goog.dom.xml.selectNodes = function(node, path) {
  if(typeof node.selectNodes != "undefined") {
    var doc = goog.dom.getOwnerDocument(node);
    if(typeof doc.setProperty != "undefined") {
      doc.setProperty("SelectionLanguage", "XPath")
    }
    return node.selectNodes(path)
  }else {
    if(document.implementation.hasFeature("XPath", "3.0")) {
      var doc = goog.dom.getOwnerDocument(node);
      var resolver = doc.createNSResolver(doc.documentElement);
      var nodes = doc.evaluate(path, node, resolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
      var results = [];
      var count = nodes.snapshotLength;
      for(var i = 0;i < count;i++) {
        results.push(nodes.snapshotItem(i))
      }
      return results
    }else {
      return[]
    }
  }
};
goog.dom.xml.createMsXmlDocument_ = function() {
  var doc = new ActiveXObject("MSXML2.DOMDocument");
  if(doc) {
    doc.resolveExternals = false;
    doc.validateOnParse = false;
    try {
      doc.setProperty("ProhibitDTD", true);
      doc.setProperty("MaxXMLSize", goog.dom.xml.MAX_XML_SIZE_KB);
      doc.setProperty("MaxElementDepth", goog.dom.xml.MAX_ELEMENT_DEPTH)
    }catch(e) {
    }
  }
  return doc
};
goog.provide("goog.iter");
goog.provide("goog.iter.Iterator");
goog.provide("goog.iter.StopIteration");
goog.require("goog.array");
goog.require("goog.asserts");
goog.iter.Iterable;
if("StopIteration" in goog.global) {
  goog.iter.StopIteration = goog.global["StopIteration"]
}else {
  goog.iter.StopIteration = Error("StopIteration")
}
goog.iter.Iterator = function() {
};
goog.iter.Iterator.prototype.next = function() {
  throw goog.iter.StopIteration;
};
goog.iter.Iterator.prototype.__iterator__ = function(opt_keys) {
  return this
};
goog.iter.toIterator = function(iterable) {
  if(iterable instanceof goog.iter.Iterator) {
    return iterable
  }
  if(typeof iterable.__iterator__ == "function") {
    return iterable.__iterator__(false)
  }
  if(goog.isArrayLike(iterable)) {
    var i = 0;
    var newIter = new goog.iter.Iterator;
    newIter.next = function() {
      while(true) {
        if(i >= iterable.length) {
          throw goog.iter.StopIteration;
        }
        if(!(i in iterable)) {
          i++;
          continue
        }
        return iterable[i++]
      }
    };
    return newIter
  }
  throw Error("Not implemented");
};
goog.iter.forEach = function(iterable, f, opt_obj) {
  if(goog.isArrayLike(iterable)) {
    try {
      goog.array.forEach(iterable, f, opt_obj)
    }catch(ex) {
      if(ex !== goog.iter.StopIteration) {
        throw ex;
      }
    }
  }else {
    iterable = goog.iter.toIterator(iterable);
    try {
      while(true) {
        f.call(opt_obj, iterable.next(), undefined, iterable)
      }
    }catch(ex) {
      if(ex !== goog.iter.StopIteration) {
        throw ex;
      }
    }
  }
};
goog.iter.filter = function(iterable, f, opt_obj) {
  iterable = goog.iter.toIterator(iterable);
  var newIter = new goog.iter.Iterator;
  newIter.next = function() {
    while(true) {
      var val = iterable.next();
      if(f.call(opt_obj, val, undefined, iterable)) {
        return val
      }
    }
  };
  return newIter
};
goog.iter.range = function(startOrStop, opt_stop, opt_step) {
  var start = 0;
  var stop = startOrStop;
  var step = opt_step || 1;
  if(arguments.length > 1) {
    start = startOrStop;
    stop = opt_stop
  }
  if(step == 0) {
    throw Error("Range step argument must not be zero");
  }
  var newIter = new goog.iter.Iterator;
  newIter.next = function() {
    if(step > 0 && start >= stop || step < 0 && start <= stop) {
      throw goog.iter.StopIteration;
    }
    var rv = start;
    start += step;
    return rv
  };
  return newIter
};
goog.iter.join = function(iterable, deliminator) {
  return goog.iter.toArray(iterable).join(deliminator)
};
goog.iter.map = function(iterable, f, opt_obj) {
  iterable = goog.iter.toIterator(iterable);
  var newIter = new goog.iter.Iterator;
  newIter.next = function() {
    while(true) {
      var val = iterable.next();
      return f.call(opt_obj, val, undefined, iterable)
    }
  };
  return newIter
};
goog.iter.reduce = function(iterable, f, val, opt_obj) {
  var rval = val;
  goog.iter.forEach(iterable, function(val) {
    rval = f.call(opt_obj, rval, val)
  });
  return rval
};
goog.iter.some = function(iterable, f, opt_obj) {
  iterable = goog.iter.toIterator(iterable);
  try {
    while(true) {
      if(f.call(opt_obj, iterable.next(), undefined, iterable)) {
        return true
      }
    }
  }catch(ex) {
    if(ex !== goog.iter.StopIteration) {
      throw ex;
    }
  }
  return false
};
goog.iter.every = function(iterable, f, opt_obj) {
  iterable = goog.iter.toIterator(iterable);
  try {
    while(true) {
      if(!f.call(opt_obj, iterable.next(), undefined, iterable)) {
        return false
      }
    }
  }catch(ex) {
    if(ex !== goog.iter.StopIteration) {
      throw ex;
    }
  }
  return true
};
goog.iter.chain = function(var_args) {
  var args = arguments;
  var length = args.length;
  var i = 0;
  var newIter = new goog.iter.Iterator;
  newIter.next = function() {
    try {
      if(i >= length) {
        throw goog.iter.StopIteration;
      }
      var current = goog.iter.toIterator(args[i]);
      return current.next()
    }catch(ex) {
      if(ex !== goog.iter.StopIteration || i >= length) {
        throw ex;
      }else {
        i++;
        return this.next()
      }
    }
  };
  return newIter
};
goog.iter.dropWhile = function(iterable, f, opt_obj) {
  iterable = goog.iter.toIterator(iterable);
  var newIter = new goog.iter.Iterator;
  var dropping = true;
  newIter.next = function() {
    while(true) {
      var val = iterable.next();
      if(dropping && f.call(opt_obj, val, undefined, iterable)) {
        continue
      }else {
        dropping = false
      }
      return val
    }
  };
  return newIter
};
goog.iter.takeWhile = function(iterable, f, opt_obj) {
  iterable = goog.iter.toIterator(iterable);
  var newIter = new goog.iter.Iterator;
  var taking = true;
  newIter.next = function() {
    while(true) {
      if(taking) {
        var val = iterable.next();
        if(f.call(opt_obj, val, undefined, iterable)) {
          return val
        }else {
          taking = false
        }
      }else {
        throw goog.iter.StopIteration;
      }
    }
  };
  return newIter
};
goog.iter.toArray = function(iterable) {
  if(goog.isArrayLike(iterable)) {
    return goog.array.toArray(iterable)
  }
  iterable = goog.iter.toIterator(iterable);
  var array = [];
  goog.iter.forEach(iterable, function(val) {
    array.push(val)
  });
  return array
};
goog.iter.equals = function(iterable1, iterable2) {
  iterable1 = goog.iter.toIterator(iterable1);
  iterable2 = goog.iter.toIterator(iterable2);
  var b1, b2;
  try {
    while(true) {
      b1 = b2 = false;
      var val1 = iterable1.next();
      b1 = true;
      var val2 = iterable2.next();
      b2 = true;
      if(val1 != val2) {
        return false
      }
    }
  }catch(ex) {
    if(ex !== goog.iter.StopIteration) {
      throw ex;
    }else {
      if(b1 && !b2) {
        return false
      }
      if(!b2) {
        try {
          val2 = iterable2.next();
          return false
        }catch(ex1) {
          if(ex1 !== goog.iter.StopIteration) {
            throw ex1;
          }
          return true
        }
      }
    }
  }
  return false
};
goog.iter.nextOrValue = function(iterable, defaultValue) {
  try {
    return goog.iter.toIterator(iterable).next()
  }catch(e) {
    if(e != goog.iter.StopIteration) {
      throw e;
    }
    return defaultValue
  }
};
goog.iter.product = function(var_args) {
  var someArrayEmpty = goog.array.some(arguments, function(arr) {
    return!arr.length
  });
  if(someArrayEmpty || !arguments.length) {
    return new goog.iter.Iterator
  }
  var iter = new goog.iter.Iterator;
  var arrays = arguments;
  var indicies = goog.array.repeat(0, arrays.length);
  iter.next = function() {
    if(indicies) {
      var retVal = goog.array.map(indicies, function(valueIndex, arrayIndex) {
        return arrays[arrayIndex][valueIndex]
      });
      for(var i = indicies.length - 1;i >= 0;i--) {
        goog.asserts.assert(indicies);
        if(indicies[i] < arrays[i].length - 1) {
          indicies[i]++;
          break
        }
        if(i == 0) {
          indicies = null;
          break
        }
        indicies[i] = 0
      }
      return retVal
    }
    throw goog.iter.StopIteration;
  };
  return iter
};
goog.provide("goog.structs");
goog.require("goog.array");
goog.require("goog.object");
goog.structs.getCount = function(col) {
  if(typeof col.getCount == "function") {
    return col.getCount()
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    return col.length
  }
  return goog.object.getCount(col)
};
goog.structs.getValues = function(col) {
  if(typeof col.getValues == "function") {
    return col.getValues()
  }
  if(goog.isString(col)) {
    return col.split("")
  }
  if(goog.isArrayLike(col)) {
    var rv = [];
    var l = col.length;
    for(var i = 0;i < l;i++) {
      rv.push(col[i])
    }
    return rv
  }
  return goog.object.getValues(col)
};
goog.structs.getKeys = function(col) {
  if(typeof col.getKeys == "function") {
    return col.getKeys()
  }
  if(typeof col.getValues == "function") {
    return undefined
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    var rv = [];
    var l = col.length;
    for(var i = 0;i < l;i++) {
      rv.push(i)
    }
    return rv
  }
  return goog.object.getKeys(col)
};
goog.structs.contains = function(col, val) {
  if(typeof col.contains == "function") {
    return col.contains(val)
  }
  if(typeof col.containsValue == "function") {
    return col.containsValue(val)
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.contains(col, val)
  }
  return goog.object.containsValue(col, val)
};
goog.structs.isEmpty = function(col) {
  if(typeof col.isEmpty == "function") {
    return col.isEmpty()
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.isEmpty(col)
  }
  return goog.object.isEmpty(col)
};
goog.structs.clear = function(col) {
  if(typeof col.clear == "function") {
    col.clear()
  }else {
    if(goog.isArrayLike(col)) {
      goog.array.clear(col)
    }else {
      goog.object.clear(col)
    }
  }
};
goog.structs.forEach = function(col, f, opt_obj) {
  if(typeof col.forEach == "function") {
    col.forEach(f, opt_obj)
  }else {
    if(goog.isArrayLike(col) || goog.isString(col)) {
      goog.array.forEach(col, f, opt_obj)
    }else {
      var keys = goog.structs.getKeys(col);
      var values = goog.structs.getValues(col);
      var l = values.length;
      for(var i = 0;i < l;i++) {
        f.call(opt_obj, values[i], keys && keys[i], col)
      }
    }
  }
};
goog.structs.filter = function(col, f, opt_obj) {
  if(typeof col.filter == "function") {
    return col.filter(f, opt_obj)
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.filter(col, f, opt_obj)
  }
  var rv;
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  if(keys) {
    rv = {};
    for(var i = 0;i < l;i++) {
      if(f.call(opt_obj, values[i], keys[i], col)) {
        rv[keys[i]] = values[i]
      }
    }
  }else {
    rv = [];
    for(var i = 0;i < l;i++) {
      if(f.call(opt_obj, values[i], undefined, col)) {
        rv.push(values[i])
      }
    }
  }
  return rv
};
goog.structs.map = function(col, f, opt_obj) {
  if(typeof col.map == "function") {
    return col.map(f, opt_obj)
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.map(col, f, opt_obj)
  }
  var rv;
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  if(keys) {
    rv = {};
    for(var i = 0;i < l;i++) {
      rv[keys[i]] = f.call(opt_obj, values[i], keys[i], col)
    }
  }else {
    rv = [];
    for(var i = 0;i < l;i++) {
      rv[i] = f.call(opt_obj, values[i], undefined, col)
    }
  }
  return rv
};
goog.structs.some = function(col, f, opt_obj) {
  if(typeof col.some == "function") {
    return col.some(f, opt_obj)
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.some(col, f, opt_obj)
  }
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  for(var i = 0;i < l;i++) {
    if(f.call(opt_obj, values[i], keys && keys[i], col)) {
      return true
    }
  }
  return false
};
goog.structs.every = function(col, f, opt_obj) {
  if(typeof col.every == "function") {
    return col.every(f, opt_obj)
  }
  if(goog.isArrayLike(col) || goog.isString(col)) {
    return goog.array.every(col, f, opt_obj)
  }
  var keys = goog.structs.getKeys(col);
  var values = goog.structs.getValues(col);
  var l = values.length;
  for(var i = 0;i < l;i++) {
    if(!f.call(opt_obj, values[i], keys && keys[i], col)) {
      return false
    }
  }
  return true
};
goog.provide("goog.structs.Map");
goog.require("goog.iter.Iterator");
goog.require("goog.iter.StopIteration");
goog.require("goog.object");
goog.require("goog.structs");
goog.structs.Map = function(opt_map, var_args) {
  this.map_ = {};
  this.keys_ = [];
  var argLength = arguments.length;
  if(argLength > 1) {
    if(argLength % 2) {
      throw Error("Uneven number of arguments");
    }
    for(var i = 0;i < argLength;i += 2) {
      this.set(arguments[i], arguments[i + 1])
    }
  }else {
    if(opt_map) {
      this.addAll(opt_map)
    }
  }
};
goog.structs.Map.prototype.count_ = 0;
goog.structs.Map.prototype.version_ = 0;
goog.structs.Map.prototype.getCount = function() {
  return this.count_
};
goog.structs.Map.prototype.getValues = function() {
  this.cleanupKeysArray_();
  var rv = [];
  for(var i = 0;i < this.keys_.length;i++) {
    var key = this.keys_[i];
    rv.push(this.map_[key])
  }
  return rv
};
goog.structs.Map.prototype.getKeys = function() {
  this.cleanupKeysArray_();
  return this.keys_.concat()
};
goog.structs.Map.prototype.containsKey = function(key) {
  return goog.structs.Map.hasKey_(this.map_, key)
};
goog.structs.Map.prototype.containsValue = function(val) {
  for(var i = 0;i < this.keys_.length;i++) {
    var key = this.keys_[i];
    if(goog.structs.Map.hasKey_(this.map_, key) && this.map_[key] == val) {
      return true
    }
  }
  return false
};
goog.structs.Map.prototype.equals = function(otherMap, opt_equalityFn) {
  if(this === otherMap) {
    return true
  }
  if(this.count_ != otherMap.getCount()) {
    return false
  }
  var equalityFn = opt_equalityFn || goog.structs.Map.defaultEquals;
  this.cleanupKeysArray_();
  for(var key, i = 0;key = this.keys_[i];i++) {
    if(!equalityFn(this.get(key), otherMap.get(key))) {
      return false
    }
  }
  return true
};
goog.structs.Map.defaultEquals = function(a, b) {
  return a === b
};
goog.structs.Map.prototype.isEmpty = function() {
  return this.count_ == 0
};
goog.structs.Map.prototype.clear = function() {
  this.map_ = {};
  this.keys_.length = 0;
  this.count_ = 0;
  this.version_ = 0
};
goog.structs.Map.prototype.remove = function(key) {
  if(goog.structs.Map.hasKey_(this.map_, key)) {
    delete this.map_[key];
    this.count_--;
    this.version_++;
    if(this.keys_.length > 2 * this.count_) {
      this.cleanupKeysArray_()
    }
    return true
  }
  return false
};
goog.structs.Map.prototype.cleanupKeysArray_ = function() {
  if(this.count_ != this.keys_.length) {
    var srcIndex = 0;
    var destIndex = 0;
    while(srcIndex < this.keys_.length) {
      var key = this.keys_[srcIndex];
      if(goog.structs.Map.hasKey_(this.map_, key)) {
        this.keys_[destIndex++] = key
      }
      srcIndex++
    }
    this.keys_.length = destIndex
  }
  if(this.count_ != this.keys_.length) {
    var seen = {};
    var srcIndex = 0;
    var destIndex = 0;
    while(srcIndex < this.keys_.length) {
      var key = this.keys_[srcIndex];
      if(!goog.structs.Map.hasKey_(seen, key)) {
        this.keys_[destIndex++] = key;
        seen[key] = 1
      }
      srcIndex++
    }
    this.keys_.length = destIndex
  }
};
goog.structs.Map.prototype.get = function(key, opt_val) {
  if(goog.structs.Map.hasKey_(this.map_, key)) {
    return this.map_[key]
  }
  return opt_val
};
goog.structs.Map.prototype.set = function(key, value) {
  if(!goog.structs.Map.hasKey_(this.map_, key)) {
    this.count_++;
    this.keys_.push(key);
    this.version_++
  }
  this.map_[key] = value
};
goog.structs.Map.prototype.addAll = function(map) {
  var keys, values;
  if(map instanceof goog.structs.Map) {
    keys = map.getKeys();
    values = map.getValues()
  }else {
    keys = goog.object.getKeys(map);
    values = goog.object.getValues(map)
  }
  for(var i = 0;i < keys.length;i++) {
    this.set(keys[i], values[i])
  }
};
goog.structs.Map.prototype.clone = function() {
  return new goog.structs.Map(this)
};
goog.structs.Map.prototype.transpose = function() {
  var transposed = new goog.structs.Map;
  for(var i = 0;i < this.keys_.length;i++) {
    var key = this.keys_[i];
    var value = this.map_[key];
    transposed.set(value, key)
  }
  return transposed
};
goog.structs.Map.prototype.toObject = function() {
  this.cleanupKeysArray_();
  var obj = {};
  for(var i = 0;i < this.keys_.length;i++) {
    var key = this.keys_[i];
    obj[key] = this.map_[key]
  }
  return obj
};
goog.structs.Map.prototype.getKeyIterator = function() {
  return this.__iterator__(true)
};
goog.structs.Map.prototype.getValueIterator = function() {
  return this.__iterator__(false)
};
goog.structs.Map.prototype.__iterator__ = function(opt_keys) {
  this.cleanupKeysArray_();
  var i = 0;
  var keys = this.keys_;
  var map = this.map_;
  var version = this.version_;
  var selfObj = this;
  var newIter = new goog.iter.Iterator;
  newIter.next = function() {
    while(true) {
      if(version != selfObj.version_) {
        throw Error("The map has changed since the iterator was created");
      }
      if(i >= keys.length) {
        throw goog.iter.StopIteration;
      }
      var key = keys[i++];
      return opt_keys ? key : map[key]
    }
  };
  return newIter
};
goog.structs.Map.hasKey_ = function(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
};
goog.provide("goog.dom.forms");
goog.require("goog.structs.Map");
goog.dom.forms.getFormDataMap = function(form) {
  var map = new goog.structs.Map;
  goog.dom.forms.getFormDataHelper_(form, map, goog.dom.forms.addFormDataToMap_);
  return map
};
goog.dom.forms.getFormDataString = function(form) {
  var sb = [];
  goog.dom.forms.getFormDataHelper_(form, sb, goog.dom.forms.addFormDataToStringBuffer_);
  return sb.join("&")
};
goog.dom.forms.getFormDataHelper_ = function(form, result, fnAppend) {
  var els = form.elements;
  for(var el, i = 0;el = els[i];i++) {
    if(el.disabled || el.tagName.toLowerCase() == "fieldset") {
      continue
    }
    var name = el.name;
    var type = el.type.toLowerCase();
    switch(type) {
      case "file":
      ;
      case "submit":
      ;
      case "reset":
      ;
      case "button":
        break;
      case "select-multiple":
        var values = goog.dom.forms.getValue(el);
        if(values != null) {
          for(var value, j = 0;value = values[j];j++) {
            fnAppend(result, name, value)
          }
        }
        break;
      default:
        var value = goog.dom.forms.getValue(el);
        if(value != null) {
          fnAppend(result, name, value)
        }
    }
  }
  var inputs = form.getElementsByTagName("input");
  for(var input, i = 0;input = inputs[i];i++) {
    if(input.form == form && input.type.toLowerCase() == "image") {
      name = input.name;
      fnAppend(result, name, input.value);
      fnAppend(result, name + ".x", "0");
      fnAppend(result, name + ".y", "0")
    }
  }
};
goog.dom.forms.addFormDataToMap_ = function(map, name, value) {
  var array = map.get(name);
  if(!array) {
    array = [];
    map.set(name, array)
  }
  array.push(value)
};
goog.dom.forms.addFormDataToStringBuffer_ = function(sb, name, value) {
  sb.push(encodeURIComponent(name) + "=" + encodeURIComponent(value))
};
goog.dom.forms.hasFileInput = function(form) {
  var els = form.elements;
  for(var el, i = 0;el = els[i];i++) {
    if(!el.disabled && el.type && el.type.toLowerCase() == "file") {
      return true
    }
  }
  return false
};
goog.dom.forms.setDisabled = function(el, disabled) {
  if(el.tagName == "FORM") {
    var els = el.elements;
    for(var i = 0;el = els[i];i++) {
      goog.dom.forms.setDisabled(el, disabled)
    }
  }else {
    if(disabled == true) {
      el.blur()
    }
    el.disabled = disabled
  }
};
goog.dom.forms.focusAndSelect = function(el) {
  el.focus();
  if(el.select) {
    el.select()
  }
};
goog.dom.forms.hasValue = function(el) {
  var value = goog.dom.forms.getValue(el);
  return!!value
};
goog.dom.forms.hasValueByName = function(form, name) {
  var value = goog.dom.forms.getValueByName(form, name);
  return!!value
};
goog.dom.forms.getValue = function(el) {
  var type = el.type;
  if(!goog.isDef(type)) {
    return null
  }
  switch(type.toLowerCase()) {
    case "checkbox":
    ;
    case "radio":
      return goog.dom.forms.getInputChecked_(el);
    case "select-one":
      return goog.dom.forms.getSelectSingle_(el);
    case "select-multiple":
      return goog.dom.forms.getSelectMultiple_(el);
    default:
      return goog.isDef(el.value) ? el.value : null
  }
};
goog.dom.$F = goog.dom.forms.getValue;
goog.dom.forms.getValueByName = function(form, name) {
  var els = form.elements[name];
  if(els.type) {
    return goog.dom.forms.getValue(els)
  }else {
    for(var i = 0;i < els.length;i++) {
      var val = goog.dom.forms.getValue(els[i]);
      if(val) {
        return val
      }
    }
    return null
  }
};
goog.dom.forms.getInputChecked_ = function(el) {
  return el.checked ? el.value : null
};
goog.dom.forms.getSelectSingle_ = function(el) {
  var selectedIndex = el.selectedIndex;
  return selectedIndex >= 0 ? el.options[selectedIndex].value : null
};
goog.dom.forms.getSelectMultiple_ = function(el) {
  var values = [];
  for(var option, i = 0;option = el.options[i];i++) {
    if(option.selected) {
      values.push(option.value)
    }
  }
  return values.length ? values : null
};
goog.dom.forms.setValue = function(el, opt_value) {
  var type = el.type;
  if(goog.isDef(type)) {
    switch(type.toLowerCase()) {
      case "checkbox":
      ;
      case "radio":
        goog.dom.forms.setInputChecked_(el, opt_value);
        break;
      case "select-one":
        goog.dom.forms.setSelectSingle_(el, opt_value);
        break;
      case "select-multiple":
        goog.dom.forms.setSelectMultiple_(el, opt_value);
        break;
      default:
        el.value = goog.isDefAndNotNull(opt_value) ? opt_value : ""
    }
  }
};
goog.dom.forms.setInputChecked_ = function(el, opt_value) {
  el.checked = opt_value ? "checked" : null
};
goog.dom.forms.setSelectSingle_ = function(el, opt_value) {
  el.selectedIndex = -1;
  if(goog.isString(opt_value)) {
    for(var option, i = 0;option = el.options[i];i++) {
      if(option.value == opt_value) {
        option.selected = true;
        break
      }
    }
  }
};
goog.dom.forms.setSelectMultiple_ = function(el, opt_value) {
  if(goog.isString(opt_value)) {
    opt_value = [opt_value]
  }
  for(var option, i = 0;option = el.options[i];i++) {
    option.selected = false;
    if(opt_value) {
      for(var value, j = 0;value = opt_value[j];j++) {
        if(option.value == value) {
          option.selected = true
        }
      }
    }
  }
};
goog.provide("clojure.string");
goog.require("cljs.core");
goog.require("goog.string.StringBuffer");
goog.require("goog.string");
clojure.string.seq_reverse = function seq_reverse(coll) {
  return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.List.EMPTY, coll)
};
clojure.string.reverse = function reverse(s) {
  return s.split("").reverse().join("")
};
clojure.string.replace = function replace(s, match, replacement) {
  if(cljs.core.string_QMARK_.call(null, match)) {
    return s.replace(new RegExp(goog.string.regExpEscape(match), "g"), replacement)
  }else {
    if(cljs.core.truth_(match.hasOwnProperty("source"))) {
      return s.replace(new RegExp(match.source, "g"), replacement)
    }else {
      if("\ufdd0'else") {
        throw[cljs.core.str("Invalid match arg: "), cljs.core.str(match)].join("");
      }else {
        return null
      }
    }
  }
};
clojure.string.replace_first = function replace_first(s, match, replacement) {
  return s.replace(match, replacement)
};
clojure.string.join = function() {
  var join = null;
  var join__1 = function(coll) {
    return cljs.core.apply.call(null, cljs.core.str, coll)
  };
  var join__2 = function(separator, coll) {
    return cljs.core.apply.call(null, cljs.core.str, cljs.core.interpose.call(null, separator, coll))
  };
  join = function(separator, coll) {
    switch(arguments.length) {
      case 1:
        return join__1.call(this, separator);
      case 2:
        return join__2.call(this, separator, coll)
    }
    throw"Invalid arity: " + arguments.length;
  };
  join.cljs$lang$arity$1 = join__1;
  join.cljs$lang$arity$2 = join__2;
  return join
}();
clojure.string.upper_case = function upper_case(s) {
  return s.toUpperCase()
};
clojure.string.lower_case = function lower_case(s) {
  return s.toLowerCase()
};
clojure.string.capitalize = function capitalize(s) {
  if(cljs.core.count.call(null, s) < 2) {
    return clojure.string.upper_case.call(null, s)
  }else {
    return[cljs.core.str(clojure.string.upper_case.call(null, cljs.core.subs.call(null, s, 0, 1))), cljs.core.str(clojure.string.lower_case.call(null, cljs.core.subs.call(null, s, 1)))].join("")
  }
};
clojure.string.split = function() {
  var split = null;
  var split__2 = function(s, re) {
    return cljs.core.vec.call(null, [cljs.core.str(s)].join("").split(re))
  };
  var split__3 = function(s, re, limit) {
    if(limit < 1) {
      return cljs.core.vec.call(null, [cljs.core.str(s)].join("").split(re))
    }else {
      var s__7002 = s;
      var limit__7003 = limit;
      var parts__7004 = cljs.core.PersistentVector.EMPTY;
      while(true) {
        if(cljs.core._EQ_.call(null, limit__7003, 1)) {
          return cljs.core.conj.call(null, parts__7004, s__7002)
        }else {
          var temp__3971__auto____7005 = cljs.core.re_find.call(null, re, s__7002);
          if(cljs.core.truth_(temp__3971__auto____7005)) {
            var m__7006 = temp__3971__auto____7005;
            var index__7007 = s__7002.indexOf(m__7006);
            var G__7008 = s__7002.substring(index__7007 + cljs.core.count.call(null, m__7006));
            var G__7009 = limit__7003 - 1;
            var G__7010 = cljs.core.conj.call(null, parts__7004, s__7002.substring(0, index__7007));
            s__7002 = G__7008;
            limit__7003 = G__7009;
            parts__7004 = G__7010;
            continue
          }else {
            return cljs.core.conj.call(null, parts__7004, s__7002)
          }
        }
        break
      }
    }
  };
  split = function(s, re, limit) {
    switch(arguments.length) {
      case 2:
        return split__2.call(this, s, re);
      case 3:
        return split__3.call(this, s, re, limit)
    }
    throw"Invalid arity: " + arguments.length;
  };
  split.cljs$lang$arity$2 = split__2;
  split.cljs$lang$arity$3 = split__3;
  return split
}();
clojure.string.split_lines = function split_lines(s) {
  return clojure.string.split.call(null, s, /\n|\r\n/)
};
clojure.string.trim = function trim(s) {
  return goog.string.trim(s)
};
clojure.string.triml = function triml(s) {
  return goog.string.trimLeft(s)
};
clojure.string.trimr = function trimr(s) {
  return goog.string.trimRight(s)
};
clojure.string.trim_newline = function trim_newline(s) {
  var index__7014 = s.length;
  while(true) {
    if(index__7014 === 0) {
      return""
    }else {
      var ch__7015 = cljs.core._lookup.call(null, s, index__7014 - 1, null);
      if(function() {
        var or__3824__auto____7016 = cljs.core._EQ_.call(null, ch__7015, "\n");
        if(or__3824__auto____7016) {
          return or__3824__auto____7016
        }else {
          return cljs.core._EQ_.call(null, ch__7015, "\r")
        }
      }()) {
        var G__7017 = index__7014 - 1;
        index__7014 = G__7017;
        continue
      }else {
        return s.substring(0, index__7014)
      }
    }
    break
  }
};
clojure.string.blank_QMARK_ = function blank_QMARK_(s) {
  var s__7021 = [cljs.core.str(s)].join("");
  if(cljs.core.truth_(function() {
    var or__3824__auto____7022 = cljs.core.not.call(null, s__7021);
    if(or__3824__auto____7022) {
      return or__3824__auto____7022
    }else {
      var or__3824__auto____7023 = cljs.core._EQ_.call(null, "", s__7021);
      if(or__3824__auto____7023) {
        return or__3824__auto____7023
      }else {
        return cljs.core.re_matches.call(null, /\s+/, s__7021)
      }
    }
  }())) {
    return true
  }else {
    return false
  }
};
clojure.string.escape = function escape(s, cmap) {
  var buffer__7030 = new goog.string.StringBuffer;
  var length__7031 = s.length;
  var index__7032 = 0;
  while(true) {
    if(cljs.core._EQ_.call(null, length__7031, index__7032)) {
      return buffer__7030.toString()
    }else {
      var ch__7033 = s.charAt(index__7032);
      var temp__3971__auto____7034 = cljs.core._lookup.call(null, cmap, ch__7033, null);
      if(cljs.core.truth_(temp__3971__auto____7034)) {
        var replacement__7035 = temp__3971__auto____7034;
        buffer__7030.append([cljs.core.str(replacement__7035)].join(""))
      }else {
        buffer__7030.append(ch__7033)
      }
      var G__7036 = index__7032 + 1;
      index__7032 = G__7036;
      continue
    }
    break
  }
};
goog.provide("goog.math.Box");
goog.require("goog.math.Coordinate");
goog.math.Box = function(top, right, bottom, left) {
  this.top = top;
  this.right = right;
  this.bottom = bottom;
  this.left = left
};
goog.math.Box.boundingBox = function(var_args) {
  var box = new goog.math.Box(arguments[0].y, arguments[0].x, arguments[0].y, arguments[0].x);
  for(var i = 1;i < arguments.length;i++) {
    var coord = arguments[i];
    box.top = Math.min(box.top, coord.y);
    box.right = Math.max(box.right, coord.x);
    box.bottom = Math.max(box.bottom, coord.y);
    box.left = Math.min(box.left, coord.x)
  }
  return box
};
goog.math.Box.prototype.clone = function() {
  return new goog.math.Box(this.top, this.right, this.bottom, this.left)
};
if(goog.DEBUG) {
  goog.math.Box.prototype.toString = function() {
    return"(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
  }
}
goog.math.Box.prototype.contains = function(other) {
  return goog.math.Box.contains(this, other)
};
goog.math.Box.prototype.expand = function(top, opt_right, opt_bottom, opt_left) {
  if(goog.isObject(top)) {
    this.top -= top.top;
    this.right += top.right;
    this.bottom += top.bottom;
    this.left -= top.left
  }else {
    this.top -= top;
    this.right += opt_right;
    this.bottom += opt_bottom;
    this.left -= opt_left
  }
  return this
};
goog.math.Box.prototype.expandToInclude = function(box) {
  this.left = Math.min(this.left, box.left);
  this.top = Math.min(this.top, box.top);
  this.right = Math.max(this.right, box.right);
  this.bottom = Math.max(this.bottom, box.bottom)
};
goog.math.Box.equals = function(a, b) {
  if(a == b) {
    return true
  }
  if(!a || !b) {
    return false
  }
  return a.top == b.top && a.right == b.right && a.bottom == b.bottom && a.left == b.left
};
goog.math.Box.contains = function(box, other) {
  if(!box || !other) {
    return false
  }
  if(other instanceof goog.math.Box) {
    return other.left >= box.left && other.right <= box.right && other.top >= box.top && other.bottom <= box.bottom
  }
  return other.x >= box.left && other.x <= box.right && other.y >= box.top && other.y <= box.bottom
};
goog.math.Box.distance = function(box, coord) {
  if(coord.x >= box.left && coord.x <= box.right) {
    if(coord.y >= box.top && coord.y <= box.bottom) {
      return 0
    }
    return coord.y < box.top ? box.top - coord.y : coord.y - box.bottom
  }
  if(coord.y >= box.top && coord.y <= box.bottom) {
    return coord.x < box.left ? box.left - coord.x : coord.x - box.right
  }
  return goog.math.Coordinate.distance(coord, new goog.math.Coordinate(coord.x < box.left ? box.left : box.right, coord.y < box.top ? box.top : box.bottom))
};
goog.math.Box.intersects = function(a, b) {
  return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
};
goog.math.Box.intersectsWithPadding = function(a, b, padding) {
  return a.left <= b.right + padding && b.left <= a.right + padding && a.top <= b.bottom + padding && b.top <= a.bottom + padding
};
goog.provide("goog.math.Rect");
goog.require("goog.math.Box");
goog.require("goog.math.Size");
goog.math.Rect = function(x, y, w, h) {
  this.left = x;
  this.top = y;
  this.width = w;
  this.height = h
};
goog.math.Rect.prototype.clone = function() {
  return new goog.math.Rect(this.left, this.top, this.width, this.height)
};
goog.math.Rect.prototype.toBox = function() {
  var right = this.left + this.width;
  var bottom = this.top + this.height;
  return new goog.math.Box(this.top, right, bottom, this.left)
};
goog.math.Rect.createFromBox = function(box) {
  return new goog.math.Rect(box.left, box.top, box.right - box.left, box.bottom - box.top)
};
if(goog.DEBUG) {
  goog.math.Rect.prototype.toString = function() {
    return"(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
  }
}
goog.math.Rect.equals = function(a, b) {
  if(a == b) {
    return true
  }
  if(!a || !b) {
    return false
  }
  return a.left == b.left && a.width == b.width && a.top == b.top && a.height == b.height
};
goog.math.Rect.prototype.intersection = function(rect) {
  var x0 = Math.max(this.left, rect.left);
  var x1 = Math.min(this.left + this.width, rect.left + rect.width);
  if(x0 <= x1) {
    var y0 = Math.max(this.top, rect.top);
    var y1 = Math.min(this.top + this.height, rect.top + rect.height);
    if(y0 <= y1) {
      this.left = x0;
      this.top = y0;
      this.width = x1 - x0;
      this.height = y1 - y0;
      return true
    }
  }
  return false
};
goog.math.Rect.intersection = function(a, b) {
  var x0 = Math.max(a.left, b.left);
  var x1 = Math.min(a.left + a.width, b.left + b.width);
  if(x0 <= x1) {
    var y0 = Math.max(a.top, b.top);
    var y1 = Math.min(a.top + a.height, b.top + b.height);
    if(y0 <= y1) {
      return new goog.math.Rect(x0, y0, x1 - x0, y1 - y0)
    }
  }
  return null
};
goog.math.Rect.intersects = function(a, b) {
  return a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height
};
goog.math.Rect.prototype.intersects = function(rect) {
  return goog.math.Rect.intersects(this, rect)
};
goog.math.Rect.difference = function(a, b) {
  var intersection = goog.math.Rect.intersection(a, b);
  if(!intersection || !intersection.height || !intersection.width) {
    return[a.clone()]
  }
  var result = [];
  var top = a.top;
  var height = a.height;
  var ar = a.left + a.width;
  var ab = a.top + a.height;
  var br = b.left + b.width;
  var bb = b.top + b.height;
  if(b.top > a.top) {
    result.push(new goog.math.Rect(a.left, a.top, a.width, b.top - a.top));
    top = b.top;
    height -= b.top - a.top
  }
  if(bb < ab) {
    result.push(new goog.math.Rect(a.left, bb, a.width, ab - bb));
    height = bb - top
  }
  if(b.left > a.left) {
    result.push(new goog.math.Rect(a.left, top, b.left - a.left, height))
  }
  if(br < ar) {
    result.push(new goog.math.Rect(br, top, ar - br, height))
  }
  return result
};
goog.math.Rect.prototype.difference = function(rect) {
  return goog.math.Rect.difference(this, rect)
};
goog.math.Rect.prototype.boundingRect = function(rect) {
  var right = Math.max(this.left + this.width, rect.left + rect.width);
  var bottom = Math.max(this.top + this.height, rect.top + rect.height);
  this.left = Math.min(this.left, rect.left);
  this.top = Math.min(this.top, rect.top);
  this.width = right - this.left;
  this.height = bottom - this.top
};
goog.math.Rect.boundingRect = function(a, b) {
  if(!a || !b) {
    return null
  }
  var clone = a.clone();
  clone.boundingRect(b);
  return clone
};
goog.math.Rect.prototype.contains = function(another) {
  if(another instanceof goog.math.Rect) {
    return this.left <= another.left && this.left + this.width >= another.left + another.width && this.top <= another.top && this.top + this.height >= another.top + another.height
  }else {
    return another.x >= this.left && another.x <= this.left + this.width && another.y >= this.top && another.y <= this.top + this.height
  }
};
goog.math.Rect.prototype.getSize = function() {
  return new goog.math.Size(this.width, this.height)
};
goog.provide("goog.style");
goog.require("goog.array");
goog.require("goog.dom");
goog.require("goog.math.Box");
goog.require("goog.math.Coordinate");
goog.require("goog.math.Rect");
goog.require("goog.math.Size");
goog.require("goog.object");
goog.require("goog.string");
goog.require("goog.userAgent");
goog.style.setStyle = function(element, style, opt_value) {
  if(goog.isString(style)) {
    goog.style.setStyle_(element, opt_value, style)
  }else {
    goog.object.forEach(style, goog.partial(goog.style.setStyle_, element))
  }
};
goog.style.setStyle_ = function(element, value, style) {
  element.style[goog.string.toCamelCase(style)] = value
};
goog.style.getStyle = function(element, property) {
  return element.style[goog.string.toCamelCase(property)] || ""
};
goog.style.getComputedStyle = function(element, property) {
  var doc = goog.dom.getOwnerDocument(element);
  if(doc.defaultView && doc.defaultView.getComputedStyle) {
    var styles = doc.defaultView.getComputedStyle(element, null);
    if(styles) {
      return styles[property] || styles.getPropertyValue(property)
    }
  }
  return""
};
goog.style.getCascadedStyle = function(element, style) {
  return element.currentStyle ? element.currentStyle[style] : null
};
goog.style.getStyle_ = function(element, style) {
  return goog.style.getComputedStyle(element, style) || goog.style.getCascadedStyle(element, style) || element.style[style]
};
goog.style.getComputedPosition = function(element) {
  return goog.style.getStyle_(element, "position")
};
goog.style.getBackgroundColor = function(element) {
  return goog.style.getStyle_(element, "backgroundColor")
};
goog.style.getComputedOverflowX = function(element) {
  return goog.style.getStyle_(element, "overflowX")
};
goog.style.getComputedOverflowY = function(element) {
  return goog.style.getStyle_(element, "overflowY")
};
goog.style.getComputedZIndex = function(element) {
  return goog.style.getStyle_(element, "zIndex")
};
goog.style.getComputedTextAlign = function(element) {
  return goog.style.getStyle_(element, "textAlign")
};
goog.style.getComputedCursor = function(element) {
  return goog.style.getStyle_(element, "cursor")
};
goog.style.setPosition = function(el, arg1, opt_arg2) {
  var x, y;
  var buggyGeckoSubPixelPos = goog.userAgent.GECKO && (goog.userAgent.MAC || goog.userAgent.X11) && goog.userAgent.isVersion("1.9");
  if(arg1 instanceof goog.math.Coordinate) {
    x = arg1.x;
    y = arg1.y
  }else {
    x = arg1;
    y = opt_arg2
  }
  el.style.left = goog.style.getPixelStyleValue_(x, buggyGeckoSubPixelPos);
  el.style.top = goog.style.getPixelStyleValue_(y, buggyGeckoSubPixelPos)
};
goog.style.getPosition = function(element) {
  return new goog.math.Coordinate(element.offsetLeft, element.offsetTop)
};
goog.style.getClientViewportElement = function(opt_node) {
  var doc;
  if(opt_node) {
    if(opt_node.nodeType == goog.dom.NodeType.DOCUMENT) {
      doc = opt_node
    }else {
      doc = goog.dom.getOwnerDocument(opt_node)
    }
  }else {
    doc = goog.dom.getDocument()
  }
  if(goog.userAgent.IE && !goog.userAgent.isVersion(9) && !goog.dom.getDomHelper(doc).isCss1CompatMode()) {
    return doc.body
  }
  return doc.documentElement
};
goog.style.getBoundingClientRect_ = function(el) {
  var rect = el.getBoundingClientRect();
  if(goog.userAgent.IE) {
    var doc = el.ownerDocument;
    rect.left -= doc.documentElement.clientLeft + doc.body.clientLeft;
    rect.top -= doc.documentElement.clientTop + doc.body.clientTop
  }
  return rect
};
goog.style.getOffsetParent = function(element) {
  if(goog.userAgent.IE) {
    return element.offsetParent
  }
  var doc = goog.dom.getOwnerDocument(element);
  var positionStyle = goog.style.getStyle_(element, "position");
  var skipStatic = positionStyle == "fixed" || positionStyle == "absolute";
  for(var parent = element.parentNode;parent && parent != doc;parent = parent.parentNode) {
    positionStyle = goog.style.getStyle_(parent, "position");
    skipStatic = skipStatic && positionStyle == "static" && parent != doc.documentElement && parent != doc.body;
    if(!skipStatic && (parent.scrollWidth > parent.clientWidth || parent.scrollHeight > parent.clientHeight || positionStyle == "fixed" || positionStyle == "absolute")) {
      return parent
    }
  }
  return null
};
goog.style.getVisibleRectForElement = function(element) {
  var visibleRect = new goog.math.Box(0, Infinity, Infinity, 0);
  var dom = goog.dom.getDomHelper(element);
  var body = dom.getDocument().body;
  var scrollEl = dom.getDocumentScrollElement();
  var inContainer;
  for(var el = element;el = goog.style.getOffsetParent(el);) {
    if((!goog.userAgent.IE || el.clientWidth != 0) && (!goog.userAgent.WEBKIT || el.clientHeight != 0 || el != body) && (el.scrollWidth != el.clientWidth || el.scrollHeight != el.clientHeight) && goog.style.getStyle_(el, "overflow") != "visible") {
      var pos = goog.style.getPageOffset(el);
      var client = goog.style.getClientLeftTop(el);
      pos.x += client.x;
      pos.y += client.y;
      visibleRect.top = Math.max(visibleRect.top, pos.y);
      visibleRect.right = Math.min(visibleRect.right, pos.x + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.y + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.x);
      inContainer = inContainer || el != scrollEl
    }
  }
  var scrollX = scrollEl.scrollLeft, scrollY = scrollEl.scrollTop;
  if(goog.userAgent.WEBKIT) {
    visibleRect.left += scrollX;
    visibleRect.top += scrollY
  }else {
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY)
  }
  if(!inContainer || goog.userAgent.WEBKIT) {
    visibleRect.right += scrollX;
    visibleRect.bottom += scrollY
  }
  var winSize = dom.getViewportSize();
  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null
};
goog.style.scrollIntoContainerView = function(element, container, opt_center) {
  var elementPos = goog.style.getPageOffset(element);
  var containerPos = goog.style.getPageOffset(container);
  var containerBorder = goog.style.getBorderBox(container);
  var relX = elementPos.x - containerPos.x - containerBorder.left;
  var relY = elementPos.y - containerPos.y - containerBorder.top;
  var spaceX = container.clientWidth - element.offsetWidth;
  var spaceY = container.clientHeight - element.offsetHeight;
  if(opt_center) {
    container.scrollLeft += relX - spaceX / 2;
    container.scrollTop += relY - spaceY / 2
  }else {
    container.scrollLeft += Math.min(relX, Math.max(relX - spaceX, 0));
    container.scrollTop += Math.min(relY, Math.max(relY - spaceY, 0))
  }
};
goog.style.getClientLeftTop = function(el) {
  if(goog.userAgent.GECKO && !goog.userAgent.isVersion("1.9")) {
    var left = parseFloat(goog.style.getComputedStyle(el, "borderLeftWidth"));
    if(goog.style.isRightToLeft(el)) {
      var scrollbarWidth = el.offsetWidth - el.clientWidth - left - parseFloat(goog.style.getComputedStyle(el, "borderRightWidth"));
      left += scrollbarWidth
    }
    return new goog.math.Coordinate(left, parseFloat(goog.style.getComputedStyle(el, "borderTopWidth")))
  }
  return new goog.math.Coordinate(el.clientLeft, el.clientTop)
};
goog.style.getPageOffset = function(el) {
  var box, doc = goog.dom.getOwnerDocument(el);
  var positionStyle = goog.style.getStyle_(el, "position");
  var BUGGY_GECKO_BOX_OBJECT = goog.userAgent.GECKO && doc.getBoxObjectFor && !el.getBoundingClientRect && positionStyle == "absolute" && (box = doc.getBoxObjectFor(el)) && (box.screenX < 0 || box.screenY < 0);
  var pos = new goog.math.Coordinate(0, 0);
  var viewportElement = goog.style.getClientViewportElement(doc);
  if(el == viewportElement) {
    return pos
  }
  if(el.getBoundingClientRect) {
    box = goog.style.getBoundingClientRect_(el);
    var scrollCoord = goog.dom.getDomHelper(doc).getDocumentScroll();
    pos.x = box.left + scrollCoord.x;
    pos.y = box.top + scrollCoord.y
  }else {
    if(doc.getBoxObjectFor && !BUGGY_GECKO_BOX_OBJECT) {
      box = doc.getBoxObjectFor(el);
      var vpBox = doc.getBoxObjectFor(viewportElement);
      pos.x = box.screenX - vpBox.screenX;
      pos.y = box.screenY - vpBox.screenY
    }else {
      var parent = el;
      do {
        pos.x += parent.offsetLeft;
        pos.y += parent.offsetTop;
        if(parent != el) {
          pos.x += parent.clientLeft || 0;
          pos.y += parent.clientTop || 0
        }
        if(goog.userAgent.WEBKIT && goog.style.getComputedPosition(parent) == "fixed") {
          pos.x += doc.body.scrollLeft;
          pos.y += doc.body.scrollTop;
          break
        }
        parent = parent.offsetParent
      }while(parent && parent != el);
      if(goog.userAgent.OPERA || goog.userAgent.WEBKIT && positionStyle == "absolute") {
        pos.y -= doc.body.offsetTop
      }
      for(parent = el;(parent = goog.style.getOffsetParent(parent)) && parent != doc.body && parent != viewportElement;) {
        pos.x -= parent.scrollLeft;
        if(!goog.userAgent.OPERA || parent.tagName != "TR") {
          pos.y -= parent.scrollTop
        }
      }
    }
  }
  return pos
};
goog.style.getPageOffsetLeft = function(el) {
  return goog.style.getPageOffset(el).x
};
goog.style.getPageOffsetTop = function(el) {
  return goog.style.getPageOffset(el).y
};
goog.style.getFramedPageOffset = function(el, relativeWin) {
  var position = new goog.math.Coordinate(0, 0);
  var currentWin = goog.dom.getWindow(goog.dom.getOwnerDocument(el));
  var currentEl = el;
  do {
    var offset = currentWin == relativeWin ? goog.style.getPageOffset(currentEl) : goog.style.getClientPosition(currentEl);
    position.x += offset.x;
    position.y += offset.y
  }while(currentWin && currentWin != relativeWin && (currentEl = currentWin.frameElement) && (currentWin = currentWin.parent));
  return position
};
goog.style.translateRectForAnotherFrame = function(rect, origBase, newBase) {
  if(origBase.getDocument() != newBase.getDocument()) {
    var body = origBase.getDocument().body;
    var pos = goog.style.getFramedPageOffset(body, newBase.getWindow());
    pos = goog.math.Coordinate.difference(pos, goog.style.getPageOffset(body));
    if(goog.userAgent.IE && !origBase.isCss1CompatMode()) {
      pos = goog.math.Coordinate.difference(pos, origBase.getDocumentScroll())
    }
    rect.left += pos.x;
    rect.top += pos.y
  }
};
goog.style.getRelativePosition = function(a, b) {
  var ap = goog.style.getClientPosition(a);
  var bp = goog.style.getClientPosition(b);
  return new goog.math.Coordinate(ap.x - bp.x, ap.y - bp.y)
};
goog.style.getClientPosition = function(el) {
  var pos = new goog.math.Coordinate;
  if(el.nodeType == goog.dom.NodeType.ELEMENT) {
    if(el.getBoundingClientRect) {
      var box = goog.style.getBoundingClientRect_(el);
      pos.x = box.left;
      pos.y = box.top
    }else {
      var scrollCoord = goog.dom.getDomHelper(el).getDocumentScroll();
      var pageCoord = goog.style.getPageOffset(el);
      pos.x = pageCoord.x - scrollCoord.x;
      pos.y = pageCoord.y - scrollCoord.y
    }
  }else {
    var isAbstractedEvent = goog.isFunction(el.getBrowserEvent);
    var targetEvent = el;
    if(el.targetTouches) {
      targetEvent = el.targetTouches[0]
    }else {
      if(isAbstractedEvent && el.getBrowserEvent().targetTouches) {
        targetEvent = el.getBrowserEvent().targetTouches[0]
      }
    }
    pos.x = targetEvent.clientX;
    pos.y = targetEvent.clientY
  }
  return pos
};
goog.style.setPageOffset = function(el, x, opt_y) {
  var cur = goog.style.getPageOffset(el);
  if(x instanceof goog.math.Coordinate) {
    opt_y = x.y;
    x = x.x
  }
  var dx = x - cur.x;
  var dy = opt_y - cur.y;
  goog.style.setPosition(el, el.offsetLeft + dx, el.offsetTop + dy)
};
goog.style.setSize = function(element, w, opt_h) {
  var h;
  if(w instanceof goog.math.Size) {
    h = w.height;
    w = w.width
  }else {
    if(opt_h == undefined) {
      throw Error("missing height argument");
    }
    h = opt_h
  }
  goog.style.setWidth(element, w);
  goog.style.setHeight(element, h)
};
goog.style.getPixelStyleValue_ = function(value, round) {
  if(typeof value == "number") {
    value = (round ? Math.round(value) : value) + "px"
  }
  return value
};
goog.style.setHeight = function(element, height) {
  element.style.height = goog.style.getPixelStyleValue_(height, true)
};
goog.style.setWidth = function(element, width) {
  element.style.width = goog.style.getPixelStyleValue_(width, true)
};
goog.style.getSize = function(element) {
  if(goog.style.getStyle_(element, "display") != "none") {
    return new goog.math.Size(element.offsetWidth, element.offsetHeight)
  }
  var style = element.style;
  var originalDisplay = style.display;
  var originalVisibility = style.visibility;
  var originalPosition = style.position;
  style.visibility = "hidden";
  style.position = "absolute";
  style.display = "inline";
  var originalWidth = element.offsetWidth;
  var originalHeight = element.offsetHeight;
  style.display = originalDisplay;
  style.position = originalPosition;
  style.visibility = originalVisibility;
  return new goog.math.Size(originalWidth, originalHeight)
};
goog.style.getBounds = function(element) {
  var o = goog.style.getPageOffset(element);
  var s = goog.style.getSize(element);
  return new goog.math.Rect(o.x, o.y, s.width, s.height)
};
goog.style.toCamelCase = function(selector) {
  return goog.string.toCamelCase(String(selector))
};
goog.style.toSelectorCase = function(selector) {
  return goog.string.toSelectorCase(selector)
};
goog.style.getOpacity = function(el) {
  var style = el.style;
  var result = "";
  if("opacity" in style) {
    result = style.opacity
  }else {
    if("MozOpacity" in style) {
      result = style.MozOpacity
    }else {
      if("filter" in style) {
        var match = style.filter.match(/alpha\(opacity=([\d.]+)\)/);
        if(match) {
          result = String(match[1] / 100)
        }
      }
    }
  }
  return result == "" ? result : Number(result)
};
goog.style.setOpacity = function(el, alpha) {
  var style = el.style;
  if("opacity" in style) {
    style.opacity = alpha
  }else {
    if("MozOpacity" in style) {
      style.MozOpacity = alpha
    }else {
      if("filter" in style) {
        if(alpha === "") {
          style.filter = ""
        }else {
          style.filter = "alpha(opacity=" + alpha * 100 + ")"
        }
      }
    }
  }
};
goog.style.setTransparentBackgroundImage = function(el, src) {
  var style = el.style;
  if(goog.userAgent.IE && !goog.userAgent.isVersion("8")) {
    style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(" + 'src="' + src + '", sizingMethod="crop")'
  }else {
    style.backgroundImage = "url(" + src + ")";
    style.backgroundPosition = "top left";
    style.backgroundRepeat = "no-repeat"
  }
};
goog.style.clearTransparentBackgroundImage = function(el) {
  var style = el.style;
  if("filter" in style) {
    style.filter = ""
  }else {
    style.backgroundImage = "none"
  }
};
goog.style.showElement = function(el, display) {
  el.style.display = display ? "" : "none"
};
goog.style.isElementShown = function(el) {
  return el.style.display != "none"
};
goog.style.installStyles = function(stylesString, opt_node) {
  var dh = goog.dom.getDomHelper(opt_node);
  var styleSheet = null;
  if(goog.userAgent.IE) {
    styleSheet = dh.getDocument().createStyleSheet();
    goog.style.setStyles(styleSheet, stylesString)
  }else {
    var head = dh.getElementsByTagNameAndClass("head")[0];
    if(!head) {
      var body = dh.getElementsByTagNameAndClass("body")[0];
      head = dh.createDom("head");
      body.parentNode.insertBefore(head, body)
    }
    styleSheet = dh.createDom("style");
    goog.style.setStyles(styleSheet, stylesString);
    dh.appendChild(head, styleSheet)
  }
  return styleSheet
};
goog.style.uninstallStyles = function(styleSheet) {
  var node = styleSheet.ownerNode || styleSheet.owningElement || styleSheet;
  goog.dom.removeNode(node)
};
goog.style.setStyles = function(element, stylesString) {
  if(goog.userAgent.IE) {
    element.cssText = stylesString
  }else {
    var propToSet = goog.userAgent.WEBKIT ? "innerText" : "innerHTML";
    element[propToSet] = stylesString
  }
};
goog.style.setPreWrap = function(el) {
  var style = el.style;
  if(goog.userAgent.IE && !goog.userAgent.isVersion("8")) {
    style.whiteSpace = "pre";
    style.wordWrap = "break-word"
  }else {
    if(goog.userAgent.GECKO) {
      style.whiteSpace = "-moz-pre-wrap"
    }else {
      style.whiteSpace = "pre-wrap"
    }
  }
};
goog.style.setInlineBlock = function(el) {
  var style = el.style;
  style.position = "relative";
  if(goog.userAgent.IE && !goog.userAgent.isVersion("8")) {
    style.zoom = "1";
    style.display = "inline"
  }else {
    if(goog.userAgent.GECKO) {
      style.display = goog.userAgent.isVersion("1.9a") ? "inline-block" : "-moz-inline-box"
    }else {
      style.display = "inline-block"
    }
  }
};
goog.style.isRightToLeft = function(el) {
  return"rtl" == goog.style.getStyle_(el, "direction")
};
goog.style.unselectableStyle_ = goog.userAgent.GECKO ? "MozUserSelect" : goog.userAgent.WEBKIT ? "WebkitUserSelect" : null;
goog.style.isUnselectable = function(el) {
  if(goog.style.unselectableStyle_) {
    return el.style[goog.style.unselectableStyle_].toLowerCase() == "none"
  }else {
    if(goog.userAgent.IE || goog.userAgent.OPERA) {
      return el.getAttribute("unselectable") == "on"
    }
  }
  return false
};
goog.style.setUnselectable = function(el, unselectable, opt_noRecurse) {
  var descendants = !opt_noRecurse ? el.getElementsByTagName("*") : null;
  var name = goog.style.unselectableStyle_;
  if(name) {
    var value = unselectable ? "none" : "";
    el.style[name] = value;
    if(descendants) {
      for(var i = 0, descendant;descendant = descendants[i];i++) {
        descendant.style[name] = value
      }
    }
  }else {
    if(goog.userAgent.IE || goog.userAgent.OPERA) {
      var value = unselectable ? "on" : "";
      el.setAttribute("unselectable", value);
      if(descendants) {
        for(var i = 0, descendant;descendant = descendants[i];i++) {
          descendant.setAttribute("unselectable", value)
        }
      }
    }
  }
};
goog.style.getBorderBoxSize = function(element) {
  return new goog.math.Size(element.offsetWidth, element.offsetHeight)
};
goog.style.setBorderBoxSize = function(element, size) {
  var doc = goog.dom.getOwnerDocument(element);
  var isCss1CompatMode = goog.dom.getDomHelper(doc).isCss1CompatMode();
  if(goog.userAgent.IE && (!isCss1CompatMode || !goog.userAgent.isVersion("8"))) {
    var style = element.style;
    if(isCss1CompatMode) {
      var paddingBox = goog.style.getPaddingBox(element);
      var borderBox = goog.style.getBorderBox(element);
      style.pixelWidth = size.width - borderBox.left - paddingBox.left - paddingBox.right - borderBox.right;
      style.pixelHeight = size.height - borderBox.top - paddingBox.top - paddingBox.bottom - borderBox.bottom
    }else {
      style.pixelWidth = size.width;
      style.pixelHeight = size.height
    }
  }else {
    goog.style.setBoxSizingSize_(element, size, "border-box")
  }
};
goog.style.getContentBoxSize = function(element) {
  var doc = goog.dom.getOwnerDocument(element);
  var ieCurrentStyle = goog.userAgent.IE && element.currentStyle;
  if(ieCurrentStyle && goog.dom.getDomHelper(doc).isCss1CompatMode() && ieCurrentStyle.width != "auto" && ieCurrentStyle.height != "auto" && !ieCurrentStyle.boxSizing) {
    var width = goog.style.getIePixelValue_(element, ieCurrentStyle.width, "width", "pixelWidth");
    var height = goog.style.getIePixelValue_(element, ieCurrentStyle.height, "height", "pixelHeight");
    return new goog.math.Size(width, height)
  }else {
    var borderBoxSize = goog.style.getBorderBoxSize(element);
    var paddingBox = goog.style.getPaddingBox(element);
    var borderBox = goog.style.getBorderBox(element);
    return new goog.math.Size(borderBoxSize.width - borderBox.left - paddingBox.left - paddingBox.right - borderBox.right, borderBoxSize.height - borderBox.top - paddingBox.top - paddingBox.bottom - borderBox.bottom)
  }
};
goog.style.setContentBoxSize = function(element, size) {
  var doc = goog.dom.getOwnerDocument(element);
  var isCss1CompatMode = goog.dom.getDomHelper(doc).isCss1CompatMode();
  if(goog.userAgent.IE && (!isCss1CompatMode || !goog.userAgent.isVersion("8"))) {
    var style = element.style;
    if(isCss1CompatMode) {
      style.pixelWidth = size.width;
      style.pixelHeight = size.height
    }else {
      var paddingBox = goog.style.getPaddingBox(element);
      var borderBox = goog.style.getBorderBox(element);
      style.pixelWidth = size.width + borderBox.left + paddingBox.left + paddingBox.right + borderBox.right;
      style.pixelHeight = size.height + borderBox.top + paddingBox.top + paddingBox.bottom + borderBox.bottom
    }
  }else {
    goog.style.setBoxSizingSize_(element, size, "content-box")
  }
};
goog.style.setBoxSizingSize_ = function(element, size, boxSizing) {
  var style = element.style;
  if(goog.userAgent.GECKO) {
    style.MozBoxSizing = boxSizing
  }else {
    if(goog.userAgent.WEBKIT) {
      style.WebkitBoxSizing = boxSizing
    }else {
      style.boxSizing = boxSizing
    }
  }
  style.width = size.width + "px";
  style.height = size.height + "px"
};
goog.style.getIePixelValue_ = function(element, value, name, pixelName) {
  if(/^\d+px?$/.test(value)) {
    return parseInt(value, 10)
  }else {
    var oldStyleValue = element.style[name];
    var oldRuntimeValue = element.runtimeStyle[name];
    element.runtimeStyle[name] = element.currentStyle[name];
    element.style[name] = value;
    var pixelValue = element.style[pixelName];
    element.style[name] = oldStyleValue;
    element.runtimeStyle[name] = oldRuntimeValue;
    return pixelValue
  }
};
goog.style.getIePixelDistance_ = function(element, propName) {
  return goog.style.getIePixelValue_(element, goog.style.getCascadedStyle(element, propName), "left", "pixelLeft")
};
goog.style.getBox_ = function(element, stylePrefix) {
  if(goog.userAgent.IE) {
    var left = goog.style.getIePixelDistance_(element, stylePrefix + "Left");
    var right = goog.style.getIePixelDistance_(element, stylePrefix + "Right");
    var top = goog.style.getIePixelDistance_(element, stylePrefix + "Top");
    var bottom = goog.style.getIePixelDistance_(element, stylePrefix + "Bottom");
    return new goog.math.Box(top, right, bottom, left)
  }else {
    var left = goog.style.getComputedStyle(element, stylePrefix + "Left");
    var right = goog.style.getComputedStyle(element, stylePrefix + "Right");
    var top = goog.style.getComputedStyle(element, stylePrefix + "Top");
    var bottom = goog.style.getComputedStyle(element, stylePrefix + "Bottom");
    return new goog.math.Box(parseFloat(top), parseFloat(right), parseFloat(bottom), parseFloat(left))
  }
};
goog.style.getPaddingBox = function(element) {
  return goog.style.getBox_(element, "padding")
};
goog.style.getMarginBox = function(element) {
  return goog.style.getBox_(element, "margin")
};
goog.style.ieBorderWidthKeywords_ = {"thin":2, "medium":4, "thick":6};
goog.style.getIePixelBorder_ = function(element, prop) {
  if(goog.style.getCascadedStyle(element, prop + "Style") == "none") {
    return 0
  }
  var width = goog.style.getCascadedStyle(element, prop + "Width");
  if(width in goog.style.ieBorderWidthKeywords_) {
    return goog.style.ieBorderWidthKeywords_[width]
  }
  return goog.style.getIePixelValue_(element, width, "left", "pixelLeft")
};
goog.style.getBorderBox = function(element) {
  if(goog.userAgent.IE) {
    var left = goog.style.getIePixelBorder_(element, "borderLeft");
    var right = goog.style.getIePixelBorder_(element, "borderRight");
    var top = goog.style.getIePixelBorder_(element, "borderTop");
    var bottom = goog.style.getIePixelBorder_(element, "borderBottom");
    return new goog.math.Box(top, right, bottom, left)
  }else {
    var left = goog.style.getComputedStyle(element, "borderLeftWidth");
    var right = goog.style.getComputedStyle(element, "borderRightWidth");
    var top = goog.style.getComputedStyle(element, "borderTopWidth");
    var bottom = goog.style.getComputedStyle(element, "borderBottomWidth");
    return new goog.math.Box(parseFloat(top), parseFloat(right), parseFloat(bottom), parseFloat(left))
  }
};
goog.style.getFontFamily = function(el) {
  var doc = goog.dom.getOwnerDocument(el);
  var font = "";
  if(doc.body.createTextRange) {
    var range = doc.body.createTextRange();
    range.moveToElementText(el);
    try {
      font = range.queryCommandValue("FontName")
    }catch(e) {
      font = ""
    }
  }
  if(!font) {
    font = goog.style.getStyle_(el, "fontFamily")
  }
  var fontsArray = font.split(",");
  if(fontsArray.length > 1) {
    font = fontsArray[0]
  }
  return goog.string.stripQuotes(font, "\"'")
};
goog.style.lengthUnitRegex_ = /[^\d]+$/;
goog.style.getLengthUnits = function(value) {
  var units = value.match(goog.style.lengthUnitRegex_);
  return units && units[0] || null
};
goog.style.ABSOLUTE_CSS_LENGTH_UNITS_ = {"cm":1, "in":1, "mm":1, "pc":1, "pt":1};
goog.style.CONVERTIBLE_RELATIVE_CSS_UNITS_ = {"em":1, "ex":1};
goog.style.getFontSize = function(el) {
  var fontSize = goog.style.getStyle_(el, "fontSize");
  var sizeUnits = goog.style.getLengthUnits(fontSize);
  if(fontSize && "px" == sizeUnits) {
    return parseInt(fontSize, 10)
  }
  if(goog.userAgent.IE) {
    if(sizeUnits in goog.style.ABSOLUTE_CSS_LENGTH_UNITS_) {
      return goog.style.getIePixelValue_(el, fontSize, "left", "pixelLeft")
    }else {
      if(el.parentNode && el.parentNode.nodeType == goog.dom.NodeType.ELEMENT && sizeUnits in goog.style.CONVERTIBLE_RELATIVE_CSS_UNITS_) {
        var parentElement = el.parentNode;
        var parentSize = goog.style.getStyle_(parentElement, "fontSize");
        return goog.style.getIePixelValue_(parentElement, fontSize == parentSize ? "1em" : fontSize, "left", "pixelLeft")
      }
    }
  }
  var sizeElement = goog.dom.createDom("span", {"style":"visibility:hidden;position:absolute;" + "line-height:0;padding:0;margin:0;border:0;height:1em;"});
  goog.dom.appendChild(el, sizeElement);
  fontSize = sizeElement.offsetHeight;
  goog.dom.removeNode(sizeElement);
  return fontSize
};
goog.style.parseStyleAttribute = function(value) {
  var result = {};
  goog.array.forEach(value.split(/\s*;\s*/), function(pair) {
    var keyValue = pair.split(/\s*:\s*/);
    if(keyValue.length == 2) {
      result[goog.string.toCamelCase(keyValue[0].toLowerCase())] = keyValue[1]
    }
  });
  return result
};
goog.style.toStyleAttribute = function(obj) {
  var buffer = [];
  goog.object.forEach(obj, function(value, key) {
    buffer.push(goog.string.toSelectorCase(key), ":", value, ";")
  });
  return buffer.join("")
};
goog.style.setFloat = function(el, value) {
  el.style[goog.userAgent.IE ? "styleFloat" : "cssFloat"] = value
};
goog.style.getFloat = function(el) {
  return el.style[goog.userAgent.IE ? "styleFloat" : "cssFloat"] || ""
};
goog.style.getScrollbarWidth = function() {
  var mockElement = goog.dom.createElement("div");
  mockElement.style.cssText = "visibility:hidden;overflow:scroll;" + "position:absolute;top:0;width:100px;height:100px";
  goog.dom.appendChild(goog.dom.getDocument().body, mockElement);
  var width = mockElement.offsetWidth - mockElement.clientWidth;
  goog.dom.removeNode(mockElement);
  return width
};
goog.provide("domina");
goog.require("cljs.core");
goog.require("domina.support");
goog.require("goog.dom.classes");
goog.require("goog.events");
goog.require("goog.dom.xml");
goog.require("goog.dom.forms");
goog.require("goog.dom");
goog.require("goog.string");
goog.require("clojure.string");
goog.require("goog.style");
goog.require("cljs.core");
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper__6587 = cljs.core.PersistentVector.fromArray([1, "<select multiple='multiple'>", "</select>"], true);
var table_section_wrapper__6588 = cljs.core.PersistentVector.fromArray([1, "<table>", "</table>"], true);
var cell_wrapper__6589 = cljs.core.PersistentVector.fromArray([3, "<table><tbody><tr>", "</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col", "\ufdd0'default", "tfoot", "caption", "optgroup", "legend", "area", "td", "thead", "th", "option", "tbody", "tr", "colgroup"], {"col":cljs.core.PersistentVector.fromArray([2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], true), "\ufdd0'default":cljs.core.PersistentVector.fromArray([0, "", ""], true), "tfoot":table_section_wrapper__6588, "caption":table_section_wrapper__6588, "optgroup":opt_wrapper__6587, "legend":cljs.core.PersistentVector.fromArray([1, 
"<fieldset>", "</fieldset>"], true), "area":cljs.core.PersistentVector.fromArray([1, "<map>", "</map>"], true), "td":cell_wrapper__6589, "thead":table_section_wrapper__6588, "th":cell_wrapper__6589, "option":opt_wrapper__6587, "tbody":table_section_wrapper__6588, "tr":cljs.core.PersistentVector.fromArray([2, "<table><tbody>", "</tbody></table>"], true), "colgroup":table_section_wrapper__6588});
domina.remove_extraneous_tbody_BANG_ = function remove_extraneous_tbody_BANG_(div, html) {
  var no_tbody_QMARK___6602 = cljs.core.not.call(null, cljs.core.re_find.call(null, domina.re_tbody, html));
  var tbody__6606 = function() {
    var and__3822__auto____6603 = cljs.core._EQ_.call(null, domina.tag_name, "table");
    if(and__3822__auto____6603) {
      return no_tbody_QMARK___6602
    }else {
      return and__3822__auto____6603
    }
  }() ? function() {
    var and__3822__auto____6604 = div.firstChild;
    if(cljs.core.truth_(and__3822__auto____6604)) {
      return div.firstChild.childNodes
    }else {
      return and__3822__auto____6604
    }
  }() : function() {
    var and__3822__auto____6605 = cljs.core._EQ_.call(null, domina.start_wrap, "<table>");
    if(and__3822__auto____6605) {
      return no_tbody_QMARK___6602
    }else {
      return and__3822__auto____6605
    }
  }() ? divchildNodes : cljs.core.PersistentVector.EMPTY;
  var G__6607__6608 = cljs.core.seq.call(null, tbody__6606);
  if(G__6607__6608) {
    var child__6609 = cljs.core.first.call(null, G__6607__6608);
    var G__6607__6610 = G__6607__6608;
    while(true) {
      if(function() {
        var and__3822__auto____6611 = cljs.core._EQ_.call(null, child__6609.nodeName, "tbody");
        if(and__3822__auto____6611) {
          return cljs.core._EQ_.call(null, child__6609.childNodes.length, 0)
        }else {
          return and__3822__auto____6611
        }
      }()) {
        child__6609.parentNode.removeChild(child__6609)
      }else {
      }
      var temp__3974__auto____6612 = cljs.core.next.call(null, G__6607__6610);
      if(temp__3974__auto____6612) {
        var G__6607__6613 = temp__3974__auto____6612;
        var G__6614 = cljs.core.first.call(null, G__6607__6613);
        var G__6615 = G__6607__6613;
        child__6609 = G__6614;
        G__6607__6610 = G__6615;
        continue
      }else {
        return null
      }
      break
    }
  }else {
    return null
  }
};
domina.restore_leading_whitespace_BANG_ = function restore_leading_whitespace_BANG_(div, html) {
  return div.insertBefore(document.createTextNode(cljs.core.first.call(null, cljs.core.re_find.call(null, domina.re_leading_whitespace, html))), div.firstChild)
};
domina.html_to_dom = function html_to_dom(html) {
  var html__6629 = clojure.string.replace.call(null, html, domina.re_xhtml_tag, "<$1></$2>");
  var tag_name__6630 = [cljs.core.str(cljs.core.second.call(null, cljs.core.re_find.call(null, domina.re_tag_name, html__6629)))].join("").toLowerCase();
  var vec__6628__6631 = cljs.core._lookup.call(null, domina.wrap_map, tag_name__6630, (new cljs.core.Keyword("\ufdd0'default")).call(null, domina.wrap_map));
  var depth__6632 = cljs.core.nth.call(null, vec__6628__6631, 0, null);
  var start_wrap__6633 = cljs.core.nth.call(null, vec__6628__6631, 1, null);
  var end_wrap__6634 = cljs.core.nth.call(null, vec__6628__6631, 2, null);
  var div__6638 = function() {
    var wrapper__6636 = function() {
      var div__6635 = document.createElement("div");
      div__6635.innerHTML = [cljs.core.str(start_wrap__6633), cljs.core.str(html__6629), cljs.core.str(end_wrap__6634)].join("");
      return div__6635
    }();
    var level__6637 = depth__6632;
    while(true) {
      if(level__6637 > 0) {
        var G__6640 = wrapper__6636.lastChild;
        var G__6641 = level__6637 - 1;
        wrapper__6636 = G__6640;
        level__6637 = G__6641;
        continue
      }else {
        return wrapper__6636
      }
      break
    }
  }();
  if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)) {
    domina.remove_extraneous_tbody_BANG_.call(null, div__6638, html__6629)
  }else {
  }
  if(cljs.core.truth_(function() {
    var and__3822__auto____6639 = cljs.core.not.call(null, domina.support.leading_whitespace_QMARK_);
    if(and__3822__auto____6639) {
      return cljs.core.re_find.call(null, domina.re_leading_whitespace, html__6629)
    }else {
      return and__3822__auto____6639
    }
  }())) {
    domina.restore_leading_whitespace_BANG_.call(null, div__6638, html__6629)
  }else {
  }
  return div__6638.childNodes
};
domina.string_to_dom = function string_to_dom(s) {
  if(cljs.core.truth_(cljs.core.re_find.call(null, domina.re_html, s))) {
    return domina.html_to_dom.call(null, s)
  }else {
    return document.createTextNode(s)
  }
};
domina.DomContent = {};
domina.nodes = function nodes(content) {
  if(function() {
    var and__3822__auto____6646 = content;
    if(and__3822__auto____6646) {
      return content.domina$DomContent$nodes$arity$1
    }else {
      return and__3822__auto____6646
    }
  }()) {
    return content.domina$DomContent$nodes$arity$1(content)
  }else {
    var x__2389__auto____6647 = content == null ? null : content;
    return function() {
      var or__3824__auto____6648 = domina.nodes[goog.typeOf(x__2389__auto____6647)];
      if(or__3824__auto____6648) {
        return or__3824__auto____6648
      }else {
        var or__3824__auto____6649 = domina.nodes["_"];
        if(or__3824__auto____6649) {
          return or__3824__auto____6649
        }else {
          throw cljs.core.missing_protocol.call(null, "DomContent.nodes", content);
        }
      }
    }().call(null, content)
  }
};
domina.single_node = function single_node(nodeseq) {
  if(function() {
    var and__3822__auto____6654 = nodeseq;
    if(and__3822__auto____6654) {
      return nodeseq.domina$DomContent$single_node$arity$1
    }else {
      return and__3822__auto____6654
    }
  }()) {
    return nodeseq.domina$DomContent$single_node$arity$1(nodeseq)
  }else {
    var x__2389__auto____6655 = nodeseq == null ? null : nodeseq;
    return function() {
      var or__3824__auto____6656 = domina.single_node[goog.typeOf(x__2389__auto____6655)];
      if(or__3824__auto____6656) {
        return or__3824__auto____6656
      }else {
        var or__3824__auto____6657 = domina.single_node["_"];
        if(or__3824__auto____6657) {
          return or__3824__auto____6657
        }else {
          throw cljs.core.missing_protocol.call(null, "DomContent.single-node", nodeseq);
        }
      }
    }().call(null, nodeseq)
  }
};
domina._STAR_debug_STAR_ = true;
domina.log_debug = function() {
  var log_debug__delegate = function(mesg) {
    if(cljs.core.truth_(function() {
      var and__3822__auto____6659 = domina._STAR_debug_STAR_;
      if(cljs.core.truth_(and__3822__auto____6659)) {
        return!cljs.core._EQ_.call(null, window.console, undefined)
      }else {
        return and__3822__auto____6659
      }
    }())) {
      return console.log(cljs.core.apply.call(null, cljs.core.str, mesg))
    }else {
      return null
    }
  };
  var log_debug = function(var_args) {
    var mesg = null;
    if(goog.isDef(var_args)) {
      mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return log_debug__delegate.call(this, mesg)
  };
  log_debug.cljs$lang$maxFixedArity = 0;
  log_debug.cljs$lang$applyTo = function(arglist__6660) {
    var mesg = cljs.core.seq(arglist__6660);
    return log_debug__delegate(mesg)
  };
  log_debug.cljs$lang$arity$variadic = log_debug__delegate;
  return log_debug
}();
domina.log = function() {
  var log__delegate = function(mesg) {
    if(cljs.core.truth_(window.console)) {
      return console.log(cljs.core.apply.call(null, cljs.core.str, mesg))
    }else {
      return null
    }
  };
  var log = function(var_args) {
    var mesg = null;
    if(goog.isDef(var_args)) {
      mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0), 0)
    }
    return log__delegate.call(this, mesg)
  };
  log.cljs$lang$maxFixedArity = 0;
  log.cljs$lang$applyTo = function(arglist__6661) {
    var mesg = cljs.core.seq(arglist__6661);
    return log__delegate(mesg)
  };
  log.cljs$lang$arity$variadic = log__delegate;
  return log
}();
domina.by_id = function by_id(id) {
  return goog.dom.getElement(cljs.core.name.call(null, id))
};
domina.by_class = function by_class(class_name) {
  if(void 0 === domina.t6669) {
    domina.t6669 = function(class_name, by_class, meta6670) {
      this.class_name = class_name;
      this.by_class = by_class;
      this.meta6670 = meta6670;
      this.cljs$lang$protocol_mask$partition1$ = 0;
      this.cljs$lang$protocol_mask$partition0$ = 393216
    };
    domina.t6669.cljs$lang$type = true;
    domina.t6669.cljs$lang$ctorPrSeq = function(this__2335__auto__) {
      return cljs.core.list.call(null, "domina/t6669")
    };
    domina.t6669.prototype.domina$DomContent$ = true;
    domina.t6669.prototype.domina$DomContent$nodes$arity$1 = function(_) {
      var this__6672 = this;
      return domina.normalize_seq.call(null, goog.dom.getElementsByClass(cljs.core.name.call(null, this__6672.class_name)))
    };
    domina.t6669.prototype.domina$DomContent$single_node$arity$1 = function(_) {
      var this__6673 = this;
      return domina.normalize_seq.call(null, goog.dom.getElementByClass(cljs.core.name.call(null, this__6673.class_name)))
    };
    domina.t6669.prototype.cljs$core$IMeta$_meta$arity$1 = function(_6671) {
      var this__6674 = this;
      return this__6674.meta6670
    };
    domina.t6669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = function(_6671, meta6670) {
      var this__6675 = this;
      return new domina.t6669(this__6675.class_name, this__6675.by_class, meta6670)
    };
    domina.t6669
  }else {
  }
  return new domina.t6669(class_name, by_class, null)
};
domina.children = function children(content) {
  return cljs.core.doall.call(null, cljs.core.mapcat.call(null, goog.dom.getChildren, domina.nodes.call(null, content)))
};
domina.clone = function clone(content) {
  return cljs.core.map.call(null, function(p1__6676_SHARP_) {
    return p1__6676_SHARP_.cloneNode(true)
  }, domina.nodes.call(null, content))
};
domina.append_BANG_ = function append_BANG_(parent_content, child_content) {
  domina.apply_with_cloning.call(null, goog.dom.appendChild, parent_content, child_content);
  return parent_content
};
domina.insert_BANG_ = function insert_BANG_(parent_content, child_content, idx) {
  domina.apply_with_cloning.call(null, function(p1__6677_SHARP_, p2__6678_SHARP_) {
    return goog.dom.insertChildAt(p1__6677_SHARP_, p2__6678_SHARP_, idx)
  }, parent_content, child_content);
  return parent_content
};
domina.prepend_BANG_ = function prepend_BANG_(parent_content, child_content) {
  domina.insert_BANG_.call(null, parent_content, child_content, 0);
  return parent_content
};
domina.insert_before_BANG_ = function insert_before_BANG_(content, new_content) {
  domina.apply_with_cloning.call(null, function(p1__6680_SHARP_, p2__6679_SHARP_) {
    return goog.dom.insertSiblingBefore(p2__6679_SHARP_, p1__6680_SHARP_)
  }, content, new_content);
  return content
};
domina.insert_after_BANG_ = function insert_after_BANG_(content, new_content) {
  domina.apply_with_cloning.call(null, function(p1__6682_SHARP_, p2__6681_SHARP_) {
    return goog.dom.insertSiblingAfter(p2__6681_SHARP_, p1__6682_SHARP_)
  }, content, new_content);
  return content
};
domina.swap_content_BANG_ = function swap_content_BANG_(old_content, new_content) {
  domina.apply_with_cloning.call(null, function(p1__6684_SHARP_, p2__6683_SHARP_) {
    return goog.dom.replaceNode(p2__6683_SHARP_, p1__6684_SHARP_)
  }, old_content, new_content);
  return old_content
};
domina.detach_BANG_ = function detach_BANG_(content) {
  return cljs.core.doall.call(null, cljs.core.map.call(null, goog.dom.removeNode, domina.nodes.call(null, content)))
};
domina.destroy_BANG_ = function destroy_BANG_(content) {
  return cljs.core.dorun.call(null, cljs.core.map.call(null, goog.dom.removeNode, domina.nodes.call(null, content)))
};
domina.destroy_children_BANG_ = function destroy_children_BANG_(content) {
  cljs.core.dorun.call(null, cljs.core.map.call(null, goog.dom.removeChildren, domina.nodes.call(null, content)));
  return content
};
domina.style = function style(content, name) {
  var s__6686 = goog.style.getStyle(domina.single_node.call(null, content), cljs.core.name.call(null, name));
  if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null, s__6686))) {
    return null
  }else {
    return s__6686
  }
};
domina.attr = function attr(content, name) {
  return domina.single_node.call(null, content).getAttribute(cljs.core.name.call(null, name))
};
domina.set_style_BANG_ = function() {
  var set_style_BANG___delegate = function(content, name, value) {
    var G__6693__6694 = cljs.core.seq.call(null, domina.nodes.call(null, content));
    if(G__6693__6694) {
      var n__6695 = cljs.core.first.call(null, G__6693__6694);
      var G__6693__6696 = G__6693__6694;
      while(true) {
        goog.style.setStyle(n__6695, cljs.core.name.call(null, name), cljs.core.apply.call(null, cljs.core.str, value));
        var temp__3974__auto____6697 = cljs.core.next.call(null, G__6693__6696);
        if(temp__3974__auto____6697) {
          var G__6693__6698 = temp__3974__auto____6697;
          var G__6699 = cljs.core.first.call(null, G__6693__6698);
          var G__6700 = G__6693__6698;
          n__6695 = G__6699;
          G__6693__6696 = G__6700;
          continue
        }else {
        }
        break
      }
    }else {
    }
    return content
  };
  var set_style_BANG_ = function(content, name, var_args) {
    var value = null;
    if(goog.isDef(var_args)) {
      value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
    }
    return set_style_BANG___delegate.call(this, content, name, value)
  };
  set_style_BANG_.cljs$lang$maxFixedArity = 2;
  set_style_BANG_.cljs$lang$applyTo = function(arglist__6701) {
    var content = cljs.core.first(arglist__6701);
    var name = cljs.core.first(cljs.core.next(arglist__6701));
    var value = cljs.core.rest(cljs.core.next(arglist__6701));
    return set_style_BANG___delegate(content, name, value)
  };
  set_style_BANG_.cljs$lang$arity$variadic = set_style_BANG___delegate;
  return set_style_BANG_
}();
domina.set_attr_BANG_ = function() {
  var set_attr_BANG___delegate = function(content, name, value) {
    var G__6708__6709 = cljs.core.seq.call(null, domina.nodes.call(null, content));
    if(G__6708__6709) {
      var n__6710 = cljs.core.first.call(null, G__6708__6709);
      var G__6708__6711 = G__6708__6709;
      while(true) {
        n__6710.setAttribute(cljs.core.name.call(null, name), cljs.core.apply.call(null, cljs.core.str, value));
        var temp__3974__auto____6712 = cljs.core.next.call(null, G__6708__6711);
        if(temp__3974__auto____6712) {
          var G__6708__6713 = temp__3974__auto____6712;
          var G__6714 = cljs.core.first.call(null, G__6708__6713);
          var G__6715 = G__6708__6713;
          n__6710 = G__6714;
          G__6708__6711 = G__6715;
          continue
        }else {
        }
        break
      }
    }else {
    }
    return content
  };
  var set_attr_BANG_ = function(content, name, var_args) {
    var value = null;
    if(goog.isDef(var_args)) {
      value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2), 0)
    }
    return set_attr_BANG___delegate.call(this, content, name, value)
  };
  set_attr_BANG_.cljs$lang$maxFixedArity = 2;
  set_attr_BANG_.cljs$lang$applyTo = function(arglist__6716) {
    var content = cljs.core.first(arglist__6716);
    var name = cljs.core.first(cljs.core.next(arglist__6716));
    var value = cljs.core.rest(cljs.core.next(arglist__6716));
    return set_attr_BANG___delegate(content, name, value)
  };
  set_attr_BANG_.cljs$lang$arity$variadic = set_attr_BANG___delegate;
  return set_attr_BANG_
}();
domina.remove_attr_BANG_ = function remove_attr_BANG_(content, name) {
  var G__6723__6724 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(G__6723__6724) {
    var n__6725 = cljs.core.first.call(null, G__6723__6724);
    var G__6723__6726 = G__6723__6724;
    while(true) {
      n__6725.removeAttribute(cljs.core.name.call(null, name));
      var temp__3974__auto____6727 = cljs.core.next.call(null, G__6723__6726);
      if(temp__3974__auto____6727) {
        var G__6723__6728 = temp__3974__auto____6727;
        var G__6729 = cljs.core.first.call(null, G__6723__6728);
        var G__6730 = G__6723__6728;
        n__6725 = G__6729;
        G__6723__6726 = G__6730;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return content
};
domina.parse_style_attributes = function parse_style_attributes(style) {
  return cljs.core.reduce.call(null, function(acc, pair) {
    var vec__6736__6737 = pair.split(/\s*:\s*/);
    var k__6738 = cljs.core.nth.call(null, vec__6736__6737, 0, null);
    var v__6739 = cljs.core.nth.call(null, vec__6736__6737, 1, null);
    if(cljs.core.truth_(function() {
      var and__3822__auto____6740 = k__6738;
      if(cljs.core.truth_(and__3822__auto____6740)) {
        return v__6739
      }else {
        return and__3822__auto____6740
      }
    }())) {
      return cljs.core.assoc.call(null, acc, cljs.core.keyword.call(null, k__6738.toLowerCase()), v__6739)
    }else {
      return acc
    }
  }, cljs.core.ObjMap.EMPTY, style.split(/\s*;\s*/))
};
domina.styles = function styles(content) {
  var style__6743 = domina.attr.call(null, content, "style");
  if(cljs.core.string_QMARK_.call(null, style__6743)) {
    return domina.parse_style_attributes.call(null, style__6743)
  }else {
    if(cljs.core.truth_(style__6743.cssText)) {
      return domina.parse_style_attributes.call(null, style__6743.cssText)
    }else {
      return null
    }
  }
};
domina.attrs = function attrs(content) {
  var node__6749 = domina.single_node.call(null, content);
  var attrs__6750 = node__6749.attributes;
  return cljs.core.reduce.call(null, cljs.core.conj, cljs.core.filter.call(null, cljs.core.complement.call(null, cljs.core.nil_QMARK_), cljs.core.map.call(null, function(p1__6741_SHARP_) {
    var attr__6751 = attrs__6750.item(p1__6741_SHARP_);
    var value__6752 = attr__6751.nodeValue;
    if(function() {
      var and__3822__auto____6753 = cljs.core.not_EQ_.call(null, null, value__6752);
      if(and__3822__auto____6753) {
        return cljs.core.not_EQ_.call(null, "", value__6752)
      }else {
        return and__3822__auto____6753
      }
    }()) {
      return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.call(null, attr__6751.nodeName.toLowerCase())], [attr__6751.nodeValue])
    }else {
      return null
    }
  }, cljs.core.range.call(null, attrs__6750.length))))
};
domina.set_styles_BANG_ = function set_styles_BANG_(content, styles) {
  var G__6773__6774 = cljs.core.seq.call(null, styles);
  if(G__6773__6774) {
    var G__6776__6778 = cljs.core.first.call(null, G__6773__6774);
    var vec__6777__6779 = G__6776__6778;
    var name__6780 = cljs.core.nth.call(null, vec__6777__6779, 0, null);
    var value__6781 = cljs.core.nth.call(null, vec__6777__6779, 1, null);
    var G__6773__6782 = G__6773__6774;
    var G__6776__6783 = G__6776__6778;
    var G__6773__6784 = G__6773__6782;
    while(true) {
      var vec__6785__6786 = G__6776__6783;
      var name__6787 = cljs.core.nth.call(null, vec__6785__6786, 0, null);
      var value__6788 = cljs.core.nth.call(null, vec__6785__6786, 1, null);
      var G__6773__6789 = G__6773__6784;
      domina.set_style_BANG_.call(null, content, name__6787, value__6788);
      var temp__3974__auto____6790 = cljs.core.next.call(null, G__6773__6789);
      if(temp__3974__auto____6790) {
        var G__6773__6791 = temp__3974__auto____6790;
        var G__6792 = cljs.core.first.call(null, G__6773__6791);
        var G__6793 = G__6773__6791;
        G__6776__6783 = G__6792;
        G__6773__6784 = G__6793;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return content
};
domina.set_attrs_BANG_ = function set_attrs_BANG_(content, attrs) {
  var G__6813__6814 = cljs.core.seq.call(null, attrs);
  if(G__6813__6814) {
    var G__6816__6818 = cljs.core.first.call(null, G__6813__6814);
    var vec__6817__6819 = G__6816__6818;
    var name__6820 = cljs.core.nth.call(null, vec__6817__6819, 0, null);
    var value__6821 = cljs.core.nth.call(null, vec__6817__6819, 1, null);
    var G__6813__6822 = G__6813__6814;
    var G__6816__6823 = G__6816__6818;
    var G__6813__6824 = G__6813__6822;
    while(true) {
      var vec__6825__6826 = G__6816__6823;
      var name__6827 = cljs.core.nth.call(null, vec__6825__6826, 0, null);
      var value__6828 = cljs.core.nth.call(null, vec__6825__6826, 1, null);
      var G__6813__6829 = G__6813__6824;
      domina.set_attr_BANG_.call(null, content, name__6827, value__6828);
      var temp__3974__auto____6830 = cljs.core.next.call(null, G__6813__6829);
      if(temp__3974__auto____6830) {
        var G__6813__6831 = temp__3974__auto____6830;
        var G__6832 = cljs.core.first.call(null, G__6813__6831);
        var G__6833 = G__6813__6831;
        G__6816__6823 = G__6832;
        G__6813__6824 = G__6833;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return content
};
domina.has_class_QMARK_ = function has_class_QMARK_(content, class$) {
  return goog.dom.classes.has(domina.single_node.call(null, content), class$)
};
domina.add_class_BANG_ = function add_class_BANG_(content, class$) {
  var G__6840__6841 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(G__6840__6841) {
    var node__6842 = cljs.core.first.call(null, G__6840__6841);
    var G__6840__6843 = G__6840__6841;
    while(true) {
      goog.dom.classes.add(node__6842, class$);
      var temp__3974__auto____6844 = cljs.core.next.call(null, G__6840__6843);
      if(temp__3974__auto____6844) {
        var G__6840__6845 = temp__3974__auto____6844;
        var G__6846 = cljs.core.first.call(null, G__6840__6845);
        var G__6847 = G__6840__6845;
        node__6842 = G__6846;
        G__6840__6843 = G__6847;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return content
};
domina.remove_class_BANG_ = function remove_class_BANG_(content, class$) {
  var G__6854__6855 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(G__6854__6855) {
    var node__6856 = cljs.core.first.call(null, G__6854__6855);
    var G__6854__6857 = G__6854__6855;
    while(true) {
      goog.dom.classes.remove(node__6856, class$);
      var temp__3974__auto____6858 = cljs.core.next.call(null, G__6854__6857);
      if(temp__3974__auto____6858) {
        var G__6854__6859 = temp__3974__auto____6858;
        var G__6860 = cljs.core.first.call(null, G__6854__6859);
        var G__6861 = G__6854__6859;
        node__6856 = G__6860;
        G__6854__6857 = G__6861;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return content
};
domina.classes = function classes(content) {
  return cljs.core.seq.call(null, goog.dom.classes.get(domina.single_node.call(null, content)))
};
domina.set_classes_BANG_ = function set_classes_BANG_(content, classes) {
  var classes__6869 = cljs.core.coll_QMARK_.call(null, classes) ? clojure.string.join.call(null, " ", classes) : classes;
  var G__6870__6871 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(G__6870__6871) {
    var node__6872 = cljs.core.first.call(null, G__6870__6871);
    var G__6870__6873 = G__6870__6871;
    while(true) {
      goog.dom.classes.set(node__6872, classes__6869);
      var temp__3974__auto____6874 = cljs.core.next.call(null, G__6870__6873);
      if(temp__3974__auto____6874) {
        var G__6870__6875 = temp__3974__auto____6874;
        var G__6876 = cljs.core.first.call(null, G__6870__6875);
        var G__6877 = G__6870__6875;
        node__6872 = G__6876;
        G__6870__6873 = G__6877;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return content
};
domina.text = function text(content) {
  return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null, content)))
};
domina.set_text_BANG_ = function set_text_BANG_(content, value) {
  var G__6884__6885 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(G__6884__6885) {
    var node__6886 = cljs.core.first.call(null, G__6884__6885);
    var G__6884__6887 = G__6884__6885;
    while(true) {
      goog.dom.setTextContent(node__6886, value);
      var temp__3974__auto____6888 = cljs.core.next.call(null, G__6884__6887);
      if(temp__3974__auto____6888) {
        var G__6884__6889 = temp__3974__auto____6888;
        var G__6890 = cljs.core.first.call(null, G__6884__6889);
        var G__6891 = G__6884__6889;
        node__6886 = G__6890;
        G__6884__6887 = G__6891;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return content
};
domina.value = function value(content) {
  return goog.dom.forms.getValue(domina.single_node.call(null, content))
};
domina.set_value_BANG_ = function set_value_BANG_(content, value) {
  var G__6898__6899 = cljs.core.seq.call(null, domina.nodes.call(null, content));
  if(G__6898__6899) {
    var node__6900 = cljs.core.first.call(null, G__6898__6899);
    var G__6898__6901 = G__6898__6899;
    while(true) {
      goog.dom.forms.setValue(node__6900, value);
      var temp__3974__auto____6902 = cljs.core.next.call(null, G__6898__6901);
      if(temp__3974__auto____6902) {
        var G__6898__6903 = temp__3974__auto____6902;
        var G__6904 = cljs.core.first.call(null, G__6898__6903);
        var G__6905 = G__6898__6903;
        node__6900 = G__6904;
        G__6898__6901 = G__6905;
        continue
      }else {
      }
      break
    }
  }else {
  }
  return content
};
domina.html = function html(content) {
  return domina.single_node.call(null, content).innerHTML
};
domina.replace_children_BANG_ = function replace_children_BANG_(content, inner_content) {
  return domina.append_BANG_.call(null, domina.destroy_children_BANG_.call(null, content), inner_content)
};
domina.set_inner_html_BANG_ = function set_inner_html_BANG_(content, html_string) {
  var allows_inner_html_QMARK___6922 = cljs.core.not.call(null, cljs.core.re_find.call(null, domina.re_no_inner_html, html_string));
  var leading_whitespace_QMARK___6923 = cljs.core.re_find.call(null, domina.re_leading_whitespace, html_string);
  var tag_name__6924 = [cljs.core.str(cljs.core.second.call(null, cljs.core.re_find.call(null, domina.re_tag_name, html_string)))].join("").toLowerCase();
  var special_tag_QMARK___6925 = cljs.core.contains_QMARK_.call(null, domina.wrap_map, tag_name__6924);
  if(cljs.core.truth_(function() {
    var and__3822__auto____6926 = allows_inner_html_QMARK___6922;
    if(and__3822__auto____6926) {
      var and__3822__auto____6928 = function() {
        var or__3824__auto____6927 = domina.support.leading_whitespace_QMARK_;
        if(cljs.core.truth_(or__3824__auto____6927)) {
          return or__3824__auto____6927
        }else {
          return cljs.core.not.call(null, leading_whitespace_QMARK___6923)
        }
      }();
      if(cljs.core.truth_(and__3822__auto____6928)) {
        return!special_tag_QMARK___6925
      }else {
        return and__3822__auto____6928
      }
    }else {
      return and__3822__auto____6926
    }
  }())) {
    var value__6929 = clojure.string.replace.call(null, html_string, domina.re_xhtml_tag, "<$1></$2>");
    try {
      var G__6932__6933 = cljs.core.seq.call(null, domina.nodes.call(null, content));
      if(G__6932__6933) {
        var node__6934 = cljs.core.first.call(null, G__6932__6933);
        var G__6932__6935 = G__6932__6933;
        while(true) {
          goog.events.removeAll(node__6934);
          node__6934.innerHTML = value__6929;
          var temp__3974__auto____6936 = cljs.core.next.call(null, G__6932__6935);
          if(temp__3974__auto____6936) {
            var G__6932__6937 = temp__3974__auto____6936;
            var G__6938 = cljs.core.first.call(null, G__6932__6937);
            var G__6939 = G__6932__6937;
            node__6934 = G__6938;
            G__6932__6935 = G__6939;
            continue
          }else {
          }
          break
        }
      }else {
      }
    }catch(e6930) {
      if(cljs.core.instance_QMARK_.call(null, domina.Exception, e6930)) {
        var e__6931 = e6930;
        domina.replace_children_BANG_.call(null, content, value__6929)
      }else {
        if("\ufdd0'else") {
          throw e6930;
        }else {
        }
      }
    }
  }else {
    domina.replace_children_BANG_.call(null, content, html_string)
  }
  return content
};
domina.set_html_BANG_ = function set_html_BANG_(content, inner_content) {
  if(cljs.core.string_QMARK_.call(null, inner_content)) {
    return domina.set_inner_html_BANG_.call(null, content, inner_content)
  }else {
    return domina.replace_children_BANG_.call(null, content, inner_content)
  }
};
domina.get_data = function() {
  var get_data = null;
  var get_data__2 = function(node, key) {
    return get_data.call(null, node, key, false)
  };
  var get_data__3 = function(node, key, bubble) {
    var m__6945 = domina.single_node.call(null, node).__domina_data;
    var value__6946 = cljs.core.truth_(m__6945) ? cljs.core._lookup.call(null, m__6945, key, null) : null;
    if(cljs.core.truth_(function() {
      var and__3822__auto____6947 = bubble;
      if(cljs.core.truth_(and__3822__auto____6947)) {
        return value__6946 == null
      }else {
        return and__3822__auto____6947
      }
    }())) {
      var temp__3974__auto____6948 = domina.single_node.call(null, node).parentNode;
      if(cljs.core.truth_(temp__3974__auto____6948)) {
        var parent__6949 = temp__3974__auto____6948;
        return get_data.call(null, parent__6949, key, true)
      }else {
        return null
      }
    }else {
      return value__6946
    }
  };
  get_data = function(node, key, bubble) {
    switch(arguments.length) {
      case 2:
        return get_data__2.call(this, node, key);
      case 3:
        return get_data__3.call(this, node, key, bubble)
    }
    throw"Invalid arity: " + arguments.length;
  };
  get_data.cljs$lang$arity$2 = get_data__2;
  get_data.cljs$lang$arity$3 = get_data__3;
  return get_data
}();
domina.set_data_BANG_ = function set_data_BANG_(node, key, value) {
  var m__6955 = function() {
    var or__3824__auto____6954 = domina.single_node.call(null, node).__domina_data;
    if(cljs.core.truth_(or__3824__auto____6954)) {
      return or__3824__auto____6954
    }else {
      return cljs.core.ObjMap.EMPTY
    }
  }();
  return domina.single_node.call(null, node).__domina_data = cljs.core.assoc.call(null, m__6955, key, value)
};
domina.apply_with_cloning = function apply_with_cloning(f, parent_content, child_content) {
  var parents__6967 = domina.nodes.call(null, parent_content);
  var children__6968 = domina.nodes.call(null, child_content);
  var first_child__6976 = function() {
    var frag__6969 = document.createDocumentFragment();
    var G__6970__6971 = cljs.core.seq.call(null, children__6968);
    if(G__6970__6971) {
      var child__6972 = cljs.core.first.call(null, G__6970__6971);
      var G__6970__6973 = G__6970__6971;
      while(true) {
        frag__6969.appendChild(child__6972);
        var temp__3974__auto____6974 = cljs.core.next.call(null, G__6970__6973);
        if(temp__3974__auto____6974) {
          var G__6970__6975 = temp__3974__auto____6974;
          var G__6978 = cljs.core.first.call(null, G__6970__6975);
          var G__6979 = G__6970__6975;
          child__6972 = G__6978;
          G__6970__6973 = G__6979;
          continue
        }else {
        }
        break
      }
    }else {
    }
    return frag__6969
  }();
  var other_children__6977 = cljs.core.doall.call(null, cljs.core.repeatedly.call(null, cljs.core.count.call(null, parents__6967) - 1, function() {
    return first_child__6976.cloneNode(true)
  }));
  if(cljs.core.seq.call(null, parents__6967)) {
    f.call(null, cljs.core.first.call(null, parents__6967), first_child__6976);
    return cljs.core.doall.call(null, cljs.core.map.call(null, function(p1__6950_SHARP_, p2__6951_SHARP_) {
      return f.call(null, p1__6950_SHARP_, p2__6951_SHARP_)
    }, cljs.core.rest.call(null, parents__6967), other_children__6977))
  }else {
    return null
  }
};
domina.lazy_nl_via_item = function() {
  var lazy_nl_via_item = null;
  var lazy_nl_via_item__1 = function(nl) {
    return lazy_nl_via_item.call(null, nl, 0)
  };
  var lazy_nl_via_item__2 = function(nl, n) {
    if(n < nl.length) {
      return new cljs.core.LazySeq(null, false, function() {
        return cljs.core.cons.call(null, nl.item(n), lazy_nl_via_item.call(null, nl, n + 1))
      }, null)
    }else {
      return null
    }
  };
  lazy_nl_via_item = function(nl, n) {
    switch(arguments.length) {
      case 1:
        return lazy_nl_via_item__1.call(this, nl);
      case 2:
        return lazy_nl_via_item__2.call(this, nl, n)
    }
    throw"Invalid arity: " + arguments.length;
  };
  lazy_nl_via_item.cljs$lang$arity$1 = lazy_nl_via_item__1;
  lazy_nl_via_item.cljs$lang$arity$2 = lazy_nl_via_item__2;
  return lazy_nl_via_item
}();
domina.lazy_nl_via_array_ref = function() {
  var lazy_nl_via_array_ref = null;
  var lazy_nl_via_array_ref__1 = function(nl) {
    return lazy_nl_via_array_ref.call(null, nl, 0)
  };
  var lazy_nl_via_array_ref__2 = function(nl, n) {
    if(n < nl.length) {
      return new cljs.core.LazySeq(null, false, function() {
        return cljs.core.cons.call(null, nl[n], lazy_nl_via_array_ref.call(null, nl, n + 1))
      }, null)
    }else {
      return null
    }
  };
  lazy_nl_via_array_ref = function(nl, n) {
    switch(arguments.length) {
      case 1:
        return lazy_nl_via_array_ref__1.call(this, nl);
      case 2:
        return lazy_nl_via_array_ref__2.call(this, nl, n)
    }
    throw"Invalid arity: " + arguments.length;
  };
  lazy_nl_via_array_ref.cljs$lang$arity$1 = lazy_nl_via_array_ref__1;
  lazy_nl_via_array_ref.cljs$lang$arity$2 = lazy_nl_via_array_ref__2;
  return lazy_nl_via_array_ref
}();
domina.lazy_nodelist = function lazy_nodelist(nl) {
  if(cljs.core.truth_(nl.item)) {
    return domina.lazy_nl_via_item.call(null, nl)
  }else {
    return domina.lazy_nl_via_array_ref.call(null, nl)
  }
};
domina.array_like_QMARK_ = function array_like_QMARK_(obj) {
  var and__3822__auto____6981 = obj;
  if(cljs.core.truth_(and__3822__auto____6981)) {
    return obj.length
  }else {
    return and__3822__auto____6981
  }
};
domina.normalize_seq = function normalize_seq(list_thing) {
  if(list_thing == null) {
    return cljs.core.List.EMPTY
  }else {
    if(function() {
      var G__6985__6986 = list_thing;
      if(G__6985__6986) {
        if(function() {
          var or__3824__auto____6987 = G__6985__6986.cljs$lang$protocol_mask$partition0$ & 8388608;
          if(or__3824__auto____6987) {
            return or__3824__auto____6987
          }else {
            return G__6985__6986.cljs$core$ISeqable$
          }
        }()) {
          return true
        }else {
          if(!G__6985__6986.cljs$lang$protocol_mask$partition0$) {
            return cljs.core.type_satisfies_.call(null, cljs.core.ISeqable, G__6985__6986)
          }else {
            return false
          }
        }
      }else {
        return cljs.core.type_satisfies_.call(null, cljs.core.ISeqable, G__6985__6986)
      }
    }()) {
      return cljs.core.seq.call(null, list_thing)
    }else {
      if(cljs.core.truth_(domina.array_like_QMARK_.call(null, list_thing))) {
        return domina.lazy_nodelist.call(null, list_thing)
      }else {
        if("\ufdd0'default") {
          return cljs.core.seq.call(null, cljs.core.PersistentVector.fromArray([list_thing], true))
        }else {
          return null
        }
      }
    }
  }
};
domina.DomContent["_"] = true;
domina.nodes["_"] = function(content) {
  if(content == null) {
    return cljs.core.List.EMPTY
  }else {
    if(function() {
      var G__6988__6989 = content;
      if(G__6988__6989) {
        if(function() {
          var or__3824__auto____6990 = G__6988__6989.cljs$lang$protocol_mask$partition0$ & 8388608;
          if(or__3824__auto____6990) {
            return or__3824__auto____6990
          }else {
            return G__6988__6989.cljs$core$ISeqable$
          }
        }()) {
          return true
        }else {
          if(!G__6988__6989.cljs$lang$protocol_mask$partition0$) {
            return cljs.core.type_satisfies_.call(null, cljs.core.ISeqable, G__6988__6989)
          }else {
            return false
          }
        }
      }else {
        return cljs.core.type_satisfies_.call(null, cljs.core.ISeqable, G__6988__6989)
      }
    }()) {
      return cljs.core.seq.call(null, content)
    }else {
      if(cljs.core.truth_(domina.array_like_QMARK_.call(null, content))) {
        return domina.lazy_nodelist.call(null, content)
      }else {
        if("\ufdd0'default") {
          return cljs.core.seq.call(null, cljs.core.PersistentVector.fromArray([content], true))
        }else {
          return null
        }
      }
    }
  }
};
domina.single_node["_"] = function(content) {
  if(content == null) {
    return null
  }else {
    if(function() {
      var G__6991__6992 = content;
      if(G__6991__6992) {
        if(function() {
          var or__3824__auto____6993 = G__6991__6992.cljs$lang$protocol_mask$partition0$ & 8388608;
          if(or__3824__auto____6993) {
            return or__3824__auto____6993
          }else {
            return G__6991__6992.cljs$core$ISeqable$
          }
        }()) {
          return true
        }else {
          if(!G__6991__6992.cljs$lang$protocol_mask$partition0$) {
            return cljs.core.type_satisfies_.call(null, cljs.core.ISeqable, G__6991__6992)
          }else {
            return false
          }
        }
      }else {
        return cljs.core.type_satisfies_.call(null, cljs.core.ISeqable, G__6991__6992)
      }
    }()) {
      return cljs.core.first.call(null, content)
    }else {
      if(cljs.core.truth_(domina.array_like_QMARK_.call(null, content))) {
        return content.item(0)
      }else {
        if("\ufdd0'default") {
          return content
        }else {
          return null
        }
      }
    }
  }
};
domina.DomContent["string"] = true;
domina.nodes["string"] = function(s) {
  return cljs.core.doall.call(null, domina.nodes.call(null, domina.string_to_dom.call(null, s)))
};
domina.single_node["string"] = function(s) {
  return domina.single_node.call(null, domina.string_to_dom.call(null, s))
};
if(cljs.core.truth_(typeof NodeList != "undefined")) {
  NodeList.prototype.cljs$core$ISeqable$ = true;
  NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = function(nodelist) {
    return domina.lazy_nodelist.call(null, nodelist)
  };
  NodeList.prototype.cljs$core$IIndexed$ = true;
  NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = function(nodelist, n) {
    return nodelist.item(n)
  };
  NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = function(nodelist, n, not_found) {
    if(nodelist.length <= n) {
      return not_found
    }else {
      return cljs.core.nth.call(null, nodelist, n)
    }
  };
  NodeList.prototype.cljs$core$ICounted$ = true;
  NodeList.prototype.cljs$core$ICounted$_count$arity$1 = function(nodelist) {
    return nodelist.length
  }
}else {
}
if(cljs.core.truth_(typeof StaticNodeList != "undefined")) {
  StaticNodeList.prototype.cljs$core$ISeqable$ = true;
  StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = function(nodelist) {
    return domina.lazy_nodelist.call(null, nodelist)
  };
  StaticNodeList.prototype.cljs$core$IIndexed$ = true;
  StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = function(nodelist, n) {
    return nodelist.item(n)
  };
  StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = function(nodelist, n, not_found) {
    if(nodelist.length <= n) {
      return not_found
    }else {
      return cljs.core.nth.call(null, nodelist, n)
    }
  };
  StaticNodeList.prototype.cljs$core$ICounted$ = true;
  StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = function(nodelist) {
    return nodelist.length
  }
}else {
}
if(cljs.core.truth_(typeof HTMLCollection != "undefined")) {
  HTMLCollection.prototype.cljs$core$ISeqable$ = true;
  HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = function(coll) {
    return domina.lazy_nodelist.call(null, coll)
  };
  HTMLCollection.prototype.cljs$core$IIndexed$ = true;
  HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = function(coll, n) {
    return coll.item(n)
  };
  HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = function(coll, n, not_found) {
    if(coll.length <= n) {
      return not_found
    }else {
      return cljs.core.nth.call(null, coll, n)
    }
  };
  HTMLCollection.prototype.cljs$core$ICounted$ = true;
  HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = function(coll) {
    return coll.length
  }
}else {
}
;goog.provide("cljs_intro.search");
goog.require("cljs.core");
goog.require("clojure.browser.event");
goog.require("domina");
cljs_intro.search.search_button = domina.by_id.call(null, "search-btn");
cljs_intro.search.lname_field = domina.by_id.call(null, "lname");
clojure.browser.event.listen.call(null, cljs_intro.search.search_button, "click", function() {
  return alert(domina.value.call(null, domina.by_id.call(null, "lname")))
});
goog.provide("cljs_intro.hello");
goog.require("cljs.core");
cljs_intro.hello.greeting = function greeting() {
  return document.write("<p>Hello Hockey Fans!</p>")
};
goog.exportSymbol("cljs_intro.hello.greeting", cljs_intro.hello.greeting);
