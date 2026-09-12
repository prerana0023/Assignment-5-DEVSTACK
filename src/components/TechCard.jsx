const TechCard = ({ technology, onAdd, isAdded }) => {
  return (
    <div className="flex min-h-[245px] flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-9 w-9 object-contain"
        />

        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-600">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-4 text-sm font-bold text-slate-900">
        {technology.name}
      </h3>

      <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-500">
        {technology.description}
      </p>

      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600">
          {technology.category}
        </span>

        <span className="text-[10px] font-medium text-slate-500">
          {technology.difficulty}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-600">
          ⭐ {technology.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-auto w-full rounded-md px-3 py-2 text-xs font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-slate-200 text-slate-500"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;