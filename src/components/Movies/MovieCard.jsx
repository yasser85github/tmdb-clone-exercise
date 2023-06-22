function getPosterURL(url) {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${url}`;
}

export default function MovieCard({ title, release_date, poster_path }) {
  return (
    <div className="flex flex-col pl-5 gap-2">
      <img
        src={getPosterURL(poster_path)}
        alt={title}
        className="w-[150px] h-[225px] shadow-sm rounded-md"
      />
      <div className="flex flex-col px-3 w-[150px]">
        <h1 className="font-bold">{title}</h1>
        <p className="font-normal text-slate-500">{release_date}</p>
      </div>
    </div>
  );
}
