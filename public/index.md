# Markdown 测试文档

这是一个演示 Markdown 常用格式的文档，用于测试转换工具与样式表现。

> ⚠️ 注意：转换时，public 目录下 `test.md` 会被忽略。

---

## 目录

- [标题格式](#标题格式)
- [文本格式](#文本格式)
- [列表](#列表)
- [链接和图片](#链接和图片)
- [代码块](#代码块)
- [表格](#表格)
- [引用](#引用)
- [数学公式](#数学公式)
- [任务列表](#任务列表)
- [Emoji](#emoji)
- [HTML标签](#html标签)
- [分隔线](#分隔线)
- [徽章](#徽章)

---

## 标题格式

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

---

## 文本格式

这是普通文本。

**这是粗体文本**

*这是斜体文本*

***这是粗斜体文本***

~~这是删除线文本~~

<u>这是下划线文本</u>

这是 `行内代码` 示例。

这是 <mark>高亮文本</mark>（部分渲染器支持）。

这是上标：X<sup>2</sup>  
这是下标：H<sub>2</sub>O

---

## 列表

### 无序列表

- 项目 1
- 项目 2
    - 嵌套项目 2.1
    - 嵌套项目 2.2
- 项目 3

### 有序列表

1. 第一项
2. 第二项
    1. 嵌套 2.1
    2. 嵌套 2.2
3. 第三项

### 混合列表

1. 第一步
    - 子步骤 A
    - 子步骤 B
2. 第二步
    - 子步骤 C
        1. 详细步骤 C.1
        2. 详细步骤 C.2

---

## 链接和图片

### 链接

[普通链接](https://www.example.com)

[带标题的链接](https://www.example.com "鼠标悬停显示标题")

<https://www.example.com>

### 图片

![示例图片](https://picsum.photos/300/200 "随机图片")

### 引用链接

[Google][1] 和 [GitHub][2] 是常用网站。

[1]: https://www.google.com
[2]: https://www.github.com

---

## 代码块

### 行内代码

使用 `console.log('Hello World')` 输出信息。

### 多语言代码块

#### C++

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
}
````

#### Python

```python
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)
```

#### TypeScript

```ts
console.log("这是一个 TypeScript 示例");
```

---

## 表格

| 姓名    | 年龄 | 城市 |
| ----- | -- | -- |
| Alice | 20 | 北京 |
| Bob   | 22 | 上海 |
| Carol | 21 | 深圳 |

---

## 引用

> 这是一个引用块。
>
> 可以多行：
>
> > 这是嵌套引用。

---

## 数学公式

### 行内公式

这是一个积分公式：$\int_{a}^{b} f(x),dx$

### 块级公式

$$
E = mc^2
$$

$$
dp[i] = \max\limits_{0 \le j < i,\ a[j] < a[i]} dp[j] + 1
$$

---

## 任务列表

* [x] 已完成任务
* [ ] 未完成任务
* [ ] 待处理事项


---

## Emoji

😀 😎 🚀 🎉 👍

（部分工具不支持，会显示为文本）

---

## HTML标签

<div style="color: blue;">
这是 HTML 自定义内容
</div>

<span style="background: yellow;">高亮背景</span>

---

## 分隔线

---

---

---

---
## 徽章
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

---
该文档覆盖了 Markdown 常见功能，用于：

* 测试 Markdown → PDF 转换效果
* 检查样式兼容性
