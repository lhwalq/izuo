import Link from "next/link";

export default function NotFoundView() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4">
      <div className="text-center mt-32">
        <p className="text-xl font-bold text-blue-600">404</p>
        <p className="text-4xl font-semibold text-gray-900 mt-2">Page not found</p>
        <p className="text-lg text-gray-600 mt-4">This page could not be found.</p>
        <Link href="/">
          <p className="bg-blue-500 text-gray-50 hover:bg-blue-400 mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2">
            Go back home
          </p>
        </Link>
      </div>
    </div>
  )
}
