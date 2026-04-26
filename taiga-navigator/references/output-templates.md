# Taiga Navigator — Output Templates

Use these templates for every summary. Fill in values from MCP responses.
Never output raw JSON — always render into structured markdown.

---

## Template 1 — Project Summary

```
## Project: <name> [<slug>]
**Members:** X | **Active Sprint:** <sprint name> (ends <estimated_finish>)
**Points:** <completed>/<total> completed (<velocity>/sprint velocity)

### Active Sprint — <sprint name>
| # | Story | Status | Assignee | Tasks |
|---|-------|--------|----------|-------|
| #ref | subject | status | full_name | X done / Y total |
| ... | | | | |

**Sprint Burndown:** X pts done / Y pts total — Z days remaining

### Open Issues (<count>)
| # | Subject | Priority | Assignee |
|---|---------|----------|----------|
| #ref | subject | priority | full_name |

### Recent Activity (last 5)
- [timestamp] user changed field on #ref "subject"

**Totals:** X epics | Y stories | Z tasks | W open issues
```

---

## Template 2 — Epic Breakdown

```
## Epic #<ref>: <subject>
**Status:** <status> | **Assigned:** <full_name>

### User Stories (<count>)
| # | Story | Status | Assignee | Sprint | Tasks Done |
|---|-------|--------|----------|--------|------------|
| #ref | subject | status | name | sprint name | X/Y |

**Summary:** X stories total — Y done, Z in progress, W not started
```

---

## Template 3 — Sprint / Milestone Detail

```
## Sprint: <name>
**Period:** <estimated_start> → <estimated_finish> | **Status:** Active / Closed
**Progress:** <completed_points> / <total_points> pts (<pct>%) | <days_left> days left

### Stories in Sprint (<count>)
| # | Story | Status | Assignee | Tasks | Points |
|---|-------|--------|----------|-------|--------|
| #ref | subject | status | name | X/Y done | N pts |

### Blockers
| # | Story | Blocked Reason |
|---|-------|----------------|
| #ref | subject | blocked_note |

**Velocity target:** <points> pts | **On track:** Yes / At risk / Behind
```

---

## Template 4 — User Story Detail

```
## Story #<ref>: <subject>
**Project:** <project name> | **Sprint:** <milestone name> | **Epic:** <epic subject>
**Status:** <status> | **Assigned:** <full_name> | **Points:** <total_points>
**Blocked:** Yes — <blocked_note> / No

### Description
<description>

### Tasks (<count>)
| # | Task | Status | Assignee |
|---|------|--------|----------|
| #ref | subject | status | name |

### History (last 5 changes)
- [timestamp] user: changed <field> from X to Y
```

---

## Template 5 — Issue List

```
## Issues — <project name>
**Filters applied:** <priority/status/type if filtered>

| # | Subject | Type | Priority | Severity | Status | Assignee |
|---|---------|------|----------|----------|--------|----------|
| #ref | subject | type | priority | severity | status | name |

**Total:** X open | Y in progress | Z resolved
```

---

## Template 6 — Search Results

```
## Search Results — "<keyword>" in <project name>

### User Stories (<count>)
| # | Subject | Status | Sprint |
|---|---------|--------|--------|
| #ref | subject | status | sprint |

### Tasks (<count>)
| # | Subject | Status | Assignee |
|---|---------|--------|----------|
| #ref | subject | status | name |

### Issues (<count>)
| # | Subject | Priority | Status |
|---|---------|----------|--------|
| #ref | subject | priority | status |
```

---

## Template 7 — Team Assignment Overview

```
## Team — <project name>

| Member | Role | Stories | Tasks | Issues |
|--------|------|---------|-------|--------|
| full_name | role | X open | Y open | Z open |

> Filter: use `list_user_stories(filters={"assigned_to": user_id})` per member
```

---

## Formatting Rules

1. **Always start** with the single-line header (template name + project/object name)
2. **Use tables** for any list of 3+ items — no bullet-point lists of objects
3. **Always include** `#ref` so the user can click through in Taiga UI
4. **Status values** come from the MCP response — use them as-is, don't rephrase
5. **Missing data** → show `—` in the cell, never skip the column
6. **Blockers** → flag with ⚠️ prefix in the status cell if `is_blocked=true`
7. **Counts line** → end every multi-object summary with totals
8. **Date format** → `DD MMM YYYY` (e.g. `26 Apr 2026`)
