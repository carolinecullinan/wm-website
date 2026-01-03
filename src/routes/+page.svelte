<script>
</script>

<svelte:head>
	<title>Wilson Malakkaran - Contemporary Artist</title>
	<meta name="description" content="Art portfolio of Wilson Malakkaran, contemporary artist from Kerala working with recycled materials and acrylic." />
</svelte:head>

<section class="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
	<div class="container-custom text-center">
		<h1 class="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
			Wilson Malakkaran
		</h1>
		<p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
			Contemporary artist transforming discarded materials into luminous depth
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/works" class="btn-primary">
				View Works
			</a>
			<a href="/about" class="btn-secondary">
				About the Artist
			</a>
		</div>
	</div>
	
	<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
		<svg class="w-6 h-6 animate-bounce text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
		</svg>
	</div>
</section>

<section class="section-padding bg-white">
	<div class="container-custom">
		<div class="text-center mb-12">
			<h2 class="text-4xl font-bold mb-4">Featured Works</h2>
			<p class="text-gray-600 text-lg">A selection of recent paintings</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each [1, 2, 3] as item}
				<a href="/works" class="group block">
					<div class="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4">
						<div class="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
							<span class="text-gray-500 text-sm">Artwork {item}</span>
						</div>
					</div>
					<h3 class="font-semibold text-lg mb-1">Untitled {item}</h3>
					<p class="text-gray-600 text-sm">2024 • Acrylic on recycled paper</p>
				</a>
			{/each}
		</div>
		
		<div class="text-center mt-12">
			<a href="/works" class="btn-secondary">
				View All Works
			</a>
		</div>
	</div>
</section>

<section class="section-padding bg-gray-50">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-4xl font-bold mb-8 text-center">Artist Statement</h2>
			<div class="prose prose-lg max-w-none">
				<p class="text-gray-700 leading-relaxed mb-6">
					I construct paintings from paper—bakery bags, produce wrappings—materials already marked by the passage of time and previous uses. A practice I have employed since childhood: I covered my schoolbooks with recycled paper, a gesture that united utility and care. A teaching passed down from my mother that became a foundational element of my artistic activity.
				</p>
				<p class="text-gray-700 leading-relaxed">
					The materials I use guide the work. I describe the encounter with them as combat: the paper never gives me what I want; contaminated by oil, moisture, and use, each surface asserts its own materiality over my intention...
				</p>
			</div>
			<div class="text-center mt-8">
				<a href="/about" class="text-gray-900 font-semibold hover:text-gray-600 transition-colors">
					Read more →
				</a>
			</div>
		</div>
	</div>
</section>

<section class="section-padding bg-gray-900 text-white">
	<div class="container-custom text-center">
		<h2 class="text-4xl font-bold mb-6">Get in Touch</h2>
		<p class="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
			Interested in collaborations, exhibitions, or purchasing artwork?
		</p>
		<a href="/contact" class="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
			Contact Me
		</a>
	</div>
</section>
