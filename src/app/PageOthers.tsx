import Image from 'next/image'
import { client } from '@/api'
import { EntryThumbnails } from '@/components/EntryThumbnails/EntryThumbnails'
import { EntryThumbnail } from '@/components/EntryThumbnail/EntryThumbnail'
import { EntryItem } from '@/components/EntryItem/EntryItem'
import { EntryThumbnailContainer } from '@/components/EntryThumbnailContainer/EntryThumbnailContainer'
import { About } from '@/components/About/About'
// ;/インポートしてる/

export default async function Home() {
  const { contents: entries } = await client.blogs.$get({
    query: {
      offset: 0,
      limit: 10,
      filters: 'publishedAt[greater_than]2023-11-10',
      //上の数字直すとキャッシュクリアされる
      fields: 'id,title,category,publishedAt,eyecatch,description',
    },
  })

  //console.log(entries);
  //console.log(entries.map((v) => v.title));

  return (
    <>
      <EntryThumbnails entries={entries} />
      <EntryThumbnailContainer>
        {entries.map((v) => (
          <EntryThumbnail
            id={v.id}
            key={v.id}
            title={v.title}
            description={v.description}
            eyecatch={v.eyecatch}
          ></EntryThumbnail>
        ))}
      </EntryThumbnailContainer>
      <About></About>
    </>
  )
}
