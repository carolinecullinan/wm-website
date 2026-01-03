<script>
	const heroImage = 'works/WM-37.jpeg';
</script>

<svelte:head>
	<title>Wilson Malakkaran - Contemporary Artist</title>
	<meta name="description" content="Art portfolio of Wilson Malakkaran, contemporary artist" />
</svelte:head>

<section class="relative min-h-screen flex items-center justify-center bg-white py-16">
	<div class="container-custom">
		<div class="max-w-4xl mx-auto">
			<div class="mb-12">
				<img 
					src="/images/{heroImage}" 
					alt="Wilson Malakkaran artwork"
					class="w-full h-auto object-contain"
				/>
			</div>
			
			<div class="text-center">
				<h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
					Wilson Malakkaran
				</h1>
				<p class="text-lg text-gray-600 mb-8">
					Contemporary Artist
				</p>
				<a href="/works" class="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
					View Selected Works
				</a>
			</div>
		</div>
	</div>
</section>