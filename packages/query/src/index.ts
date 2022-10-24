import { QueryClient, QueryClientConfig } from '@tanstack/react-query'

export const createQueryClient = (config?: QueryClientConfig) =>
  new QueryClient(config)

export * from '@tanstack/react-query'
export { ReactQueryDevtools as QueryDevtools } from '@tanstack/react-query-devtools'
