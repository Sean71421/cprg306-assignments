import NewItem from './new-item';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-white">Week 4 Assignment</h1>
      <NewItem />
    </main>
  );
}