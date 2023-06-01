/*

飞韵听书

https:\/\/fyts-cloud2.gz.bcebos.com\/cloud\/app\/com.m.lis\/ios\/* url script-response-body  https://raw.githubusercontent.com/cefv12/cefv/111/fy.js

[mitm]

 

hostname = fyts-cloud2.gz.bcebos.com

*/

let obj = JSON.parse($response.body);

obj = 

{

  "message" : "The specified key does not exist.",

  "requestId" : "03ac0967-7113-448c-885f-51e86886c757",

  "code" : "NoSuchKey"

};

$done({body: JSON.stringify(obj)});
