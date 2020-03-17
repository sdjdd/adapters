import { Adapters } from "@leancloud/adapter-types";
import * as WS from "ws";
import * as localStorageMemory from "localstorage-memory";

export const WebSocket: Adapters["WebSocket"] = WS;
export const storage: Adapters["storage"] = localStorageMemory;
export { request, upload } from "@leancloud/adapters-superagent";