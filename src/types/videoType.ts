export interface PaginationMeta {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export interface Meta {
  pagination: PaginationMeta
}

export interface CategoryAttributes {
  title: string
  descr: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface CategoryData {
  id: number
  attributes: CategoryAttributes
}

export interface Categories {
  data: CategoryData[]
}

export interface Attributes {
  title: string
  description: string
  createdAt: string // or Date
  updatedAt: string // or Date
  publishedAt: string // or Date
  video: string
  video_subs: Categories
}

export interface DataItemVideo {
  id: number
  attributes: Attributes
}

export interface ApiResponseVideo {
  data: DataItemVideo[]
  meta: Meta
}
