<script>
	import * as about from '$cms/settings/about.md';

	let status = '';
	const handleSubmit = async (data) => {
		status = 'Submitting...';
		const formData = new FormData(data.currentTarget);
		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: json
		});
		const result = await response.json();
		if (result.success) {
			console.log(result);
			status = result.message || 'Message sent!';
		}
	};
</script>

<main class="flex flex-col lg:grid lg:grid-cols-3 mx-auto lg:px-5 gap-3 w-full h-full">
	<section class="col-span-2 flex flex-col justify-center px-5 py-5 lg:px-0">
		<div class="max-w-4xl mx-auto flex gap-3 flex-col items-center justify-center">
			<div class="flex gap-2 flex-col items-center justify-center">
				<img
					class="w-28 rotate-[-15deg] rounded-full grayscale"
					src={about.metadata.picture}
					alt="{about.metadata.name} profile picture"
				/>
				<span>Hi, I'm {about.metadata.name}</span>
			</div>
			<div class="prose text-token mx-auto max-w-4xl">
				<svelte:component this={about.default} />
			</div>
			<div class="mx-auto w-full max-w-4xl">
				<h2 class="h2 mb-3">Skills</h2>
				<div class="flex flex-wrap md:grid md:grid-cols-3 gap-5">
					{#each about.metadata.skillCat as skillCat}
						<div class="flex flex-col gap-1 w-full">
							<h3 class="h3">{skillCat.category}</h3>
							<ul class="flex h-fit flex-wrap gap-2">
								{#each skillCat.skills as skills}
									<li class="border h-fit w-fit rounded-xl px-2 whitespace-nowrap">
										{skills.skill}
									</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section
		class="border-t md:border-l flex w-full items-center h-full pt-5 md:pl-5 col-span-1 px-5 md:px-0"
	>
		<div class="w-full">
			<h2 class="h2 mb-5">Contact Me</h2>
			<form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-3">
				<input type="hidden" name="access_key" value="d2ff10cc-2c29-4b22-8843-75a0a6a3fbd9" />
				<input type="hidden" name="subject" value="New message from okreate website" />
				<input type="checkbox" name="botcheck" id="" style="display: none;" />

				<label class="label" for="name">
					<span>Name</span>
					<input
						id="name"
						name="name"
						class="input rounded-xl border !border-primary-500 !bg-secondary-500"
						type="text"
						placeholder="John Doe"
						required
					/>
				</label>
				<label class="label" for="email">
					<span>Email</span>
					<input
						id="email"
						name="email"
						class="input rounded-xl border !border-primary-500 !bg-secondary-500"
						type="email"
						placeholder="john@doe.com"
						required
					/>
				</label>
				<label class="label" for="message">
					<span>Message</span>
					<textarea
						id="nessage"
						name="message"
						class="textarea rounded-xl border !border-primary-500 !bg-secondary-500"
						rows="4"
						placeholder="Hey, lets talk about stuff!"
						required
					/>
				</label>
				<div class="flex items-center gap-3">
					<button type="submit" class="btn border rounded-xl w-fit">Send</button>
					<div>{status}</div>
				</div>
			</form>
			<ul id="social" class="flex my-5 justify-center gap-5">
				{#each about.metadata.social as social}
					<li>
						<a
							class="flex flex-col items-center text-lg"
							href={social.name.toLowerCase() == 'email' ? `mailto:${social.link}` : social.link}
							target="_blank"
						>
							<iconify-icon class="text-3xl" icon={social.icon} />
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</section>
</main>
