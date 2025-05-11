import "./style.css";
import "./tailwind.css";
import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link.js";

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo />
            <div className="flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
              <Link href="/recipes" className="text-gray-700 hover:text-indigo-600">Recipes</Link>
              <Link href="/categories" className="text-gray-700 hover:text-indigo-600">Categories</Link>
              <Link href="/favorites" className="text-gray-700 hover:text-indigo-600">Favorites</Link>
            </div>
            <div>
              <Link href="/create" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Add Recipe
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>

      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">© 2024 Recipe Book. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center">
      <a href="/" className="flex items-center">
        <img src={logoUrl} className="h-8 w-8" alt="Recipe Book Logo" />
        <span className="ml-2 text-xl font-bold text-gray-900">Recipe Book</span>
      </a>
    </div>
  );
}
