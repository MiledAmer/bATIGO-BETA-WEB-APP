/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const dashboardIndexLazyImport = createFileRoute('/(dashboard)/')()

// Create/Update Routes

const dashboardIndexLazyRoute = dashboardIndexLazyImport
  .update({
    id: '/(dashboard)/',
    path: '/',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(dashboard)/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(dashboard)/': {
      id: '/(dashboard)/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof dashboardIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof dashboardIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof dashboardIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/(dashboard)/': typeof dashboardIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/'
  id: '__root__' | '/(dashboard)/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  dashboardIndexLazyRoute: typeof dashboardIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  dashboardIndexLazyRoute: dashboardIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/(dashboard)/"
      ]
    },
    "/(dashboard)/": {
      "filePath": "(dashboard)/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
