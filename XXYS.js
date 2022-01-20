var obj = JSON.parse($response.body); 
// 可以合并一句带过
obj = {
    "uinfo" : {
      "curr_group" : {
        "minup" : "20",
        "gicon" : "V5",
        "gid" : "5",
        "gname" : "尊贵VIP"
      },
      "next_group" : {
        "minup" : "65535",
        "gicon" : "",
        "gid" : "6",
        "gname" : "禁止发言"
      },
      "next_upgrade_need" : 65535,
      "down_daily_remainders" : 100,
      "play_daily_remainders" : 999,
      "goldcoin" : "1"
    },
    "reqplay_addnum" : "0",
    "reqdown_addnum" : "0",
    "user" : {
      "duetime" : "9999-01-22 13:43:38",
      "sysgid" : "5",
      "uid" : "10357243",
      "uniqkey" : "LL1JOV",
      "gids" : null,
      "avatar_url" : "https://img.yuanmifang.com/sysavatar/noavatar.png",
      "newmsg" : "1",
      "gicon" : "V5",
      "gid" : "1",
      "avatar" : "",
      "dueday" : "",
      "mobi" : "86.18805067091",
      "username" : "~小小影迷-LL1JOV",
      "goldcoin" : 1,
      "regtime" : "2022-01-19 13:43:38",
      "nickname" : "",
      "email" : "~1305133807",
      "isvip" : 1,
      "gender" : "0"
    }
}  

// 有需要全部替换的情况，只需让用户在这里如此操作即可

$done({body:JSON.stringify(obj)});
// 也一句带过
