/*
百度网盘解锁vip，视频倍速播放


https:\/\/api-drive\.mypikpak\.com\/vip\/v1\/order\/* url script-response-body https://raw.githubusercontent.com/cefv12/cefv/111/ppwanpan.js

[mitm]

hostname = api-drive.mypikpak.com
*/

let obj = JSON.parse($response.body);
obj = 
{
  "add_days": 9999,
  "code": "",
  "data": {
    "expire": "2222-05-26T00:28:13+08:00",
    "status": "ok",
    "type": "platinum",
    "user_id": "YopkhhioBPkuITsF"
  },
  "free_days": 0,
  "invited_days": 0,
  "result": "ACCEPTED",
  "updated": true
};
$done({body: JSON.stringify(obj)});
