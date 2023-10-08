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
