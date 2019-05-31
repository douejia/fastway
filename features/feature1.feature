# language: zh-CN
功能: <剧本名称>
<剧本描述>

  场景: 拖拽操作
    假如浏览到搜索网站 "https://account.aliyun.com/register/register.htm"
    当拖拽验证码块至最右边

  场景: 处理alert
    假如浏览到搜索网站 "file:///C:/Users/xmf/Desktop/fastway/features/iframe.html"
    当点击按钮弹出alert窗口
    那么点击确定按钮

  场景: 多个窗口处理
    假如浏览到搜索网站 "file:///C:/Users/xmf/Desktop/fastway/features/iframe.html"
    当点击baidu
    那么打开新窗口,切换窗口
    * 输入"selenium"点击搜索

  场景: 日报
    假如用户登录到系统
    当在日报填报页面