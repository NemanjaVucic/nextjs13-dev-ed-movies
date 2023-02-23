"use client";

import Link from "next/link";
import Image from "next/image";

export default function Movie({ title, release_date, poster_path, id }) {
  const imgPath = `https://image.tmdb.org/t/p/original${poster_path}`;
  return (
    <div>
      <h1>{title}</h1>
      <h2>Release date: {release_date}</h2>
      <Link href={`${id}`}>
        <Image src={imgPath} width={800} height={800} alt={poster_path} />
      </Link>
    </div>
  );
}
