import { createFileRoute } from '@tanstack/react-router';
import { Button } from '../shared/components/ui/Button';
import { Card } from '../shared/components/ui/Card';
import { useHelloItems } from '../shared/hooks/useHelloItems';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const { data: items, isLoading, error } = useHelloItems();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="text-center text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="text-center text-red-600">Error: {error.message}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          👋 Hello World!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to your new Frontend Template
        </p>
        <Button onClick={() => alert('Hello from Frontend Template!')}>
          Click Me
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {items?.map((item) => (
          <Card key={item.id}>
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${
                  item.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : item.status === 'completed'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {item.status}
              </span>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
