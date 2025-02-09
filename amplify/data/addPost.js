import { util } from "@aws-appsync/utils";

export function request(ctx) {
  return {
    method: "POST",
    resourcePath: "/post",
    params: {
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        name: ctx.arguments.name,
        move_type: ctx.arguments.move_type,
        invoice_date: ctx.arguments.invoice_date,
      },
    },
  };
}

export function response(ctx) {
  if (ctx.error) {
    return util.error(ctx.error.message, ctx.error.type);
  }
  if (ctx.result.statusCode == 200) {
    return JSON.parse(ctx.result.body).data;
  } else {
    return util.appendError(ctx.result.body, "ctx.result.statusCode");
  }
}