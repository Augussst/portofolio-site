<script>
	let works = [
		{
			preview: '/web.png',
			name: 'Himpunan Mahasiswa Teknologi Pendidikan',
			link: 'https://himatekpend.upi.edu/',
			type: 'Website and Wordpress Theme',
			desc: 'WordPress based website for HIMA Tekpend Universitas Pendidikan Indonesia. I develop, maintain, and create a custom theme that represent the identity of the organization.'
		}
	];
</script>

<div class="overflow-x-auto">
	<div
		class="table w-full text-white border-2 border-innercontaineraccent bg-innercontainerbg pb-2.5 mt-3"
	>
		<div class="table-header-group">
			<div class="table-row [&>.table-cell]:capitalize text-sm">
				<div class="lg:table-cell md:table-cell capitalize text-left table-style-head hidden">
					preview
				</div>
				<div class="table-cell text-left table-style-head">name</div>
				<div class="table-cell text-left table-style-head">type</div>
				<div class="table-cell text-left table-style-head">description</div>
			</div>
		</div>
		<div class="table-row-group">
			{#each works as { preview, name, link, type, desc }}
				<div class="table-row">
					<div class="lg:table-cell md:table-cell table-style-main hidden">
						<img class="max-w-[220px]" src={preview} alt={name} />
					</div>
					<div class="table-cell table-style-main">
						<a href={link} target="_blank" class="text-accent font-bold">{name}</a>
					</div>
					<div class="table-cell table-style-main">{type}</div>
					<div class="table-cell table-style-main"><p>{desc}</p></div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.table-style-head {
		border-color: var(--inner-container-accent);
		border-bottom-width: 2px;
	}

	.table-style-head {
		padding: 3px 10px;
	}

	.table-style-main {
		padding: 10px 10px;
		position: relative;
		vertical-align: top;
		font-size: 18px;
	}

	.table-row-group {
		.table-row {
			position: relative;

			&:after {
				content: '';
				background: var(--inner-container-accent);
				position: absolute;
				bottom: 0;
				left: 50%;
				transform: translate(-50%, -50%);
				height: 2px;
				width: calc(100% - 20px);
			}
		}
	}
</style>
