const Sidebar = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <aside className="h-fit rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold text-slate-900">Your Stack</h2>

          <p className="mt-1 text-[10px] text-slate-400">
            {stack.length} Technology Selected
          </p>
        </div>

        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-xs font-semibold text-rose-500 hover:text-rose-600"
          >
            Remove All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="mt-6 rounded-lg border border-dashed border-slate-200 px-4 py-8 text-center">
          <p className="text-xs text-slate-400">
            Your stack is empty.
          </p>

          <p className="mt-1 text-[10px] text-slate-300">
            Add technologies to build your stack.
          </p>
        </div>
      ) : (
        <div className="mt-4 space-y-3">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-lg border border-slate-100 p-3"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-8 w-8 object-contain"
              />

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-xs font-semibold text-slate-800">
                  {technology.name}
                </h3>

                <p className="text-[10px] text-slate-400">
                  {technology.category}
                </p>
              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className="text-sm font-bold text-slate-400 hover:text-rose-500"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;