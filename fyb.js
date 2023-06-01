/*
飞韵听书
https:\/\/fyts-cloud2.gz.bcebos.com\/cloud\/app\/com.m.lis\/ios\/* url script-response-body  https://raw.githubusercontent.com/cefv12/cefv/111/fyb.js

[mitm]

hostname = fyts-cloud2.gz.bcebos.com
*/
let obj = JSON.parse($response.body);

obj = 
{
  "message" : "YQnb1i4ZMvInyPVs5fl4AZhHAGlXUghz",
  "requestId" : "a1022b34-39f6-4a4c-8df9-877a32765821",
  "code" : "200"
};
$done({body: JSON.stringify(obj)});
