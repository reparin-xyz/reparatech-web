import customAxios from '@/lib/axios'
import { ApiResponse } from '@/types/Category'

export const categoryApi = {
  getAll: async () => {
    const response = await customAxios.get<ApiResponse>('/api/categories')
    return response.data
  },

  create: async (formData: FormData) => {
    const response = await customAxios.post<ApiResponse>(
      '/api/categories',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
    return response.data
  },

  update: async (id: number, formData: FormData) => {
    formData.append('_method', 'PUT') // For Laravel backend
    const response = await customAxios.post<ApiResponse>(
      `/api/categories/${id}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
    return response.data
  },

  delete: async (id: number) => {
    const response = await customAxios.delete(`/api/categories/${id}`)
    return response.data
  },
}
