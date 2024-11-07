import Link from 'next/link';

export default function Home() {
    return (
        <main className="p-4">
            <h1 className="text-3xl font-bold mb-4">
                CPRG 306: Web Development 2 - Assignments
            </h1>
            
            {/* Fix the Link elements to use proper syntax */}
            <div className="flex flex-col space-y-2">
                <Link href="/week-2" className="hover:text-blue-500">Week 2</Link>
                <Link href="/week-3" className="hover:text-blue-500">Week 3</Link>
                <Link href="/week-4" className="hover:text-blue-500">Week 4</Link>
                <Link href="/week-5" className="hover:text-blue-500">Week 5</Link>
                <Link href="/week-6" className="hover:text-blue-500">Week 6</Link>
                <Link href="/week-7" className="hover:text-blue-500">Week 7</Link>
                <Link href="/week-8" className="hover:text-blue-500">Week 8</Link>
            </div>
        </main>
    );
}