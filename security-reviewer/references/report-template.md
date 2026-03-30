# Security Report Template

```markdown
# Security Review Report

## Executive Summary

| Field | Value |
|-------|-------|
| **Application** | [Application Name] |
| **Review Date** | [YYYY-MM-DD] |
| **Reviewer** | [Name] |
| **Scope** | [Files/modules reviewed] |
| **Overall Risk Level** | [Critical/High/Medium/Low] |

### Key Findings
- X Critical vulnerabilities requiring immediate attention
- Y High-severity issues to address before deployment
- Z Medium/Low issues for future consideration

## Findings Summary

| Severity | Count | Status |
|----------|-------|--------|
| Critical | X | Requires immediate fix |
| High | X | Fix before deployment |
| Medium | X | Fix in next sprint |
| Low | X | Backlog |

## Detailed Findings

### [SEVERITY] Title

| Field | Value |
|-------|-------|
| **ID** | SEC-NNN |
| **Location** | `file/path.py:line` |
| **CWE** | CWE-NNN |
| **CVSS** | X.X (Severity) |

**Description**
...

**Vulnerable Code**
```python
# problematic code here
```

**Impact**
- ...

**Remediation**
```python
# fixed code here
```

**Effort**: X hours
**Priority**: Immediate / Before deployment / Next sprint
```
