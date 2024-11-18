<script lang="ts">
	import { writable } from 'svelte/store';
	import {
		SvelteFlow,
		Controls,
		ControlButton,
		Background,
		BackgroundVariant,
		MiniMap,
		MarkerType
	} from '@xyflow/svelte';

	// 👇 this is important! You need to import the styles for Svelte Flow to work
	import '@xyflow/svelte/dist/style.css';

	import { darkMode } from '$lib/stores/theme';

	// We are using writables for the nodes and edges to sync them easily. When a user drags a node for example, Svelte Flow updates its position.
	const nodes = writable([
		{
			id: 'A',
			type: 'default',
			data: { label: 'A' },
			position: { x: 0, y: 0 }
		},
		{
			id: 'B',
			type: 'default',
			data: { label: 'B' },
			position: { x: 250, y: 0 }
		}
	]);

	// same for edges
	const edges = writable([
		{
			id: 'A-B',
			type: 'default',
			source: 'A',
			target: 'B'
		}
	]);

	const defaultEdgeOptions = {
		type: 'floating',

		markerEnd: {
			type: MarkerType.ArrowClosed
		}
	};

	const addNode = () => {
		nodes.update((nodes) => [
			...nodes,
			{
				id: `${String.fromCharCode(nodes.length + 65)}`,
				type: 'default',
				data: { label: `${String.fromCharCode(nodes.length + 65)}` },
				// golden spiral based on fibonacci sequence, based on the number of nodes
				position: {
					x: 500,
					y: (nodes.length - 2) * 100
				}
			}
		]);
	};

	const snapGrid: [number, number] = [25, 25];
</script>

<!--
👇 By default, the Svelte Flow container has a height of 100%.
This means that the parent container needs a height to render the flow.
-->
<div style:height="500px">
	<SvelteFlow
		{nodes}
		{edges}
		{snapGrid}
		{defaultEdgeOptions}
		colorMode={$darkMode ? 'dark' : 'light'}
		fitView
		on:nodeclick={(event) => console.log('on node click', event.detail.node)}
	>
		<Controls>
			<ControlButton on:click={() => addNode()}>+</ControlButton>
		</Controls>
		<Background variant={BackgroundVariant.Dots} />
		<MiniMap />
	</SvelteFlow>
</div>
