/**
漫客阅读
https:\/\/conf.klzdp.com\/v4\/source\/site.html    url script-response-body  https://raw.githubusercontent.com/cefv12/cefv/111/mkydq1.js
[mitm]

hostname = conf.klzdp.com
*/

let obj = JSON.parse($response.body);
obj = 
{
  "data" : {
    "ver" : 1,
    "content" : "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"
  },
  "code" : 1
};
$done({body: JSON.stringify(obj)});
