## blog发布流程
### 打包
在 `cuijiahuan-blog` 项目中，切换到 `theme-reco` 分支，编辑完内容之后，命令行运行 `npm run build` 命令，得到 `build` 文件夹，复制里面的所有内容。
### 发布
打开 `cuijiahuan.github.io` 项目，将复制的内容粘贴进去，依次运行以下命令
```
1. git add .
2. git commit -m '输入更改的内容'
3. git push
```

发布完成。
