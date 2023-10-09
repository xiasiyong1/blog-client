import axiosInstance from '@/helpers/request'

export const uploadImages = (files: File[]) => {
  const formData = new FormData()
  files.forEach((file) => {
    formData.append('files', file)
  })
  return axiosInstance
    .post('/upload/images', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((res) => {
      const images = res.data.data.map((file: any) => {
        return {
          url: import.meta.env.VITE_IMAGE_PREVIEW_PREFIX + file.filename
        }
      })

      return images
    })
}
