# Honkit Plugin Encode Link Round With Angle Brackets
# Honkit Plugin 用圆括号编码带尖括号的链接

Encode url in link that round with angle brackets.

Before encode(url with space and round brackets may cause issue when honkit parse it):

将链接中的网址用圆括号编码。

在编码之前（带有空格和圆括号的url可能会在honkit解析它时引起问题）。

```markdown
![](<.gitbook/assets/image (1).png>)
```

After encode:
编码后：

```markdown
![](.gitbook/assets/image%20%281%29.png)
```

Generated html:
生成的html：

```html
<p><img src=".gitbook/assets/image%20%281%29.png" alt></p>
```

# NPM

```bash
npm install honkit-plugin-encode-link-round-with-angle-brackets
```

# Configuration
# 配置

No config.
无可奉告。

# License

Apache 2.0
