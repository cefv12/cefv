var obj = JSON.parse($response.body); 
// 可以合并一句带过
obj = 
 {
  "errno" : 0,
  "errmsg" : "",
  "data" : {
    "userInfo" : {
      "autoTitle" : 0,
      "register_ip" : "::ffff:127.0.0.1",
      "autoImg" : 0,
      "id" : 13092,
      "useCount" : 3,
      "last_login_ip" : "::ffff:127.0.0.1",
      "thirdUseTime" : "2020-01-20 00:00:00",
      "vipCreateTime" : "2022-02-18 00:00:00",
      "serverDays" : 1342,
      "dayCount" : 99,
      "nickname" : "淡然一笑",
      "surplusCount" : 4267,
      "freeKillOrder" : 9,
      "key" : "EQ2QSHS7E8R",
      "totalCount" : 6,
      "serverDownloadCount" : 20,
      "updateVersion" : 0,
      "vipDayCount" : 60,
      "thirdDayCount" : 60,
      "auto" : 19,
      "showMsgTime" : "2022-02-18 20:20:26",
      "birthday" : 0,
      "autoStart" : 10,
      "kill" : 10,
      "username" : "淡然一笑",
      "user_level_id" : 1,
      "avatar" : "https://thirdwx.qlogo.cn/mmopen/vi_32/ibIybkJb7vvQnJ7W4O98icS9lNqTHa8qp0FLoVhgX2Ebq9odE5xaTOZczI1NRMnqsxWjEaVd6Gky9GpzgKtJ145g/132",
      "uploadSize" : 1,
      "mobile" : "15959245423",
      "useTime" : "2022-02-18 20:39:26",
      "weixin_openid" : "oH3oh5NF_44zK_ysHokE8CUyz38M",
      "autoPlay" : 1,
      "freeUseTime" : "2022-01-30 00:00:00",
      "last_login_time" : 1,
      "gender" : 1,
      "qiangCount" : 1,
      "createTime" : "2022-01-28 00:09:42",
      "register_time" : 1643299782,
      "uploadTime" : "2022-01-28 01:00:00",
      "thirdCount" : 99,
      "password" : "",
      "MaxUploadSize" : 200,
      "vip" : 1,
      "loginTime" : "2022-01-28 00:09:42"
    }
  }
}

// 有需要全部替换的情况，只需让用户在这里如此操作即可

$done({body:JSON.stringify(obj)});
// 也一句带过
