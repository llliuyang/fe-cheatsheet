---
title: 选择器明晰
---

# {{$frontmatter.title}}

书写 CSS 时，我们第一步就是需要指定一个选择器，它可以是我们常用的`id` 或者 `class`，也有一些通用的选择器，诸如`tag`、`*`等等。本节我们来重新认识一下选择的族群，看看还有哪些是你还未谋面的，通过本次学习，你将会对 CSS 选择器有更多的了解，它们也将在你今后的开发中，发挥更大的作用。

按照选择器的选择范围，CSS 选择器可以分为以下几类：

- [`元素选择器`](#元素选择器)
- [`关系选择器`](#关系选择器)
- [`属性选择器`](#属性选择器)
- [`伪类选择器`](#伪类选择器)
- [`伪元素选择器`](#伪元素选择器)

## 元素选择器

元素选择器，顾名思义，即是选择页面中的元素。 <br>
大致可分为以下四小类：`通配符选择器`、`标签选择器`、`类选择器`、`ID选择器`。

### 通配符选择器

:::tip 通配符选择器
通配符选择器，即 `*`，它表示选择页面中的所有元素。通常用于统一页面中的基础样式。<br>

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

:::

### 标签选择器

:::tip 标签选择器
标签选择器，即——使用 HTML 元素的标签来进行选择，用来格式化用某一类标签包裹的元素样式。<br>

```css
input {
  border: none;
  outline: none;
}
```

:::

### 类选择器与 ID 选择器

:::tip 类选择器与 ID 选择器
类选择器选择的是在标签上使用`class`命名的元素，用法为 `.[className]` <br>
ID 选择器选择的是在标签上使用`id`命名的元素，用法为 `#[IDName]`。<br>

```css
// 类选择器
.box {
  width: 100%;
}

// ID选择器
#container {
  display: flex;
}
```

:::

## 关系选择器

关系选择器，用于选择与当前元素在排布上有一定关联的元素，有以下四大类：

- [`后代选择器`](#后代选择器)
- [`子代选择器`](#子代选择器)
- [`相邻兄弟选择器`](#相邻兄弟选择器)
- [`普通兄弟选择器`](#普通兄弟选择器)

### 后代选择器

:::tip 后代选择器
典型用单个空格（" "）字符——组合两个选择器。<br>
`A B`，选中 A 所有的后代 B，命中所有后代，包括孙子元素等等。

```css
body a {
  text-decoration: none;
}
```

:::

### 子代选择器

:::tip 子代选择器
子代选择器更为准确叫法应该是 `直接子代选择器`，只选中直接子元素，继承关系更远的后代不会匹配。 <br>
即 `A > B`，选中 A 直接子代 B，若后面有 B 在 C 中嵌套，则不命中 C 中的 B。

```html
<!-- 只会选择ul的直接li ，对于ol 里面的 li ，不会被选中 -->
<ul>
<li>ul 的 子元素 li</li>
<li>ul 的 子元素 li</li>
  <ol>
    <li>ol 的 子元素 li</li>
    <li>ol 的 子元素 li</li>
  </ol>
</ul>
<!-- ... -->
<style>
  ul > li {
    color:red;
  }
<style>
```

效果如下：

<ul class='child-sele-case'>
<li>ul 的 子元素 li</li>
<li>ul 的 子元素 li</li>
  <ol>
    <li>ol 的 子元素 li</li>
    <li>ol 的 子元素 li</li>
  </ol>
</ul>

:::

### 相邻兄弟选择器

:::tip 相邻兄弟选择器
相邻兄弟选择器 `+` 用来选中恰好处于另一个在继承关系上同级的元素旁边的元素。 <br>
`A + B`，选中 A 的下一个兄弟元素 B，如果 A 后面没有元素 B，则不命中。

```html
<article>
  <h1>CSS选择器 - 相邻兄弟选择器</h1>
  <p>相邻兄弟选择器 `+` 用来选中恰好处于另一个在继承关系上同级的元素旁边的元素。</p>
  <p>A + B，选中 A 的下一个兄弟元素 B，如果 A 后面没有元素 B，则不命中。</p>
</article>
```

```css
h1 + p {
  color: darkcyan;
}
```

**只会选中 h1 紧邻的 下一个 p**，效果如下：

<article class="sibling-sele-case">
  <h5>CSS选择器 - 相邻兄弟选择器</h5>
  <p>相邻兄弟选择器 `+` 用来选中恰好处于另一个在继承关系上同级的元素旁边的元素。</p>
  <p>A + B，选中 A 的下一个兄弟元素 B，如果 A 后面没有元素 B，则不命中。</p>
</article>

如果在 h1 和 p 之间插入一个别的元素，则 h1 + p 会失效，效果如下：

<article class="sibling-sele-case insert">
  <h5>CSS选择器 - 相邻兄弟选择器</h5>
  <div>这里是插入的 非p标签包裹 内容，可以看到未触发 h1 + p 选择器。</div>
  <p>相邻兄弟选择器 `+` 用来选中恰好处于另一个在继承关系上同级的元素旁边的元素。</p>
  <p>A + B，选中 A 的下一个兄弟元素 B，如果 A 后面没有元素 B，则不命中。</p>
</article>
:::

### 普通兄弟选择器

:::tip 普通兄弟选择器
普通兄弟选择器 `~` ，可以选择元素之后的所有兄弟元素，即使它们不相邻。 <br>
`A ~ B`，选中 A 的后面所有兄弟元素 B。

```html
<article>
  <h1>CSS选择器 - 普通兄弟选择器</h1>
  <p>普通兄弟选择器 `~` ，可以选择元素之后的所有兄弟元素，即使它们不相邻。</p>
  <p>`A ~ B`，选中 A 的后面所有兄弟元素 B。</p>
</article>
```

```css
h1 ~ p {
  color: darkcyan;
}
```

**选中 h1 的后面所有 p**，效果如下：

<article class="sibling-sele-case normal">
  <h5>CSS选择器 - 普通兄弟选择器</h5>
  <p>普通兄弟选择器 `~` ，可以选择元素之后的所有兄弟元素，即使它们不相邻。</p>
  <div>我是被插入的 div 元素，并没有能阻止 p 的选中。</div>
  <p>`A ~ B`，选中 A 的后面所有兄弟元素 B。</p>
</article>
:::

## 属性选择器

元素可以带有属性，它提供了关于如何标记的更详细信息，因此我们也可以选择带有相应属性的元素。<br>
根据属性的有无以及属性值的内容，属性选择器大致分为以下两大类：

- [`是否存值选择器`](#是否存值选择器)
- [`子字符串匹配选择器`](#子字符串匹配选择器)

### 是否存值选择器

这些选择器允许基于一个元素自身是否存在（例如`href`）或者基于各式不同的按属性值的匹配，来选取元素。<br>

|      选择器      |            示例             | 释义                                                                                                                                                                                                        |
| :--------------: | :-------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `[attr]`     |         `a[title]`          | 匹配 **带有名为 attr 的属性** 的元素——方括号里的值。                                                                                                                                                        |
|  `[attr=value]`  | `a[href="https://abc.com"]` | 匹配 **带有名为 attr 的属性** 的元素，其 **值为 value** ——引号中的字符串。 <br> <br>注意，不会选中 **包含该值但有空格隔开其它值** 的元素。                                                                  |
| `[attr~=value]`  |    `p[class~="special"]`    | 匹配带有一个 **名为 attr** 的属性的元素，其 **值为 value** ，或者匹配带有一个 attr 属性的元素，其值有一个或者更多，**至少有一个和 value 匹配** 。 <br> <br>注意，在一列中的好几个值，是用 **空格隔开** 的。 |
| `[attr\|=value]` |     `div[lang\|="zh"]`      | 匹配带有一个 **名为 attr** 的属性的元素，其 **值可正为 value**，**或者开始为 value** ，后面 **紧随着一个连字符**。 <br> <br>注意，它是 **包含`[attr=value]`** 这种情况的。                                  |

::: tip 代码与效果

```html
<p>我没有类名</p>
<p class="p">我有一个类名 —— p</p>
<p class="p p1">我有两个类名，用空格分隔的 —— p和p1</p>
<p class="p1-green">我有一个类名，但是用连字符连接的 —— p1-green</p>
```

```css
p[class] {
  font-size: 16px;
}
p[class='p'] {
  color: red;
}
p[class~='p'] {
  font-weight: bold;
  font-size: 20px;
}
p[class|='p1'] {
  background-color: darkcyan;
  color: white;
}
```

效果如下：

<article class="attr-sele-case">
<p>我没有类名</p>
<p class="p">我有一个类名 —— p</p>
<p class="p p1">我有两个类名，用空格分隔的 —— p和p1</p>
<p class="p1-green">我有一个类名，但是用连字符连接的 —— p-green</p>
</article>
:::

### 子字符串匹配选择器

子字符串匹配选择器让更高级的属性的值的子字符串的匹配变得可行。例如，如果你有 `box-warning` 和 `box-error` 类，想把开头为 `box-` 字符串的每个元素都匹配上的话，你可以用 `[class^="box-"]` 来把它们两个都选中。

|     选择器      |        示例         | 释义                                                                                               |
| :-------------: | :-----------------: | :------------------------------------------------------------------------------------------------- |
| `[attr^=value]` | `li[class^="box-"]` | 匹配带有一个名为 attr 的属性的元素，其 **值开头为 value** 子字符串。                               |
| `[attr$=value]` | `li[class$="-box"]` | 匹配带有一个名为 attr 的属性的元素，其 **值结尾为 value** 子字符串                                 |
| `[attr*=value]` | `li[class*="box"]`  | 匹配带有一个名为 attr 的属性的元素，其 **值的字符串中的任何地方，至少出现了一次 value** 子字符串。 |

::: tip 代码与效果

```html
<p class="pop">我的类名为 —— pop</p>
<p class="polar">我的类名为 —— polar</p>
<p class="sugar">我的类名为 —— sugar</p>
```

```css
p[class^='po'] {
  font-weight: bold;
  font-size: 18px;
}
p[class$='ar'] {
  color: red;
}
p[class*='ol'] {
  background: darkcyan;
}
```

效果如下：

<article class="attr-sele-case value-string">
<p class="pop">我的类名为 —— pop</p>
<p class="polar">我的类名为 —— polar</p>
<p class="sugar">我的类名为 —— sugar</p>
</article>
:::

:::danger 大小写敏感
如果你想在大小写不敏感的情况下，匹配属性值的话，你可以在闭合括号之前，使用 `i` 值。 <br>
**HTML 中是大小写敏感的。**

```html
<p class="pop">我的类名为 —— pop</p>
<p class="Polar">我的类名为 —— Polar</p>
<p class="Polar-bear">我的类名为 —— Polar-bear</p>
```

```css
p[class^='po'] {
  font-size: 20px;
  font-weight:bold;
}

p[class^='po' i] {
  color: red;
}
```

效果如下：

<article class="attr-sele-case value-string case-insensitivity">
<p class="pop">我的类名为 —— pop</p>
<p class="Polar">我的类名为 —— Polar</p>
<p class="Polar-bear">我的类名为 —— Polar-bear</p>
</article>

上述示例中，第一个选择器将会匹配一个开头为 `po` 的值，这样它只匹配了第一项，因为另外两项开头 `Po` 存在大写 。第二个选择器使用了大小写不敏感的标记，于是匹配了所有项。 

**再次提醒：HTML 中是大小写敏感的。**
:::

<hr>

限于篇幅，本节就先到这里，我们将在下一节中学习`伪类选择器`、`伪元素选择器` 以及 `选择器的优先级`。

<style scoped lang="scss">
ul.child-sele-case {
  font-size: 16px;
 & > li {
  color: red;
}  
} 

@mixin box-border {
  border:1px solid darkcyan;
  padding: 10px 20px;
  border-radius: 8px;
}
.sibling-sele-case {
 @include box-border;
  h5 + p {
  color: darkcyan;
}
&.normal {
  h5 ~ p {
  color: darkcyan;
}
}
}

.attr-sele-case {
  @include box-border;
  p[class] {
  font-size: 16px;
  }
  p[class='p'] {
  color: red;
  }
  p[class~='p'] {
  font-weight: bold;
  font-size: 20px;
  }
  p[class|=p1] {
  background-color: darkcyan;
  color:white;
  }

  &.value-string {
    p[class^="po"] {
      font-weight: bold;
      font-size: 18px;
    }
    p[class$="ar"] {
      color: red;
    }
    p[class*="ol"] {
      background: darkcyan;
    }

    &.case-insensitivity {
      p[class*="ol"] {
        background: transparent;
      }
      p[class^="po"] {
        font-size: 20px;
        font-weight:bold;
      }

      p[class^="po" i] {
        color: red;
      }
    }
  }
}
</style>
