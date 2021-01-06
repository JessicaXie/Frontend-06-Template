学习笔记
三代排版技术
第一代排版技术-古典排版
关键技术

position
display
float
带二代排版技术
关键技术

flex[[CSS/Flex]]
第三代
关键技术

grid
Flex排版处理思路
默认关键参数处理

flex-direction
flex-wrap
align-items
justify-content
justify-items
统一处理逻辑，在不同的参数下一致的处理流程

收集元素进行(hang)

flex-wrap
no-wrap,同一行
auto，分行
计算主轴

找出所有Flex元素
把主轴方向剩余的尺寸按比例分配给这些元素
若剩余空间为负数，所有的flex元素为0,等比压缩元素
计算副交叉轴

根据每一行中最大元素尺寸计算行高
根据行高flex-align和item-align,确定元素具体位置
绘制准备

依赖一个图形环境
npm/images
绘制在一个viewport上进行
绘制DOM树

递归调用子元素来回执DOM树
忽略一些不需要绘制的节点
实际浏览器中，文字绘制是难点，需要依赖字体库
实际浏览器中，还会对一些图层做compositing

从URL到网页渲染全过程浅析
URL 解析，解析 http 协议、端口、资源地址。

DNS 查询：首先查询本地 host，再访问 DNS 服务器将 域名解析成 ip 地址。

建立 TCP 连接。

服务器收到请求后处理，并且构造响应返回给客户端。

客户端接收 HTTP 报文响应。

渲染页面，最后有可能会四次挥手断开连接，也可能不会而是复用连接。

浏览器接收响应并渲染数据
接收到响应文本 HTML，则开始执行浏览器渲染机制。
不同的浏览器渲染可能有所差异，但是基本按照以下步骤执行：
根据 HTML 解析 DOM 树；

根据 CSS 解析出 CSS 规则树；

结合 DOM 树与 CSS 规则树，生成渲染树；

根据生成的渲染树计算每个节点的信息；

根据节点信息绘制画面展示给用户。

Flex排版处理思路
默认关键参数处理

flex-direction
flex-wrap
align-items
justify-content
justify-items
统一处理逻辑，在不同的参数下一致的处理流程

收集元素进行(hang)

flex-wrap
no-wrap,同一行
auto，分行
计算主轴

找出所有Flex元素
把主轴方向剩余的尺寸按比例分配给这些元素
若剩余空间为负数，所有的flex元素为0,等比压缩元素
计算副交叉轴

根据每一行中最大元素尺寸计算行高
根据行高flex-align和item-align,确定元素具体位置
绘制准备

依赖一个图形环境
npm/images
绘制在一个viewport上进行
绘制DOM树

递归调用子元素来回执DOM树
忽略一些不需要绘制的节点
实际浏览器中，文字绘制是难点，需要依赖字体库
实际浏览器中，还会对一些图层做compositing