/*
百度网盘解锁vip，视频倍速播放


https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user\/info* url script-response-body https://raw.githubusercontent.com/cefv12/cefv/111/bdwanpan2.js

[mitm]

hostname = pan.baidu.com
*/

let obj = JSON.parse($response.body);
obj = {
  "error_code": 0,
  "error_msg": "success",
  "user_info": {
    "loginstate": 1,
    "username": "wwj96625",
    "uk": 1102987178209,
    "is_vip": 1,
    "is_svip": 1,
    "is_first_charge": 0,
    "photo": "https:\/\/ss0.bdstatic.com\/7Ls0a8Sm1A5BphGlnYG\/sys\/portrait\/item\/netdisk.1.ea8e0b3f.DSkvkJzM_uZY9K6RPHkk-g.jpg",
    "mobileModel": "iphone",
    "vipsid": 0,
    "isAutoRenew": 1,
    "phone": "198*****225",
    "is_first_charge_svip": 0,
    "assets_get": 0,
    "show_varyprice": 0,
    "is_plus_buy": 1,
    "plus_buy_hit": 0,
    "expid": "",
    "privilegeCardAutoRenew": {
      "privilegecard_work": 0,
      "privilegecard_life": 0,
      "privilegecard_audio_visual": 0
    }
  },
  "request_id": 8927057916951553371
};
$done({body: JSON.stringify(obj)});
