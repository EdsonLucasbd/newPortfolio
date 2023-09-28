
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api-sa-east-1.hygraph.com/v2/clmz93beu0qt401t4bt6ud226/master",
  documents: "src/graphql/queries.ts",
  generates: {
    "src/graphql/generate/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
