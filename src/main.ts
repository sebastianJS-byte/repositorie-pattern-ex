import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import bodyParser from "body-parser";
import express from "express";

import { config } from "./config";
import { healthRouter } from "./health/health-router";
import {userRouter} from "./users/infraestructure/http/user-router";

function boostrap() {
  const app = express();

  app.use(bodyParser.json());
  app.use("/health", healthRouter);
  app.use("/user", userRouter);

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();
