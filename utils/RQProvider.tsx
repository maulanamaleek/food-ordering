"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Hydrate as RQHydrate, HydrateProps } from "@tanstack/react-query";

const Providers = ({ children }: React.PropsWithChildren) => {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries:
        {
          staleTime: 5000,
          retry: false,
          refetchOnWindowFocus: false,
        },
      },
    })
  );

  const isDev = process.env.NODE_ENV === 'development';

  return (
    <QueryClientProvider client={client}>
      {children}
      {isDev && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
};

export default Providers;

export const Hydrate = (props: HydrateProps) => {
  return <RQHydrate {...props} />;
};