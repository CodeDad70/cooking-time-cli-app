(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var t=r();for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){e.exports=t(1)},function(e,r,t){"use strict";function n(){var e="undefined"==typeof JSON?{}:JSON;o.setupJSON(e)}var o=t(2),i=t(3);n();var a=window._rollbarConfig,s=a&&a.globalAlias||"Rollbar",u=window[s]&&"undefined"!=typeof window[s].shimId;!u&&a?o.wrapper.init(a):(window.Rollbar=o.wrapper,window.RollbarNotifier=i.Notifier),e.exports=o.wrapper},function(e,r,t){"use strict";function n(e,r,t){!t[4]&&window._rollbarWrappedError&&(t[4]=window._rollbarWrappedError,window._rollbarWrappedError=null),e.uncaughtError.apply(e,t),r&&r.apply(window,t)}function o(e,r){if(r.hasOwnProperty&&r.hasOwnProperty("addEventListener")){var t=r.addEventListener;r.addEventListener=function(r,n,o){t.call(this,r,e.wrap(n),o)};var n=r.removeEventListener;r.removeEventListener=function(e,r,t){n.call(this,e,r&&r._wrapped||r,t)}}}var i=t(3),a=t(7),s=i.Notifier;window._rollbarWrappedError=null;var u={};u.init=function(e,r){var t=new s(r);if(t.configure(e),e.captureUncaught){var i;r&&a.isType(r._rollbarOldOnError,"function")?i=r._rollbarOldOnError:window.onerror&&!window.onerror.belongsToShim&&(i=window.onerror),window.onerror=function(){var e=Array.prototype.slice.call(arguments,0);n(t,i,e)};var u,c,l=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"];for(u=0;u<l.length;++u)c=l[u],window[c]&&window[c].prototype&&o(t,window[c].prototype)}return window.Rollbar=t,s.processPayloads(),t},e.exports={wrapper:u,setupJSON:i.setupJSON}},function(e,r,t){"use strict";function n(e){w=e,m.setupJSON(e)}function o(e,r){return function(){var t=r||this;try{return e.apply(t,arguments)}catch(n){t&&t.logger(n)}}}function i(){g||(g=setTimeout(p,1e3))}function a(){return y}function s(e){y=y||this;var r="https://"+s.DEFAULT_ENDPOINT;this.options={enabled:!0,endpoint:r,environment:"production",scrubFields:d.copy(s.DEFAULT_SCRUB_FIELDS),checkIgnore:null,logLevel:s.DEFAULT_LOG_LEVEL,reportLevel:s.DEFAULT_REPORT_LEVEL,uncaughtErrorLevel:s.DEFAULT_UNCAUGHT_ERROR_LEVEL,payload:{}},this.lastError=null,this.plugins={},this.parentNotifier=e,this.logger=function(){var e=window.console;if(e&&d.isType(e.log,"function")){var r=["Rollbar:"].concat(Array.prototype.slice.call(arguments,0)).join(" ");e.log.apply(e,[r])}},e&&(e.hasOwnProperty("shimId")?e.notifier=this:(this.logger=e.logger,this.configure(e.options)))}function u(e){return o(function(){var r=this._getLogArgs(arguments);return this._log(e||r.level||this.options.logLevel||s.DEFAULT_LOG_LEVEL,r.message,r.err,r.custom,r.callback)})}function c(e,r){e||(e=r?w.stringify(r):"");var t={body:e};return r&&(t.extra=d.copy(r)),{message:t}}function l(e,r,t){var n=h.guessErrorClass(r.message),o=r.name||n[0],i=n[1],a={exception:{"class":o,message:i}};if(e&&(a.exception.description=e||"uncaught exception"),r.stack){var s,u,l,p,f,g,m,v;for(a.frames=[],m=0;m<r.stack.length;++m)s=r.stack[m],u={filename:s.url?d.sanitizeUrl(s.url):"(unknown)",lineno:s.line||null,method:s.func&&"?"!==s.func?s.func:"[anonymous]",colno:s.column},l=p=f=null,g=s.context?s.context.length:0,g&&(v=Math.floor(g/2),p=s.context.slice(0,v),l=s.context[v],f=s.context.slice(v)),l&&(u.code=l),(p||f)&&(u.context={},p&&p.length&&(u.context.pre=p),f&&f.length&&(u.context.post=f)),s.args&&(u.args=s.args),a.frames.push(u);return a.frames.reverse(),t&&(a.extra=d.copy(t)),{trace:a}}return c(o+": "+i,t)}function p(){var e;try{for(;e=window._rollbarPayloadQueue.shift();)f(e.endpointUrl,e.accessToken,e.payload,e.callback)}finally{g=void 0}}function f(e,r,t,n){n=n||function(){};var o=(new Date).getTime();o-E>=6e4&&(E=o,x=0);var i=window._globalRollbarOptions.maxItems,a=window._globalRollbarOptions.itemsPerMinute,s=function(){return!t.ignoreRateLimit&&i>=1&&_>=i},u=function(){return!t.ignoreRateLimit&&a>=1&&x>=a};return s()?void n(new Error(i+" max items reached")):u()?void n(new Error(a+" items per minute reached")):(_++,x++,s()&&y._log(y.options.uncaughtErrorLevel,"maxItems has been hit. Ignoring errors for the remainder of the current page load.",null,{maxItems:i},null,!1,!0),t.ignoreRateLimit&&delete t.ignoreRateLimit,void v.post(e,r,t,function(e,r){return e?n(e):n(null,r)}))}var g,h=t(4),d=t(7),m=t(8),v=m.XHR,w=null;s.NOTIFIER_VERSION="1.7.5",s.DEFAULT_ENDPOINT="api.rollbar.com/api/1/",s.DEFAULT_SCRUB_FIELDS=["pw","pass","passwd","password","secret","confirm_password","confirmPassword","password_confirmation","passwordConfirmation","access_token","accessToken","secret_key","secretKey","secretToken"],s.DEFAULT_LOG_LEVEL="debug",s.DEFAULT_REPORT_LEVEL="debug",s.DEFAULT_UNCAUGHT_ERROR_LEVEL="error",s.DEFAULT_ITEMS_PER_MIN=60,s.DEFAULT_MAX_ITEMS=0,s.LEVELS={debug:0,info:1,warning:2,error:3,critical:4},window._rollbarPayloadQueue=window._rollbarPayloadQueue||[],window._globalRollbarOptions={startTime:(new Date).getTime(),maxItems:s.DEFAULT_MAX_ITEMS,itemsPerMinute:s.DEFAULT_ITEMS_PER_MIN};var y,b=s.prototype;b._getLogArgs=function(e){for(var r,t,n,i,a,u,c=this.options.logLevel||s.DEFAULT_LOG_LEVEL,l=[],p=0;p<e.length;++p)u=e[p],a=d.typeName(u),"string"===a?r?l.push(u):r=u:"function"===a?i=o(u,this):"date"===a?l.push(u):"error"===a||u.stack||"undefined"!=typeof DOMException&&u instanceof DOMException?t?l.push(u):t=u:"object"===a&&(n?l.push(u):n=u);return l.length&&(n=n||{},n.extraArgs=l),{level:c,message:r,err:t,custom:n,callback:i}},b._route=function(e){var r=this.options.endpoint,t=/\/$/.test(r),n=/^\//.test(e);return t&&n?e=e.substring(1):t||n||(e="/"+e),r+e},b._processShimQueue=function(e){for(var r,t,n,o,i,a,u,c={};t=e.shift();)r=t.shim,n=t.method,o=t.args,i=r.parentShim,u=c[r.shimId],u||(i?(a=c[i.shimId],u=new s(a)):u=this,c[r.shimId]=u),u[n]&&d.isType(u[n],"function")&&u[n].apply(u,o)},b._buildPayload=function(e,r,t,n,o){var i=this.options.accessToken,a=this.options.environment,u=d.copy(this.options.payload),c=d.uuid4();if(void 0===s.LEVELS[r])throw new Error("Invalid level");if(!t&&!n&&!o)throw new Error("No message, stack info or custom data");var l={environment:a,endpoint:this.options.endpoint,uuid:c,level:r,platform:"browser",framework:"browser-js",language:"javascript",body:this._buildBody(t,n,o),request:{url:window.location.href,query_string:window.location.search,user_ip:"$remote_ip"},client:{runtime_ms:e.getTime()-window._globalRollbarOptions.startTime,timestamp:Math.round(e.getTime()/1e3),javascript:{browser:window.navigator.userAgent,language:window.navigator.language,cookie_enabled:window.navigator.cookieEnabled,screen:{width:window.screen.width,height:window.screen.height},plugins:this._getBrowserPlugins()}},server:{},notifier:{name:"rollbar-browser-js",version:s.NOTIFIER_VERSION}};u.body&&delete u.body;var p={access_token:i,data:d.merge(l,u)};return this._scrub(p.data),p},b._buildBody=function(e,r,t){var n;return n=r?l(e,r,t):c(e,t)},b._getBrowserPlugins=function(){if(!this._browserPlugins){var e,r,t=window.navigator.plugins||[],n=t.length,o=[];for(r=0;n>r;++r)e=t[r],o.push({name:e.name,description:e.description});this._browserPlugins=o}return this._browserPlugins},b._scrub=function(e){function r(e,r,t,n,o,i){return r+d.redact(i)}function t(e){var t;if(d.isType(e,"string"))for(t=0;t<s.length;++t)e=e.replace(s[t],r);return e}function n(e,r){var t;for(t=0;t<a.length;++t)if(a[t].test(e)){r=d.redact(r);break}return r}function o(e,r){var o=n(e,r);return o===r?t(o):o}var i=this.options.scrubFields,a=this._getScrubFieldRegexs(i),s=this._getScrubQueryParamRegexs(i);return d.traverse(e,o),e},b._getScrubFieldRegexs=function(e){for(var r,t=[],n=0;n<e.length;++n)r="\\[?(%5[bB])?"+e[n]+"\\[?(%5[bB])?\\]?(%5[dD])?",t.push(new RegExp(r,"i"));return t},b._getScrubQueryParamRegexs=function(e){for(var r,t=[],n=0;n<e.length;++n)r="\\[?(%5[bB])?"+e[n]+"\\[?(%5[bB])?\\]?(%5[dD])?",t.push(new RegExp("("+r+"=)([^&\\n]+)","igm"));return t},b._urlIsWhitelisted=function(e){var r,t,n,o,i,a,s,u,c,l;try{if(r=this.options.hostWhiteList,t=e.data.body.trace,!r||0===r.length)return!0;if(!t)return!0;for(s=r.length,i=t.frames.length,c=0;i>c;c++){if(n=t.frames[c],o=n.filename,!d.isType(o,"string"))return!0;for(l=0;s>l;l++)if(a=r[l],u=new RegExp(a),u.test(o))return!0}}catch(p){return this.configure({hostWhiteList:null}),this.error("Error while reading your configuration's hostWhiteList option. Removing custom hostWhiteList.",p),!0}return!1},b._messageIsIgnored=function(e){var r,t,n,o,i,a,s;try{if(i=!1,n=this.options.ignoredMessages,s=e.data.body.trace,!n||0===n.length)return!1;if(!s)return!1;for(r=s.exception.message,o=n.length,t=0;o>t&&(a=new RegExp(n[t],"gi"),!(i=a.test(r)));t++);}catch(u){this.configure({ignoredMessages:null}),this.error("Error while reading your configuration's ignoredMessages option. Removing custom ignoredMessages.")}return i},b._enqueuePayload=function(e,r,t,n){var o={callback:n,accessToken:this.options.accessToken,endpointUrl:this._route("item/"),payload:e},a=function(){if(n){var e="This item was not sent to Rollbar because it was ignored. This can happen if a custom checkIgnore() function was used or if the item's level was less than the notifier' reportLevel. See https://rollbar.com/docs/notifier/rollbar.js/configuration for more details.";n(null,{err:0,result:{id:null,uuid:null,message:e}})}};if(this._internalCheckIgnore(r,t,e))return void a();try{if(d.isType(this.options.checkIgnore,"function")&&this.options.checkIgnore(r,t,e))return void a()}catch(s){this.configure({checkIgnore:null}),this.error("Error while calling custom checkIgnore() function. Removing custom checkIgnore().",s)}if(this._urlIsWhitelisted(e)&&!this._messageIsIgnored(e)){if(this.options.verbose){if(e.data&&e.data.body&&e.data.body.trace){var u=e.data.body.trace,c=u.exception.message;this.logger(c)}this.logger("Sending payload -",o)}d.isType(this.options.logFunction,"function")&&this.options.logFunction(o);try{d.isType(this.options.transform,"function")&&this.options.transform(e)}catch(s){this.configure({transform:null}),this.error("Error while calling custom transform() function. Removing custom transform().",s)}this.options.enabled&&(window._rollbarPayloadQueue.push(o),i())}},b._internalCheckIgnore=function(e,r,t){var n=r[0],o=s.LEVELS[n]||0,i=s.LEVELS[this.options.reportLevel]||0;if(i>o)return!0;var a=this.options?this.options.plugins:{};if(a&&a.jquery&&a.jquery.ignoreAjaxErrors)try{return!!t.body.message.extra.isAjax}catch(u){return!1}return!1},b._log=function(e,r,t,n,o,i,a){var s=null;if(t)try{if(s=t._savedStackTrace?t._savedStackTrace:h.parse(t),t===this.lastError)return;this.lastError=t}catch(u){r=String(t),t=null}var c=this._buildPayload(new Date,e,r,s,n);a&&(c.ignoreRateLimit=!0),this._enqueuePayload(c,i?!0:!1,[e,r,t,n],o)},b.log=u(),b.debug=u("debug"),b.info=u("info"),b.warn=u("warning"),b.warning=u("warning"),b.error=u("error"),b.critical=u("critical"),b.uncaughtError=o(function(e,r,t,n,o,i){if(i=i||null,o&&o.stack)return void this._log(this.options.uncaughtErrorLevel,e,o,i,null,!0);if(r&&r.stack)return void this._log(this.options.uncaughtErrorLevel,e,r,i,null,!0);var a={url:r||"",line:t};a.func=h.guessFunctionName(a.url,a.line),a.context=h.gatherContext(a.url,a.line);var s={mode:"onerror",message:o?String(o):e||"uncaught exception",url:document.location.href,stack:[a],useragent:navigator.userAgent},u=this._buildPayload(new Date,this.options.uncaughtErrorLevel,e,s);this._enqueuePayload(u,!0,[this.options.uncaughtErrorLevel,e,r,t,n,o])}),b.global=o(function(e){e=e||{},d.merge(window._globalRollbarOptions,e),void 0!==e.maxItems&&(_=0),void 0!==e.itemsPerMinute&&(x=0)}),b.configure=o(function(e){d.merge(this.options,e),this.global(e)}),b.scope=o(function(e){var r=new s(this);return d.merge(r.options.payload,e),r}),b.wrap=function(e,r){try{var t;if(t=d.isType(r,"function")?r:function(){return r||{}},!d.isType(e,"function"))return e;if(e._isWrap)return e;if(!e._wrapped){e._wrapped=function(){try{return e.apply(this,arguments)}catch(r){throw r.stack||(r._savedStackTrace=h.parse(r)),r._rollbarContext=t()||{},r._rollbarContext._wrappedSource=e.toString(),window._rollbarWrappedError=r,r}},e._wrapped._isWrap=!0;for(var n in e)e.hasOwnProperty(n)&&(e._wrapped[n]=e[n])}return e._wrapped}catch(o){return e}},b.loadFull=function(){this.logger("Unexpected Rollbar.loadFull() called on a Notifier instance")},s.processPayloads=function(e){return e?void p():void i()};var E=(new Date).getTime(),_=0,x=0;e.exports={Notifier:s,setupJSON:n,topLevelNotifier:a}},function(e,r,t){"use strict";function n(){return l}function o(){return null}function i(e){var r={};return r._stackFrame=e,r.url=e.fileName,r.line=e.lineNumber,r.func=e.functionName,r.column=e.columnNumber,r.args=e.args,r.context=o(r.url,r.line),r}function a(e){function r(){var r=[];try{r=c.parse(e)}catch(t){r=[]}for(var n=[],o=0;o<r.length;o++)n.push(new i(r[o]));return n}return{stack:r(),message:e.message,name:e.name}}function s(e){return new a(e)}function u(e){if(!e)return["Unknown error. There was no error message to display.",""];var r=e.match(p),t="(unknown)";return r&&(t=r[r.length-1],e=e.replace((r[r.length-2]||"")+t+":",""),e=e.replace(/(^[\s]+|[\s]+$)/g,"")),[t,e]}var c=t(5),l="?",p=new RegExp("^(([a-zA-Z0-9-_$ ]*): *)?(Uncaught )?([a-zA-Z0-9-_$ ]*): ");e.exports={guessFunctionName:n,guessErrorClass:u,gatherContext:o,parse:s,Stack:a,Frame:i}},function(e,r,t){var n,o,i;!function(a,s){"use strict";o=[t(6)],n=s,i="function"==typeof n?n.apply(r,o):n,!(void 0!==i&&(e.exports=i))}(this,function(e){"use strict";var r,t,n=/\S+\:\d+/,o=/\s+at /;return r=Array.prototype.map?function(e,r){return e.map(r)}:function(e,r){var t,n=e.length,o=[];for(t=0;n>t;++t)o.push(r(e[t]));return o},t=Array.prototype.filter?function(e,r){return e.filter(r)}:function(e,r){var t,n=e.length,o=[];for(t=0;n>t;++t)r(e[t])&&o.push(e[t]);return o},{parse:function(e){if("undefined"!=typeof e.stacktrace||"undefined"!=typeof e["opera#sourceloc"])return this.parseOpera(e);if(e.stack&&e.stack.match(o))return this.parseV8OrIE(e);if(e.stack&&e.stack.match(n))return this.parseFFOrSafari(e);throw new Error("Cannot parse given Error object")},extractLocation:function(e){if(-1===e.indexOf(":"))return[e];var r=e.replace(/[\(\)\s]/g,"").split(":"),t=r.pop(),n=r[r.length-1];if(!isNaN(parseFloat(n))&&isFinite(n)){var o=r.pop();return[r.join(":"),o,t]}return[r.join(":"),t,void 0]},parseV8OrIE:function(t){var n=this.extractLocation,o=r(t.stack.split("\n").slice(1),function(r){var t=r.replace(/^\s+/,"").split(/\s+/).slice(1),o=n(t.pop()),i=t[0]&&"Anonymous"!==t[0]?t[0]:void 0;return new e(i,void 0,o[0],o[1],o[2])});return o},parseFFOrSafari:function(o){var i=t(o.stack.split("\n"),function(e){return!!e.match(n)}),a=this.extractLocation,s=r(i,function(r){var t=r.split("@"),n=a(t.pop()),o=t.shift()||void 0;return new e(o,void 0,n[0],n[1],n[2])});return s},parseOpera:function(e){return!e.stacktrace||e.message.indexOf("\n")>-1&&e.message.split("\n").length>e.stacktrace.split("\n").length?this.parseOpera9(e):e.stack?this.parseOpera11(e):this.parseOpera10(e)},parseOpera9:function(r){for(var t=/Line (\d+).*script (?:in )?(\S+)/i,n=r.message.split("\n"),o=[],i=2,a=n.length;a>i;i+=2){var s=t.exec(n[i]);s&&o.push(new e(void 0,void 0,s[2],s[1]))}return o},parseOpera10:function(r){for(var t=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,n=r.stacktrace.split("\n"),o=[],i=0,a=n.length;a>i;i+=2){var s=t.exec(n[i]);s&&o.push(new e(s[3]||void 0,void 0,s[2],s[1]))}return o},parseOpera11:function(o){var i=t(o.stack.split("\n"),function(e){return!!e.match(n)&&!e.match(/^Error created at/)}),a=this.extractLocation,s=r(i,function(r){var t,n=r.split("@"),o=a(n.pop()),i=n.shift()||"",s=i.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^\)]*\)/g,"")||void 0;i.match(/\(([^\)]*)\)/)&&(t=i.replace(/^[^\(]+\(([^\)]*)\)$/,"$1"));var u=void 0===t||"[arguments not available]"===t?void 0:t.split(",");return new e(s,u,o[0],o[1],o[2])});return s}}})},function(e,r,t){var n,o,i;!function(t,a){"use strict";o=[],n=a,i="function"==typeof n?n.apply(r,o):n,!(void 0!==i&&(e.exports=i))}(this,function(){"use strict";function e(e){return!isNaN(parseFloat(e))&&isFinite(e)}function r(e,r,t,n,o){void 0!==e&&this.setFunctionName(e),void 0!==r&&this.setArgs(r),void 0!==t&&this.setFileName(t),void 0!==n&&this.setLineNumber(n),void 0!==o&&this.setColumnNumber(o)}return r.prototype={getFunctionName:function(){return this.functionName},setFunctionName:function(e){this.functionName=String(e)},getArgs:function(){return this.args},setArgs:function(e){if("[object Array]"!==Object.prototype.toString.call(e))throw new TypeError("Args must be an Array");this.args=e},getFileName:function(){return this.fileName},setFileName:function(e){this.fileName=String(e)},getLineNumber:function(){return this.lineNumber},setLineNumber:function(r){if(!e(r))throw new TypeError("Line Number must be a Number");this.lineNumber=Number(r)},getColumnNumber:function(){return this.columnNumber},setColumnNumber:function(r){if(!e(r))throw new TypeError("Column Number must be a Number");this.columnNumber=Number(r)},toString:function(){var r=this.getFunctionName()||"{anonymous}",t="("+(this.getArgs()||[]).join(",")+")",n=this.getFileName()?"@"+this.getFileName():"",o=e(this.getLineNumber())?":"+this.getLineNumber():"",i=e(this.getColumnNumber())?":"+this.getColumnNumber():"";return r+t+n+o+i}},r})},function(e,r){"use strict";function t(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function n(e,r){return t(e)===r}function o(){var e,r,i,a,s,u,c=arguments[0]||{},l=1,p=arguments.length,f=!0,g=t(c);for("object"!==g&&"array"!==g&&"function"!==g&&(c={});p>l;l++)if(null!==(e=arguments[l]))for(r in e)e.hasOwnProperty(r)&&(i=c[r],a=e[r],c!==a&&(f&&a&&(n(a,"object")||(s=n(a,"array")))?(s?(s=!1,u=[]):u=i&&n(i,"object")?i:{},c[r]=o(u,a)):void 0!==a&&(c[r]=a)));return c}function i(e){var r,n=t(e);return r={object:{},array:[]}[n],o(r,e),r}function a(e){if(!n(e,"string"))throw new Error("received invalid input");for(var r=p,t=r.parser[r.strictMode?"strict":"loose"].exec(e),o={},i=14;i--;)o[r.key[i]]=t[i]||"";return o[r.q.name]={},o[r.key[12]].replace(r.q.parser,function(e,t,n){t&&(o[r.q.name][t]=n)}),o}function s(e){var r=a(e);return""===r.anchor&&(r.source=r.source.replace("#","")),e=r.source.replace("?"+r.query,"")}function u(e,r){var t,o,i,a=n(e,"object"),s=n(e,"array"),c=[];if(a)for(t in e)e.hasOwnProperty(t)&&c.push(t);else if(s)for(i=0;i<e.length;++i)c.push(i);for(i=0;i<c.length;++i)t=c[i],o=e[t],a=n(o,"object"),s=n(o,"array"),a||s?e[t]=u(o,r):e[t]=r(t,o);return e}function c(e){return e=String(e),new Array(e.length+1).join("*")}function l(){var e=(new Date).getTime(),r="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){var t=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===r?t:7&t|8).toString(16)});return r}var p={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},f={copy:i,isType:n,merge:o,parseUri:a,parseUriOptions:p,redact:c,sanitizeUrl:s,traverse:u,typeName:t,uuid4:l};e.exports=f},function(e,r,t){"use strict";function n(e){i=e}var o=t(7),i=null,a={XMLHttpFactories:[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}],createXMLHTTPObject:function(){var e,r=!1,t=a.XMLHttpFactories,n=t.length;for(e=0;n>e;e++)try{r=t[e]();break}catch(o){}return r},post:function(e,r,t,n){if(!o.isType(t,"object"))throw new Error("Expected an object to POST");t=i.stringify(t),n=n||function(){};var s=a.createXMLHTTPObject();if(s)try{try{var u=function(){try{u&&4===s.readyState&&(u=void 0,200===s.status?n(null,i.parse(s.responseText)):n(o.isType(s.status,"number")&&s.status>=400&&s.status<600?new Error(String(s.status)):new Error))}catch(e){var r;r=e&&e.stack?e:new Error(e),n(r)}};s.open("POST",e,!0),s.setRequestHeader&&(s.setRequestHeader("Content-Type","application/json"),s.setRequestHeader("X-Rollbar-Access-Token",r)),s.onreadystatechange=u,s.send(t)}catch(c){if("undefined"!=typeof XDomainRequest){"http:"===window.location.href.substring(0,5)&&"https"===e.substring(0,5)&&(e="http"+e.substring(5));var l=function(){n(new Error("Request timed out"))},p=function(){n(new Error("Error during request"))},f=function(){n(null,i.parse(s.responseText))};s=new XDomainRequest,s.onprogress=function(){},s.ontimeout=l,s.onerror=p,s.onload=f,s.open("POST",e,!0),s.send(t)}}}catch(g){n(g)}}};e.exports={XHR:a,setupJSON:n}}])});
},{}],2:[function(require,module,exports){
var DigiTrust = require(8);
var DigiTrustCrypto = require(13);
DigiTrust.isClient = true;

if (window !== undefined) {
    window.DigiTrust = DigiTrust;
    window.DigiTrustCrypto = DigiTrustCrypto;
}

},{"13":13,"8":8}],3:[function(require,module,exports){
module.exports={"current":"prod"}
},{}],4:[function(require,module,exports){
module.exports={
	"en": {
		"memberId": "[DigiTrust Client Error] Missing member ID, add the member ID to the function call options",
        "postMessageOrigin": "[DigiTrust Client Error] Origin of postMessage call was not the official DigiTrust domain",
        "iframeError": "[DigiTrust Iframe Error] Client could not connect to the iframe",
        "appManifestXHR": "[DigiTrust Publisher Error] Client could not retrieve Publisher App Manifest JSON file",
        "appManifestInvalid": "[DigiTrust Publisher Error] Publisher App Manifest does not contain valid JSON",
        "appNameInvalid": "[DigiTrust App Error] App name does not match available apps in manifest.json",
        "iframeMissingMember": "[DigiTrust Iframe Error] Client did not send Member string",
        "iframeMissingAppName": "[DigiTrust Iframe Error] Client did not send App Name string",
	}
}
},{}],5:[function(require,module,exports){
module.exports={
	"prod": {
		"urls": {
            "digitrustHostPath": "https://cdn.digitru.st/prod/1.4.0/",
            "digitrustRedirect": "https://cdn.digitru.st/prod/1.4.0/redirect.html",
			"digitrustIframe": "https://cdn.digitru.st/prod/1.4.0/dt.html",
			"optoutInfo": "http://www.digitru.st/about-this-notice/",
			"adblockCheck": "http://stats.aws.rubiconproject.com/"
		},
		"cookie": {
      "version": 2,
			"publisher": {
				"domainKeyValue": "",
				"pathKeyValue": "path=/;",
				"maxAgeMiliseconds": 604800000,
				"userObjectKey": "DigiTrust.v1.identity"
			},
			"digitrust": {
				"domainKeyValue": "domain=.digitru.st;",
				"pathKeyValue": "path=/;",
				"maxAgeMiliseconds": 157680000000,
	            "userObjectKey": "DigiTrust.v1.identity",
                "resetKey": "DeleteEverything",
                "challenge": "DTChal",
                "optout": "optout",
                "optoutUser": { 'id': '', 'privacy': { 'optout': true } }
			}
		},
		"iframe": {
			"timeoutDuration": 10000,
			"postMessageOrigin": "https://cdn.digitru.st"
		},
		"app": {
			"cookie": {
				"reminderMaxAgeMiliseconds": 172800000,
				"reminderObjectKey": "DigiTrust.v1.ar"
			}
		},
		"htmlIDs": {
			"consentLinkId": "digitrust-optout",
			"dtAdbContainer": "digitrust-adb-container",
			"dtAdbMessage": "digitrust-adb-message",
			"dtAdbApps": "digitrust-adb-apps",
			"dtAdbAppClass": "dt-app",
			"dtAdbAppSelected": "dt-app-selected",
			"publisherPicture": "dt-pub-pic"
		}
	},
	"dev": {
		"urls": {
            "digitrustHostPath": "//digitrust.s3.amazonaws.com/dev/v1/",
			"digitrustRedirect": "//digitrust.s3.amazonaws.com/dev/v1/redirect.html",
			"digitrustIframe": "//digitrust.s3.amazonaws.com/dev/v1/dt.html",
			"optoutInfo": "//digitrust.s3.amazonaws.com/dev/v1/info.html",
			"adblockCheck": "//stats.aws.rubiconproject.com/"
		},
		"cookie": {
      "version": 2,
			"publisher": {
				"domainKeyValue": "",
				"pathKeyValue": "path=/;",
				"maxAgeMiliseconds": 604800000,
				"userObjectKey": "DigiTrust.v1.identity"
			},
			"digitrust": {
				"domainKeyValue": "domain=digitrust.s3.amazonaws.com;",
				"pathKeyValue": "path=/;",
				"maxAgeMiliseconds": 157680000000,
	            "userObjectKey": "DigiTrust.v1.identity",
                "resetKey": "DeleteEverything",
                "challenge": "DTChal",
                "optout": "optout",
                "optoutUser": { 'id': '', 'privacy': { 'optout': true } }
			}
		},
		"iframe": {
			"timeoutDuration": 10000,
			"postMessageOrigin": "http://digitrust.s3.amazonaws.com"
		},
		"app": {
			"cookie": {
				"reminderMaxAgeMiliseconds": 172800000,
				"reminderObjectKey": "DigiTrust.v1.ar"
			}
		},
		"htmlIDs": {
			"consentLinkId": "digitrust-optout",
			"dtAdbContainer": "digitrust-adb-container",
			"dtAdbMessage": "digitrust-adb-message",
			"dtAdbApps": "digitrust-adb-apps",
			"dtAdbAppClass": "dt-app",
			"dtAdbAppSelected": "dt-app-selected",
			"publisherPicture": "dt-pub-pic"
		}
	},
    "local": {
        "urls": {
            "digitrustHostPath": "//localhost/dist/",
            "digitrustRedirect": "//localhost/dist/redirect.html",
            "digitrustIframe": "//localhost/dist/dt.html",
            "optoutInfo": "//localhost/dist/info.html",
            "adblockCheck": "//stats.aws.rubiconproject.com/"
        },
        "cookie": {
      "version": 2,
            "publisher": {
                "domainKeyValue": "domain=;",
                "pathKeyValue": "path=/;",
                "maxAgeMiliseconds": 604800000,
                "userObjectKey": "DigiTrustLOCALPUB.v1.identity"
            },
            "digitrust": {
                "domainKeyValue": "domain=;",
                "pathKeyValue": "path=/;",
                "maxAgeMiliseconds": 157680000000,
                "userObjectKey": "DigiTrustLOCALDT.v1.identity",
                "resetKey": "DeleteEverything",
                "challenge": "DTChal",
                "optout": "optout",
                "optoutUser": { 'id': '', 'privacy': { 'optout': true } }
            }
        },
        "iframe": {
            "timeoutDuration": 10000,
            "postMessageOrigin": "http://localhost"
        },
        "app": {
            "cookie": {
                "reminderMaxAgeMiliseconds": 172800000,
                "reminderObjectKey": "DigiTrustLOCAL.v1.ar"
            }
        },
        "htmlIDs": {
            "consentLinkId": "digitrust-optout",
            "dtAdbContainer": "digitrust-adb-container",
            "dtAdbMessage": "digitrust-adb-message",
            "dtAdbApps": "digitrust-adb-apps",
            "dtAdbAppClass": "dt-app",
            "dtAdbAppSelected": "dt-app-selected",
            "publisherPicture": "dt-pub-pic"
        }
    }
}

},{}],6:[function(require,module,exports){
module.exports={
    "member": "",
    "site": "",
    "sample": 1,
    "redirects": true,
    "adblocker": {
        "detection": false,
        "blockContent": false,
        "userMessage": "Did you know advertising pays for this brilliant content? Please disable your ad blocker, then press the Reload button below ... and thank you for your visit!",
        "popupFontColor": "#5F615D",
        "popupBackgroundColor": "#FFFFFF",
        "logoSrc": null,
        "logoText": null,
        "pictureSrc": null
    },
    "consent": {
        "requires": "none",
        "userMessage": 'This site uses cookies and is a member of DigiTrust, a non-profit consortium of companies working together to improve your Web experience.  By clicking on this page you agree to the use of cookies. This notice only appears once. <a href="http://www.digitru.st/about-this-notice/">You can read more or opt out of DigiTrust herje</a>.',
        "popupFontColor": "#ffffff",
        "popupBackgroundColor": "#000000"
    },
    "apps": {
        "manifest": null
    }
}

},{}],7:[function(require,module,exports){
module.exports={
    "type": "RSA-OAEP",
    "hash": {
        "name": "SHA-1"
    },
    "version": 4,
    "spki": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgrdFWb07eQFRtdmXcnVRpSZFoibNFMZDEZHn71j6oa5Ohw7miu/Cpl77h2Pp/0bLt3dHr6RcinqA9cck2nPjJEw2svSzJOHY1409Cxr7cyAhfmueLazL/C8DOyFSe3e4QGNsJtPTlNy6Etmnb4dvctpm/nQ2nDaPw5wnb0hWI6Ik7wtvjbH9SaCRlXcyEKpF1oXy55jDJeovSxQz9eL+bgObD2Lz43gidU4B/zPhbNI+KmMkV539okyFfmcBwrCQARkh9d3eI8kAH+PptTalApVAefPSGZdWkSvkNw7HEbcnLMWWWXKeF7z2lMBd7RbnCyBUmgtHLY6d8HX6JPWB6QIDAQAB",
    "jwk": {
        "kty": "RSA",
        "kid": "fb8cd98a-d21b-4cd6-8b3c-182727effee4",
        "n": "grdFWb07eQFRtdmXcnVRpSZFoibNFMZDEZHn71j6oa5Ohw7miu_Cpl77h2Pp_0bLt3dHr6RcinqA9cck2nPjJEw2svSzJOHY1409Cxr7cyAhfmueLazL_C8DOyFSe3e4QGNsJtPTlNy6Etmnb4dvctpm_nQ2nDaPw5wnb0hWI6Ik7wtvjbH9SaCRlXcyEKpF1oXy55jDJeovSxQz9eL-bgObD2Lz43gidU4B_zPhbNI-KmMkV539okyFfmcBwrCQARkh9d3eI8kAH-PptTalApVAefPSGZdWkSvkNw7HEbcnLMWWWXKeF7z2lMBd7RbnCyBUmgtHLY6d8HX6JPWB6Q",
        "e": "AQAB",
        "alg": "RSA-OAEP",
        "ext": true,
        "key_ops": [
            "encrypt"
        ]
    }
}
},{}],8:[function(require,module,exports){
'use strict';

var configErrors = require(4);
var configInitializeOptions = require(6);
var helpers = require(15);
var DigiTrustCookie = require(12);
var DigiTrustAdblock = require(9);
var DigiTrustCommunication = require(11);
var rollbar = require(1);

var DigiTrust = {};
DigiTrust.isClient = false; // Is client or server?
DigiTrust.initializeOptions = {};
DigiTrust.Rollbar = false;
DigiTrust.apps = {};
DigiTrust.currentApp = {};
DigiTrust.loadedApps = [];

DigiTrust._isMemberIdValid = function (memberId) {
    if (memberId && memberId.length > 0) {
        return true;
    } else {
        throw new Error(configErrors.en.memberId);
    }
};

DigiTrust._setDigiTrustOptions = function (options) {
    options = (!options) ?
            configInitializeOptions :
            helpers.extend(configInitializeOptions, options);
    // Set DigiTrust options on global object
    window.DigiTrust.initializeOptions = options;
    return options;
};

DigiTrust.initialize = function (options, initializeCallback) {
    try {
        var identityResponseObject = {success: false};

        options = DigiTrust._setDigiTrustOptions(options);

        // allow for a circuit break to disable the world
        if (Math.random() > options.sample) {
            return initializeCallback(identityResponseObject);
        }

        if (options.adblocker.unstyled) {
            var head  = document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = options.adblocker.customCssPath;
            link.media = 'all';
            head.appendChild(link);
        }

        // Verify Publisher's Member ID
        if (!DigiTrust._isMemberIdValid(options.member)) {
            return initializeCallback(identityResponseObject);
        }

        // Does publisher want to check AdBlock (async)
        if (options.adblocker.detection) {
            DigiTrustAdblock.checkAdblock(options);
        }

        DigiTrustCookie.getUser(options, function (err, identityObject) {
            if (err || helpers.isEmpty(identityObject)) {
                return initializeCallback(identityResponseObject);
            } else {
                identityResponseObject.success = true;
                identityResponseObject.identity = identityObject;
                return initializeCallback(identityResponseObject);
            }
        });
    } catch (e) {
        console.log(e);
        if (DigiTrust.Rollbar === false) {
            helpers.getRollbar(function (Rollbar) {
                DigiTrust.Rollbar = Rollbar;
                DigiTrust.Rollbar.error('Error caught DigiTrust.initialize()', e);
            });
        } else {
            DigiTrust.Rollbar.error('Error caught DigiTrust.initialize()', e);
        }

        return initializeCallback({success: false});
    }
};

DigiTrust.getUser = function (options, callback) {

    options = DigiTrust._setDigiTrustOptions(options);
    var async = (typeof callback === 'function') ? true : false;
    var identityResponseObject = {
        success: false
    };

    try {
        // Verify Publisher's Member ID
        if (!DigiTrust._isMemberIdValid(options.member)) {
            return (async === false) ? identityResponseObject : callback(identityResponseObject);
        }

        if (async === false) {
            // Get publisher cookie
            var identityJSON = DigiTrustCookie.getUser();
            if (!helpers.isEmpty(identityJSON)) {
                identityResponseObject.success = true;
                identityResponseObject.identity = identityJSON;
            }
            return identityResponseObject;
        } else {
            options.ignoreLocalCookies = true;
            DigiTrustCookie.getUser(options, function (err, identityObject) {
                if (err) {
                    return callback(identityResponseObject);
                } else {
                    identityResponseObject.success = true;
                    identityResponseObject.identity = identityObject;
                    return callback(identityResponseObject);
                }
            });
        }
    } catch (e) {
        console.log(e);
        if (DigiTrust.Rollbar === false) {
            helpers.getRollbar(function (Rollbar) {
                DigiTrust.Rollbar = Rollbar;
                DigiTrust.Rollbar.error('Error caught DigiTrust.getUser()', e);
            });
        } else {
            DigiTrust.Rollbar.error('Error caught DigiTrust.getUser()', e);
        }

        return (async === false) ? identityResponseObject : callback(identityResponseObject);
    }
};

DigiTrust.addListener = function (appName, eventName, callback) {
    var _callbackArgs = function () {
        return {
            identity: DigiTrustCookie.getUser(),
            preferences: {},
            context: {
                publisher: window.DigiTrust.initializeOptions.member,
                site: window.DigiTrust.initializeOptions.site,
                url: location.href
            }
        };
    };

    var app = helpers.getObjectByKeyFromObject(window.DigiTrust.apps, 'name', appName);
    if (helpers.isEmpty(app)) {
        throw new Error(configErrors.en.appNameInvalid);
    }

    switch (eventName) {
        case 'enable':
            helpers.MinPubSub.subscribe('DigiTrust.pubsub.app.event.enable', function (pubsubAppName) {
                if (appName === pubsubAppName) {
                    callback(_callbackArgs());
                }
            });
            break;
        case 'disable':
            helpers.MinPubSub.subscribe('DigiTrust.pubsub.app.event.disable', function (pubsubAppName) {
                if (appName === pubsubAppName) {
                    callback(_callbackArgs());
                }
            });
            break;
        case 'page-view':
            helpers.MinPubSub.subscribe('DigiTrust.pubsub.app.event.pageView', function () {
                if (appName === window.DigiTrust.currentApp.name) {
                    callback(_callbackArgs());
                }
            });
            break;
    }
};

DigiTrust.sendReset = function (options, callback) {
    DigiTrustCommunication.sendReset();
};

DigiTrust.optOut = function (options, callback) {
    try {
        options = options || {};

        // subscribe before publishing
        helpers.MinPubSub.subscribe('DigiTrust.pubsub.app.identity.optOutResponse', function (iframeOptOutResponse) {
            return callback(iframeOptOutResponse);
        });

        // publish message
        DigiTrustCommunication.sendOptOut();
    } catch (e) {
        console.log(e);
        return callback({
            success: false,
            errorMessage: 'DigiTrust caught exception: ' + e
        });
    }
};

DigiTrust.optOutSolution = function (options, callback) {
    try {
        options = options || {};
        // make sure clients sets "solution" key
        if (options.solution && options.solution.length > 0) {
            var optOutSolutionOptions = {
                solution: options.solution
            };

            // subscribe before publishing
            helpers.MinPubSub.subscribe('DigiTrust.pubsub.app.identity.optOutSolutionResponse',
                function (iframeOptOutResponse) {
                    return callback(iframeOptOutResponse);
                }
            );

            // publish message
            DigiTrustCommunication.sendOptOutSolution(optOutSolutionOptions);
        } else {
            return callback({
                success: false,
                message: 'Missing argument (options.solution) within DigiTrust.optOutSolution(options, callback) call.'
            });
        }
    } catch (e) {
        console.log(e);
        return callback({
            success: false,
            message: 'DigiTrust caught exception: ' + e
        });
    }
};

module.exports = {
    initialize: DigiTrust.initialize,
    initializeOptions: DigiTrust.initializeOptions,
    getUser: DigiTrust.getUser,
    sendReset: DigiTrust.sendReset,
    isClient: DigiTrust.isClient,
    apps: DigiTrust.apps,
    loadedApps: DigiTrust.loadedApps,
    currentApp: DigiTrust.currentApp,
    addListener: DigiTrust.addListener,
    optOut: DigiTrust.optOut,
    optOutSolution: DigiTrust.optOutSolution
};

},{"1":1,"11":11,"12":12,"15":15,"4":4,"6":6,"9":9}],9:[function(require,module,exports){
'use strict';

var env = require(3).current;
var configGeneral = require(5)[env];
var helpers = require(15);
var DigiTrustPopup = require(14);
var DigiTrustAppContainer = require(10);

var DigiTrustAdblock = {};
DigiTrustAdblock.adblockDetected = false;

DigiTrustAdblock.checkElements = function () {
    // Need to wait for <body> to load
    window.onload = function () {
        // sitexw's GitHub: adblock detector
        var baitClass = 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links';
        var baitStyle = 'width: 1px !important; height: 1px !important; position: absolute !important;' +
            'left: -10000px !important; top: -1000px !important;';

        var bait = document.createElement('div');
        bait.setAttribute('class', baitClass);
        bait.setAttribute('style', baitStyle);
        var baitInDom = document.body.appendChild(bait);
        var detected = false;

        // Check elements
        if (baitInDom.offsetParent === null ||
            baitInDom.offsetHeight === 0 ||
            baitInDom.offsetLeft === 0 ||
            baitInDom.offsetTop === 0 ||
            baitInDom.offsetWidth === 0 ||
            baitInDom.clientHeight === 0 ||
            baitInDom.clientWidth === 0) {
            detected = true;
        }

        if (window.getComputedStyle !== undefined) {
            var baitTemp = window.getComputedStyle(baitInDom, null);
            if (baitTemp.getPropertyValue('display') === 'none' ||
                baitTemp.getPropertyValue('visibility') === 'hidden') {
                detected = true;
            }
        }

        // Clean up elements
        window.document.body.removeChild(baitInDom);

        if (detected) {
            DigiTrustAdblock.performIfDetected();
        }
    };
};

DigiTrustAdblock.checkEndpoint = function () {
    // Firefox adblocker throws an exception here; we do not want to abort the script (DigiTrust try/catch "returns")
    try {
        // Call rubicon endpoint, AdBlock may block this domain
        helpers.xhr.get(configGeneral.urls.adblockCheck)
        .error(function (data, xhrObj) {
            // If no status, request was intercepted
            if (!xhrObj.status) {
                DigiTrustAdblock.performIfDetected();
            } else {
                // do nothing
            }
        });
    } catch (e) {
        console.log(e);
    }
};

DigiTrustAdblock.performIfDetected = function () {

    // Since there are a few methods that can this method, there is a race to call it. Let's only execute the
    // code if its the first time we detected adblock
    if (DigiTrustAdblock.adblockDetected === false) {

        DigiTrustAdblock.adblockDetected = true;

        // If publisher has apps enabled
        if (!helpers.isEmpty(window.DigiTrust.initializeOptions.apps.manifest)) {
            DigiTrustAppContainer.launch(window.DigiTrust.initializeOptions);
        } else if (window.DigiTrust.initializeOptions.adblocker.blockContent) {
            DigiTrustPopup.createAdblockPopup(window.DigiTrust.initializeOptions, false);
        }

        if (typeof window.DigiTrust.initializeOptions.adblocker.detectedCallback === 'function') {
            try {
                window.DigiTrust.initializeOptions.adblocker.detectedCallback();
            } catch (e) {
                console.log(e);
            }
        }
    }
};

DigiTrustAdblock.checkAdblock = function (initializeOptions) {
    DigiTrustAdblock.checkElements();
    DigiTrustAdblock.checkEndpoint();
};

module.exports = {
    checkAdblock: DigiTrustAdblock.checkAdblock
};

},{"10":10,"14":14,"15":15,"3":3,"5":5}],10:[function(require,module,exports){
'use strict';

var env = require(3).current;
var configGeneral = require(5)[env];
var configErrors = require(4);
var helpers = require(15);
var DigiTrustPopup = require(14);
var DigiTrustCommunication = require(11);
var DigiTrustCookie = require(12);

var DigiTrustAppContainer = {};

DigiTrustAppContainer.launch = function (options) {

    // Get Apps manifest
    helpers.xhr.get(options.apps.manifest)
    .success(function (data, xhrObj) {

        if (!helpers.isValidJSON(data)) {
            throw new Error(configErrors.en.appManifestInvalid);
        } else {
            data = JSON.parse(data);
            // If there are apps available
            if (!helpers.isEmpty(data.apps)) {
                for (var i = 0; i < data.apps.length; i++) {
                    window.DigiTrust.apps['app' + i] = data.apps[i];
                }

                // Listen for User input
                helpers.MinPubSub.subscribe('DigiTrust.pubsub.app.selected.reload', function (app) {
                    DigiTrustAppContainer.userAppSelected(app, true);
                });
                helpers.MinPubSub.subscribe('DigiTrust.pubsub.app.selected.noreload', function (app) {
                    DigiTrustAppContainer.userAppSelected(app, false);
                });

                // Listen to iFrame response
                helpers.MinPubSub.subscribe('DigiTrust.pubsub.app.getAppsPreferences.response', function (appFromLS) {
                    var selectedApp;
                    var _launchAdblockPopup = function () {
                        DigiTrustPopup.createAdblockPopup(options, true);
                        var appsHTML = DigiTrustPopup.getAppsDivsHtml(window.DigiTrust.apps, null, true);
                        document.getElementById(configGeneral.htmlIDs.dtAdbApps).appendChild(appsHTML);
                    };

                    var _launchReminderPopup = function () {
                        var appsHTML = DigiTrustPopup.getAppsSelectHtml(window.DigiTrust.apps, selectedApp, false);
                        DigiTrustPopup.createAppOptionsPopup(options);
                        document.getElementById('digitrust-apps-options').appendChild(appsHTML);
                    };

                    if (!helpers.isEmpty(appFromLS)) {
                        // Is user selected app still made available by Publisher??
                        selectedApp = helpers.getObjectByKeyFromObject(
                            window.DigiTrust.apps,
                            'name',
                            appFromLS.name
                        );

                        if (selectedApp) {
                            // How frequently do we show the reminder?
                            var _ifShowReminder = function () {
                                // If reminder cookie has not expired yet, do not show
                                if (DigiTrustCookie.getCookieByName(configGeneral.app.cookie.reminderObjectKey)) {
                                    return false;
                                } else {
                                    // If reminder cookie expired, set new cookie and show reminder
                                    DigiTrustCookie.setAppReminderCookie();
                                    return true;
                                }
                            };
                            if (_ifShowReminder()) {
                                _launchReminderPopup(options);
                            }
                            DigiTrustAppContainer.insertAppScript(selectedApp, false);
                        } else {
                            _launchAdblockPopup(options);
                        }
                    } else {
                        _launchAdblockPopup(options);
                    }
                });

                // Get apps preferences from DT domain
                DigiTrustCommunication.getAppsPreferences({
                    member: window.DigiTrust.initializeOptions.member
                });
            }
        }
    })
    .error(function (data, xhrObj) {
        throw new Error(configErrors.en.appManifestXHR);
    });
};

var _appOnLoad = function (app, publishEnable) {
    console.log(app.name, 'done loading APP JavaScript');

    if (publishEnable === true) {
        helpers.MinPubSub.publish('DigiTrust.pubsub.app.event.enable', [app.name]);
    } else {
        var publishAfterReload = localStorage.getItem('a:' + app.name + ':publishEnable');
        if (publishAfterReload === 'true') {
            helpers.MinPubSub.publish('DigiTrust.pubsub.app.event.enable', [app.name]);
            localStorage.removeItem('a:' + app.name + ':publishEnable');
        }
    }

    // If this is the first app being loaded
    if (helpers.isEmpty(window.DigiTrust.currentApp)) {
        // Might be useful for pushState page-view tracking
        // helpers.createPageViewClickListener();
    } else {
        // Disable previous app
        helpers.MinPubSub.publish('DigiTrust.pubsub.app.event.disable', [window.DigiTrust.currentApp.name]);
    }
    window.DigiTrust.currentApp = app;
    window.DigiTrust.loadedApps.push(app.name);
    helpers.MinPubSub.publish('DigiTrust.pubsub.app.event.pageView', [app.name]);
};

DigiTrustAppContainer.insertAppScript = function (app, publishEnable) {
    publishEnable = publishEnable || false;
    var r = false;
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = app.behavior;
    s.onload = s.onreadystatechange = function () {
        if (!r && (!this.readyState || this.readyState === 'complete')) {
            r = true;
            _appOnLoad(app, publishEnable);
        }
    };
    var t = document.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);
};

DigiTrustAppContainer.userAppSelected = function (app, reload) {
    reload = reload || false;
    // If user selects already-loaded app, do not do anything
    if (window.DigiTrust.currentApp.name === app.name) {
        document.getElementById('digitrust-apps-options-close').click();
    } else {

        helpers.MinPubSub.subscribe('DigiTrust.pubsub.app.setAppsPreferences.response', function (iframeData) {
            if (app.name === iframeData.app.name) {
                if (iframeData.success === true) {
                    if (reload === true) {
                        location.reload();
                    } else {
                        document.getElementById('digitrust-apps-options-close').click();
                    }
                } else {
                    document.getElementById('digitrust-apps-select-status')
                        .innerHTML = 'Saving failed, please try again or reload page.';
                }
            }
        });

        // If we do not want to reload the page, and the app has not been loaded yet
        if (reload === false && window.DigiTrust.loadedApps.indexOf(app.name) === -1) {
            // Load App script
            DigiTrustAppContainer.insertAppScript(app, true);
        } else {
            // Launch "enable" event upon reload
            // (we reload since the AdBlocker detector popup uglifies the page's whole CSS)
            localStorage.setItem('a:' + app.name + ':publishEnable', 'true');
        }

        // Update UI
        document.getElementById('digitrust-apps-select-status').innerHTML = 'Saving..';

        // Set App preference on DT domain
        DigiTrustCommunication.setAppsPreferences({
            member: window.DigiTrust.initializeOptions.member,
            app: app
        });
    }
};

/*
 * For digitru.st only
 */
DigiTrustAppContainer.server = {};

DigiTrustAppContainer.server.setAppForMember = function (member, app) {
    if (member && member.length > 0 && app.name && app.name.length > 0) {
        var appForLS = {
            name: app.name
        };
        localStorage.setItem('m:' + member, JSON.stringify(appForLS));
        return true;
    } else {
        console.log('Error DigiTrustAppContainer.server.setAppForMember: validation failed');
        return false;
    }
};

DigiTrustAppContainer.server.getAppForMember = function (member) {
    var value = localStorage.getItem('m:' + member);
    if (value) {
        return JSON.parse(value);
    }
    return {};
};

module.exports = DigiTrustAppContainer;

},{"11":11,"12":12,"14":14,"15":15,"3":3,"4":4,"5":5}],11:[function(require,module,exports){
'use strict';

var env = require(3).current;
var configGeneral = require(5)[env];
var configErrors = require(4);
var helpers = require(15);

var DigiTrustCommunication = {};

DigiTrustCommunication.iframe = null;
DigiTrustCommunication.iframeStatus = 0; // 0: no iframe; 1: connecting; 2: ready

DigiTrustCommunication._messageHandler = function (evt) {
    if (evt.origin !== configGeneral.iframe.postMessageOrigin) {
        // do nothing. tbd enable console logging in dev.
    } else {
        switch (evt.data.type) {
            case 'DigiTrust.iframe.ready':
                helpers.MinPubSub.publish('DigiTrust.pubsub.iframe.ready', [true]);
                break;
            case 'DigiTrust.identity.response':
                helpers.MinPubSub.publish('DigiTrust.pubsub.identity.response', [evt.data.value]);
                break;
            case 'DigiTrust.identity.response.syncOnly':
                helpers.MinPubSub.publish('DigiTrust.pubsub.identity.response.syncOnly', [evt.data.value]);
                break;
            case 'DigiTrust.getAppsPreferences.response':
                helpers.MinPubSub.publish('DigiTrust.pubsub.app.getAppsPreferences.response', [evt.data.value]);
                break;
            case 'DigiTrust.setAppsPreferences.response':
                helpers.MinPubSub.publish('DigiTrust.pubsub.app.setAppsPreferences.response', [evt.data.value]);
                break;
            case 'DigiTrust.identity.optOutResponse':
                helpers.MinPubSub.publish('DigiTrust.pubsub.app.identity.optOutResponse', [evt.data.value]);
                break;
            case 'DigiTrust.identity.optOutSolutionResponse':
                helpers.MinPubSub.publish('DigiTrust.pubsub.app.identity.optOutSolutionResponse', [evt.data.value]);
                break;
        }
    }
};

DigiTrustCommunication.startConnection = function (loadSuccess) {
    /*
        If there is a connection problem, or if adblocker blocks the request,
        start a 10 second timeout to notify the caller. Clear the timeout upon
        successful connection to the iframe

        Note: onload is executed even on non 2XX HTTP STATUSES (e.g. 404, 500)
              for cross-domain iframe requests
    */
    var iframeLoadErrorTimeout = setTimeout(function () {
        loadSuccess(false);
        DigiTrustCommunication.iframeStatus = 0;
    }, configGeneral.iframe.timeoutDuration);

    helpers.MinPubSub.subscribe('DigiTrust.pubsub.iframe.ready', function (iframeReady) {
        clearTimeout(iframeLoadErrorTimeout);
        DigiTrustCommunication.iframeStatus = 2;
        loadSuccess(true);
    });

    // Add postMessage listeners
    if (window.addEventListener) {
        window.addEventListener('message', DigiTrustCommunication._messageHandler, false);
    } else {
        window.attachEvent('onmessage', DigiTrustCommunication._messageHandler);
    }

    DigiTrustCommunication.iframe = document.createElement('iframe');
    DigiTrustCommunication.iframe.style.display = 'none';
    DigiTrustCommunication.iframe.src = configGeneral.urls.digitrustIframe;
    DigiTrustCommunication.iframeStatus = 1;
    document.head.appendChild(DigiTrustCommunication.iframe);
};

DigiTrustCommunication.sendRequest = function (sendRequestFunction, options) {

    if (DigiTrustCommunication.iframeStatus === 2) {
        sendRequestFunction(options);
    } else if (DigiTrustCommunication.iframeStatus === 1) {
        // This mimics a "delay", until the iframe is ready
        helpers.MinPubSub.subscribe('DigiTrust.pubsub.iframe.ready', function (iframeReady) {
            sendRequestFunction(options);
        });
    } else if (DigiTrustCommunication.iframeStatus === 0) {
        // Create communication gateway with digitru.st iframe
        DigiTrustCommunication.startConnection(function (loadSuccess) {
            if (loadSuccess) {
                sendRequestFunction(options);
            } else {
                throw new Error(configErrors.en.iframeError);
            }
        });
    }
};

DigiTrustCommunication.getIdentity = function (options) {
    options = options ? options : {};
    var _sendIdentityRequest = function (options) {
        var identityRequest = {
            version: 1,
            type: 'DigiTrust.identity.request',
            syncOnly: options.syncOnly ? options.syncOnly : false,
            redirects: options.redirects ? options.redirects : false,
            value: {}
        };
        DigiTrustCommunication.iframe.contentWindow.postMessage(identityRequest, DigiTrustCommunication.iframe.src);
    };

    DigiTrustCommunication.sendRequest(_sendIdentityRequest, options);
};

DigiTrustCommunication.getAppsPreferences = function (options) {
    if (!options.member) { throw new Error(configErrors.en.iframeMissingMember); }

    var _request = function (options) {
        var requestPayload = {
            version: 1,
            type: 'DigiTrust.getAppsPreferences.request',
            value: {
                member: options.member
            }
        };
        DigiTrustCommunication.iframe.contentWindow.postMessage(requestPayload, DigiTrustCommunication.iframe.src);
    };

    DigiTrustCommunication.sendRequest(_request, options);
};

DigiTrustCommunication.setAppsPreferences = function (options) {

    if (!options.member) { throw new Error(configErrors.en.iframeMissingMember); }
    if (!options.app || !options.app.name) { throw new Error(configErrors.en.iframeMissingAppName); }

    var _request = function (options) {
        var requestPayload = {
            version: 1,
            type: 'DigiTrust.setAppsPreferences.request',
            value: {
                member: options.member,
                app: options.app
            }
        };
        DigiTrustCommunication.iframe.contentWindow.postMessage(requestPayload, DigiTrustCommunication.iframe.src);
    };

    DigiTrustCommunication.sendRequest(_request, options);
};

DigiTrustCommunication.sendReset = function (options) {
    var DigiTrustCookie = require(12);
    DigiTrustCookie.setResetCookie();
    var _request = function (options) {
        var requestPayload = {
            version: 1,
            type: 'DigiTrust.identity.reset'
        };
        DigiTrustCommunication.iframe.contentWindow.postMessage(requestPayload, DigiTrustCommunication.iframe.src);
    };

    DigiTrustCommunication.sendRequest(_request, options);
};

DigiTrustCommunication.sendOptOut = function () {

    var _request = function () {
        var requestPayload = {
            version: 1,
            type: 'DigiTrust.identity.optOut',
            value: {}
        };
        DigiTrustCommunication.iframe.contentWindow.postMessage(requestPayload, DigiTrustCommunication.iframe.src);
    };

    DigiTrustCommunication.sendRequest(_request);
};

DigiTrustCommunication.sendOptOutSolution = function (options) {

    var _request = function (options) {
        var requestPayload = {
            version: 1,
            type: 'DigiTrust.identity.optOutSolution',
            value: {
                solution: options.solution
            }
        };
        DigiTrustCommunication.iframe.contentWindow.postMessage(requestPayload, DigiTrustCommunication.iframe.src);
    };

    DigiTrustCommunication.sendRequest(_request, options);
};

module.exports = {
    getIdentity: DigiTrustCommunication.getIdentity,
    startConnection: DigiTrustCommunication.startConnection,
    getAppsPreferences: DigiTrustCommunication.getAppsPreferences,
    setAppsPreferences: DigiTrustCommunication.setAppsPreferences,
    sendReset: DigiTrustCommunication.sendReset,
    sendOptOut: DigiTrustCommunication.sendOptOut,
    sendOptOutSolution: DigiTrustCommunication.sendOptOutSolution
};

},{"12":12,"15":15,"3":3,"4":4,"5":5}],12:[function(require,module,exports){
'use strict';

var env = require(3).current;
var configGeneral = require(5)[env];
var DigiTrustCommunication = require(11);
var DigiTrustPopup = require(14);
var helpers = require(15);

var _maxAgeToDate = function (milliseconds) {
    var date = new Date();
    date.setTime(date.getTime() + milliseconds);
    return date.toUTCString();
};

var _setCookie = function (cookieKV, expiresKV, domainKV, pathKV) {
    document.cookie = cookieKV + expiresKV + domainKV + pathKV;
};

var _setIdentityCookie = function (cookieV) {

    var cookieConfig = window.DigiTrust.isClient ? configGeneral.cookie.publisher : configGeneral.cookie.digitrust;

    var cookieKV = cookieConfig.userObjectKey + '=' + cookieV + ';';
    var expiresKV = 'expires=' + _maxAgeToDate(cookieConfig.maxAgeMiliseconds) + ';';
    var domainKV = cookieConfig.domainKeyValue;
    var pathKV = cookieConfig.pathKeyValue;

    _setCookie(cookieKV, expiresKV, domainKV, pathKV);
};

var _verifyUserCookieStructure = function (userJSON) {
    if (!userJSON) { return false; }

    var hasUserId = userJSON.hasOwnProperty('id');
    var hasPrivacy = userJSON.hasOwnProperty('privacy');

    if (!hasUserId || ((!userJSON.privacy.optout) && (userJSON.id.length < 1))) {
        return false;
    }

    if (hasPrivacy) {
        var hasOptout = userJSON.privacy.hasOwnProperty('optout');
        if (!hasOptout) {
            return false;
        }
    } else {
        return false;
    }

    return true;
};

var DigiTrustCookie = {};
DigiTrustCookie.showCookieConsentPopup = false;
DigiTrustCookie.getIdentityCookieJSON = function (cookieKey) {
    var localUserCookie = DigiTrustCookie.getCookieByName(cookieKey);

    if (localUserCookie) {
        var localUserCookieJSON = {};
        try {
            localUserCookieJSON = DigiTrustCookie.unobfuscateCookieValue(localUserCookie);
        } catch (e) {
            localUserCookieJSON = {
                id: helpers.generateUserId(),
                version: configGeneral.cookie.version,
                privacy: {
                    optout: false
                }
            };
            _setIdentityCookie(DigiTrustCookie.obfuscateCookieValue(localUserCookieJSON));
        }
        if (_verifyUserCookieStructure(localUserCookieJSON)) {
            return localUserCookieJSON;
        } else {
            return {};
        }
    } else {
        return {};
    }
};

DigiTrustCookie.setResetCookie = function () {
    var cookieKV = configGeneral.cookie.digitrust.resetKey + '=true;';
    var expiresKV = 'expires=' + _maxAgeToDate(configGeneral.cookie.digitrust.maxAgeMiliseconds) + ';';
    var domainKV = configGeneral.cookie.digitrust.domainKeyValue;
    var pathKV = configGeneral.cookie.digitrust.pathKeyValue;

    _setCookie(cookieKV, expiresKV, domainKV, pathKV);
};

DigiTrustCookie.expireCookie = function (cookieKey) {
    var cookieKV = cookieKey + '=;';
    var expiresKV = 'expires=' + _maxAgeToDate(-10000000000000) + ';';
    var domainKV = configGeneral.cookie.digitrust.domainKeyValue;
    var pathKV = configGeneral.cookie.digitrust.pathKeyValue;

    _setCookie(cookieKV, expiresKV, domainKV, pathKV);
};

DigiTrustCookie.setAppReminderCookie = function () {
    var cookieKV = configGeneral.app.cookie.reminderObjectKey + '=1;';
    var expiresKV = 'expires=' + _maxAgeToDate(configGeneral.app.cookie.reminderMaxAgeMiliseconds) + ';';
    var domainKV = configGeneral.cookie.publisher.domainKeyValue;
    var pathKV = configGeneral.cookie.publisher.pathKeyValue;

    _setCookie(cookieKV, expiresKV, domainKV, pathKV);
};

DigiTrustCookie.setDigitrustCookie = function (cookieV) {
    var cookieKV = configGeneral.cookie.digitrust.userObjectKey + '=' + cookieV + ';';
    var expiresKV = 'expires=' + _maxAgeToDate(configGeneral.cookie.digitrust.maxAgeMiliseconds) + ';';
    var domainKV = configGeneral.cookie.digitrust.domainKeyValue;
    var pathKV = configGeneral.cookie.digitrust.pathKeyValue;

    _setCookie(cookieKV, expiresKV, domainKV, pathKV);
};

DigiTrustCookie.setChallengeCookie = function (cookieV) {
    var cookieKV = configGeneral.cookie.digitrust.challenge + '=' + cookieV + ';';
    var expiresKV = 'expires=' + _maxAgeToDate(configGeneral.cookie.digitrust.maxAgeMiliseconds) + ';';
    var domainKV = configGeneral.cookie.digitrust.domainKeyValue;
    var pathKV = configGeneral.cookie.digitrust.pathKeyValue;

    _setCookie(cookieKV, expiresKV, domainKV, pathKV);
};

DigiTrustCookie.getUser = function (options, callback) {

    options = options || {};
    var useCallback = (typeof callback === 'function') ? true : false;
    var localUserCookieJSON = {};
    var _createSyncOnlySubscription = function () {
        // LISTENER: Only update publisher cookie, do not return anywhere
        helpers.MinPubSub.subscribe('DigiTrust.pubsub.identity.response.syncOnly', function (userJSON) {
            if (_verifyUserCookieStructure(userJSON)) {
                var cookieStringEncoded = DigiTrustCookie.obfuscateCookieValue(userJSON);
                _setIdentityCookie(cookieStringEncoded);
            }
        });
    };

    if (useCallback === false) {
        localUserCookieJSON = DigiTrustCookie.getIdentityCookieJSON(configGeneral.cookie.publisher.userObjectKey);
        // Do a sync with digitrust official domain
        _createSyncOnlySubscription();
        DigiTrustCommunication.getIdentity({syncOnly:true});
        return (!helpers.isEmpty(localUserCookieJSON)) ? localUserCookieJSON : {};
    } else {
        /*
            postMessage doesn't have a callback, so we listen for an event emitted by the
            DigiTrustCommunication module telling us that a message arrived from http://digitru.st
            and now we can complete the callback

            LISTENER: listen for message from digitrust iframe
        */
        helpers.MinPubSub.subscribe('DigiTrust.pubsub.identity.response', function (userJSON) {
            if (_verifyUserCookieStructure(userJSON)) {
                var cookieStringEncoded = DigiTrustCookie.obfuscateCookieValue(userJSON);
                _setIdentityCookie(cookieStringEncoded);
                return callback(false, userJSON);
            } else {
                // No DigiTrust cookie exists on digitru.st domain
                if (DigiTrustCookie.showCookieConsentPopup) {
                    DigiTrustPopup.createConsentPopup(options);
                }
                if (options.redirects) {
                    helpers.createConsentClickListener();
                }
                return callback(true);
            }
        });

        if (options.ignoreLocalCookies === true) {
            DigiTrustCommunication.getIdentity();
        } else {
            localUserCookieJSON = DigiTrustCookie.getIdentityCookieJSON(
                configGeneral.cookie.publisher.userObjectKey
            );
            if (!helpers.isEmpty(localUserCookieJSON)) {
                // OK to proceed & show content
                // Grab remote cookie & update local
                _createSyncOnlySubscription();
                DigiTrustCommunication.getIdentity({syncOnly:true});
                return callback(false, localUserCookieJSON);
            } else {
                // Connect to iframe to check remote cookies
                DigiTrustCommunication.getIdentity({syncOnly:false, redirects:options.redirects});
            }
        }
    }
};

DigiTrustCookie.setOptout = function (optoutValue) {
    optoutValue = optoutValue ? true : false;
    var cookieConfig = window.DigiTrust.isClient ? configGeneral.cookie.publisher : configGeneral.cookie.digitrust;
    var identityCookieJSON = DigiTrustCookie.getIdentityCookieJSON(cookieConfig.userObjectKey);

    if (helpers.isEmpty(identityCookieJSON)) {
        identityCookieJSON.id = helpers.generateUserId();
    }

    identityCookieJSON.privacy = {
        optout: optoutValue
    };

    var cookieStringEncoded = DigiTrustCookie.obfuscateCookieValue(identityCookieJSON);
    _setIdentityCookie(cookieStringEncoded);
};

DigiTrustCookie.obfuscateCookieValue = function (value) {
    return encodeURIComponent(btoa(JSON.stringify(value)));
};
DigiTrustCookie.unobfuscateCookieValue = function (value) {
    return JSON.parse(atob(decodeURIComponent(value)));
};

DigiTrustCookie.getCookieByName = function (name) {
    var value = '; ' + document.cookie;
    var parts = value.split('; ' + name + '=');
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
};

DigiTrustCookie.createUserCookiesOnDigitrustDomain = function () {
    var userId = helpers.generateUserId();
    var userJSON = {
        id: userId,
        version: configGeneral.cookie.version,
        privacy: {
            optout: false
        }
    };
    var cookieStringEncoded = DigiTrustCookie.obfuscateCookieValue(userJSON);

    DigiTrustCookie.setDigitrustCookie(cookieStringEncoded);
    return userJSON;
};

module.exports = DigiTrustCookie;

},{"11":11,"14":14,"15":15,"3":3,"5":5}],13:[function(require,module,exports){
'use strict';

var env = require(3).current;
var configGeneral = require(5)[env];
var helpers = require(15);
var DTPublicKeyObject = require(7);

var crypto_browser = helpers.getBrowserCrypto();
var DigiTrustCrypto = {};

DigiTrustCrypto.getKeyVersion = function () {
    return DTPublicKeyObject.version;
};

// Returns base64 string
DigiTrustCrypto.encrypt = function (valueToEncrypt, callback) {
    var keyType;
    var publicKey;
    if (helpers.isSafari()) {
        keyType = 'jwk';
        publicKey = helpers.asciiToUint8Array(JSON.stringify(DTPublicKeyObject.jwk));
    } else {
        keyType = 'spki';
        publicKey = helpers.base64StringToArrayBuffer(DTPublicKeyObject.spki);
    }

    crypto_browser.subtle.importKey(
        keyType,
        publicKey,
        {
            name: DTPublicKeyObject.type,
            hash: {
                name: DTPublicKeyObject.hash.name
            }
        },
        false,
        ['encrypt']
    )
    .then(function (cryptokey) {
        crypto_browser.subtle.encrypt(
            {
                name: DTPublicKeyObject.type,
                hash: {
                    name: DTPublicKeyObject.hash.name
                }
            },
            cryptokey,
            // string (User ID) to array buffer
            helpers.str2ab(valueToEncrypt)
        )
        .then(function (encryptedValue) {
            // Returns an ArrayBuffer containing the encrypted data
            var encryptedValueEncodedB64 = helpers.arrayBufferToBase64String(encryptedValue);
            // console.log('just encrypted', keyType, encryptedValueEncodedB64);
            return callback(encryptedValueEncodedB64);
        });
    });
};

// Returns string; input is a base64 string
// FOR TESTING ONLY
// FOR TESTING ONLY - remove
// FOR TESTING ONLY - remove
// FOR TESTING ONLY
DigiTrustCrypto.decrypt = function (valueToDecrypt, callback) {
    var keyType = 'jwk';
    var privateKey = DTPublicKeyObject.jwkPrivate;

    crypto_browser.subtle.importKey(
        keyType,
        privateKey,
        {
            name: DTPublicKeyObject.type,
            hash: {
                name: DTPublicKeyObject.hash.name
            }
        },
        false,
        ['decrypt']
    )
    .then(function (cryptokey) {
        crypto_browser.subtle.decrypt(
            {
                name: DTPublicKeyObject.type,
                hash: {
                    name: DTPublicKeyObject.hash.name
                }
            },
            cryptokey,
            // Encrypted User ID (b64) into array buffer
            helpers.base64StringToArrayBuffer(valueToDecrypt)
        )
        .then(function (decryptedValueArrayBuffer) {
            var decryptedValueString = helpers.ab2str(decryptedValueArrayBuffer);
            console.log('just decrypted', keyType, decryptedValueString);
            return callback(decryptedValueString);
        });
    });
};

module.exports = DigiTrustCrypto;

},{"15":15,"3":3,"5":5,"7":7}],14:[function(require,module,exports){
'use strict';

var env = require(3).current;
var configGeneral = require(5)[env];
var helpers = require(15);

var fontFamily = 'Helvetica, Arial, Verdana, sans-serif';
var mq = {
    phoneString: '(min-width : 320px) and (max-width : 768px)',
    tabletString: '(min-width : 768px) and (max-width : 1024px)',
    desktopString: '(min-width : 1024px)',
};

var DigiTrustPopup = {};

var _mqPhone = function () {
    return window.matchMedia(mq.phoneString);
};

var _mqTablet = function () {
    return window.matchMedia(mq.tabletString);
};

DigiTrustPopup.createAdblockPopup = function (initializeOptions, hasApps) {

    /* Blur document text
    */
    var fontColorBody = document.body.style.color;
    fontColorBody = fontColorBody || '#000000';
    document.body.style.color = 'transparent';
    document.body.style.textShadow = '0 0 7px ' + fontColorBody;

    /* Blur individual elements
    */

    var fontColor = fontColorBody;
    var allTags = document.body.getElementsByTagName('*');
    var totalTags = allTags.length;
    for (var i = 0; i < totalTags; i++) {
        // Blur text
        fontColor = document.defaultView.getComputedStyle(allTags[i], null).color;
        if (fontColor === 'rgba(0, 0, 0, 0)') {
            fontColor = fontColorBody;
        }

        allTags[i].style.color = 'transparent';
        allTags[i].style.textShadow = '0 0 7px ' + fontColor;
        // Blur images
        allTags[i].style.filter = 'blur(1px)';
        allTags[i].style.webkitFilter = 'blur(1px)';
        allTags[i].style.mozFilter = 'blur(1px)';
        allTags[i].style.msFilter = 'progid:DXImageTransform.Microsoft.Blur(PixelRadius="5");';
        allTags[i].style.oFilter = 'blur(1px)';
    }

    /* DIVs
    */

    var appsDiv = document.createElement('div');
    appsDiv.id = configGeneral.htmlIDs.dtAdbApps;

    var reloadDiv = document.createElement('div');
    reloadDiv.id = 'digitrust-adb-reload';
    reloadDiv.innerHTML = hasApps ? 'SELECT APP & RELOAD THE PAGE' : 'TURN OFF ADBLOCK & RELOAD THE PAGE';
    if (!initializeOptions.adblocker.unstyled) {
        reloadDiv.style.cursor = 'pointer';
        reloadDiv.style.background = '#006080';
        reloadDiv.style.color = '#FFF';
        reloadDiv.style.fontSize = '15px';
        reloadDiv.style.fontWeight = '600';
        reloadDiv.style.letterSpacing = '.05em';
        reloadDiv.style.position = 'absolute';
        reloadDiv.style.textAlign = 'center';
        reloadDiv.style.borderBottom = '10px solid #279CBF';
        reloadDiv.style.padding = '30px 50px 20px';
        reloadDiv.style.bottom = '-45px';
        reloadDiv.style.right = '30px';
        reloadDiv.style.textTransform = 'uppercase';
        reloadDiv.style.width = '365px';
        if (_mqTablet().matches) {
            reloadDiv.style.width = '355px';
            reloadDiv.style.padding = '25px 0 25px';
            reloadDiv.style.bottom = '-38px';
            reloadDiv.style.right = '30px';
        } else if (_mqPhone().matches) {
            reloadDiv.style.width = '180px';
            reloadDiv.style.padding = '25px 5px 25px';
            reloadDiv.style.bottom = '-25px';
            reloadDiv.style.right = '20px';
        }
    }

    if (hasApps) {
        reloadDiv.onclick = function () {
            var selectedAppList = document.getElementsByClassName(configGeneral.htmlIDs.dtAdbAppSelected);
            var selectedApp = selectedAppList[0];
            var appId = selectedApp.getAttribute('data-appId');
            console.log(appId);
            if (appId.length > 0) {
                var app = window.DigiTrust.apps[appId];
                console.log(app);
                if (app) {
                    helpers.MinPubSub.publish('DigiTrust.pubsub.app.selected.reload', [app]);
                } else {
                    throw new Error('App Object with this ID does not exist');
                }
            } else {
                throw new Error('App ID string missing');
            }
        };
    } else {

        reloadDiv.onclick = function () {
            location.reload();
        };
    }

    var publisherLogo;
    if (initializeOptions.adblocker.logoSrc) {
        publisherLogo = document.createElement('img');
        publisherLogo.src = initializeOptions.adblocker.logoSrc;
        if (!initializeOptions.adblocker.unstyled) {
            publisherLogo.style.display = 'block';
            publisherLogo.style.maxWidth = '90%';
        }
    } else {
        publisherLogo = document.createElement('h1');
        publisherLogo.innerHTML = initializeOptions.adblocker.logoText;
        if (!initializeOptions.adblocker.unstyled) {
            publisherLogo.style.margin = '0';
        }
    }
    publisherLogo.id = 'digitrust-publisher-logo';

    var clearBothDiv = document.createElement('div');
    clearBothDiv.style.clear = 'both';

    var poweredByImg = document.createElement('img');
    poweredByImg.id = 'digitrust-powered-by-logo';
    poweredByImg.src = '//cdn.digitru.st/prod/v1/powered_by.png';
    // can_style
    if (!initializeOptions.adblocker.unstyled) {
        poweredByImg.style.width = '150px';
        if (_mqTablet().matches) {
            poweredByImg.style.width = '80px';
        } else if (_mqPhone().matches) {
            poweredByImg.style.width = '80px';
        }
    }

    var poweredByDiv = document.createElement('div');
    poweredByDiv.id = 'digitrust-powered-by-container';
    poweredByDiv.innerHTML = 'Powered By<br/>';
    // can_style
    if (!initializeOptions.adblocker.unstyled) {
        poweredByDiv.style.fontSize = '.8em';
        poweredByDiv.style.color = '#9B9B99';
        poweredByDiv.style.position = 'absolute';
        poweredByDiv.style.bottom = '20px';
        poweredByDiv.style.left = '30px';
        if (_mqTablet().matches) {
            poweredByDiv.style.position = 'static';
            poweredByDiv.style.padding = '0 0 10px';
        } else if (_mqPhone().matches) {
            poweredByDiv.style.position = 'static';
            poweredByDiv.style.padding = '10px 0 10px';
        }
    }
    poweredByDiv.appendChild(poweredByImg);

    var messageDiv = document.createElement('div');
    messageDiv.id = configGeneral.htmlIDs.dtAdbMessage;
    messageDiv.innerHTML = initializeOptions.adblocker.userMessage;
    if (!initializeOptions.adblocker.unstyled) {
        messageDiv.style.float = 'left';
        messageDiv.style.width = '250px';
        messageDiv.style.margin = '15px 0 85px';
        if (_mqTablet().matches) {
            messageDiv.style.width = '150px';
            messageDiv.style.marginBottom = '15px';
        } else if (_mqPhone().matches) {
            messageDiv.style.width = '100%';
            messageDiv.style.float = 'none';
            messageDiv.style.marginBottom = '15px';
        }
    }

    var pictureDiv;
    if (initializeOptions.adblocker.pictureSrc) {
        pictureDiv = document.createElement('img');
        pictureDiv.id = configGeneral.htmlIDs.publisherPicture;
        if (!initializeOptions.adblocker.unstyled) {
            pictureDiv.style.margin = '15px 0 20px 0';
            pictureDiv.style.float = 'right';
            pictureDiv.style.width = '465px';

            if (_mqTablet().matches) {
                pictureDiv.style.margin = '15px 0 0 0';
                pictureDiv.style.width = '420px';
                pictureDiv.style.float = 'right';
            } else if (_mqPhone().matches) {
                pictureDiv.style.margin = '0 0 0 0';
                pictureDiv.style.width = '100%';
                pictureDiv.style.float = 'none';
            }
        }
        pictureDiv.src = initializeOptions.adblocker.pictureSrc;
    } else {
        pictureDiv = document.createElement('span');
    }

    var contentDiv = document.createElement('div');
    contentDiv.id = configGeneral.htmlIDs.dtAdbContainer;
    // can_style
    if (!initializeOptions.adblocker.unstyled) {
        contentDiv.style.width = '740px';
        contentDiv.style.fontWeight = '300';
        contentDiv.style.position = 'absolute';
        contentDiv.style.padding = '50px 30px 30px 30px';
        contentDiv.style.margin = '80px 0 70px';
        contentDiv.style.left = '50%';
        contentDiv.style.transform = 'translate(-50%, 0)';
        contentDiv.style.background = initializeOptions.adblocker.popupBackgroundColor;
        contentDiv.style.color = initializeOptions.adblocker.popupFontColor;
        contentDiv.style.opacity = 1;
        contentDiv.style.fontSize = '15px';
        contentDiv.style.fontFamily = fontFamily;
        contentDiv.style.textShadow = 'none';
        contentDiv.style.border = '1px solid #D8D8D8';
        contentDiv.style.borderTopWidth = '30px';
        contentDiv.style.borderTopLeftRadius = '7px';
        contentDiv.style.borderTopRightRadius = '7px';
        contentDiv.style.borderBottomWidth = '10px';
        contentDiv.style.borderBottomLeftRadius = '7px';
        contentDiv.style.borderBottomRightRadius = '7px';
        contentDiv.style.borderBottomColor = '#2E7C97';
        contentDiv.style.boxShadow = '0px 0px 15px 5px rgba(0,0,0,0.15)';
        // Media queries
        if (_mqTablet().matches) {
            contentDiv.style.width = '570px';
            contentDiv.style.padding = '50px 30px 0 30px';
        } else if (_mqPhone().matches) {
            contentDiv.style.width = '324px';
            contentDiv.style.padding = '30px 20px 0 20px';
            contentDiv.style.fontSize = '12px';
            contentDiv.style.lineHeight = '16px';
        }
    }

    contentDiv.appendChild(publisherLogo);
    contentDiv.appendChild(messageDiv);
    contentDiv.appendChild(appsDiv);
    contentDiv.appendChild(pictureDiv);
    contentDiv.appendChild(clearBothDiv);
    contentDiv.appendChild(poweredByDiv);
    contentDiv.appendChild(reloadDiv);

    var scrollContainer = document.createElement('div');
    scrollContainer.id = 'digitrust-scroll-container';
    // can_style
    if (!initializeOptions.adblocker.unstyled) {
        scrollContainer.style.overflowY = 'scroll';
        scrollContainer.style.width = '100%';
        scrollContainer.style.height = '100%';
        scrollContainer.style.position = 'absolute';
    }
    scrollContainer.appendChild(contentDiv);

    var blurDiv = document.createElement('div');
    blurDiv.id = 'digitrust-adb-blur';
    blurDiv.style.width = '100%';
    blurDiv.style.height = '100%';
    blurDiv.style.opacity = 0.8;
    blurDiv.style.background = '#ffffff';
    blurDiv.style.position = 'fixed';

    var bgDiv = document.createElement('div');
    bgDiv.id = 'digitrust-adb-bg';
    bgDiv.style.zIndex = 999999;
    if (!initializeOptions.adblocker.unstyled) {
        bgDiv.style.width = '100%';
        bgDiv.style.height = '100%';
        bgDiv.style.top = '0';
        bgDiv.style.left = '0';
        bgDiv.style.position = 'fixed';
        bgDiv.style.overflowY = 'scroll';
    }

    bgDiv.appendChild(blurDiv);
    bgDiv.appendChild(scrollContainer);
    document.body.appendChild(bgDiv);

    // Block scroll on body
    document.body.style.overflowY = 'hidden';
};

DigiTrustPopup.createConsentPopup = function (initializeOptions) {

    var optOut = document.createElement('a');
    optOut.id = configGeneral.htmlIDs.consentLinkId;
    optOut.innerHTML = 'You can read more or opt out of DigiTrust here.';
    optOut.href = configGeneral.urls.optoutInfo;
    if (!initializeOptions.adblocker.unstyled) {
        optOut.style.padding = '0 0 0 10px';
    }

    var textDiv = document.createElement('div');
    textDiv.id = 'digitrust-c-text';
    textDiv.innerHTML = initializeOptions.consent.userMessage;
    if (!initializeOptions.adblocker.unstyled) {
        textDiv.style.padding = '5px 50px';
    }
    textDiv.appendChild(optOut);

    var iDiv = document.createElement('div');
    iDiv.id = 'digitrust-c-info';
    iDiv.innerHTML = 'i';
    if (!initializeOptions.adblocker.unstyled) {
        iDiv.style.padding = '5px 15px';
        iDiv.style.float = 'left';
        iDiv.style.background = '#999999';
        iDiv.style.color = '#ffffff';
        iDiv.style.fontFamily = 'serif';
        iDiv.style.fontSize = '16px';
        iDiv.style.fontStyle = 'italic';
        iDiv.style.top = '0';
        iDiv.style.left = '0';
        iDiv.style.position = 'absolute';
        iDiv.style.borderBottomRightRadius = '5px';
    }

    var bgDiv = document.createElement('div');
    bgDiv.id = 'digitrust-c-bg';
    bgDiv.style.zIndex = 999998;
    if (!initializeOptions.adblocker.unstyled) {
        bgDiv.style.width = '100%';
        bgDiv.style.bottom = '0';
        bgDiv.style.left = '0';
        bgDiv.style.position = 'fixed';
        bgDiv.style.fontFamily = fontFamily;
        bgDiv.style.fontSize = '12px';
        bgDiv.style.lineHeight = '18px';
        bgDiv.style.background = initializeOptions.consent.popupBackgroundColor;
        bgDiv.style.color = initializeOptions.consent.popupFontColor;
    }

    bgDiv.appendChild(iDiv);
    bgDiv.appendChild(textDiv);

    document.body.appendChild(bgDiv);
};

DigiTrustPopup.createAppOptionsPopup = function (initializeOptions) {

    var bgDiv = document.createElement('div');
    bgDiv.id = 'digitrust-apps-options';
    bgDiv.style.zIndex = 999998;
    if (!initializeOptions.adblocker.unstyled) {
        bgDiv.style.bottom = '0';
        bgDiv.style.left = '0';
        bgDiv.style.right = '0';
        bgDiv.style.padding = '5px';
        bgDiv.style.position = 'fixed';
        bgDiv.style.fontFamily = fontFamily;
        bgDiv.style.fontSize = '12px';
        bgDiv.style.lineHeight = '18px';
        bgDiv.style.background = initializeOptions.consent.popupBackgroundColor;
        bgDiv.style.color = initializeOptions.consent.popupFontColor;
    }

    var closeDiv = document.createElement('div');
    closeDiv.id = 'digitrust-apps-options-close';
    closeDiv.innerHTML = 'x';
    if (!initializeOptions.adblocker.unstyled) {
        closeDiv.style.cursor = 'pointer';
        closeDiv.style.position = 'absolute';
        closeDiv.style.right = '7px';
        closeDiv.style.top = '5px';
        closeDiv.style.fontWeight = 'bold';
    }
    closeDiv.onclick = function () {
        document.getElementById('digitrust-apps-options').remove();
    };
    bgDiv.appendChild(closeDiv);

    document.body.appendChild(bgDiv);
};

DigiTrustPopup.getAppsDivsHtml = function (appsObject, defaultApp, reload) {

    var picture = document.getElementById(configGeneral.htmlIDs.publisherPicture);
    if (picture) {
        picture.remove();
    }

    var appsHTML = document.createElement('div');
    appsHTML.id = 'digitrust-apps-select-container';
    if (!window.DigiTrust.initializeOptions.adblocker.unstyled) {
        appsHTML.style.height = '370px';
        appsHTML.style.width = '485px';
        appsHTML.style.float = 'right';
        appsHTML.style.margin = '10px -10px 10px 0';
        appsHTML.style.overflowY = 'scroll';
        if (_mqTablet().matches) {
            appsHTML.style.height = '340px';
            appsHTML.style.width = '373px';
            appsHTML.style.margin = '10px -10px 0 0';
        } else if (_mqPhone().matches) {
            appsHTML.style.height = '280px';
            appsHTML.style.width = '324px';
            appsHTML.style.float = 'none';
            appsHTML.style.margin = '0 0 0 5px';
        }
    }

    var _optionOnclick = function (option) {
        return function () {
            var allApps = document.getElementsByClassName('dt-app');
            for (var i = 0; i < allApps.length; i++) {
                allApps[i].style.background = '#ffffff';
                allApps[i].className = configGeneral.htmlIDs.dtAdbAppClass;
            }

            option.className += ' ' + configGeneral.htmlIDs.dtAdbAppSelected + ' '; // keep spaces
            option.style.background = '#CCDFE5 url("' + configGeneral.urls.digitrustHostPath +
                'selected_mark.png") no-repeat 170px 0';
            if (_mqTablet().matches) {
                option.style.background = '#CCDFE5 url("' + configGeneral.urls.digitrustHostPath +
                    'selected_mark.png") no-repeat 120px 0';
            } else if (_mqPhone().matches) {
                option.style.background = '#CCDFE5 url("' + configGeneral.urls.digitrustHostPath +
                    'selected_mark.png") no-repeat 90px 0';
            }

            /*var app = window.DigiTrust.apps[appId];
            if (reload === true) {
                helpers.MinPubSub.publish('DigiTrust.pubsub.app.selected.reload', [app]);
            } else {
                helpers.MinPubSub.publish('DigiTrust.pubsub.app.selected.noreload', [app]);
            }*/
        };
    };

    for (var appId in appsObject) {
        if (appsObject.hasOwnProperty(appId)) {
            var icon = document.createElement('img');
            if (appsObject[appId].icon && appsObject[appId].icon.url) {
                icon.src = appsObject[appId].icon.url;
            }
            icon.style.display = 'block';
            icon.style.margin = 'auto';
            icon.style.maxWidth = '40%';

            var appLabel = document.createElement('div');
            appLabel.innerHTML = appsObject[appId].name;
            appLabel.style.margin = '20px 0 0 0';

            var option = document.createElement('div');
            option.id = 'dt-app-id-' + appId;
            option.className = configGeneral.htmlIDs.dtAdbAppClass;
            option.setAttribute('data-appId', appId);
            if (!window.DigiTrust.initializeOptions.adblocker.unstyled) {
                option.style.fontSize = '10px';
                option.style.width = '200px';
                option.style.float = 'left';
                option.style.textAlign = 'left';
                option.style.border = '1px solid #EEE';
                option.style.margin = '10px';
                option.style.padding = '30px 10px 10px 10px';
                option.style.boxShadow = '0px 0px 5px 5px rgba(0,0,0,0.10)';
                option.style.background = '#ffffff';
                option.style.cursor = 'pointer';
                if (_mqTablet().matches) {
                    option.style.width = '150px';
                    option.style.padding = '15px 7px 7px 7px';
                } else if (_mqPhone().matches) {
                    option.style.width = '120px';
                    option.style.padding = '10px 7px 7px 7px';
                    option.style.boxShadow = '0px 0px 5px 2px rgba(0,0,0,0.10)';
                }
            }
            option.appendChild(icon);
            option.appendChild(appLabel);

            option.onclick = _optionOnclick(option);

            /*if (defaultApp && appsObject[appId].name === defaultApp.name) {
                option.setAttribute('data-selected', 'true');
            }*/

            appsHTML.appendChild(option);
        }
    }

    var statusText = document.createElement('span');
    statusText.id = 'digitrust-apps-select-status';
    appsHTML.appendChild(statusText);

    return appsHTML;
};

DigiTrustPopup.getAppsSelectHtml = function (appsObject, defaultApp, reload) {
    var appsHTML = document.createElement('div');
    appsHTML.id = 'digitrust-apps-select-container';

    var appsSelectList = document.createElement('select');
    appsSelectList.id = 'digitrust-apps-select';
    for (var appId in appsObject) {
        if (appsObject.hasOwnProperty(appId)) {
            var option = document.createElement('option');
            option.value = appId;
            option.text = appsObject[appId].name;

            if (defaultApp && appsObject[appId].name === defaultApp.name) {
                option.selected = true;
            }

            appsSelectList.appendChild(option);
        }
    }
    appsHTML.appendChild(appsSelectList);

    var setAppButton = document.createElement('button');
    setAppButton.id = 'digitrust-apps-set-app';
    setAppButton.innerHTML = 'Select';
    setAppButton.onclick = function () {
        var element = document.getElementById('digitrust-apps-select');
        var appId = element.options[element.selectedIndex].value;
        var app = window.DigiTrust.apps[appId];
        if (reload === true) {
            helpers.MinPubSub.publish('DigiTrust.pubsub.app.selected.reload', [app]);
        } else {
            helpers.MinPubSub.publish('DigiTrust.pubsub.app.selected.noreload', [app]);
        }
    };
    appsHTML.appendChild(setAppButton);

    var statusText = document.createElement('span');
    statusText.id = 'digitrust-apps-select-status';
    appsHTML.appendChild(statusText);

    return appsHTML;
};

module.exports = DigiTrustPopup;

},{"15":15,"3":3,"5":5}],15:[function(require,module,exports){
'use strict';

var env = require(3).current;
var configGeneral = require(5)[env];

var helpers = {};

helpers.extend = function (target, source) {
    target = target || {};
    for (var prop in source) {
        if (typeof source[prop] === 'object') {
            target[prop] = helpers.extend(target[prop], source[prop]);
        } else {
            target[prop] = source[prop];
        }
    }
    return target;
};

/*
*   https://github.com/toddmotto/atomic
*   MIT
*/
var parseXHR = function (req) {
    var result = req.responseText;
    /*try {
        result = JSON.parse(req.responseText);
    } catch (e) {
        result = req.responseText;
    }*/
    return [result, req];
};

var xhrRequest = function (type, url, data, async) {
    // if async not passed, default TRUE; if async is passed then check if truthy
    async = async ? (async ? true : false) : true;
    var methods = {
        success: function () {},
        error: function () {}
    };
    var XHR = window.XMLHttpRequest || ActiveXObject;
    var request = new XHR('MSXML2.XMLHTTP.3.0');
    request.open(type, url, async);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                methods.success.apply(methods, parseXHR(request));
            } else {
                methods.error.apply(methods, parseXHR(request));
            }
        }
    };
    request.send(data);
    var callbacks = {
        success: function (callback) {
            methods.success = callback;
            return callbacks;
        },
        error: function (callback) {
            methods.error = callback;
            return callbacks;
        }
    };

    return callbacks;
};

