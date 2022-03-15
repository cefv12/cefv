/*
WPS Office 解锁部分功能

***************************
QuantumultX:

[rewrite_local]

[mitm]
hostname = account.wps.cn

***************************

**************************/

var body = JSON.parse($response.body);
var obj = {
  "messageId": "21e4147c524343ccca24f509271bb35f",
  "code": "A00000",
  "message": "成功",
  "data": {
    "vip_info": {
      "autoRenew": "0",
      "level": "6",
      "paidSign": 1,
      "vipType": "1",
      "payType": "0",
      "status": "1",
      "type": "1",
      "surplus": "580",
      "yearExpire": 0,
      "createTime": {
        "t": 1447776086000,
        "date": "2015年11月18日"
      },
      "deadline": {
        "t": 1697385599000,
        "date": "2023年10月15日"
      },
      "longestDeadline": {
        "t": 1697385599000,
        "date": "2023年10月15日"
      },
      "superscript": "http://m.iqiyipic.com/common/lego/20200507/994b2f6a75f04ecea3a1079f5d5d8b33.png",
      "longSuperscript": "http://static-s.iqiyi.com/common/20220301/qiyue2.0/c8/67/c9277107f2f441d6a8e3acc280e3d81a7683229303183720075.png",
      "vipTypeName": "黄金VIP会员",
      "vipTypeGroup": "vip_info"
    }
  }
}


$done({ body: JSON.stringify(obj) });
