export interface BlogPost {
id: string
title: string
slug: string
description: string
publishedDate: string
featuredImage: {
    fields: {
    file: {
        url: string
    }
    }
}
  content: any // This will be the rich text content
isFeatured: boolean
}

export interface ContentfulResponse {
items: {
    sys: {
    id: string
    }
    fields: BlogPost
}[]
}