import { useNavigate } from "react-router-dom";

const Items = ({ items }) => {
  const navigation = useNavigate();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 p-2 sm:p-4 md:p-6">
      {items.map((item) => (
        <div
          onClick={() => navigation("/details", { state: { item } })}
          key={item.id}
          className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center p-3 sm:p-4 md:p-5 cursor-pointer transform hover:-translate-y-1 hover:scale-105"
        >
          <img
            src={item.image}
            alt={item.name}
            className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 object-cover rounded-md mb-2 sm:mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-semibold text-sm sm:text-base md:text-lg text-gray-800 mb-1 sm:mb-2 text-center transition-colors duration-300 group-hover:text-blue-700">
            {item.name}
          </span>
          <span className="text-blue-600 font-bold text-xs sm:text-sm md:text-md mb-1 transition-colors duration-300 group-hover:text-blue-800">
            ₹{item.price}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Items;
