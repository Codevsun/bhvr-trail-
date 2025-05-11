import { Counter } from "./Counter.js";

export default function Page() {
  return (
    <>
   
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Welcome to Recipe Book
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Discover and share your favorite recipes with our community
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {/* Recipe Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Recipe Name</h3>
                <p className="mt-2 text-sm text-gray-500">
                  A brief description of the recipe goes here. This can include a quick overview
                  of what makes this recipe special.
                </p>
                <div className="mt-4">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                    View Recipe
                  </button>
                </div>
              </div>
            </div>

           </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Add New Recipe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
