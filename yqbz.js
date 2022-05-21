/*
解锁vip
https:\/\/wpvip-ios\.duba\.net\/api\/sdk\/user/userInfo url script-response-body https://raw.githubusercontent.com/cefv12/cefv/111/yqbz.js
[mitm]
hostname = wpvip-ios.duba.net
*/

let obj = JSON.parse($response.body);
obj = {
  "data" : {
    "user_info" : {
      "education" : 0,
      "birthday" : "",
      "current_time" : 1653119025,
      "vip_type" : "1",
      "nickname" : "188******91",
      "register_frm" : 1,
      "last_vip_expire_time" : 1753119025,
      "login_frm" : 1,
      "is_continuous" : "1",
      "bind_info" : {
        "open_id" : "",
        "token" : "",
        "has_server_id" : true
      },
      "latest_order_type" : "1753119025",
      "sign" : "",
      "gender" : 0,
      "profession" : 1,
      "email" : "",
      "vip_ex_date" : 1953119025,
      "mobile" : "1753119025",
      "continuous_code" : "1",
      "latest_order_id" : "",
      "open_id" : "1527179947654909952",
      "avatar" : "http://newvip-cdn.zhhainiao.com/public/avatar/avatar2@2x.jpg",
      "vip_sub_ex_date" : 1753119025,
      "vip_sub_type" : "1",
      "address" : "",
      "is_tourist" : true
    },
    "permission_info" : 1753119025,
    "permission_code" : "1753119025",
    "permission_list" : "1753119025",
    "permission_code_status" : 1
  },
  "resp_common" : {
    "ret" : 1,
    "msg" : "ok",
    "request_id" : "62889831-a9fcd04"
  }
};

$done({body: JSON.stringify(obj)});
