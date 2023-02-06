/*
#微信小程序搜: 

使用方法:

1.请先登录后再开启规则进入，如爽豆没更改请右上角重新进入

2.先点一次签到，领取爽豆。
再开启规则进入观看

功能:解锁购买，完美观看

免责声明
本公众号所发布的一切破解补丁注册机和注册信息及软件的解密分析文章仅限用于学习和研究目的；不得将上述内容用于商业或者非法用途，否则，一切后果请用户自负。信息来自网络，版权争议与本站无关。您必须在下载后的24个小时之内，从您的电脑和手机中彻底删除上述内容。如果您喜欢该程序，请支持正版软件，购买使用，得到更好的正版服务。如有侵权请邮件（cefv12@gmail.com）与我们联系处理。
不保证资源兼容所有手机，发布的资源小编亲测正常使用，
如果您不能使用，请理性对待！

https:\/\/api\.mpyouzi\.com\/api\/ct\/video\/* script-response-body https://raw.githubusercontent.com/cefv12/cefv/111/hxdj.js

[mitm]

hostname = api.mpyouzi.com

*/

let obj = JSON.parse($response.body);
obj.date.code="0",
obj.date.msg="操作成功",
obj.date.date="true",
};
$done({body: JSON.stringify(obj)});
