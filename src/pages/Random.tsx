import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RandomModal from "../components/RandomModal";
import foods from "../assets/foods.json";

interface resultProp {
  title: string;
  img: string;
  catagory?: string[];
  mixed: string[];
  detail?: string;
}

function Random() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [finalResult, setFinalResult] = useState([] as resultProp[]);
  const [mixedFilter, setMixedFilter] = useState([] as string[]);
  const location = useLocation();
  const data = location.state.data;
  console.log("Passed Data: ", data);

  const updateSharedState = () => {
    setIsModalOpen(!isModalOpen);
  };

  // let all_mixed = ["ไก่", "ทะเล", "แป้ง", "ของหวาน"];
  // const mixed_filter: string[] = [];
  // let result: resultProp[] = [];

  const cal = () => {
    const mixed_filtered = foods.filter((item) =>
      item.mixed.some((mixed) => mixedFilter.includes(mixed))
    );
    // const countries_filtered = mixed_filtered.filter(e => e.category.some((mixed) => mixed_filter.includes(mixed)))
    // console.log(countries_filtered);
    setFinalResult(mixed_filtered);
    console.log("Result: ", finalResult);
    console.log("Mixed Filter: ", mixed_filtered)
  };

  useEffect(() => {
    data.forEach((wanted: string) => {
      if (!mixedFilter.find((e) => e === wanted)) {
        setMixedFilter([...mixedFilter, wanted]);
      } else {
        const index = mixedFilter.findIndex((e) => e === wanted);
        setMixedFilter(mixedFilter.filter((_, i) => i !== index));
      }
    });
    cal();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="w-full h-screen flex flex-col md:flex-row justify-center items-center overflow-auto">
      <img
        src="/background-2.png"
        alt="background of page 2"
        className="w-full h-full absolute -z-20 overflow-noscroll"
      />
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center justify-center group">
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="relative z-40"
          >
            <img
              src="/box.png"
              alt="Box1"
              className="mt-48 cursor-pointer drop-shadow-lg z-50"
            />
          </button>
          <img
            src="/light.png"
            alt="light"
            className="absolute mb-60 opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 z-20 hidden group-hover:block"
          />
        </div>
        <div className="flex flex-col items-center justify-center group">
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="relative z-40"
          >
            <img
              src="/box.png"
              alt="Box1"
              className="mt-48 cursor-pointer drop-shadow-lg z-50"
            />
          </button>
          <img
            src="/light.png"
            alt="light"
            className="absolute mb-72 opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 z-20 hidden group-hover:block"
          />
        </div>
      </div>
      <RandomModal
        result={finalResult[Math.floor(Math.random() * finalResult.length)]}
        isModalOpen={isModalOpen}
        setIsModalOpen={updateSharedState}
      />
    </div>
  );
}

export default Random;
