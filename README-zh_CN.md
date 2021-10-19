# Honkit Plugin Encode Link Round With Angle Brackets

[English](./README.md) | 简体中文

编码尖括号包裹的链接.

编码前(带有空格和小括号的链接可能会造成 honkit 解析错误):

```markdown
![](<.gitbook/assets/image (1).png>)
```

编码后:

```markdown
![](.gitbook/assets/image%20%281%29.png)
```

生成的 html:

```html
<p><img src=".gitbook/assets/image%20%281%29.png" alt></p>
```

# NPM

```bash
npm install honkit-plugin-encode-link-round-with-angle-brackets
```

# 配置

无.

# License

Apache 2.0
