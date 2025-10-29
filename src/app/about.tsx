import { createFileRoute } from '@tanstack/react-router';
import { Card } from '../shared/components/ui/Card';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">About</h1>

      <div className="max-w-3xl space-y-6">
        <Card>
          <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✨ <strong>React 19</strong> - UI library</li>
            <li>⚡ <strong>Vite</strong> - Build tool</li>
            <li>🎨 <strong>Tailwind CSS v4</strong> - Styling</li>
            <li>🔀 <strong>TanStack Router</strong> - Routing</li>
            <li>🔄 <strong>TanStack Query</strong> - Data fetching</li>
            <li>🔷 <strong>TypeScript</strong> - Type safety</li>
          </ul>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold mb-3">Structure</h2>
          <p className="text-gray-700 mb-4">
            This template follows a simple, maintainable structure inspired by Next.js:
          </p>
          <ul className="space-y-1 text-sm text-gray-600 font-mono">
            <li>📁 app/ - File-based routes</li>
            <li>📁 shared/components/ - UI & Layout components</li>
            <li>📁 shared/lib/ - API, Query, Router configs</li>
            <li>📁 shared/hooks/ - Custom React hooks</li>
            <li>📁 shared/utils/ - Helper functions</li>
            <li>📁 shared/styles/ - Global styles</li>
          </ul>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold mb-3">Getting Started</h2>
          <p className="text-gray-700">
            Check out the <code className="bg-gray-100 px-2 py-1 rounded">README.md</code> file
            for detailed examples and best practices on how to create routes, hooks, and mock data.
          </p>
        </Card>
      </div>
    </div>
  );
}
