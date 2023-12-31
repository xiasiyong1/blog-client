<template>
  <div class="">
    <div class="p-1" v-if="articleDetail">
      <div class="text-l">{{ articleDetail.title }}</div>
      <div class="text-s text-weakest mt-1 flex gap-1">
        <span>
          【{{ articleDetail.user.username }}】发布于{{ formateTime(articleDetail.updateTime) }}
        </span>
        <span> <Icon name="comment-o" /> {{ commentCount }}</span>
        <span><Icon name="like-o" /> {{ likeCount }}</span>
        <span><Icon name="browsing-history-o" /> {{ viewCount }}</span>
      </div>
      <div class="!mt-1 markdown-body">
        <Viewer class="min-h-[200px] p-1" :value="articleDetail.content" :plugins="plugins" />
      </div>
    </div>

    <!-- <div>
      <SectionTitle title="相关文章" />
      <RecommendArticleList />
    </div> -->
    <div>
      <SectionTitle title="评论列表" />
      <ArticleCommentList :list="articleCommentList" @add-comment="showCommentEditPanel" />
    </div>
    <div class="fixed bottom-0 left-0 w-full h-[40px] flex items-center gap-1 px-1 bg-white">
      <ActionSheet v-model:show="commentPanelVisible" title="添加评论">
        <Field
          v-model="comment.content"
          rows="4"
          autosize
          label="留言"
          type="textarea"
          maxlength="200"
          placeholder="请输入留言"
          show-word-limit
        />
        <div class="flex gap-1 p-1">
          <div v-if="comment.images.length > 0" class="flex gap-2">
            <img
              :src="item.url"
              alt=""
              v-for="item in comment.images"
              :key="item.url"
              class="w-[80px] h-[80px] object-cover"
            />
          </div>
          <Uploader
            :after-read="afterRead"
            multiple
            :max-count="9"
            v-if="comment.images.length < 9"
          />
        </div>
        <Button type="primary" class="!mt-2" block @click="submitComment">提交评论</Button>
      </ActionSheet>
      <div class="flex-1 text-weak pl-1 text-m" @click="showCommentEditPanel">添加评论</div>
      <Icon name="like-o" size="24" @click="addArticleLike" v-if="!isLike" />
      <Icon name="like" class="text-success" size="24" v-else @click="removeArticleLike" />
    </div>
  </div>
</template>

<script setup lang="ts">
import 'bytemd/dist/index.css'
import { Icon, ActionSheet, Uploader, Field, Button, showToast } from 'vant'
import SectionTitle from '@/components/section-title/index.vue'
import ArticleCommentList from '@/components/article-comment/comment-list.vue'
import * as articleApi from '@/apis/article'
import * as articleLikeApi from '@/apis/article-like'
import * as articleCommentApi from '@/apis/article-comment'
import type { Article } from '@/types/article'
import type { ArticleComment } from '@/types/article-comment'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import gfm from '@bytemd/plugin-gfm'
// @ts-ignore
import { Viewer } from '@bytemd/vue-next'
import 'github-markdown-css/github-markdown.css'
import { useUserStore } from '@/stores/user'
import { uploadImages } from '@/apis/upload'
import type { ImageItem } from '@/types/upload'
import { formateTime } from '@/helpers/time'

const store = useUserStore()

const articleDetail = ref<Article>()
const isLike = ref(false)
const likeCount = ref(0)
const commentCount = ref(0)
const viewCount = ref(0)

const plugins = [
  gfm()
  // Add more plugins here
]

const route = useRoute()

const getArticleDetail = () => {
  articleApi.getArticleInfoById(+route.params.id).then((res) => {
    articleDetail.value = res.data.data
  })
}

const addArticleLike = () => {
  articleLikeApi.addArticleLike(+route.params.id).then((res) => {
    isLike.value = true
  })
}
const getArticleStatus = () => {
  articleApi.getArticleExtraData(+route.params.id).then((res) => {
    isLike.value = res.data.data.isLike
    likeCount.value = res.data.data.likeCount
    commentCount.value = res.data.data.commentCount
    viewCount.value = res.data.data.viewCount
  })
}

const removeArticleLike = () => {
  articleLikeApi.removeArticleLike(+route.params.id).then(() => {
    isLike.value = false
  })
}

const commentPanelVisible = ref(false)

const showCommentEditPanel = () => {
  commentPanelVisible.value = true
}
const hideCommentEditPanel = () => {
  commentPanelVisible.value = false
}

const comment = ref<{
  content: string
  images: ImageItem[]
}>({
  content: '',
  images: []
})

const afterRead = (fileList) => {
  let files: File[] = []
  if (fileList instanceof Array) {
    files = fileList.map((item) => item.file as File)
  } else {
    files = [fileList.file as File]
  }
  uploadImages(files).then((res) => {
    console.log(res)
    comment.value.images = res
  })
}

const articleCommentList = ref<ArticleComment[]>([])

const getArticleCommentList = () => {
  articleCommentApi.getArticleComments(+route.params.id).then((res) => {
    articleCommentList.value = res.data.data
  })
}

const submitComment = () => {
  articleCommentApi
    .addArticleComment(+route.params.id, {
      content: comment.value.content,
      images: comment.value.images.map((item) => item.url).join(',')
    })
    .then(() => {
      showToast('提交成功')
      hideCommentEditPanel()
      getArticleCommentList()
      getArticleStatus()
    })
}

onMounted(() => {
  getArticleDetail()
  getArticleCommentList()
  if (store.isLogin) {
    getArticleStatus()
  }
})
</script>

<style></style>
