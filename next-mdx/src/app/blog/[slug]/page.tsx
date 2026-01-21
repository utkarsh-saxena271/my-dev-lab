import fs from "fs"
import path from "path"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`@/content/${slug}.mdx`)
 
  return <Post />
}
 
// export function generateStaticParams() {
//   return [{ slug: 'welcome' }, { slug: 'about' }]
// }
 
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