"use strict";exports.handler=function(t,a,e){var s=t.Records[0].cf.request,i=s.headers,n=new Buffer("".concat("${user}",":").concat("${password}")).toString("base64"),o="Basic ".concat(n);if(void 0===i.authorization||i.authorization[0].value!=o){e(null,{status:"401",statusDescription:"Unauthorized",body:"Unauthorized",headers:{"www-authenticate":[{key:"WWW-Authenticate",value:"Basic"}]}})}e(null,s)};