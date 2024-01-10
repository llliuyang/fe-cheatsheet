---
title: CSS专题概述
pageClass: 'css-maze-base-overview'
---

# CSS MAZE - 迷宫探秘

## {{$frontmatter.title}}

CSS 作为前端开发的基础，它承载着网页的视觉表现，在前端开发中，有着举足轻重的地位。
我们在浏览网页时，所看到的各种布局与样式，都是 CSS 在其中发挥作用。

学习好 CSS，理解网页的结构与样式，更方便地实现网页的可视化效果，能让我们实现更随心所欲的网页布局。

本专题我将其命名为`MAZE` [meɪz]，其意为迷宫，象征着 CSS 的无穷魅力。迷宫中的每个格子都是一个 CSS 属性，不同属性的组合构成不同的页面布局；而迷宫的出路一般也不止一条，意味着我们的布局与视觉呈现的实现方式多元化。我们追求的是避繁就简、举一反三，而非纷繁芜杂、浅尝辄止。

本专题将着重介绍 CSS 知识中的一些属性深层剖析与使用技巧，包括基础与进阶两部分。其中基础部分主要内容为 CSS 基础的属性的详细解释，包括但不限于`选择器`、`属性`、`单位`、`布局`、`盒模型`等。进阶部分则主要内容为 CSS 的高阶玩法，包括但不限于`绘图`、`滤镜`、`动画`、`响应式设计`、`预处理器`、`性能优化`等。

::: tip 优雅地开始
工欲善其事，必先利其器。在开始本专题内容时，默认你已了解并掌握一定的 HTML 与 CSS 基础，包括 HTML 标签、语义，CSS 基础属性：`width`、`height`、`color`、`margin`、`padding`、`border`、`background`等。如果你对此还不熟悉，可以先到 [MDN - CSS](https://developer.mozilla.org/zh-CN/docs/Learn/CSS) 了解以上基础内容后再开始本专题之旅；如果你已经掌握了以上内容，那么就让我们优雅地开始 CSS 探秘之旅吧！
:::

<svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 600 140'>
  <text x='50%' y='80%' text-anchor='middle'>开始探索吧</text>
</svg>

<style scoped lang='scss'>
.css-maze-base-overview {
h1{
  text-align:center;
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}
svg {
  margin: 0 auto;
  width: 600px;
  max-width: 100%;
  height: 140px;
}
text {
  font-size: 118px;
  letter-spacing: 4px;
  font-family:Lisu,Microsoft JhengHei,PingFang SC,system-ui,-apple-system,BlinkMacSystemFont,segoe ui,Roboto,Helvetica,Arial,sans-serif;
  animation: spell 6s infinite alternate;
}

@keyframes spell {
  0%,10% {
    fill: rgba(#ae46fe, 0);
    stroke: rgba(#ae46fe, 1);
    stroke-width: 0.4;
    stroke-dasharray: 0 50%;
    stroke-dashoffset: 20%;
  }

  40% {
    fill: rgba(#ae46fe, 0);
    stroke: rgba(#ae46fe, 1);
    stroke-width: 0.8;
  }

  60% {
    fill: rgba(#ae46fe, 0);
    stroke: rgba(#ae46fe, 1);
    stroke-width: 1.2;
  }
  95%,
  100% {
    fill: rgba(#ae46fe, 0.8);
    stroke: rgba(#ae46fe, 0);
    stroke-width: 0;
    stroke-dashoffset: -20%;
    stroke-dasharray: 50% 0;
  }
}
}
</style>
