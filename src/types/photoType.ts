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
export interface ImageFormat {
  name: string
  hash: string
  ext: string
  mime: string
  path: string | null
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface ImageFormats {
  small?: ImageFormat
  thumbnail: ImageFormat
}

export interface ImageAttributes {
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats: ImageFormats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: string | null
  createdAt: string
  updatedAt: string
}

export interface ImageData {
  id: number
  attributes: ImageAttributes
}

export interface Image {
  data: ImageData
}
export interface Attributes {
  title: string
  description: string
  createdAt: string // or Date
  updatedAt: string // or Date
  publishedAt: string // or Date
  image: Image
  img: string | null
  photo_subs: Categories
}

export interface DataItem {
  id: number
  attributes: Attributes
}

export interface ApiResponse {
  data: DataItem[]
  meta: Meta
}
