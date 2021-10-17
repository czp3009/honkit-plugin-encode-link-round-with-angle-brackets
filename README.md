# Honkit Plugin Encode Link Round With Angle Brackets

Encode url in link that round with angle brackets.

Before encode(url with space and round brackets may cause issue when honkit parse it):

```markdown
![](<.gitbook/assets/image (1).png>)
```

After encode:

```markdown
![](.gitbook/assets/image%20%281%29.png)
```

Generated html:

```html
<p><img src=".gitbook/assets/image%20%281%29.png" alt></p>
```

# NPM

```bash
npm install honkit-plugin-encode-link-round-with-angle-brackets
```

# Configuration

No config.

# License

Apache 2.0
