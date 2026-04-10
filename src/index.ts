import fs from 'fs'
import path from 'path'
import chalk from "chalk"
import {Command} from 'commander'
import {fileURLToPath} from 'url'
import {mdToPdf} from 'md-to-pdf'
import {dirname} from 'node:path'
import {config} from './config.ts'

const program = new Command()
program.name('mdToPdfTool')
  .description("基于md-to-pdf的格式转换工具")
  .option("-d, --debug", "调试模式")
program.parse(process.argv)
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const debug = program.opts().debug
const styleDir = path.join(__dirname, './style')
let styleSheets: string[] = []

try {
  styleSheets = fs.readdirSync(styleDir).map(file => path.join(styleDir, file))
  console.log(chalk.rgb(199, 146, 234)('样式文件:', styleSheets))
} catch (err) {
  console.error(chalk.red('读取样式目录失败:', err))
}

async function convertAllMarkdown() {
  const newConfig = {...config}
  newConfig.stylesheet = styleSheets
  const inputDir = path.join(__dirname, "../public")
  if (debug) {
    const inputPath = path.join(inputDir, "./test.md")
    console.log(`\n📄 Debug: test.md`)
    try {
      newConfig.devtools = true
      const pdf = await mdToPdf({path: inputPath}, newConfig)
    } catch (error) {
      console.error(chalk.red(`Error:`), error)
    }
  } else {
    const files = await fs.promises.readdir(inputDir)
    const mdFiles = files.filter(file => file.endsWith('.md')&&file!=="test.md")
    if (mdFiles.length === 0) {
      console.warn(chalk.rgb(255, 203, 107)(`没有找到 Markdown 文件`))
      return
    }

    console.log(chalk.green(`找到 ${mdFiles.length} 个 Markdown 文件:`, mdFiles))

    for (const file of mdFiles) {
      const outputFileName = file.replace('.md', '.pdf')
      let outputPath = newConfig.dest?.replace("<--file_name-->", outputFileName)
      newConfig.dest = path.join(__dirname, outputPath || `../output/${outputFileName}`)
      const inputPath = path.join(inputDir, file)
      console.log(`\n📄 转换: ${file}`)
      console.log(`   输入: ${inputPath}`)
      console.log(`   输出: ${newConfig.dest}`)
      try {
        const pdf = await mdToPdf({path: inputPath}, newConfig)
        if (pdf) {
          console.log(`✅ 成功: ${newConfig.dest}`)
        } else {
          console.log(chalk.red(`❌ 失败: ${file}`))
        }
      } catch (error) {
        console.error(chalk.red(`❌ 错误: ${file}`, error))
      }
    }
  }
}

convertAllMarkdown().catch(console.error)