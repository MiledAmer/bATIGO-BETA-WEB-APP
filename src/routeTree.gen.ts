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

const mainIndexLazyImport = createFileRoute('/(main)/')()
const authLoginLazyImport = createFileRoute('/(auth)/login')()
const mainSousTraitantIndexLazyImport = createFileRoute(
  '/(main)/sous-traitant/',
)()
const mainRgeIndexLazyImport = createFileRoute('/(main)/rge/')()
const mainForfaitIndexLazyImport = createFileRoute('/(main)/forfait/')()
const mainEntiteExterneIndexLazyImport = createFileRoute(
  '/(main)/entite-externe/',
)()
const mainDevisIndexLazyImport = createFileRoute('/(main)/devis/')()
const mainClientsIndexLazyImport = createFileRoute('/(main)/clients/')()
const mainClientsNewLazyImport = createFileRoute('/(main)/clients/new')()

// Create/Update Routes

const mainIndexLazyRoute = mainIndexLazyImport
  .update({
    id: '/(main)/',
    path: '/',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(main)/index.lazy').then((d) => d.Route))

const authLoginLazyRoute = authLoginLazyImport
  .update({
    id: '/(auth)/login',
    path: '/login',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(auth)/login.lazy').then((d) => d.Route))

const mainSousTraitantIndexLazyRoute = mainSousTraitantIndexLazyImport
  .update({
    id: '/(main)/sous-traitant/',
    path: '/sous-traitant/',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() =>
    import('./routes/(main)/sous-traitant/index.lazy').then((d) => d.Route),
  )

const mainRgeIndexLazyRoute = mainRgeIndexLazyImport
  .update({
    id: '/(main)/rge/',
    path: '/rge/',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(main)/rge/index.lazy').then((d) => d.Route))

const mainForfaitIndexLazyRoute = mainForfaitIndexLazyImport
  .update({
    id: '/(main)/forfait/',
    path: '/forfait/',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(main)/forfait/index.lazy').then((d) => d.Route))

const mainEntiteExterneIndexLazyRoute = mainEntiteExterneIndexLazyImport
  .update({
    id: '/(main)/entite-externe/',
    path: '/entite-externe/',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() =>
    import('./routes/(main)/entite-externe/index.lazy').then((d) => d.Route),
  )

const mainDevisIndexLazyRoute = mainDevisIndexLazyImport
  .update({
    id: '/(main)/devis/',
    path: '/devis/',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(main)/devis/index.lazy').then((d) => d.Route))

const mainClientsIndexLazyRoute = mainClientsIndexLazyImport
  .update({
    id: '/(main)/clients/',
    path: '/clients/',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(main)/clients/index.lazy').then((d) => d.Route))

const mainClientsNewLazyRoute = mainClientsNewLazyImport
  .update({
    id: '/(main)/clients/new',
    path: '/clients/new',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(main)/clients/new.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(auth)/login': {
      id: '/(auth)/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authLoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/(main)/': {
      id: '/(main)/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof mainIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/(main)/clients/new': {
      id: '/(main)/clients/new'
      path: '/clients/new'
      fullPath: '/clients/new'
      preLoaderRoute: typeof mainClientsNewLazyImport
      parentRoute: typeof rootRoute
    }
    '/(main)/clients/': {
      id: '/(main)/clients/'
      path: '/clients'
      fullPath: '/clients'
      preLoaderRoute: typeof mainClientsIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/(main)/devis/': {
      id: '/(main)/devis/'
      path: '/devis'
      fullPath: '/devis'
      preLoaderRoute: typeof mainDevisIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/(main)/entite-externe/': {
      id: '/(main)/entite-externe/'
      path: '/entite-externe'
      fullPath: '/entite-externe'
      preLoaderRoute: typeof mainEntiteExterneIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/(main)/forfait/': {
      id: '/(main)/forfait/'
      path: '/forfait'
      fullPath: '/forfait'
      preLoaderRoute: typeof mainForfaitIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/(main)/rge/': {
      id: '/(main)/rge/'
      path: '/rge'
      fullPath: '/rge'
      preLoaderRoute: typeof mainRgeIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/(main)/sous-traitant/': {
      id: '/(main)/sous-traitant/'
      path: '/sous-traitant'
      fullPath: '/sous-traitant'
      preLoaderRoute: typeof mainSousTraitantIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/login': typeof authLoginLazyRoute
  '/': typeof mainIndexLazyRoute
  '/clients/new': typeof mainClientsNewLazyRoute
  '/clients': typeof mainClientsIndexLazyRoute
  '/devis': typeof mainDevisIndexLazyRoute
  '/entite-externe': typeof mainEntiteExterneIndexLazyRoute
  '/forfait': typeof mainForfaitIndexLazyRoute
  '/rge': typeof mainRgeIndexLazyRoute
  '/sous-traitant': typeof mainSousTraitantIndexLazyRoute
}

export interface FileRoutesByTo {
  '/login': typeof authLoginLazyRoute
  '/': typeof mainIndexLazyRoute
  '/clients/new': typeof mainClientsNewLazyRoute
  '/clients': typeof mainClientsIndexLazyRoute
  '/devis': typeof mainDevisIndexLazyRoute
  '/entite-externe': typeof mainEntiteExterneIndexLazyRoute
  '/forfait': typeof mainForfaitIndexLazyRoute
  '/rge': typeof mainRgeIndexLazyRoute
  '/sous-traitant': typeof mainSousTraitantIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/(auth)/login': typeof authLoginLazyRoute
  '/(main)/': typeof mainIndexLazyRoute
  '/(main)/clients/new': typeof mainClientsNewLazyRoute
  '/(main)/clients/': typeof mainClientsIndexLazyRoute
  '/(main)/devis/': typeof mainDevisIndexLazyRoute
  '/(main)/entite-externe/': typeof mainEntiteExterneIndexLazyRoute
  '/(main)/forfait/': typeof mainForfaitIndexLazyRoute
  '/(main)/rge/': typeof mainRgeIndexLazyRoute
  '/(main)/sous-traitant/': typeof mainSousTraitantIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/login'
    | '/'
    | '/clients/new'
    | '/clients'
    | '/devis'
    | '/entite-externe'
    | '/forfait'
    | '/rge'
    | '/sous-traitant'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/login'
    | '/'
    | '/clients/new'
    | '/clients'
    | '/devis'
    | '/entite-externe'
    | '/forfait'
    | '/rge'
    | '/sous-traitant'
  id:
    | '__root__'
    | '/(auth)/login'
    | '/(main)/'
    | '/(main)/clients/new'
    | '/(main)/clients/'
    | '/(main)/devis/'
    | '/(main)/entite-externe/'
    | '/(main)/forfait/'
    | '/(main)/rge/'
    | '/(main)/sous-traitant/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  authLoginLazyRoute: typeof authLoginLazyRoute
  mainIndexLazyRoute: typeof mainIndexLazyRoute
  mainClientsNewLazyRoute: typeof mainClientsNewLazyRoute
  mainClientsIndexLazyRoute: typeof mainClientsIndexLazyRoute
  mainDevisIndexLazyRoute: typeof mainDevisIndexLazyRoute
  mainEntiteExterneIndexLazyRoute: typeof mainEntiteExterneIndexLazyRoute
  mainForfaitIndexLazyRoute: typeof mainForfaitIndexLazyRoute
  mainRgeIndexLazyRoute: typeof mainRgeIndexLazyRoute
  mainSousTraitantIndexLazyRoute: typeof mainSousTraitantIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  authLoginLazyRoute: authLoginLazyRoute,
  mainIndexLazyRoute: mainIndexLazyRoute,
  mainClientsNewLazyRoute: mainClientsNewLazyRoute,
  mainClientsIndexLazyRoute: mainClientsIndexLazyRoute,
  mainDevisIndexLazyRoute: mainDevisIndexLazyRoute,
  mainEntiteExterneIndexLazyRoute: mainEntiteExterneIndexLazyRoute,
  mainForfaitIndexLazyRoute: mainForfaitIndexLazyRoute,
  mainRgeIndexLazyRoute: mainRgeIndexLazyRoute,
  mainSousTraitantIndexLazyRoute: mainSousTraitantIndexLazyRoute,
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
        "/(auth)/login",
        "/(main)/",
        "/(main)/clients/new",
        "/(main)/clients/",
        "/(main)/devis/",
        "/(main)/entite-externe/",
        "/(main)/forfait/",
        "/(main)/rge/",
        "/(main)/sous-traitant/"
      ]
    },
    "/(auth)/login": {
      "filePath": "(auth)/login.lazy.tsx"
    },
    "/(main)/": {
      "filePath": "(main)/index.lazy.tsx"
    },
    "/(main)/clients/new": {
      "filePath": "(main)/clients/new.lazy.tsx"
    },
    "/(main)/clients/": {
      "filePath": "(main)/clients/index.lazy.tsx"
    },
    "/(main)/devis/": {
      "filePath": "(main)/devis/index.lazy.tsx"
    },
    "/(main)/entite-externe/": {
      "filePath": "(main)/entite-externe/index.lazy.tsx"
    },
    "/(main)/forfait/": {
      "filePath": "(main)/forfait/index.lazy.tsx"
    },
    "/(main)/rge/": {
      "filePath": "(main)/rge/index.lazy.tsx"
    },
    "/(main)/sous-traitant/": {
      "filePath": "(main)/sous-traitant/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
