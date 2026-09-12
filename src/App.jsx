import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechGrid from "./components/TechGrid";
import Footer from "./components/Footer";

const App = () => {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        return response.json();
      })
      .then((data) => {
        setTechnologies(data);
      })
      .catch(() => {
        toast.error("Failed to load technologies");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAdd = (technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemove = (id) => {
    const removedTechnology = stack.find(
      (technology) => technology.id === id
    );

    setStack((previousStack) =>
      previousStack.filter((technology) => technology.id !== id)
    );

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    setStack([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        <Hero />

        {loading ? (
          <section className="flex min-h-[400px] items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500"></div>

              <p className="text-sm text-slate-500">
                Loading technologies...
              </p>
            </div>
          </section>
        ) : (
          <TechGrid
            technologies={technologies}
            stack={stack}
            onAdd={handleAdd}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;