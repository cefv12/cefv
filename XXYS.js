var obj = JSON.parse($response.body); 
// 可以合并一句带过
obj = {"retcode":0,"errmsg":"","data":{"user":{"uid":"10357243","uniqkey":"LL1JOV","username":"破解","nickname":"","mobi":"86.15139456151","email":"~1305133807","sysgid":"5","gid":"1","gids":null,"gicon":"V5","isvip":1,"regtime":"2022-01-19 13:43:38","gender":"0","avatar":"","avatar_url":"https://img.yuanmifang.com/sysavatar/noavatar.png","newmsg":"1","goldcoin":1,"duetime":"2999-01-22 13:43:38","dueday":"999天后过期"}


// 有需要全部替换的情况，只需让用户在这里如此操作即可

$done({body:JSON.stringify(obj)});
// 也一句带过
