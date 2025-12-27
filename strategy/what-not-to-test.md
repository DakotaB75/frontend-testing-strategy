# What We Explicitly Do NOT Test

- Third-party libraries
- Browser native behavior
- CSS-only logic
- Static content

## Rationale

Testing external responsibilities increases flakiness and maintenance
without increasing confidence.

Trust your dependencies. Verify your integration.
