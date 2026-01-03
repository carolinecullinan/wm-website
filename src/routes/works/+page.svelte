<script>
	const artworks = [
		{
			id: 'WM-01-01',
			title: 'UNTITLED 01-01',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-01-01.jpg',
		},
		{
			id: 'WM-01-02',
			title: 'UNTITLED 01-02',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-01-02.jpg',
		},
		{
			id: 'WM-01-03',
			title: 'UNTITLED 01-03',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-01-03.jpg',
		},
		// {
		// 	id: 'WM-01-04',
		// 	title: 'UNTITLED 01-04',
		// 	medium: 'ACRYLIC ON PAPER',
		// 	image: 'works/WM-01-04.jpg',
		// },
		// {
		// 	id: 'WM-01-05',
		// 	title: 'UNTITLED 01-05',
		// 	medium: 'ACRYLIC ON PAPER',
		// 	image: 'works/WM-01-05.jpg',
		// },
		// {
		// 	id: 'WM-01-06',
		// 	title: 'UNTITLED 01-06',
		// 	medium: 'ACRYLIC ON PAPER',
		// 	image: 'works/WM-01-06.jpg',
		// },

		// {
		// 	id: 'WM-01-07',
		// 	title: 'UNTITLED 01-07',
		// 	medium: 'ACRYLIC ON PAPER',
		// 	image: 'works/WM-01-07.jpg',
		// },

		// {
		// 	id: 'WM-01-08',
		// 	title: 'UNTITLED 01-08',
		// 	medium: 'ACRYLIC ON PAPER',
		// 	image: 'works/WM-01-08.jpg',
		// },
		// {
		// 	id: 'WM-01-09',
		// 	title: 'UNTITLED 01-09',
		// 	medium: 'ACRYLIC ON PAPER',
		// 	image: 'works/WM-01-09.jpg',
		// },
		// {
		// 	id: 'WM-01-10',
		// 	title: 'UNTITLED 01-10',
		// 	medium: 'ACRYLIC ON PAPER',
		// 	image: 'works/WM-01-10.jpg',
		// },
		// {
		// 	id: 'WM-01-11',
		// 	title: 'UNTITLED 01-11',
		// 	medium: 'ACRYLIC ON PAPER',
		// 	image: 'works/WM-01-11.jpg',
		// },
		// {
		// 	id: 'WM-01-12',
		// 	title: 'UNTITLED 01-12',
		// 	medium: 'ACRYLIC ON PAPER',
		// 	image: 'works/WM-01-12.jpg',
		// },
		// {
		// 	id: 'WM-01-13',
		// 	title: 'UNTITLED 01-13',
		// 	medium: 'ACRYLIC ON PAPER',
		// 	image: 'works/WM-01-13.jpg',
		// },
		// {
		// 	id: 'WM-01-14',
		// 	title: 'UNTITLED 01-14',
		// 	medium: 'ACRYLIC ON PAPER',
		// 	image: 'works/WM-01-14.jpg',
		// },

		// {
		// 	id: 'WM-01-15',
		// 	title: 'UNTITLED 01-15',
		// 	medium: 'ACRYLIC ON PAPER',
		// 	image: 'works/WM-01-15.jpg',
		// },

		// {
		// 	id: 'WM-01-16',
		// 	title: 'UNTITLED 01-16',
		// 	medium: 'ACRYLIC ON PAPER',
		// 	image: 'works/WM-01-16.jpg',
		// },

		{
			id: 'WM-02-01',
			title: 'UNTITLED 01-17',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-02-01.jpg',
		},
		{
			id: 'WM-02-02',
			title: 'UNTITLED 02-02',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-02-02.jpg',
		},

		{
			id: 'WM-02-03',
			title: 'UNTITLED 02-03',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-02-03.jpg',
		},

		{
			id: 'WM-03-01',
			title: 'UNTITLED 03-01',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-03-01.jpg',
		},

		{
			id: 'WM-03-02',
			title: 'UNTITLED 03-02',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-03-02.jpg',
		},

		{
			id: 'WM-03-03',
			title: 'UNTITLED 03-03',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-03-03.jpg',
		},
		
		{
			id: 'WM-04-01',
			title: 'UNTITLED 04-01',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-04-01.jpg',
		},
		
		{
			id: 'WM-04-02',
			title: 'UNTITLED 04-02',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-04-02.jpg',
		},
		
		{
			id: 'WM-04-03',
			title: 'UNTITLED 04-03',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-04-03.jpg',
		},
		
		{
			id: 'WM-05',
			title: 'UNTITLED 05',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-05.jpg',
		},

		{
			id: 'WM-06',
			title: 'UNTITLED 06',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-06.jpg',
		},

		{
			id: 'WM-07',
			title: 'UNTITLED 07',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-07.jpg',
		},

		{
			id: 'WM-08',
			title: 'UNTITLED 08',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-08.jpg',
		},

		{
			id: 'WM-09',
			title: 'UNTITLED 09',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-09.jpg',
		},

		{
			id: 'WM-10',
			title: 'UNTITLED 10',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-10.jpg',
		},

		{
			id: 'WM-11',
			title: 'UNTITLED 11',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-11.jpg',
		},

		{
			id: 'WM-12',
			title: 'UNTITLED 12',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-12.jpg',
		},

		{
			id: 'WM-13',
			title: 'UNTITLED 13',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-13.jpg',
		},

		{
			id: 'WM-14',
			title: 'UNTITLED 14',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-14.jpg',
		},

		{
			id: 'WM-15',
			title: 'UNTITLED 15',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-15.jpg',
		},

		{
			id: 'WM-16',
			title: 'UNTITLED 16',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-16.jpg',
		},

		{
			id: 'WM-17',
			title: 'UNTITLED 17',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-17.jpg',
		},

		{
			id: 'WM-18',
			title: 'UNTITLED 18',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-18.jpg',
		},

		{
			id: 'WM-19',
			title: 'UNTITLED 19',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-19.jpg',
		},
		
		{
			id: 'WM-20',
			title: 'UNTITLED 20',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-20.jpg',
		},

		{
			id: 'WM-21',
			title: 'UNTITLED 21',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-21.jpg',
		},

		{
			id: 'WM-22',
			title: 'UNTITLED 22',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-22.jpg',
		},

		{
			id: 'WM-23',
			title: 'UNTITLED 23',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-23.jpg',
		},

		{
			id: 'WM-24',
			title: 'UNTITLED 24',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-24.jpg',
		},

		{
			id: 'WM-25',
			title: 'UNTITLED 25',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-25.jpg',
		},

		{
			id: 'WM-26',
			title: 'UNTITLED 26',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-26.jpg',
		},

		{
			id: 'WM-27',
			title: 'UNTITLED 27',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-27.jpg',
		},

		{
			id: 'WM-28',
			title: 'UNTITLED 28',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-28.jpg',
		},

		{
			id: 'WM-29',
			title: 'UNTITLED 29',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-29.jpg',
		},

		{
			id: 'WM-30',
			title: 'UNTITLED 30',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-30.jpg',
		},

		{
			id: 'WM-31',
			title: 'UNTITLED 31',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-31.jpg',
		},

		{
			id: 'WM-32',
			title: 'UNTITLED 32',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-32.jpg',
		},

		{
			id: 'WM-33',
			title: 'UNTITLED 33',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-33.jpg',
		},

		{
			id: 'WM-34',
			title: 'UNTITLED 34',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-34.jpg',
		},

		{
			id: 'WM-35',
			title: 'UNTITLED 35',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-35.jpg',
		},


		{
			id: 'WM-37',
			title: 'UNTITLED 37',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-37.jpeg',
		},

		{
			id: 'WM-36',
			title: 'UNTITLED 36',
			medium: 'ACRYLIC ON PAPER',
			image: 'works/WM-36.jpg',
		},

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
	<meta name="description" content="Paintings by Wilson Malakkaran." />
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<section class="section-padding bg-white">
	<div class="container-custom">		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each artworks as work}
				<button 
					class="group text-left"
					on:click={() => openLightbox(work)}
				>
					<div class="aspect-square overflow-hidden relative">
						{#if work.image}
							<img 
								src="/images/{work.image}" 
								alt={work.title}
								class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
							/>
						{:else}
							<div class="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
								<span class="text-gray-500 text-sm">Image {work.id}</span>
							</div>
						{/if}
					</div>
				</button>
			{/each}
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
			class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
			on:click={closeLightbox}
			aria-label="Close"
		>
			<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
		
		<div 
			class="flex flex-col items-center gap-3"
			on:click|stopPropagation
			role="presentation"
		>
			{#if selectedWork.image}
				<img 
					src="/images/{selectedWork.image}" 
					alt={selectedWork.title}
					class="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain"
				/>
				<div class="text-center">
					<p class="text-gray-400 text-sm">{selectedWork.title} • {selectedWork.medium}</p>
				</div>
			{:else}
				<span class="text-gray-500">Image {selectedWork.id}</span>
			{/if}
		</div>
	</div>
{/if}