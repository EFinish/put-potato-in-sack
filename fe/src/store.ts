import type { Carrot } from '$lib/models/carrot';
import type { Potato } from '$lib/models/potato';
import type { Sack } from '$lib/models/sack';
import { writable } from 'svelte/store';

function CreatePotatoes() {
    const potatoesInit: Potato[] = [
        {
            "id": "1",
            "name": "Olaf",
            "color": "brown",
            "weight": 300
        },
        {
            "id": "2",
            "name": "Bart",
            "color": "brown",
            "weight": 500
        },
        {
            "id": "3",
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

function CreateSacks() {
    const sacksInit: Sack[] = [
        {
            "id": "1",
            "name": "Potatoes",
            "color": "brown",
        },
        {
            "id": "2",
            "name": "Carrots",
            "color": "brown",
        },
        {
            "id": "3",
            "name": "Pepsi",
            "color": "purple",
        }
    ];

	const { subscribe, update } = writable(sacksInit);

	return {
		subscribe,
        // TODO
		// add: (sack: Sack) => update(n => n + 1),
		// remove: (sack: Sack) => update(n => n - 1),
	};
}

function CreateCarrots() {
    const carrotsInit: Carrot[] = [
        {
            "id": "1",
            "name": "Kibe",
            "color": "brown",
            "weight": 250
        },
        {
            "id": "2",
            "name": "Kurt",
            "color": "brown",
            "weight": 30
        },
        {
            "id": "3",
            "name": "Tina",
            "color": "purple",
            "weight": 35
        }
    ];

	const { subscribe, update } = writable(carrotsInit);

	return {
		subscribe,
        // TODO
		// add: (carrot: Carrot) => update(n => n + 1),
		// remove: (carrot: Carrot) => update(n => n - 1),
	};
}

export const potatoes = CreatePotatoes();
export const sacks = CreateSacks();
export const carrots = CreateCarrots();