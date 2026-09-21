export interface CodeSnippet {
  id: string;
  tabTitle: string;
  filename: string;
  language: string;
  iconName: "Cpu" | "Code2" | "GitBranch";
  description: string;
  code: string;
}

export const CODE_SNIPPETS: CodeSnippet[] = [
  {
    id: "mcp-agent",
    tabTitle: "SutryvaAgent.ts",
    filename: "src/agents/inventoryAgent.ts",
    language: "typescript",
    iconName: "Cpu",
    description: "Production MCP-native agent swarm pipeline with tool calling, context memory & guardrails.",
    code: `import { Agent, ModelContextProtocol } from "@sutryva/agents";
import { ErpConnector, DatabaseClient } from "@/lib/integrations";

// Initialize Sutryva MCP Autonomous Agent Swarm
export const inventoryAgent = new Agent({
  name: "LogisticsSwarm-01",
  protocol: ModelContextProtocol.V1,
  memory: { strategy: "vector-semantic", ttlSeconds: 86400 },
  tools: [
    ErpConnector.verifyShipmentTool(),
    DatabaseClient.updateStockLevelTool(),
  ],
  guardrails: {
    maxCallDepth: 5,
    requireHumanApprovalAboveAmount: 10000,
  },
});

export async function handleInboundTask(event: LogisticsEvent) {
  const result = await inventoryAgent.execute({
    prompt: \`Resolve inventory anomaly for Order #\${event.orderId}\`,
    context: event.metadata,
  });
  return { status: result.status, metrics: result.telemetry };
}`,
  },
  {
    id: "saas-api",
    tabTitle: "tenantRouter.ts",
    filename: "app/api/v1/tenants/route.ts",
    language: "typescript",
    iconName: "Code2",
    description: "Multi-tenant SaaS API handler with schema isolation, Stripe webhook sync & sub-45ms latency.",
    code: `import { NextRequest, NextResponse } from "next/server";
import { db } from "@/src/lib/db";
import { verifyTenantToken } from "@/src/lib/auth";

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const tenant = await verifyTenantToken(authHeader);

  if (!tenant) {
    return NextResponse.json({ error: "Unauthorized Tenant" }, { status: 401 });
  }

  // Isolated tenant query execution
  const metrics = await db.$queryRaw\`
    SELECT * FROM "TenantData" 
    WHERE "tenantId" = \${tenant.id} 
    ORDER BY "createdAt" DESC LIMIT 50
  \`;

  return NextResponse.json({ success: true, tenantId: tenant.id, data: metrics });
}`,
  },
  {
    id: "temporal-flow",
    tabTitle: "orderWorkflow.ts",
    filename: "src/workflows/durableOrderPipeline.ts",
    language: "typescript",
    iconName: "GitBranch",
    description: "Durable Temporal.io event pipeline with automatic retries, webhooks & zero data loss.",
    code: `import { proxyActivities, sleep } from "@temporalio/workflow";
import type * as activities from "../activities";

const { processPayment, notifyLogistics, syncAnalytics } = proxyActivities<typeof activities>({
  startToCloseTimeout: "1 minute",
  retry: { initialInterval: "2s", backoffCoefficient: 2, maximumAttempts: 5 },
});

export async function durableOrderWorkflow(order: OrderPayload): Promise<void> {
  // Step 1: Atomic Payment Settlement
  await processPayment(order.paymentToken, order.totalAmount);
  
  // Step 2: Trigger Async Parallel Tasks
  await Promise.all([
    notifyLogistics(order.id, order.items),
    syncAnalytics(order.id, order.customerId),
  ]);
}`,
  },
];
