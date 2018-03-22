##Comment
- 在1.0版本的基础上添加部分需求

1、页面加载完成自动聚焦到评论输入框。

2、把用户名持久化，存放到浏览器的 LocalStorage 中。页面加载时会把用户名加载出来显示到输入框，用户就不需要重新输入用户名了。

3、把已经发布的评论持久化，存放到浏览器的 LocalStorage 中。页面加载时会把已经保存的评论加载出来，显示到页面的评论列表上。

4、评论显示发布日期，如“1 秒前”，”30 分钟前”，并且会每隔 5 秒更新发布日期。

5、评论可以被删除。

6、类似 Markdown 的行内代码块显示功能，用户输入的用 `` 包含起来的内容都会被处理成用 <code> 元素包含。例如输入 `console.log` 就会处理成 <code>console.log</code> 再显示到页面上。


---------------
## 问题详解
1、用户名持久化：将用户名保存在localStory中



git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/wwml725/Comment.git
git push -u origin master