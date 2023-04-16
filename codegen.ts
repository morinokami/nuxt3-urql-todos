import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: './gql/schema.gql',
	documents: './**/*.vue',
	generates: {
		'./gql/': {
			preset: 'client',
			plugins: [],
		},
	},
};

export default config;
