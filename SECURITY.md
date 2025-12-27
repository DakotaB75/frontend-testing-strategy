# Security Policy

## Overview

This repository follows enterprise-grade security practices aligned with large-scale
product organizations.

Security is treated as a **shared responsibility** across engineering, CI/CD pipelines
and cloud infrastructure.

This project is intended as a reference implementation and does not expose
production credentials or customer data.

---

## Supported Versions

Only the latest version on the `main` branch is actively maintained.

| Version | Supported |
|--------|-----------|
| main   |  Yes    |
| older releases |  No |

---

## Reporting a Vulnerability

If you identify a security vulnerability:

- **Do not** open a public GitHub issue.
- **Do not** disclose details in pull requests or comments.

Instead, report it responsibly by contacting the repository owner
via GitHub private communication.

All reports are evaluated following **responsible disclosure principles**.

---

## Security Controls

This repository implements the following controls:

### CI/CD Security
- GitHub Actions with restricted permissions
- Environment-based secret isolation
- Manual approvals for production workflows
- Fail-fast pipelines on security violations

### Code Security
- Static analysis via CodeQL
- No secrets committed to source control
- Dependency usage aligned with minimal attack surface

### Test Strategy Security
- Test data is synthetic and non-sensitive
- No real credentials or customer-like information
- Contract tests validate integration boundaries without exposing internals

---

## Compliance Notes

This repository is designed as an **engineering reference**, not as a production system.

It intentionally avoids:
- Handling personal data
- Processing payments
- Integrating with real customer services

Any resemblance to production systems is architectural only.

---

## Ownership

Security ownership follows the **engineering ownership model**:
each contributor is responsible for the security impact of their changes.
