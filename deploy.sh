# 打包文件
npm run build

# 切换到cuijiahuan.github.io文件夹
cd /Users/cuijiahuan/Desktop/cuijiahuan.github.io

# 删除cuijiahuan.github.io的旧数据
# 不使用rm -rf的原因是隐藏文件和README.md文件需要保留
rm -rf assets category img tag timeline views
rm -f 404.html index.html banner.jpg head.jpg head.png favicon.ico

# 将打包的public文件夹拷贝到cuijiahuan.github.io文件夹中
mv /Users/cuijiahuan/Desktop/cuijiahuan-blog/public/* /Users/cuijiahuan/Desktop/cuijiahuan.github.io

# 进行发布
git add .
git commit -m '更新发布'
git push

# 保存cuijiahuan-blog下的修改
cd cd /Users/cuijiahuan/Desktop/cuijiahuan-blog

# 进行发布
git add .
git commit -m '保存更新'
git push