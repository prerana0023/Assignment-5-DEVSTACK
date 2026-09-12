import TechCard from "./TechCard";
import Sidebar from "./Sidebar";

const TechGrid = ({
  technologies,
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}) => {
  return (
    <section id="technologies" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="mb-7">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Explore the{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Pick the technologies you want to include in your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => (
              <TechCard
                key={technology.id}
                technology={technology}
                onAdd={onAdd}
                isAdded={stack.some((item) => item.id === technology.id)}
              />
            ))}
          </div>

          <Sidebar
            stack={stack}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />
        </div>
      </div>
    </section>
  );
};

export default TechGrid;