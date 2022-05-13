import { data } from './data/data'
import Image from 'next/image'

const data_list = data

export default function Main() {
  return (
    <div className="flex flex-col">
      {data_list.map((data) => {
        return (
          <div key={data.id} className="border-2">
            <p className="text-xl font-semibold">{data.name}</p>
            <p>{data.release_date}</p>
            <p>{data.tech_stack}</p>
            {data.image_src.map((img) => {
              return (
                <>
                  <Image src={img} width={1500} height={750} />
                </>
              )
            })}
            <p>{data.paragraph}</p>
          </div>
        )
      })}
    </div>
  )
}
