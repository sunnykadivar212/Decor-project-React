const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-indigo-500 border-b-transparent rounded-full animate-spin-reverse"></div>
          </div>
        </div>
        <div className="flex space-x-2">
          <span className="text-white text-lg font-medium animate-pulse">
            Loading
          </span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
