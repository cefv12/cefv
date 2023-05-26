/*
漫客阅读vip

https:\/\/c-catalog.klzdp.com\/app\/*  url script-response-body https://raw.githubusercontent.com/cefv12/cefv/111/mkydq3.js

[mitm]
hostname = c-catalog.klzdp.com
*/

let obj = JSON.parse($response.body);
obj = obj = 
{
  "data" : {
    "ver" : 1,
    "content" : "RDNHNkJRRjlWRDg5N0JRVsgOjnsD7iP564rtuMN3Xtx0P1XSY9iOGJxUMiHS6g5oTjdHSlUyVkJZV0pOVlFDRA=="
  },
  "code" : 1
};

$done({body: JSON.stringify(obj)});
