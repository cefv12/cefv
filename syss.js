var obj = JSON.parse($response.body); 
// 可以合并一句带过
obj = 

{
  "errno": 0,
  "errmsg": "",
  "data": {
    "title": "",
    "cover": "",
    "video": "",
    "mp4Url": ""
    "type": 1,
    "me": 0,
    "minCoverUrl": "",
    "surplusCount": 4264
  }
}

// 有需要全部替换的情况，只需让用户在这里如此操作即可

$done({body:JSON.stringify(obj)});
// 也一句带过