var xhr = {};

xhr.get = function (url, data, async) {
    return xhrRequest('GET', url, data, async);
};

xhr.put = function (url, data, async) {
    return xhrRequest('PUT', url, data, async);
};

xhr.post = function (url, data, async) {
    return xhrRequest('POST', url, data, async);
};

xhr.delete = function (url, data, async) {
    return xhrRequest('DELETE', url, data, async);
};

helpers.xhr = xhr;

/*
    https://github.com/daniellmb/MinPubSub
*/
var cache = window.c_ || {}; // check for 'c_' cache for unit testing
var MinPubSub = {};
MinPubSub.publish = function (topic, args) {
    var subs = cache[topic];
    var len = subs ? subs.length : 0;

    while (len--) {
        subs[len].apply(window, args || []);
    }
};

MinPubSub.subscribe = function (topic, callback) {
    if (!cache[topic]) {
        cache[topic] = [];
    }
    cache[topic].push(callback);
    return [topic, callback];
};

MinPubSub.unsubscribe = function (handle, callback) {

    var subs = cache[callback ? handle : handle[0]];
    callback = callback || handle[1];
    var len = subs ? subs.length : 0;

    while (len--) {
        if (subs[len] === callback) {
            subs.splice(len, 1);
        }
    }
};

helpers.MinPubSub = MinPubSub;

