import { QueryClient, QueryClientConfig } from '@tanstack/react-query'

export const createQueryClient = (config?: QueryClientConfig) =>
  new QueryClient(config)
export type {
  InfiniteData,
  MutationFunction,
  MutationKey,
  MutationOptions,
  QueryFunction,
  QueryKey,
  QueryOptions,
  UseInfiniteQueryOptions,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query'
export {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
export { ReactQueryDevtools as QueryDevtools } from '@tanstack/react-query-devtools'
