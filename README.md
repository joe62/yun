<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby 学习笔记
</h1>

## 第一部分：创建部署 yun 网站

### 创建网站

```sh
npx gatsby new

What would you like to call your site?
√ · gatsby tutorial site
What would you like to name the folder where your site will be created?
√ gatsbyjs-learning/ gatsby-mdx-tailwindcss-app
√ Will you be using JavaScript or TypeScript?
· JavaScript
√ Will you be using a CMS?
· No (or I'll add it later)
√ Would you like to install a styling system?
· Tailwind CSS
√ Would you like to install additional features with other plugins?
· Add responsive images
· Add an automatic sitemap
· Generate a manifest file
· Add Markdown and MDX support


Thanks! Here's what we'll now do:

    Create a new Gatsby site in the folder gatsby-mdx-tailwindcss-app
    Get you set up to use Tailwind CSS for styling your site
    Install gatsby-plugin-image, gatsby-plugin-sitemap, gatsby-plugin-manifest, gatsby-plugin-mdx,
gatsby-transformer-remark

```

```sh
cd gatsby-mdx-tailwindcss-app
npm run develop
```

`E:\temp2023\gatsbyjs-learning\gatsby-mdx-tailwindcss-app`

[gatsby tutorial site](http://localhost:8000/)
[graphql](http://localhost:8000/___graphql)

### 在 github 上新建一个 reop

[yun](https://github.com/joe62/yun)

![](https://www.gatsbyjs.com/static/bf74830c88d3f8b0287b58cf397be992/18539/new-repo-button.png)

![](https://www.gatsbyjs.com/static/94ec685d2adefdf4d2aac5b3364acba9/3d68f/new-repo-options.png)

```sh
git remote add origin https://github.com/joe62/yun.git
git branch -M main
git push -u origin main
```

### 利用 Gatsby 云构建 yun 网站

[Gatsby 云面板](https://www.gatsbyjs.com/dashboard/)

![](https://www.gatsbyjs.com/static/0fd27b745c1de708f034eaf97c4416e0/60b3a/deployment-workflow.png)

## 第二部分 React 组件的使用和样式

```sh
git add .
git commit -m "Finished Gatsby Tutorial Part 2"
git push
```

## 第三部分 利用插件添加功能

```sh
git add .
git commit -m "Finished Gatsby Tutorial Part 3"
git push
```

## 第四部分 利用 GraphQL 查询数据

```jsx
 query  {
  allFile(filter: {extension: {eq: "mdx"}}) {
    nodes {
      name
    }
  }
}
```

```sh
git add .
git commit -m "Finished Gatsby Tutorial Part 4"
git push
```

## 第 5 部分:转换数据以使用 MDX

`gatsby-plugin-mdx`

`gatsby-remark-images` `gatsby-remark-prismjs` `gatsby-remark-autolink-headers`

```sh
git add .
git commit -m "Finished Gatsby Tutorial Part 5"
git push
```

## 第 6 部分：

## Indexs

> `useStaticQuery` `gatsby-plugin-filesystem` `gatsby-source-contentful` > `Content management system (CMS)`

![](https://www.gatsbyjs.com/static/e45422900475b86807bc002fb6863b85/10d53/data-layer.png)