var _getElementHref = function (current) {
    if (current) {
        if (current.nodeName.toLowerCase() === 'a') {
            return current.getAttribute('href');
        } else if (current.nodeName.toLowerCase() === 'body') {
            return false;
        } else {
            return _getElementHref(current.parentNode);
        }
    } else {
        return false;
    }
};

helpers.getAbsolutePath = function (href) {
    var link = document.createElement('a');
    link.href = href;
    return (link.protocol + '//' + link.host + link.pathname + link.search + link.hash);
};

helpers.inIframe = function () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
};

helpers.createConsentClickListener = function () {
    if (helpers.inIframe()) {
        return;
    }
    window.onclick = function (e) {
        e = e || window.event;
        var t = e.target || e.srcElement;

        // Listen to all links except for the OPT OUT link (do not-redirect, go to opt-out url)
        if (t.id === configGeneral.htmlIDs.consentLinkId) {
            return true;
        }

        var possibleHref = _getElementHref(t);
        if (possibleHref) {
            possibleHref = helpers.getAbsolutePath(possibleHref);
            window.location = configGeneral.urls.digitrustRedirect + '?redirect=' + encodeURIComponent(possibleHref);
            return false;
        }
    };
};

helpers.createPageViewClickListener = function () {
    window.onclick = function (e) {
        e = e || window.event;
        var t = e.target || e.srcElement;

        var possibleHref = _getElementHref(t);
        if (possibleHref) {
            helpers.MinPubSub.publish('DigiTrust.pubsub.app.event.pageView', []);
        }
    };
};

