<script>
	const artworks = [
		{
			id: 1,
			title: 'Untitled 1',
			year: '2024',
			medium: 'Acrylic on recycled paper',
			dimensions: '100 x 80 cm',
			available: true
		},
		{
			id: 2,
			title: 'Untitled 2',
			year: '2024',
			medium: 'Acrylic on recycled paper',
			dimensions: '120 x 90 cm',
			available: true
		},
		{
			id: 3,
			title: 'Untitled 3',
			year: '2023',
			medium: 'Acrylic on recycled paper',
			dimensions: '80 x 80 cm',
			available: false
		},
		{
			id: 4,
			title: 'Untitled 4',
			year: '2023',
			medium: 'Acrylic on recycled paper',
			dimensions: '100 x 100 cm',
			available: true
		},
		{
			id: 5,
			title: 'Untitled 5',
			year: '2023',
			medium: 'Acrylic on recycled paper',
			dimensions: '90 x 70 cm',
			available: true
		},
		{
			id: 6,
			title: 'Untitled 6',
			year: '2022',
			medium: 'Acrylic on recycled paper',
			dimensions: '110 x 85 cm',
			available: false
		}
	];
	
	let selectedWork = null;
	
	function openLightbox(work) {
		selectedWork = work;
	}
	
	function closeLightbox() {
		selectedWork = null;
	}
	
	function handleKeydown(event) {
		if (event.key === 'Escape') {
			closeLightbox();
		}
	}
</script>

<svelte:head>
	<title>Works - Wilson Malakkaran</title>
	<meta name="description" content="Gallery of paintings by Wilson Malakkaran." />
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<section class="section-padding bg-white">
	<div class="container-custom">
		<div class="text-center mb-16">
			<h1 class="text-4xl md:text-5xl font-bold mb-4">Works</h1>
			<p class="text-gray-600 text-lg max-w-2xl mx-auto">
				A collection of paintings created from recycled materials, transforming discarded paper into luminous depth
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each artworks as work}
				<button 
					class="group text-left"
					on:click={() => openLightbox(work)}
				>
					<div class="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4 relative">
						<div class="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
							<span class="text-gray-500 text-sm">Image {work.id}</span>
						</div>
						
						{#if work.available}
							<div class="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
								Available
							</div>
						{:else}
							<div class="absolute top-4 right-4 bg-gray-500 text-white text-xs px-3 py-1 rounded-full">
								Sold
							</div>
						{/if}
					</div>
					<h3 class="font-semibold text-lg mb-1">{work.title}</h3>
					<p class="text-gray-600 text-sm mb-1">{work.year}</p>
					<p class="text-gray-600 text-sm">{work.medium}</p>
					<p class="text-gray-500 text-sm">{work.dimensions}</p>
				</button>
			{/each}
		</div>
		
		<div class="mt-16 text-center">
			<p class="text-gray-600 mb-6">Interested in purchasing or commissioning a work?</p>
			<a href="/contact" class="btn-primary">
				Get in Touch
			</a>
		</div>
	</div>
</section>

{#if selectedWork}
	<div 
		class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
		on:click={closeLightbox}
		role="dialog"
		aria-modal="true"
	>
		<button 
			class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
			on:click={closeLightbox}
			aria-label="Close"
		>
			<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
		
		<div 
			class="max-w-5xl w-full"
			on:click|stopPropagation
			role="presentation"
		>
			<div class="bg-gray-200 rounded-lg mb-4 aspect-video flex items-center justify-center">
				<span class="text-gray-500">Full Image {selectedWork.id}</span>
			</div>
			<div class="bg-white rounded-lg p-6">
				<h2 class="text-2xl font-bold mb-2">{selectedWork.title}</h2>
				<p class="text-gray-600 mb-2">{selectedWork.year} • {selectedWork.medium}</p>
				<p class="text-gray-600 mb-4">{selectedWork.dimensions}</p>
				{#if selectedWork.available}
					<span class="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
						Available for Purchase
					</span>
				{:else}
					<span class="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
						Sold
					</span>
				{/if}
			</div>
		</div>
	</div>
{/if}
