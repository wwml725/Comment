# 评论功能
## 组件划分
因为React.js构建的功能其实是由各个组件组合而成的。

所以拿到一个需求后，我们要做的第一件事就是理解需求、分析需求、划分需求。

组件划分的目的：就是可复用性、可维护性。

CommentApp：评论功能的整体用一个叫 CommentApp 的组件包含起来。CommentApp 包含上部和下部两部分。

CommentInput：上面部分是负责用户输入可操作的输入区域，包括输入评论的用户名、评论内容和发布按钮，这一部分功能划分到一个单独的组件 CommentInput 中。

CommentList：下面部分是评论列表，用一个叫 CommentList 的组件负责列表的展示。

Comment：每个评论列表项由独立的组件 Comment 负责显示，这个组件被 CommentList 所使用。