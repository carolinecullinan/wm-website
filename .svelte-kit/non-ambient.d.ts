
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/contact" | "/works" | "/{about,works,contact}";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/contact": Record<string, never>;
			"/works": Record<string, never>;
			"/{about,works,contact}": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/contact" | "/contact/" | "/works" | "/works/" | "/{about,works,contact}" | "/{about,works,contact}/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/images/.DS_Store" | "/images/works/WM-01-01-original.jpg" | "/images/works/WM-01-01.jpg" | "/images/works/WM-01-02.jpg" | "/images/works/WM-01-03.jpg" | "/images/works/WM-01-04.jpg" | "/images/works/WM-01-05.jpg" | "/images/works/WM-01-06.jpg" | "/images/works/WM-01-07.jpg" | "/images/works/WM-01-08.jpg" | "/images/works/WM-01-09.jpg" | "/images/works/WM-01-10.jpg" | "/images/works/WM-01-11.jpg" | "/images/works/WM-01-12.jpg" | "/images/works/WM-01-13.jpg" | "/images/works/WM-01-14.jpg" | "/images/works/WM-01-15.jpg" | "/images/works/WM-01-16.jpg" | "/images/works/WM-02-01.jpg" | "/images/works/WM-02-02.jpg" | "/images/works/WM-02-03.jpg" | "/images/works/WM-03-01.jpg" | "/images/works/WM-03-02.jpg" | "/images/works/WM-03-03.jpg" | "/images/works/WM-04-01.jpg" | "/images/works/WM-04-02.jpg" | "/images/works/WM-04-03.jpg" | "/images/works/WM-05.jpg" | "/images/works/WM-06.jpg" | "/images/works/WM-07.jpg" | "/images/works/WM-08.jpg" | "/images/works/WM-09.jpg" | "/images/works/WM-10.jpg" | "/images/works/WM-11.jpg" | "/images/works/WM-12.jpg" | "/images/works/WM-13.jpg" | "/images/works/WM-14.jpg" | "/images/works/WM-15.jpg" | "/images/works/WM-16.jpg" | "/images/works/WM-17.jpg" | "/images/works/WM-18.jpg" | "/images/works/WM-19.jpg" | "/images/works/WM-20.jpg" | "/images/works/WM-21.jpg" | "/images/works/WM-22.jpg" | "/images/works/WM-23.jpg" | "/images/works/WM-24.jpg" | "/images/works/WM-25.jpg" | "/images/works/WM-26.jpg" | "/images/works/WM-27.jpg" | "/images/works/WM-28.jpg" | "/images/works/WM-29.jpg" | "/images/works/WM-30.jpg" | "/images/works/WM-31.jpg" | "/images/works/WM-32.jpg" | "/images/works/WM-33.jpg" | "/images/works/WM-34.jpg" | "/images/works/WM-35.jpg" | "/images/works/WM-36.jpg" | "/images/works/WM-37.jpeg" | string & {};
	}
}