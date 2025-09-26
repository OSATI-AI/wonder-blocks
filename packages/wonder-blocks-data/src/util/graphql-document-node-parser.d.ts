import type { DocumentNode, VariableDefinitionNode } from "./graphql-types";
export declare const DocumentTypes: Readonly<{
    query: "query";
    mutation: "mutation";
}>;
export type DocumentType = (typeof DocumentTypes)[keyof typeof DocumentTypes];
export interface IDocumentDefinition {
    type: DocumentType;
    name: string;
    variables: ReadonlyArray<VariableDefinitionNode>;
}
/**
 * Parse a GraphQL document node to determine some info about it.
 *
 * This is based on:
 * https://github.com/apollographql/react-apollo/blob/3bc993b2ea91704bd6a2667f42d1940656c071ff/src/parser.ts
 */
export declare function graphQLDocumentNodeParser(document: DocumentNode): IDocumentDefinition;
