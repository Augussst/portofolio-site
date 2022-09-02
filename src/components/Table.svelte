<div
	class="table w-full text-white border-2 border-innercontaineraccent bg-innercontainerbg pb-2.5 mt-3"
>
	<div class="table-header-group">
		<div class="table-row [&>.table-cell]:capitalize text-sm">
			<div class="table-cell text-left table-style-head">preview</div>
			<div class="table-cell text-left table-style-head">name</div>
			<div class="table-cell text-left table-style-head">type</div>
			<div class="table-cell text-left table-style-head">description</div>
		</div>
	</div>
	<div class="table-row-group">
		<div class="table-row">
			<div class="table-cell table-style-main">The Sliding Mr. Bones</div>
			<div class="table-cell table-style-main">Malcolm Lockyer</div>
			<div class="table-cell table-style-main">1961</div>
			<div class="table-cell table-style-main">1961</div>
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
