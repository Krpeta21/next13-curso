import { Suspense } from 'react'
import { ListOfPosts } from './ListOfPosts'

export default async function PostPage ({ params }) {
  return (
    <section>
      <Suspense fallback={<p>Cargando post...</p>}>
        <ListOfPosts />
      </Suspense>
    </section>
  )
}
