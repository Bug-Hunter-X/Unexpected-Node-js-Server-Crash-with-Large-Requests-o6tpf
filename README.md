# Unexpected Node.js Server Crash with Large Requests

This repository demonstrates a bug where a Node.js HTTP server crashes without informative error messages when processing large requests.  The issue is likely related to unhandled exceptions or memory leaks within the request handling logic. The solution involves implementing robust error handling and potentially optimizing the request processing to prevent resource exhaustion.

## Bug
The `server.js` file contains a simple HTTP server.  Under heavy load with large requests, the server unexpectedly crashes without providing clear error details in the console.

## Solution
The `server-solution.js` file shows a possible solution. This includes additional error handling and resource management to increase server stability.
