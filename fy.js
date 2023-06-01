/*
飞韵听书

https:\/\/fyts-cloud2.gz.bcebos.com\/cloud\/app\/com.m.lis\/appTrans\/* url script-response-body  https://raw.githubusercontent.com/cefv12/cefv/111/fy.js

[mitm]
 
hostname = fyts-cloud2.gz.bcebos.com
*/

let obj = JSON.parse($response.body);
obj = 
{
  "status" : 1,
  "errorCode" : 0,
  "safetyData" : "b+6ZPAD+hAflQ0TNXdgpX77DA6GeXlwHIgK56U2KJhj30OqBsV91s1GQ6H44VTo7nVxZGYDevgZsGPzPkEz5dsnG9sXj+WT9cc6uIGcowjrhhNQdUgnzarlbRdzOdlUv1d/rLH1tktmQA6vm6BJRaBQ0h5Qp9OKPkpKJ8cMQITAHRXbGOmXT7w59GdpL4rxcwhp5A0aTVSIay9J1Bcvco1+OVSH6a67m3+Gwrt7TmCpMJMjq+uc/LkYaw6mBHKA/7T9uvTj65Soof0QRj1OfS0C2QGBIx7rIOI6lzT4GCijavMTV37Dz9Q==",
  "statisticCache" : false,
  "time" : "2023-05-24 18:57:44",
  "safety" : {
    "type" : "14239",
    "token" : [
      "CCDEPGAM"
    ]
  }
};
$done({body: JSON.stringify(obj)});
