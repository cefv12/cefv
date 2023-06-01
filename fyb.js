/*
飞韵听书
https:\/\/fyts-cloud2.gz.bcebos.com\/cloud\/app\/com.m.lis\/ios|serverinfo*\/* url script-response-body  https://raw.githubusercontent.com/cefv12/cefv/111/fyb.js

[mitm]

hostname = fyts-cloud2.gz.bcebos.com
*/
let obj = JSON.parse($response.body);

obj = 
{
  "message" : "SUCCESS",
  "imagehost" : "https://imgapixs.pysmei.com",
    "souhost" : "",
    "showaddays" : 0,
    "new_rep_host" : "",
    "yyconf" : [
      {
        "yyappid" : "24414049",
        "yyapikey" : "YTddecEbXNFsFiL4wn1GinDS",
        "yyskey" : "YQnb1i4ZMvInyPVs5fl4AZhHAGlXUghz"
      }
    ],
    "dirhost" : "https://infosxs.pysmei.com",
    "preload_time" : 0,
    "xzhost" : ""
  },
  "code" : 0
};
$done({body: JSON.stringify(obj)});
