<script>
	let formData = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};
	
	let formStatus = 'idle';
	
	function handleSubmit(event) {
		event.preventDefault();
		formStatus = 'submitting';
		
		setTimeout(() => {
			console.log('Form data:', formData);
			formStatus = 'success';
			
			formData = {
				name: '',
				email: '',
				subject: '',
				message: ''
			};
			
			setTimeout(() => {
				formStatus = 'idle';
			}, 5000);
		}, 1000);
	}
</script>

<svelte:head>
	<title>Contact - Wilson Malakkaran</title>
	<meta name="description" content="Get in touch with Wilson Malakkaran for collaborations, exhibitions, or inquiries." />
</svelte:head>

<section class="section-padding bg-white">
	<div class="container-custom max-w-4xl">
		<div class="text-center mb-12">
			<h1 class="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
			<p class="text-gray-600 text-lg">
				Interested in collaborations, exhibitions, or purchasing artwork? I'd love to hear from you.
			</p>
		</div>
		
		<div class="grid md:grid-cols-2 gap-12">
			<div>
				<h2 class="text-2xl font-bold mb-6">Contact Information</h2>
				
				<div class="space-y-6">
					<div class="flex items-start space-x-4">
						<svg class="w-6 h-6 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
						<div>
							<h3 class="font-semibold mb-1">Email</h3>
							<a href="mailto:wilson@wilsonmalakkaran.com" class="text-gray-600 hover:text-gray-900 transition-colors">
								wilson@wilsonmalakkaran.com
							</a>
						</div>
					</div>
					
					<div class="flex items-start space-x-4">
						<svg class="w-6 h-6 text-gray-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						<div>
							<h3 class="font-semibold mb-1">Location</h3>
							<p class="text-gray-600">
								Kerala, India
							</p>
						</div>
					</div>
					
					<div class="flex items-start space-x-4">
						<svg class="w-6 h-6 text-gray-600 mt-1" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
						</svg>
						<div>
							<h3 class="font-semibold mb-1">Instagram</h3>
							<a href="https://instagram.com/wilsonmalakkaran" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900 transition-colors">
								@wilsonmalakkaran
							</a>
						</div>
					</div>
				</div>
				
				<div class="mt-8 p-6 bg-gray-50 rounded-lg">
					<h3 class="font-semibold mb-3">Studio Visits</h3>
					<p class="text-gray-600 text-sm">
						Available by appointment. Please contact via email to schedule.
					</p>
				</div>
			</div>
			
			<div>
				<h2 class="text-2xl font-bold mb-6">Send a Message</h2>
				
				{#if formStatus === 'success'}
					<div class="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
						Thank you for your message! I'll get back to you soon.
					</div>
				{/if}
				
				<form on:submit={handleSubmit} class="space-y-6">
					<div>
						<label for="name" class="block text-sm font-medium text-gray-700 mb-2">
							Name *
						</label>
						<input 
							type="text" 
							id="name"
							bind:value={formData.name}
							required
							class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-shadow"
							placeholder="Your name"
						/>
					</div>
					
					<div>
						<label for="email" class="block text-sm font-medium text-gray-700 mb-2">
							Email *
						</label>
						<input 
							type="email" 
							id="email"
							bind:value={formData.email}
							required
							class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-shadow"
							placeholder="your.email@example.com"
						/>
					</div>
					
					<div>
						<label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
							Subject *
						</label>
						<input 
							type="text" 
							id="subject"
							bind:value={formData.subject}
							required
							class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-shadow"
							placeholder="What is this regarding?"
						/>
					</div>
					
					<div>
						<label for="message" class="block text-sm font-medium text-gray-700 mb-2">
							Message *
						</label>
						<textarea 
							id="message"
							bind:value={formData.message}
							required
							rows="6"
							class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-shadow resize-none"
							placeholder="Your message..."
						></textarea>
					</div>
					
					<button 
						type="submit"
						disabled={formStatus === 'submitting'}
						class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
					</button>
				</form>
				
				<p class="mt-4 text-sm text-gray-500">
					* Required fields. Your information will be kept private and only used to respond to your inquiry.
				</p>
			</div>
		</div>
	</div>
</section>
