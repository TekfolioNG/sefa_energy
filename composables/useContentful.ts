import type { ContentfulClientApi } from 'contentful'
import type { BlogPost } from '~/types/contentful'

export const useContentful = () => {
  const { $contentful } = useNuxtApp()

  const fetchBlogPosts = async (featured = false) => {
    try {
      const query: any = {
        content_type: 'blogPost',
        order: '-fields.publishedDate',
        ...(featured && { 'fields.isFeatured': true }),
        limit: featured ? 3 : 100,
        include: 2 // Include 2 levels of linked assets/entries
      }
      
      const entries = await ($contentful as ContentfulClientApi).getEntries(query)
      
      return entries.items.map(item => ({
        id: item.sys.id,
        ...item.fields
      })) as BlogPost[]
    } catch (error) {
      console.error('Error fetching blog posts:', error)
      return []
    }
  }

  const fetchBlogPost = async (slug: string) => {
    try {
      const entries = await ($contentful as ContentfulClientApi).getEntries({
        content_type: 'blogPost',
        'fields.slug': slug,
        limit: 1,
        include: 2
      })

      if (!entries.items.length) return null

      return {
        id: entries.items[0].sys.id,
        ...entries.items[0].fields
      } as BlogPost
    } catch (error) {
      console.error('Error fetching blog post:', error)
      return null
    }
  }

  return {
    fetchBlogPosts,
    fetchBlogPost
  }
}