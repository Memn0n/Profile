import { getPage } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div className="mx-10">
      <h1
        className="bg-gradient-to-r from-orange-400 via-yellow-500 to-blue-600 
          bg-clip-text text-transparent text-5xl drop-shadow font-extrabold"
      >
        {page.title}
      </h1>
      <div className="text-lg text-gray-700 mt-10">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