helpers.generateUserId = function () {
    var buffer = new Uint8Array(8);
    var _getCryptoLib = function () {
        var cryptoLib;
        if (typeof crypto !== 'undefined') {
            cryptoLib = crypto;
        } else if (typeof msCrypto !== 'undefined') {
            cryptoLib = msCrypto;
        } else {
            throw new Error('[DigiTrust] Browser missing Web Cryptography library');
        }
        return cryptoLib;
    };

    _getCryptoLib().getRandomValues(buffer);
    return helpers.arrayBufferToBase64String(buffer);
};

helpers.isEmpty = function (obj) {

    // null and undefined are "empty"
    if (obj === null || typeof obj === 'undefined') {
        return true;
    }

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0) {
        return false;
    }
    if (obj.length === 0) {
        return true;
    }

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) {
            return false;
        }
    }

    return true;
};

helpers.getObjectByKeyFromArray = function (items, key, value) {
    for (var i = 0; i < items.length; i++) {
        if (items[i][key] === value) {
            return items[i];
        }
    }
    return null;
};

helpers.getObjectByKeyFromObject = function (items, key, value) {
    for (var itemKey in items) {
        if (items[itemKey][key] === value) {
            return items[itemKey];
        }
    }
    return null;
};

helpers.getUrlParameterByName = function (name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);

    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

