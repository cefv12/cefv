var obj = JSON.parse($response.body); 
// 可以合并一句带过
obj = {"errno":0,"errmsg":"","data":{"userInfo":{"id":13092,"key":"EQ2QSHS7E8R","username":"淡然一笑","password":"","gender":1,"birthday":0,"register_time":1643299782,"last_login_time":0,"last_login_ip":"::ffff:127.0.0.1","user_level_id":0,"nickname":"淡然一笑","mobile":"15959245423","register_ip":"::ffff:127.0.0.1","avatar":"https://thirdwx.qlogo.cn/mmopen/vi_32/ibIybkJb7vvQnJ7W4O98icS9lNqTHa8qp0FLoVhgX2Ebq9odE5xaTOZczI1NRMnqsxWjEaVd6Gky9GpzgKtJ145g/132","weixin_openid":"oH3oh5NF_44zK_ysHokE8CUyz38M","surplusCount":4314,"auto":0,"autoStart":0,"autoTitle":0,"autoImg":0,"autoPlay":1,"useTime":"2022-02-19 00:26:57","thirdUseTime":"2020-01-01 00:00:00","dayCount":993,"thirdCount":96,"thirdDayCount":93,"serverDownloadCount":20,"totalCount":9,"qiangCount":0,"vip":1,"useCount":3,"kill":0,"freeKillOrder":0,"freeUseTime":"2030-10-10 00:00:00","uploadSize":24,"MaxUploadSize":200,"updateVersion":1,"vipCreateTime":"2222-02-02 00:00:00","createTime":"2022-01-28 00:09:42","loginTime":"2022-01-28 00:09:42","uploadTime":"2022-02-19 01:43:59","showMsgTime":"2022-02-19 00:28:52","vipDayCount":0,"serverDays":1343}}}



// 有需要全部替换的情况，只需让用户在这里如此操作即可

$done({body:JSON.stringify(obj)});
// 也一句带过
