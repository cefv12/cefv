/*
解锁vip
https:\/\/mobile-ios-wallpaper-api\.zhhainiao.com\/v1\/user\/info url script-response-body https://raw.githubusercontent.com/cefv12/cefv/111/yqbz.js
[mitm]
hostname = mobile-ios-wallpaper-api.zhhainiao.com
*/

let obj = JSON.parse($response.body);
obj = {
  "user_info" : {
    "mobile_like_static_cnt" : 1,
    "works_mobile_live_cnt" : 1,
    "following_count" : 1,
    "vip_type" : 1,
    "nickname" : "188******91",
    "wx_openid" : "",
    "works_mobile_download_cnt" : 1,
    "works_mobile_like_cnt" : 1,
    "mobile_like_cnt" : 1,
    "user_desc" : "",
    "like_wp_cnt" : 1,
    "buy_wp_cnt" : 1,
    "mobile_static_buy_wp_cnt" : 1,
    "follower_count" : 1,
    "works_scan_cnt" : 1,
    "like_static_wp_cnt" : 1,
    "mobile_buy_wp_cnt" : 1,
    "static_buy_wp_cnt" : 1,
    "works_mobile_cnt" : 1,
    "uid" : 39980759,
    "works_mobile_static_cnt" : 1,
    "user_type" : 1,
    "is_real_name_auth" : 1,
    "works_live_cnt" : 1,
    "works_mobile_scan_cnt" : 1,
    "avatar" : "http://newvip-cdn.zhhainiao.com/public/avatar/avatar2@2x.jpg",
    "works_like_cnt" : 1,
    "works_static_cnt" : 1,
    "contract_status" : 1,
    "contract_user_type" : 1,
    "works_cnt" : 1,
    "works_download_cnt" : 1
  },
  "platforms" : [
    {
      "last_time" : 1653118358,
      "first_time" : 1753119025,
      "refer" : "",
      "frm" : "",
      "platform" : "ios"
    }
  ],
  "resp_common" : {
    "ret" : 1,
    "msg" : "ok",
    "request_id" : "62889c48-78773e6e"
  }
};

$done({body: JSON.stringify(obj)});
