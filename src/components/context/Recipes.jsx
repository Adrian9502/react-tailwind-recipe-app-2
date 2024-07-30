import { Link } from "react-router-dom";

export default function Recipes({ item }) {
  return (
    <div className="border text-center p-4 rounded-lg shadow-2xl bg-white sm:mx-2">
      <h3 className=" font-bold mb-2 sm: text-base lg:text-lg line-clamp-1">
        {item.title}
      </h3>
      {item.image_url && (
        <img
          src={item.image_url}
          alt={item.title}
          className="w-full h-48 object-cover mb-2 rounded-xl"
        />
      )}
      <p className="text-orange-500 py-2 text-sm text-start italic">
        by: {item.publisher}
      </p>
      <Link
        to={`/recipe-item/${item.id}`}
        className="inline-block px-6 text-base py-2 bg-orange-500 text-slate-100 md:text-l lg:text-lg rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300 sm:text-base"
      >
        Recipe Details
      </Link>
    </div>
  );
}
