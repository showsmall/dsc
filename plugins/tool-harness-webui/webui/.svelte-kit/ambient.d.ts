
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/private';
 * 
 * console.log(ENVIRONMENT); // => "production"
 * console.log(PUBLIC_BASE_URL); // => throws error during build
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/private' {
	export const EDITOR: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const COMMONPROGRAMW6432: string;
	export const LOGONSERVER: string;
	export const npm_command: string;
	export const PROGRAMDATA: string;
	export const CUDA_PATH: string;
	export const SVELTEKIT_FORK: string;
	export const HOMEPATH: string;
	export const COMMONPROGRAMFILES_X86_: string;
	export const PATH_SEPARATOR: string;
	export const PS1: string;
	export const CC: string;
	export const CUDA_PATH_V12_8: string;
	export const DISABLE_AUTOUPDATER: string;
	export const USER: string;
	export const LANG: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const PROCESSOR_LEVEL: string;
	export const GOCACHE: string;
	export const LOGNAME: string;
	export const USERNAME: string;
	export const npm_node_execpath: string;
	export const PROCESSOR_REVISION: string;
	export const HOST_CC: string;
	export const build_alias: string;
	export const WINDIR: string;
	export const CLAUDE_CODE_DISABLE_OFFICIAL_MARKETPLACE_AUTOINSTALL: string;
	export const HOMEDRIVE: string;
	export const HOME: string;
	export const TEMP: string;
	export const COMSPEC: string;
	export const OLDPWD: string;
	export const PSMODULEPATH: string;
	export const ANTHROPIC_DEFAULT_SONNET_MODEL: string;
	export const PWD: string;
	export const GOPROXY: string;
	export const ANTHROPIC_BASE_URL: string;
	export const ANTHROPIC_AUTH_TOKEN: string;
	export const COMPUTERNAME: string;
	export const DRIVERDATA: string;
	export const PATHEXT: string;
	export const PATH: string;
	export const npm_config_user_agent: string;
	export const WINKIT_HOME: string;
	export const SESSIONNAME: string;
	export const npm_lifecycle_event: string;
	export const ANTHROPIC_MODEL: string;
	export const CLAUDE_CODE_SUBAGENT_MODEL: string;
	export const ANTHROPIC_DEFAULT_OPUS_MODEL: string;
	export const USERPROFILE: string;
	export const CLAUDE_CODE_ATTRIBUTION_HEADER: string;
	export const npm_package_json: string;
	export const GOSUMDB: string;
	export const npm_config_local_prefix: string;
	export const BB_GLOBBING: string;
	export const CXX: string;
	export const npm_package_name: string;
	export const CCACHE: string;
	export const COMMONPROGRAMFILES: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const ANTHROPIC_DEFAULT_HAIKU_MODEL: string;
	export const npm_package_version: string;
	export const NODE_ENV: string;
	export const npm_execpath: string;
	export const ALLUSERSPROFILE: string;
	export const PROGRAMFILES: string;
	export const USERDOMAIN: string;
	export const GOPATH: string;
	export const ac_executable_extensions: string;
	export const LOCALAPPDATA: string;
	export const WINKIT: string;
	export const CLAUDE_CODE_EFFORT_LEVEL: string;
	export const SYSTEMDRIVE: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const SHLVL: string;
	export const OS: string;
	export const PROGRAMFILES_X86_: string;
	export const npm_lifecycle_script: string;
	export const NODE: string;
	export const PROGRAMW6432: string;
	export const APPDATA: string;
	export const PUBLIC: string;
	export const SHELL: string;
	export const TMP: string;
	export const SYSTEMROOT: string;
}

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/public';
 * 
 * console.log(ENVIRONMENT); // => throws error during build
 * console.log(PUBLIC_BASE_URL); // => "http://site.com"
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * 
 * console.log(env.ENVIRONMENT); // => "production"
 * console.log(env.PUBLIC_BASE_URL); // => undefined
 * ```
 */
declare module '$env/dynamic/private' {
	export const env: {
		EDITOR: string;
		PROCESSOR_IDENTIFIER: string;
		COMMONPROGRAMW6432: string;
		LOGONSERVER: string;
		npm_command: string;
		PROGRAMDATA: string;
		CUDA_PATH: string;
		SVELTEKIT_FORK: string;
		HOMEPATH: string;
		COMMONPROGRAMFILES_X86_: string;
		PATH_SEPARATOR: string;
		PS1: string;
		CC: string;
		CUDA_PATH_V12_8: string;
		DISABLE_AUTOUPDATER: string;
		USER: string;
		LANG: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		PROCESSOR_LEVEL: string;
		GOCACHE: string;
		LOGNAME: string;
		USERNAME: string;
		npm_node_execpath: string;
		PROCESSOR_REVISION: string;
		HOST_CC: string;
		build_alias: string;
		WINDIR: string;
		CLAUDE_CODE_DISABLE_OFFICIAL_MARKETPLACE_AUTOINSTALL: string;
		HOMEDRIVE: string;
		HOME: string;
		TEMP: string;
		COMSPEC: string;
		OLDPWD: string;
		PSMODULEPATH: string;
		ANTHROPIC_DEFAULT_SONNET_MODEL: string;
		PWD: string;
		GOPROXY: string;
		ANTHROPIC_BASE_URL: string;
		ANTHROPIC_AUTH_TOKEN: string;
		COMPUTERNAME: string;
		DRIVERDATA: string;
		PATHEXT: string;
		PATH: string;
		npm_config_user_agent: string;
		WINKIT_HOME: string;
		SESSIONNAME: string;
		npm_lifecycle_event: string;
		ANTHROPIC_MODEL: string;
		CLAUDE_CODE_SUBAGENT_MODEL: string;
		ANTHROPIC_DEFAULT_OPUS_MODEL: string;
		USERPROFILE: string;
		CLAUDE_CODE_ATTRIBUTION_HEADER: string;
		npm_package_json: string;
		GOSUMDB: string;
		npm_config_local_prefix: string;
		BB_GLOBBING: string;
		CXX: string;
		npm_package_name: string;
		CCACHE: string;
		COMMONPROGRAMFILES: string;
		NUMBER_OF_PROCESSORS: string;
		ANTHROPIC_DEFAULT_HAIKU_MODEL: string;
		npm_package_version: string;
		NODE_ENV: string;
		npm_execpath: string;
		ALLUSERSPROFILE: string;
		PROGRAMFILES: string;
		USERDOMAIN: string;
		GOPATH: string;
		ac_executable_extensions: string;
		LOCALAPPDATA: string;
		WINKIT: string;
		CLAUDE_CODE_EFFORT_LEVEL: string;
		SYSTEMDRIVE: string;
		PROCESSOR_ARCHITECTURE: string;
		SHLVL: string;
		OS: string;
		PROGRAMFILES_X86_: string;
		npm_lifecycle_script: string;
		NODE: string;
		PROGRAMW6432: string;
		APPDATA: string;
		PUBLIC: string;
		SHELL: string;
		TMP: string;
		SYSTEMROOT: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://example.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.ENVIRONMENT); // => undefined, not public
 * console.log(env.PUBLIC_BASE_URL); // => "http://example.com"
 * ```
 * 
 * ```
 * 
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
