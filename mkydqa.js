/*
漫客阅读

https:\/\/my.klzdp.com\/* url script-response-body  https://raw.githubusercontent.com/cefv12/cefv/111/mkydqa.js

[mitm]
 
hostname = my.klzdp.com
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
