import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import { prisma } from "~/server/db";

import { appRouter } from "~/server/api/root";
import superjson from "superjson";

export const generateSSGHepler = () =>
  createProxySSGHelpers({
    router: appRouter,
    ctx: {
      prisma,
      userId: null,
    },
    transformer: superjson,
  });
