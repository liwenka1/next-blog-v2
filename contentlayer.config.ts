import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrismPlus from 'rehype-prism-plus'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true }
  },
  computedFields: {
    readingTime: { type: 'json', resolve: (doc) => doc.body.raw },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, '')
    },
    path: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath
    },
    filePath: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFilePath
    },
    toc: { type: 'string', resolve: (doc) => doc.body.raw }
  }
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Post],
  mdx: { rehypePlugins: [[rehypePrismPlus, { ignoreMissing: true }]] }
})
