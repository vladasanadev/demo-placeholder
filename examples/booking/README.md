# Room booking sandbox

Agent-generated feature for an isolated CodeRabbit review demonstration in the owner's test repository. No production integration or deployment.

Task: implement room availability and an immutable reservation helper, allowing adjacent bookings while rejecting overlaps. Include Node's built-in tests and a PR check.

Run `node --test examples/booking/*.test.mjs` from the repository root.

All booking data is synthetic. This is an in-memory domain example; production persistence must enforce atomic conflict detection.
