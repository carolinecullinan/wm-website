<script>
	const heroImage = 'works/WM-37.jpeg'; // Change this to your contact page hero image
</script>

<svelte:head>
	<title>Contact - Wilson Malakkaran</title>
	<meta name="description" content="Get in touch with Wilson Malakkaran for collaborations, exhibitions, or inquiries." />
</svelte:head>

<section class="section-padding bg-white">
	<div class="container-custom">
		<div class="grid md:grid-cols-5 gap-16 items-start">
			<!-- Left Column - Contact Info (2 columns) -->
			<div class="md:col-span-2 space-y-12">
				<!-- Opening Hours -->
				<div>
					<h2 class="text-2xl font-bold mb-4">Opening Hours</h2>
					<p class="text-gray-600">
						Studio can be visited by appointment
					</p>
				</div>
				
				<!-- Contacts -->
				<div>
					<h2 class="text-2xl font-bold mb-4">Contacts</h2>
					<div class="space-y-4">
						<div>
							<p class="text-gray-600 text-sm mb-1">Telephone</p>
							<a href="tel:+919876543210" class="text-gray-900 hover:text-gray-600 transition-colors">
								+39 388 813 8879
							</a>
						</div>
						<div>
							<p class="text-gray-600 text-sm mb-1">Email</p>
							<a href="mailto:info@wilsonmalakkaran.com" class="text-gray-900 hover:text-gray-600 transition-colors">
								info@wilsonmalakkaran.com
							</a>
						</div>
					</div>
				</div>
				
				<!-- Address -->
				<div>
					<h2 class="text-2xl font-bold mb-4">Address</h2>
					<address class="text-gray-600 not-italic leading-relaxed">
						Via di Porta San Lorenzo 4<br>
						Rome, Italy, 00185 <br>
						RM, Italy
					</address>
				</div>
			</div>
			
			<!-- Right Column - Hero Image (3 columns) -->
			<div class="md:col-span-3">
				<img 
					src="/images/{heroImage}" 
					alt="Wilson Malakkaran studio"
					class="w-full h-auto object-contain"
				/>
			</div>
		</div>
	</div>
</section>