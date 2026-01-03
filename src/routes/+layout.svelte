<script>
	import '../app.css';
	import { page } from '$app/stores';
	
	let mobileMenuOpen = false;
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
	
	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
	
	const navItems = [
		{ name: 'Works', href: '/works' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' }
	];
</script>

<div class="min-h-screen flex flex-col">
	<nav class="bg-white border-b border-gray-200 sticky top-0 z-50">
		<div class="container-custom">
			<div class="flex justify-between items-center h-16">
				<a href="/" class="text-2xl font-bold tracking-tight hover:text-gray-600 transition-colors">
					Wilson Malakkaran
				</a>
				
				<div class="hidden md:flex space-x-8">
					{#each navItems as item}
						<a 
							href={item.href} 
							class="text-gray-700 hover:text-gray-900 transition-colors font-medium"
							class:text-gray-900={$page.url.pathname === item.href || ($page.url.pathname === '/' && item.href === '/')}
							class:font-semibold={$page.url.pathname === item.href || ($page.url.pathname === '/' && item.href === '/')}
						>
							{item.name}
						</a>
					{/each}
				</div>
				
				<button 
					class="md:hidden p-2"
					on:click={toggleMobileMenu}
					aria-label="Toggle menu"
				>
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{#if mobileMenuOpen}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						{:else}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						{/if}
					</svg>
				</button>
			</div>
			
			{#if mobileMenuOpen}
				<div class="md:hidden py-4 border-t border-gray-200">
					{#each navItems as item}
						<a 
							href={item.href} 
							class="block py-2 text-gray-700 hover:text-gray-900 transition-colors"
							on:click={closeMobileMenu}
						>
							{item.name}
						</a>
					{/each}
				</div>
			{/if}
		</div>
	</nav>
	
	<main class="flex-grow">
		<slot /> 
	</main>
	
	<footer class="bg-gray-50 border-t border-gray-200 mt-auto">
		<div class="container-custom py-8">
			<div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
				<p class="text-gray-600 text-sm">
					© {new Date().getFullYear()} Wilson Malakkaran.
				</p>
				<div class="flex space-x-6">
					<a href="https://instagram.com/malakkaran" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Instagram">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</footer>
</div>
