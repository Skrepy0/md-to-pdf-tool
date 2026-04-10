# Markdown to PDF 转换工具
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

一个易于使用的 Markdown 到 PDF 转换工具，基于 [md-to-pdf](https://github.com/alanorozco/md-to-pdf) 构建。

## 特性

- 支持批量转换 Markdown 文件为 PDF
- 默认 A4 纸张格式，可自定义边距
- 代码高亮支持（GitHub 风格）
- 支持 MathJax 数学公式渲染
- 调试模式，方便设置样式

## 安装

```bash
# 克隆仓库
git clone https://github.com/Skrepy0/md-to-pdf-tool.git

# 进入项目目录
cd md-to-pdf-tool

# 安装依赖
npm install
```

## 使用

### 快速开始

```bash
# 启动转换（普通模式）
npm run start

# 启动转换（调试模式，不进行转换,仅用于调试和样式表编写）
npm run start:debug

# 监听模式，自动重新编译
npm run start:watch

# 监听模式 + 调试
npm run start:debug:watch
```

### 构建

```bash
# 编译 TypeScript
npm run build

# 监听模式编译
npm run build:watch
```

## 项目结构

```
md-to-pdf-tool/
├── public/              # 存放待转换的 Markdown 文件
│   ├── assets/         # 静态资源（字体、图片等）
│   ├── index.md        # 示例 Markdown 文件
│   └── test.md         # 调试用 Markdown 文件
├── src/
│   ├── style/          # 自定义样式文件
│   │   └── index.css   # 主要样式文件
│   ├── config.ts       # PDF 配置文件
│   ├── index.ts        # 主程序入口
│   └── mathjax-config.js # MathJax 配置
├── output/             # 转换后的 PDF 输出目录
└── package.json        # 项目配置文件
```

## 配置说明

主要配置位于 `src/config.ts`：

## 自定义样式

1. 在 `src/style/` 目录下添加或修改 CSS 文件
2. 程序会自动加载该目录下的所有 CSS 文件
3. 支持自定义字体、颜色、间距等样式

### 默认字体
默认字体的编写可以参照 `src/style/index.css` 中的示例;将字体文件放在`public/assets/`目录下。

## 使用说明

### 一、准备 Markdown 文件

1. 打开项目根目录
2. 进入 `public` 文件夹
3. 将需要转换的 Markdown 文件（`.md`）放入该文件夹
4. 注意：文件名不要命名为 `test.md`（这是调试用的文件）

**示例：**
```
public/
├── index.md       # 可以转换
├── my-doc.md      # 可以转换
└── test.md        # 调试文件，普通模式不会转换
```

### 二、执行转换

#### 普通模式（批量转换）

```bash
npm run start
```

**执行步骤：**
1. 程序会自动扫描 `public` 文件夹中的所有 `.md` 文件
2. 排除 `test.md` 文件
3. 逐个将 Markdown 文件转换为 PDF
4. 转换完成后，PDF 文件保存在 `output` 文件夹中

**输出示例：**
```
output/
├── index.pdf       # 由 index.md 转换而来
└── my-doc.pdf      # 由 my-doc.md 转换而来
```

#### 调试模式

```bash
npm run start:debug
```

**使用场景：**
- 需要调整样式时
- 需要查看转换效果时
- 需要排查问题时

**执行步骤：**
1. 程序只转换 `test.md` 文件
2. 自动打开开发者工具
3. 可以实时查看和调试转换效果

### 三、查看转换结果

1. 转换完成后，打开 `output` 文件夹
2. 找到对应的 PDF 文件
3. PDF 文件名与原 Markdown 文件名相同，只是扩展名不同

**示例：**
- `my-doc.md` → `my-doc.pdf`
- `index.md` → `index.pdf`

### 四、自定义样式（可选）

如果需要自定义 PDF 的样式：

1. 打开 `src/style/index.css` 文件
2. 修改 CSS 样式规则
3. 重新运行转换命令

### 五、修改配置（可选）

如果需要修改 PDF 的基本配置：

1. 打开 `src/config.ts` 文件
2. 修改相应的配置项
3. 重新运行转换命令

**常用配置项：**
- `format`: 纸张格式（默认 A4）
- `margin`: 页边距
- `highlight_style`: 代码高亮样式
- `dest`: 输出路径

## 技术栈

- [md-to-pdf](https://github.com/alanorozco/md-to-pdf) - Markdown 转 PDF 核心库
- [TypeScript](https://www.typescriptlang.org/) - 类型安全的 JavaScript
- [Commander.js](https://github.com/tj/commander.js) - 命令行参数解析
- [MathJax](https://www.mathjax.org/) - 数学公式渲染

>注意 :暂不支持注脚等md格式的转换
