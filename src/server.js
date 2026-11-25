import http from "node:http"

import { jsonHandler } from "./middlewares/jsonHandler.js"
import { routHandler } from "./middlewares/routeHandler.js"

async function listener (req, res) {
  await jsonHandler (req, res)
  routHandler(req, res)

}

http.createServer(listener).listen(3333)