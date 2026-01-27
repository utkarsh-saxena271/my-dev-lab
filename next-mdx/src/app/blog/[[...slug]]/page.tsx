import fs from "fs"
import { notFound } from "next/navigation"
import path from "path"

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const { slug = [] } = await params

  // turn ['uk', 'each', 'element'] → 'uk/each/element'
  const path = slug.join('/')

  try {
    const { default: Post } = await import(`@/content/${path}.mdx`)

  return (
     <Post/>
  )
  } catch {
    notFound()
  }
}

 
 
export const dynamicParams = false



export function generateStaticParams() {
  const content = path.join('')

  const files = fs.readdirSync(content)

  return files
    .filter(file => file.endsWith(".mdx"))
    .map(file => ({
      slug: file.replace(".mdx", ""),
    }))
}