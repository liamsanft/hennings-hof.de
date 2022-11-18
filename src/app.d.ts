declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

declare namespace svelte.JSX {
	interface HTMLAttributes<T> {
		onenterViewport: () => void;
		onexitViewport: () => void;
	}
}
