import axios from 'axios'

const instance = axios.create({
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

export const uploadImages = (files: File[]) => {
  const formData = new FormData()
  files.forEach((file) => {
    formData.append('files', file)
  })
  return instance.post('/api/v1/upload/images', formData).then((res) => {
    const images = res.data.map((file: any) => {
      return {
        url: import.meta.env.VITE_IMAGE_PREVIEW_PREFIX + file.filename
      }
    })

    return images
  })
}
