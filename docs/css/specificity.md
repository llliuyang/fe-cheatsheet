---
title: 优先级与权重计算
pageClass: specificity
---

# {{$frontmatter.title}}

通过前面的选择器知识学习，我们已经掌握了各种类型选择器的使用场景。但是，选择了元素，写了样式，它就能按照我们的期望来展示吗？然而，事实并非总是如此。在开发中，我们会经常遇到这种情况——我们写的样式被其它样式或者三方库的样式给覆盖了。这里就涉及到样式的权重计算问题了，接下来，我们一起探究一下选择器的优先级是如何计算的吧！

## 优先级

浏览器通过优先级（specificity：特异性）来判断哪些属性值与一个元素最为相关，从而在该元素上
应用这些属性值。优先级是基于不同种类选择器组成的匹配规则。

:::tip 优先级速查表下表中，优先级依次递减：

1. `!important` 
2. `内联（行内）样式` 
3. `ID选择器` 
4. `类（class）选择器` 
5. `类型（标签）、伪类、属性选择器` 
6. `伪元素选择器` 
7. `通配符、否定伪类（:not）、关系选择器` 
:::

## 优先级特例说明

### `!important`

当在一个样式声明中使用一个 `!important` 规则时，此声明将覆盖任何其他声明。虽然，从技术上讲，`!important` 与优先级无关，但它与最终的结果直接相关。

::: warning
使用 `!important` 是一个坏习惯，应该尽量避免，因为这破坏了样式表中的固有的级联规则 使得调试找 bug 变得更加困难了。当两条相互冲突的带有 `!important` 规则的声明被应用到相同的元素上时，拥有更大优先级的声明将会被采用。
:::

**一些经验法则：**
- 一定要优先考虑使用样式规则的优先级来解决问题而不是 `!important`
- 只有在需要覆盖全站或外部 CSS 的特定页面中使用 `!important`
- 永远不要在你的插件中使用 `!important`
- 永远不要在全站范围的 CSS 代码中使用 `!important`

### `内联样式`
内联样式，即 `style` 属性内的样式声明，优先于所有普通的样式，无论其优先级如何。这样的声明没有选择器，但它们的优先级可以理解为 `1-0-0-0`；即无论选择器中有多少个 ID，它总是比其他任何优先级的权重都要高。

### `:is()` 和 `:not()`

在特异性计算中，匹配任意伪类 `:is()` 和否定伪类 `:not()` 不被视为伪类。但是，在确定选择器类型的数量时，放入伪类的选择器也算作普通选择器。

### `:where()`

优先级调整伪类 `:where()` 总是会将其优先级替换为零（0-0-0）。它使 CSS 选择器能够非常具体地确定目标元素，而不会提升优先级。

## 权重计算

通过上面的学习，我们已经知道一个类选择器比ID选择器的优先级更低，会被其覆盖。在本质上，不同类型的选择器有不同的分数值，把这些分数相加就得到特定选择器的权重，然后就可以进行匹配。

一个选择器的优先级是有三个不同的分量计算结果来决定的，其规则如下：
- 计算选择器中包含 `ID` 的数量，为 a (百位)
- 计算选择器中包含 `类选择器`、`属性选择器`或者`伪类`，为 b (十位)
- 计算选择器中包含的类型（标签）选择器 、 伪元素选择器，为 c (个位)
- 忽略 通用选择器

:::tip 通用选择器说明
通配符 `*` 、关系选择符`（+、>、~、' '）`和调整优先级的选择器`:where()`不会影响优先级。

否定`:not()`和任意匹配`:is()`伪类本身对优先级没有影响，但它们的参数则会带来影响。参数中，对优先级算法有贡献的参数的优先级的最大值将作为该伪类选择器的优先级。
:::

优先级权重计算示例

```css
*               /* a=0 b=0 c=0 -> 权重 =   0 */
LI              /* a=0 b=0 c=1 -> 权重 =   1 */
UL LI           /* a=0 b=0 c=2 -> 权重 =   2 */
UL OL+LI        /* a=0 b=0 c=3 -> 权重 =   3 */
H1 + *[REL=up]  /* a=0 b=1 c=1 -> 权重 =  11 */
UL OL LI.red    /* a=0 b=1 c=3 -> 权重 =  13 */
LI.red.level    /* a=0 b=2 c=1 -> 权重 =  21 */
#x34y           /* a=1 b=0 c=0 -> 权重 = 100 */
#s12:not(FOO)   /* a=1 b=0 c=1 -> 权重 = 101 */
```

**优先级是基于选择器的形式进行计算的。** <br>
在下面的例子中，尽管选择器 `*[id="foo"]` 选择了一个 ID，但是其表现形式是一个属性选择器，因此它还是会被作为一个属性选择器来计算自身的优先级。

```html
<p id="foo">不出意外，我变绿了。</p>
```
```css
*#foo {
  color: green;
}

*[id="foo"] {
  color: red;
}
```
<article class='sele-speci'>
<p id="foo">不出意外，我变绿了。</p>
</article>

::: tip 小诀窍
在W3标准文档中，关于优先级有这么一句：

> "Repeated occurrences of the same simple selector are allowed and do increase specificity."

其含义是：**允许重复出现相同的简单选择器，但会增加特异性（优先级）。** <br>
为了更好地理解，我们来看看下面这个例子：

```html
<p class="bar">允许重复出现相同的简单选择器，但会增加特异性（优先级）。</p>
```
```css
.bar {
  color: green;
}

.bar.bar{
  color: red;
}

```

<article class='sele-speci repeat'>
<p class="bar">允许重复出现相同的简单选择器，但会增加特异性（优先级）。</p>
</article>
:::

## 参考资料

- [W3：selectors - 9.Calculating a selector's specificity](https://www.w3.org/TR/selectors-3/#specificity)
- [MDN：优先级](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)


<style lang='scss' scoped>
.specificity {
  @mixin box-border {
    border:1px solid darkcyan;
    padding: 10px 20px;
    border-radius: 8px;
    margin: 20px auto;
  }
  .sele-speci {
    @include box-border;
    font-size: 16px;
    font-weight:bold;

    #foo {
      color: green;
    }

    [id="foo"] {
      color: red;
    }

    &.repeat {
      .bar {
        color: green;
       }

      .bar.bar {
        color: red;
      }
    }
  }
}
</style>