import TransitionLink from "@/components/transition-link";

export default function Page1() {
	return (
		<div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-gray-800">
			<div className="text-center px-4 z-20 relative">
				<h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
					Welcome to Page 1
				</h1>
				<p className="text-xl text-gray-100 max-w-2xl mx-auto drop-shadow mb-8">
					A simple and beautiful hero section for your amazing content.
				</p>
				<TransitionLink
					href="/"
					className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg text-center -all hover:bg-white/30 hover:shadow-md inline-block"
				>
					Go Back
				</TransitionLink>
			</div>
		</div>
	);
}