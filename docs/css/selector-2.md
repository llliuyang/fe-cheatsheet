---
title: 选择器明晰（续）
pageClass: selector-2
---

# {{$frontmatter.title}}

在上一章节中，我们了解了 `元素选择器`、`关系选择器` 和 `属性选择器`，本章节我们继续选择器的另两大类： `伪类选择器` 和 `伪元素选择器`。

## 伪类选择器

> 伪类是选择器的一种，它用于`选择处于特定状态`的元素，它们表现得像是向文档的某个部分应用了一个类一样，帮你在你的标记文本中减少多余的类，让你的代码更灵活、更易于维护。

**语法：**

```css
:pseudo-class-name {
  /* code */
}
```

::: tip 简单理解伪类
伪类：首先他是一个类，作用于标签本身，只不过带有一种特定状态。比如交互状态的`hover`、`focus`、`visited`等，又如空状态`empty`、选中状态`checked`等等。其次，它又和普通的类（class='xxx'）不同，它只有在 DOM 树无法描述的状态下才向元素添加样式，因此被称为 伪类。

**所有的伪类以同样的方式实现。它们选中你的文档中处于某种状态的那部分，表现得就像是你已经向你的 HTML 加入类一样。**
:::

## 伪元素选择器

伪元素的表现方式与伪类相似，不同的是，伪元素表现得是像你往标记文本中加入全新的 HTML 元素一样，而不是向现有的元素上应用类。<br>
伪元素开头为双冒号`::`。

**语法：**

```css
::pseudo-element-name {
  /* code */
}
```

::: tip 伪类与伪元素的区别
伪类：相当于一个不用写到标签上的特殊类名，它是向已存在的元素中添加特殊效果，规范语法以单冒号开头。

伪元素：它是向你标记的元素上添加一个新元素，而不是在上面应用类，规范语法以双冒号开头。
:::

## 伪类与伪元素的应用

通常情况下，我们都是单独使用伪类或者伪元素，但是，我们也可以将它们组合使用。<br>
例如下例中，我们需要将文章中第一段的第一行进行标红:

```html
<article>
  <p>伪类相当于一个不用写到标签上的特殊类名，它是向已存在的元素中添加特殊效果，规范语法以单冒号开头;</p>
  <p>而伪元素——它是向你标记的元素上添加一个新元素，而不是在上面应用类，规范语法以双冒号开头。</p>
</article>
```

```css
article p:first-child::first-line {
  color: red;
}
```

其呈现形式如下：

<article class='sele-case-mix'>
  <p>
    伪类相当于一个不用写到标签上的特殊类名，它是向已存在的元素中添加特殊效果，规范语法以单冒号开头;
  </p>
  <p>
    而伪元素——它是向你标记的元素上添加一个新元素，而不是在上面应用类，规范语法以双冒号开头。
  </p>
</article>

