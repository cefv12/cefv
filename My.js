
/*



苹果商店下载: 漫次元

修改内容：解锁永久会员 

注意事项：每次解锁需启动圈叉


本地重写

^https:\/\/app\.iheyman\.xyz\/*   url script-response-body https://raw.githubusercontent.com/cefv12/cefv/111/My.js



主机名MITM

app.iheyman.xyz

*/



let body = $response.body
console.log(body)
try {
    let obj = JSON.parse(body)
    if (obj.code == 0 && obj.data) {
        obj.data.vip = 1;
        obj.data.vipType = 1;
        obj.data.vipEndDate = "22220222"
        obj.data.sendCoin = "9999"
        obj.data.ctime = "1609837098"
        obj.data.mtime = "1612147969"
        body = JSON.stringify(obj)
    }
}
$done(body)
