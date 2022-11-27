import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projekty - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projekty
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Poniżej znajdują się opisane projekty własne, bądź w których brałem udział.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
        <p
          className="text-lg leading-10 text-gray-500 dark:text-gray-400"
          style={{ justifyContent: 'center' }}
        >
          Na obecny moment to wszystko co mogę pokazać światłu dziennemu. Jeśli żeby znalazł się
          tutaj Twój projekt z moim udziałem -> zapraszam do kontaktu. ⬇️
        </p>
      </div>
    </>
  )
}
