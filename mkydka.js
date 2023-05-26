/*
漫客阅读

https:\/\/c-catalog.klzdp.com\/* url script-response-body  https://raw.githubusercontent.com/cefv12/cefv/111/mkydka.js

[mitm]
 
hostname = c-catalog.klzdp.com
*/

let obj = JSON.parse($response.body);
obj = 
{
  "data" : {
    "ver" : 1,
    "content" : "RDNHNkJRRjlWRDg5N0JRVsgOjnsD7iP564rtuMN3Xtx0P1XSY9iOGJxUMiHS6g5oTjdHSlUyVkJZV0pOVlFDRA=="
  },
  "code" : 1
};
$done({body: JSON.stringify(obj)});
