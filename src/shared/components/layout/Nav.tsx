import { Link } from '@tanstack/react-router';

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            Frontend Template
          </Link>
          <div className="flex gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors [&.active]:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors [&.active]:text-blue-600"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
