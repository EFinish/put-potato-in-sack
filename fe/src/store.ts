import type { Potato } from '$lib/models/potato';
import { writable } from 'svelte/store';

function CreatePotatoes() {
    const potatoesInit: Potato[] = [
        {
            "id": "abc123",
            "name": "Olaf",
            "color": "brown",
            "weight": 300
        },
        {
            "id": "abc124",
            "name": "Bart",
            "color": "brown",
            "weight": 500
        },
        {
            "id": "abc125",
            "name": "Pepsi",
            "color": "purple",
            "weight": 100
        }
    ];

	const { subscribe, update } = writable(potatoesInit);

	return {
		subscribe,
        // TODO
		// add: (potato: Potato) => update(n => n + 1),
		// remove: (potato: Potato) => update(n => n - 1),
	};
}

// TODO add sack

export const potatoes = CreatePotatoes();