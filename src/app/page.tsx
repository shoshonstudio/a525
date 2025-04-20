import TransitionLink from "@/components/transition-link";

export default function Home() {
  return (
		<div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-800">
			<div className="text-center px-4 z-20 relative">
				<h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
					Home
				</h1>
				<p className="text-xl text-gray-100 max-w-2xl mx-auto drop-shadow mb-8">
					Select a page to explore
				</p>

				<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
					<TransitionLink
						href="/page1"
						className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg text-center transition-all hover:bg-white/30 hover:shadow-md"
					>
						Go to page 1
					</TransitionLink>
					<TransitionLink
						href="/page2"
						className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg text-center transition-all hover:bg-white/30 hover:shadow-md"
					>
						Go to page 2
					</TransitionLink>
				</div>
			</div>
		</div>
  );
}
