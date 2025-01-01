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

const ClientsIndexLazyImport = createFileRoute('/clients/')()
const dashboardIndexLazyImport = createFileRoute('/(dashboard)/')()
const ClientsNewLazyImport = createFileRoute('/clients/new')()

// Create/Update Routes

const ClientsIndexLazyRoute = ClientsIndexLazyImport.update({
  id: '/clients/',
  path: '/clients/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/clients/index.lazy').then((d) => d.Route))

const dashboardIndexLazyRoute = dashboardIndexLazyImport
  .update({
    id: '/(dashboard)/',
    path: '/',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(dashboard)/index.lazy').then((d) => d.Route))

const ClientsNewLazyRoute = ClientsNewLazyImport.update({
  id: '/clients/new',
  path: '/clients/new',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/clients/new.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/clients/new': {
      id: '/clients/new'
      path: '/clients/new'
      fullPath: '/clients/new'
      preLoaderRoute: typeof ClientsNewLazyImport
      parentRoute: typeof rootRoute
    }
    '/(dashboard)/': {
      id: '/(dashboard)/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof dashboardIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/clients/': {
      id: '/clients/'
      path: '/clients'
      fullPath: '/clients'
      preLoaderRoute: typeof ClientsIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/clients/new': typeof ClientsNewLazyRoute
  '/': typeof dashboardIndexLazyRoute
  '/clients': typeof ClientsIndexLazyRoute
}

export interface FileRoutesByTo {
  '/clients/new': typeof ClientsNewLazyRoute
  '/': typeof dashboardIndexLazyRoute
  '/clients': typeof ClientsIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/clients/new': typeof ClientsNewLazyRoute
  '/(dashboard)/': typeof dashboardIndexLazyRoute
  '/clients/': typeof ClientsIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/clients/new' | '/' | '/clients'
  fileRoutesByTo: FileRoutesByTo
  to: '/clients/new' | '/' | '/clients'
  id: '__root__' | '/clients/new' | '/(dashboard)/' | '/clients/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  ClientsNewLazyRoute: typeof ClientsNewLazyRoute
  dashboardIndexLazyRoute: typeof dashboardIndexLazyRoute
  ClientsIndexLazyRoute: typeof ClientsIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  ClientsNewLazyRoute: ClientsNewLazyRoute,
  dashboardIndexLazyRoute: dashboardIndexLazyRoute,
  ClientsIndexLazyRoute: ClientsIndexLazyRoute,
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
        "/clients/new",
        "/(dashboard)/",
        "/clients/"
      ]
    },
    "/clients/new": {
      "filePath": "clients/new.lazy.tsx"
    },
    "/(dashboard)/": {
      "filePath": "(dashboard)/index.lazy.tsx"
    },
    "/clients/": {
      "filePath": "clients/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
