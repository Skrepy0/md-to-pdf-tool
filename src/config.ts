import type { PdfConfig } from "md-to-pdf/dist/lib/config"

export const config: Partial<PdfConfig> = {
  // 样式表配置：空数组表示自动读取 style 目录下的所有 CSS 文件
  stylesheet: [], // 自动读取 style 中的 CSS 文件

  // 输出路径配置：使用 <--file_name--> 占位符，代码会自动将其替换为原文件名
  dest: "../output/<--file_name-->", // 代码自动替换 <--file_name-->，与原文件名字相同

  // 指定 body 元素的 CSS 类名，用于应用 Markdown 样式
  body_class: ["markdown-body"],

  // 代码高亮样式：使用 GitHub 风格的代码高亮
  highlight_style: "github",

  // PDF 生成选项配置
  pdf_options: {
    // 纸张格式：A4 纸
    format: "A4",

    // 页边距设置：上下左右各 20mm
    margin: { top: "20mm", right: "20mm", bottom: "20mm", left: "20mm" },

    // 是否打印背景：设置为 true 表示保留背景色和背景图
    printBackground: true,
  },

  // 需要加载的脚本配置
  script: [
    // 本地 MathJax 配置脚本
    {
      path: "./src/mathjax-config.js", // MathJax 配置文件路径
    },
    // 远程 MathJax 库
    {
      url: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js", // MathJax CDN 地址
    },
  ],
}
