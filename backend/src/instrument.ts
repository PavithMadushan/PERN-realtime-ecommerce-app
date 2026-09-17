import "dotenv/config";
import * as Sentry from "@sentry/node";
import {nodeProfilingIntegration} from "@sentry/profiling-node";

const dsn = process.env.SENTRY_DSN;
if (dsn) {
  Sentry.init({
    dsn,
    environment: process.env.NODE_ENV ?? "development",
    integrations: [nodeProfilingIntegration()],
    enableLogs:true,
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    tracesSampleRate: 1.0,
    profileSessionSampleRate: 1.0,
    profileLifecycle:"trace",
    sendDefaultPii: true,
  });
}
  