## 对照表
对照表根据 MDN 做了小部分调整，你也可以[`去这里`](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#%E5%8F%82%E8%80%83%E8%8A%82)查看完整的内容。

### 伪类
伪类选择器内容较多，根据大致的作用范围，为方便查看，将各表分开。

|文档链接	|描述|
|---|---|
|`:root`	|匹配文档的根元素。|
|`:lang`	|基于语言（HTMLlang属性的值）匹配元素。|
|`:hover`	|当用户悬浮到一个元素之上的时候匹配。|
|`:active`	|在用户激活（例如点击）元素的时候匹配。|
|`:visited`	|匹配已访问链接。|
|`:link`	|匹配未曾访问的链接。|
|`:any-link`	|匹配一个链接的`:link`和`:visited`状态。|
|`:local-link` 	|匹配指向和当前文档同一网站页面的链接。|
|`:target`	|匹配当前 `URL` 目标的元素（例如如果它有一个匹配当前URL 分段的元素）。|

|条件匹配	|描述|
|---|---|
|`:is()`	|匹配传入的选择器列表中的任何选择器。|
|`:where()`	| 匹配传入选择器列表中任何一条规则选中的元素。|
|`:has()`	|匹配作为值传入自身的选择器匹配的物件。|
|`:not()`	|匹配作为值传入自身的选择器未匹配的物件。|

|兄弟选择	|描述|
|---|---|
|`:first-child`	|匹配兄弟元素中的第一个元素。|
|`:first-of-type`|	匹配兄弟元素中第一个某种类型的元素。|
|`:only-child`	|匹配没有兄弟元素的元素。|
|`:last-child`	|匹配兄弟元素中最末的那个元素。|
|`:nth-child`	|匹配一列兄弟元素中的元素——兄弟元素按照an+b形式的式子进行匹配（比如 2n+1 匹配元素 1、3、5、7 等。即所有的奇数||个）。|
|`:nth-last-child`	|匹配一列兄弟元素，从后往前倒数。兄弟元素按照an+b形式的式子进行匹配（比如 2n+1 匹配按照顺序来的最后一个|元|素，然后往前两个，再往前两个，诸如此类。从后往前数的所有奇数个）。|
|`:only-of-type`	|匹配兄弟元素中某类型仅有的元素。|
|`:last-of-type`	|匹配兄弟元素中最后一个某种类型的元素。|
|`:nth-of-type`	|匹配某种类型的一列兄弟元素（比如，p 元素）——兄弟元素按照an+b形式的式子进行匹配（比如 2n+1 匹配元素 1、3、||5、7 等。即所有的奇数个）。|
|`:nth-last-of-type`	|匹配某种类型的一列兄弟元素（比如，p 元素），从后往前倒数。兄弟元素按照an+b形式的式子进行匹配（比如 |2n|+1 匹配按照顺序来的最后一个元素，然后往前两个，再往前两个，诸如此类。从后往前数的所有奇数个）。|

|输入、表单	|描述|
|---|---|
|`:enabled`	|匹配处于开启状态的用户界面元素。|
|`:disabled`|	匹配处于关闭状态的用户界面元素|
|`:checked`	|匹配处于选中状态的单选或者复选框。|
|`:focus`	|当一个元素有焦点的时候匹配。|
|`:focus-visible`	|当元素有焦点，且焦点对用户可见的时候匹配。|
|`:focus-within`	|匹配有焦点的元素，以及子代元素有焦点的元素。|
|`:blank`	|匹配空输入值的input元素。|
|`:valid`	|匹配诸如input元素的处于可用状态的元素。|
|`:invalid`	|匹配诸如input的位于不可用状态的元素。|
|`:placeholder-shown`	|匹配显示占位文字的 input 元素。|
|`:required`	|匹配必填的 form 元素。|
|`:optional`	|匹配不是必填的 form 元素。|

|UI、媒体、权限	|描述|
|---|---|
|`:current`| 	匹配正在展示的元素，或者其上级元素。|
|`:past` 	|匹配当前元素之前的元素。|
|`:future` 	|匹配当前元素之后的元素。|
|`:empty`	|匹配除了可能存在的空格外，没有子元素的元素。|
|`:default`|	匹配一组相似的元素中默认的一个或者更多的 UI 元素。|
|`:dir`	|基于其方向性（HTMLdir属性或者 CSSdirection属性的值）匹配一个元素。|
|`:indeterminate`	|匹配未定态值的 UI 元素，通常为复选框。|
|`:in-range`	|用一个区间匹配元素，当值处于区间之内时匹配。|
|`:out-of-range`	|按区间匹配元素，当值不在区间内的的时候匹配。|
|`:first`	|匹配分页媒体的第一页。|
|`:left`	|在分页媒体中，匹配左手边的页。|
|`:right`	|在分页媒体中，匹配右手边的页。|
|`:playing`	|匹配代表音频、视频或者相似的能“播放”或者“暂停”的资源的，且正在“播放”的元素。|
|`:paused`	|匹配代表音频、视频或者相似的能“播放”或者“暂停”的资源的，且正在“暂停”的元素。|
|`:scope`	|匹配任何为参考点元素的的元素。|
|`:read-write`	|匹配用户可更改的元素。|
|`:read-only`	|匹配用户不可更改的元素。|

### 伪元素
相较于伪类，伪元素内容较少，如下表所示：

|伪元素	|描述|
|---|---|
|`::before`	|匹配出现在原有元素的实际内容之前的一个可样式化元素。|
|`::after`	|匹配出现在原有元素的实际内容之后的一个可样式化元素。|
|`::first-letter`	|匹配元素的第一个字母。|
|`::first-line`	|匹配包含此伪元素的元素的第一行。|
|`::grammar-error`	|匹配文档中包含了浏览器标记的语法错误的那部分。|
|`::selection`	|匹配文档中被选择的那部分。|
|`::spelling-error`	|匹配文档中包含了浏览器标记的拼写错误的那部分。|


## 参考资料
- [MDN: Pseudo-classes and pseudo-elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
- [W3 - selectors-6.6 Pseudo-classes](https://www.w3.org/TR/selectors-3/#selectors)
- [W3 - selectors-7 Pseudo-elements](https://www.w3.org/TR/selectors-3/#selectors)

<style scoped lang="scss">
  @mixin box-border {
  border:1px solid darkcyan;
  padding: 10px 20px;
  border-radius: 8px;
}
.vp-doc [class*='language-'] pre, .vp-doc [class*='language-'] code {
    white-space: pre-wrap;
  }
 article.sele-case-mix {
  @include box-border;
  p:first-child::first-line {
    color:red
  }
 } 
</style>
