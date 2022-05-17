/*
百度网盘解锁vip，视频倍速播放


https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user url script-response-body https://raw.githubusercontent.com/cefv12/cefv/111/bdwanpan1.js

[mitm]

hostname = pan.baidu.com
*/

let obj = JSON.parse($response.body);
obj = {
    "product_infos": [{
    "product_id": "",
    "start_time": 1650815999,
    "end_time": 3653407999,
    "buy_time": 0,
    "cluster": "vip",
    "detail_cluster": "svip",
    "auto_upgrade_to_svip": 0,
    "product_name": "svip2_nd",
    "status": 0,
    "function_num": 0,
    "buy_description": "",
    "product_description": "",
    "cur_svip_type": "month"
  }, {
    "product_id": "",
    "start_time": 1650815999,
    "end_time": 3653407999,
    "buy_time": 0,
    "cluster": "contentvip",
    "detail_cluster": "contentvip",
    "auto_upgrade_to_svip": 0,
    "product_name": "contentvip_nd",
    "status": 0,
    "function_num": 0,
    "buy_description": "",
    "product_description": ""
  }],
  "currenttime": 1652746284,
  "reminder": {
    "svip": {
      "leftseconds": 661715,
      "nextState": "normal"
    },
    "reminderWithContent": [],
    "advertiseContent": []
  },
  "current_product": {
    "cluster": "vip",
    "detail_cluster": "svip",
    "product_type": "vip2_1m_auto",
    "product_id": "12187135090581539740"
  },
  "level_info": {
    "current_value": 1660,
    "current_level": 2,
    "history_value": 1660,
    "history_level": 2,
    "last_manual_collection_time": 0
  },
  "previous_product": [],
  "current_privilege_card": [],
  "last_privilege_card": [],
  "current_product_v2": {
    "cluster": "vip",
    "detail_cluster": "svip",
    "product_type": "vip2_1m_auto",
    "product_id": "12187135090581539740"
  },
  "previous_product_v2": {},
  "current_privilege_card_v2": {},
  "last_privilege_card_v2": {},
  "user_tag": "{\"has_buy_record\":1,\"has_buy_vip_svip_record\":1,\"last_buy_record_creat_time\":1650798013,\"is_vip\":0,\"is_svip\":1,\"last_vip_type\":1,\"last_vip_svip_end_time\":3653407999,\"is_svip_sign\":1,\"notice_user_type\":0,\"notice_user_status\":3}",
  "request_id": 8926746124801195556
};
$done({body: JSON.stringify(obj)});
