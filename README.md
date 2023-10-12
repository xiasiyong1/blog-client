# blog-client

- [x] 注册
- [x] 登录
- [x] 浏览量
- [ ] 点赞
- [ ] 收藏
- [x] 退出登录
- [ ] 评论

tar -czvf blog-client.tar.gz dist
tar -xzvf blog-client.tar.gz

scp ./blog-client.tar.gz root@124.222.16.153:/root/blog/blog-client
scp ./Dockerfile ./blog-client.conf root@124.222.16.153:/root/blog/blog-client

## tailwind-css presets

### color

1. default (weak,hover,active,selected)
2. primary
3. success
4. error
5. warning

### font-size

1. xs
2. default
3. m
4. l
5. xl

### font-weight

1. regular
2. medium
3. bold

### spacing

1-10
