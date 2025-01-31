import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { EntryThumbnail } from '@/components/EntryThumbnail/EntryThumbnail'
import { EntryThumbnailContainer } from '@/components/EntryThumbnailContainer/EntryThumbnailContainer'
import styles from './EntryThumbnails.module.scss'
// ;/インポートしてる/

type Entry = {
  id: string
  title?: string
  description?: string
  eyecatch?: {
    url: string
    alt: string
    height: number
    width: number
  }
}

type Props = {
  entries: Entry[]
}

export const EntryThumbnails = (props: Props) => {
  return (
    <div className={styles.title}>
      <h2 className={styles.works}>Works</h2>
      <EntryThumbnailContainer>
        {props.entries.map((v) => (
          <EntryThumbnail
            id={v.id}
            key={v.id}
            title={v.title}
            description={v.description}
            eyecatch={v.eyecatch}
          ></EntryThumbnail>
        ))}
      </EntryThumbnailContainer>
    </div>
  )
}
