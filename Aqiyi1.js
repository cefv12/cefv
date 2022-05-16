/*
WPS Office 解锁部分功能

****************************
QuantumultX:

[rewrite_local]
^https:\/\/passport\.iqiyi\.com\/apis\/profile\/info* url script-response-body https://raw.githubusercontent.com/cefv12/cefv/111/Aqiyi1.js

[mitm]
hostname = passport.iqiyi.com

**************************/

var body = JSON.parse($response.body);
var obj = {
  "msg" : "SUCCESS",
  "data" : {
    "icon_list" : {
      "s" : "https://img7.iqiyipic.com/passport/20160522/13/48/passport_1232942107_146385936441671_50_50.jpg",
      "l" : "https://img7.iqiyipic.com/passport/20160522/13/48/passport_1232942107_146385936441671_130_130.jpg",
      "m" : "https://img7.iqiyipic.com/passport/20160522/13/48/passport_1232942107_146385936441671_70_70.jpg"
    },
    "reginfo" : {
      "agenttype" : null,
      "regip" : null,
      "ptid" : null,
      "region" : null,
      "province" : null,
      "city" : null
    },
    "vip_list" : [
      {
        "longSuperscript" : null,
        "superscript" : "http://pic3.iqiyipic.com/common/20190610/fun_notVip.png",
        "vipTypeGroup" : "fun_vip",
        "longestDeadline" : {
          "t" : 1553702399000
        },
        "autoRenew" : "0",
        "yearExpire" : 1,
        "paidSign" : 0,
        "surplus" : "",
        "type" : "0",
        "level" : null,
        "payType" : "0",
        "vipTypeName" : "Fun会员",
        "vipType" : "13",
        "status" : "3",
        "deadline" : {
          "t" : 1553702399000
        }
      },
      {
        "longSuperscript" : "http://static-s.iqiyi.com/common/20220301/qiyue2.0/c8/67/c9277107f2f441d6a8e3acc280e3d81a7683229303183720075.png",
        "superscript" : "http://static-s.iqiyi.com/common/20220301/qiyue2.0/38/da/145f64f1ac474825ba0aac65fa4356ee5368696793757855316.png",
        "vipTypeGroup" : "vip_info",
        "longestDeadline" : {
          "t" : 16918508799000
        },
        "autoRenew" : "0",
        "yearExpire" : 0,
        "paidSign" : 1,
        "surplus" : "531",
        "type" : "1",
        "level" : "6",
        "payType" : "0",
        "vipTypeName" : "黄金VIP会员",
        "vipType" : "1",
        "status" : "1",
        "deadline" : {
          "t" : 16918508799000
        }
      },
      {
        "longSuperscript" : null,
        "superscript" : null,
        "vipTypeGroup" : "sport_vip",
        "longestDeadline" : {
          "t" : 16918508799000
        },
        "autoRenew" : "0",
        "yearExpire" : 1,
        "paidSign" : 1,
        "surplus" : "",
        "type" : "1",
        "level" : 6,
        "payType" : "0",
        "vipTypeName" : "体育会员",
        "vipType" : "14",
        "status" : "3",
        "deadline" : {
          "t" : 16918508799000
        }
      }
    ],
    "userinfo" : {
      "account_type" : 11,
      "birthday" : 753897600,
      "userReachable" : 1,
      "province" : null,
      "status" : null,
      "nickname" : "谁能真淡然",
      "icon" : "https://img7.iqiyipic.com/passport/20160522/13/48/passport_1232942107_146385936441671_130_130.jpg",
      "uid_str" : "1232942107",
      "industry" : null,
      "city" : null,
      "self_intro" : null,
      "reg_ip" : "115.172.*.*",
      "join_time" : "1447776004",
      "activated" : 1,
      "gender" : 1,
      "area_code" : "86",
      "personal_url" : null,
      "uid" : 1232942107,
      "phone" : "188****7091",
      "email" : "",
      "username" : "188****7091"
    },
    "insecure_account" : 0,
    "encrypt_id" : "ACpXRS82Ck_afuumr49RLAw",
    "verify_status" : 1,
    "icon_pendant" : null,
    "level_info" : null,
    "auditing" : [

    ],
    "update_items" : {
      "CITY" : "false",
      "NICK" : "true",
      "GENDER" : "true",
      "SELF_INTRO" : "false",
      "BIRTHDAY" : "true",
      "PROVINCE" : "false",
      "ICON" : "true"
    }
  },
  "code" : "A00000"
};

$done({ body: JSON.stringify(obj) });
