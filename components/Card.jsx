import Image from "next/image";
import Link from "next/link";
import { BsHandThumbsUp } from "react-icons/bs";

const Card = ({ result }) => {
  return (
    <div className="p-2 my-5 border border-slate-400 shadow-md hover:shadow-slate-400 rounded-lg cursor-pointer sm:p-3 sm:hover:shadow-slate-400  sm:m-2 transition-shadow duration-300 space-y-3 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt="image not found"
          width={350}
          height={500}
          placeholder="blur"
          blurDataURL="/spin.svg"
          className="rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 w-full object-cover"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Link>
      <div className="space-y-1">
        <p className="">{result.overview.substring(0, 50)}...</p>
        <h3 className="font-semibold truncate text-lg">
          {result.title || result.name}
        </h3>
        <p className="flex items-center gap-5">
          {result.release_date || result.first_air_date}
          <span className="flex items-center gap-[2px]">
            <BsHandThumbsUp /> {result.vote_count}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