helpers.isIE = function  () {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') !== -1) ? parseInt(myNav.split('msie')[1]) : false;
};

helpers.isSafari = function () {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') !== -1) {
        if (ua.indexOf('chrome') > -1) {
            return false;
        } else {
            return true;
        }
    }
    return false;
};

helpers.getRollbar = function (callback) {
    var rollbarConfig = {
        accessToken: 'c8b18213935a43c59f7b18dca677fd65',
        captureUncaught: true,
        payload: {
            environment: env,
        }
    };

    var Rollbar = require(1).init(rollbarConfig);
    return callback(Rollbar);
};

helpers.isValidJSON = function (str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};

helpers.ab2str = function (buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
};

helpers.str2ab = function (str) {
    var buf = new ArrayBuffer(str.length);
    var bufView = new Uint8Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
};

helpers.arrayBufferToBase64String = function (arrayBuffer) {
    var byteArray = new Uint8Array(arrayBuffer);
    var byteString = '';
    for (var i = 0; i < byteArray.byteLength; i++) {
        byteString += String.fromCharCode(byteArray[i]);
    }
    return btoa(byteString);
};

helpers.base64StringToArrayBuffer = function (base64) {
    var binary_string =  atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
};

helpers.asciiToUint8Array = function (str) {
    var chars = [];
    for (var i = 0; i < str.length; ++i) {
        chars.push(str.charCodeAt(i));
    }
    return new Uint8Array(chars);
};

helpers.getBrowserCrypto = function () {
    // WebKit crypto subtle
    if (window.crypto && !window.crypto.subtle && window.crypto.webkitSubtle) {
        window.crypto.subtle = window.crypto.webkitSubtle;
    }
    return window.crypto;
};

module.exports = helpers;

},{"1":1,"3":3,"5":5}]},{},[2]);
