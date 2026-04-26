---
name: taiga-navigator
description: >
  Taiga project management navigation skill. Use when the user asks to summarize, search,
  list, or parse any Taiga objects: projects, epics, user stories, tasks, issues, or sprints.
  Triggers on: "summarize project", "list stories", "show epic", "sprint status",
  "what's in progress", "show backlog", "tasks for story", "who is working on",
  "show milestone", "project overview", "search taiga", "list issues", "parse epic".
---

# Taiga Navigator Skill

Structured workflow for navigating Taiga via MCP. Always follow the hierarchy and tool
chaining order below — never guess IDs, always resolve them step by step.

## Object Hierarchy

```
Project
├── Epics                   (feature groupings)
│   └── User Stories        (linked via epic)
│       └── Tasks           (subtasks of a story)
├── Milestones / Sprints
│   └── User Stories        (assigned to milestone)
├── Issues                  (bugs, questions — standalone)
└── Members
```

Key rule: **`project_id` is the root.** Resolve it first before any other call.

---

## Mandatory Workflows

### Workflow A — Project Discovery
Run this first whenever the project name or slug is not already known.

1. `list_projects(verbosity="minimal")` → get all projects with id, name, slug
2. Match target project by name → extract `slug`
3. `get_project_by_slug(slug=<slug>, verbosity="standard")` → get `id`, member count, epic/backlog flags
4. Store `project_id` — pass it to every subsequent call

---

### Workflow B — Epic Breakdown
Use when: "show epics", "what features are in progress", "parse this epic"

1. Run Workflow A to get `project_id`
2. `list_epics(project_id=<id>, verbosity="minimal")` → get all epics with ref, subject, status
3. For each epic of interest:
   - `get_epic_by_ref(project_id=<id>, ref=<ref>)` → full epic detail, get `epic_id`
   - `list_user_stories(project_id=<id>, filters={"epic": <epic_id>}, verbosity="minimal")` → stories under this epic
4. For each user story:
   - `get_user_story_by_ref(project_id=<id>, ref=<ref>)` → status, assignee, points
   - `list_tasks(project_id=<id>, filters={"user_story": <story_id>}, verbosity="minimal")` → tasks within the story

See [references/tool-guide.md](references/tool-guide.md) for exact parameter names.

---

### Workflow C — Sprint / Milestone Overview
Use when: "sprint status", "show current sprint", "milestone progress", "burndown"

1. Run Workflow A to get `project_id`
2. `list_milestones(project_id=<id>, verbosity="standard")` → all sprints with dates, closed flag
3. Identify the active sprint (closed=false, closest estimated_finish)
4. `get_milestone(milestone_id=<id>)` → full sprint detail
5. `get_milestone_stats(milestone_id=<id>)` → total/completed points, burndown, days remaining
6. `list_user_stories(project_id=<id>, filters={"milestone": <milestone_id>}, verbosity="standard")` → all stories in sprint
7. For each story: `list_tasks(project_id=<id>, filters={"user_story": <story_id>}, verbosity="minimal")` → task completion

---

### Workflow D — User Story Deep Dive
Use when: "show story #42", "what's the status of story X", "tasks for this story"

1. Run Workflow A to get `project_id`
2. `get_user_story_by_ref(project_id=<id>, ref=<N>)` → full story detail
3. `list_tasks(project_id=<id>, filters={"user_story": <story_id>}, verbosity="standard")` → tasks
4. `get_history(object_type="user_story", object_id=<story_id>)` → change log (optional, when user asks for history)

---

### Workflow E — Issue Triage
Use when: "list bugs", "open issues", "show issues by priority"

1. Run Workflow A to get `project_id`
2. `list_issues(project_id=<id>, verbosity="standard")` → all issues
3. For a specific issue: `get_issue_by_ref(project_id=<id>, ref=<N>)`
4. Filter options to pass in `filters={}`: `status`, `priority`, `severity`, `assigned_to`, `type`

---

### Workflow F — Keyword Search
Use when: the user mentions a name, keyword, or topic without knowing where it lives.

1. Run Workflow A to get `project_id`
2. `search(project_id=<id>, text="<keyword>")` → results grouped by type (user_stories, tasks, issues)
3. Extract `ref` values from results
4. Use `get_user_story_by_ref` / `get_task_by_ref` / `get_issue_by_ref` to fetch full detail

---

### Workflow G — Project Summary
Use when: "give me an overview", "summarize this project", "what's the current state"

1. Run Workflow A
2. `get_project_stats(project_id=<id>)` → points assigned/completed/total, velocity
3. `list_milestones(project_id=<id>, verbosity="minimal")` → sprint list
4. Run Workflow C on the active sprint
5. `get_project_timeline(project_id=<id>)` → recent activity (last N changes)
6. `get_project_members(project_id=<id>, verbosity="minimal")` → team list
7. Render using the Project Summary template in [references/output-templates.md](references/output-templates.md)

---

## Filter Reference (quick lookup)

| Goal | Tool | Key filter |
|---|---|---|
| Stories in a sprint | `list_user_stories` | `{"milestone": <milestone_id>}` |
| Stories in an epic | `list_user_stories` | `{"epic": <epic_id>}` |
| Stories by status | `list_user_stories` | `{"status": <status_id>}` |
| Stories by assignee | `list_user_stories` | `{"assigned_to": <user_id>}` |
| Tasks in a story | `list_tasks` | `{"user_story": <story_id>}` |
| Tasks by assignee | `list_tasks` | `{"assigned_to": <user_id>}` |
| Issues by priority | `list_issues` | `{"priority": <priority_id>}` |
| Issues by status | `list_issues` | `{"status": <status_id>}` |

Always pass filters as a JSON object string when the tool accepts a `filters` parameter.

---

## Verbosity Strategy

| Situation | verbosity |
|---|---|
| Broad listing (10+ items) | `"minimal"` |
| Single item inspection | `"standard"` |
| Deep field access needed | `"full"` |

Default to `"minimal"` for list calls to reduce response size and model load.

---

## Output Format

Always render results using the templates in [references/output-templates.md](references/output-templates.md).

Key rules:
- Lead with a one-line status header
- Use tables over prose for any list of 3+ items
- Always show: ref #, subject, status, assignee, sprint (where applicable)
- Flag blockers explicitly
- End multi-object summaries with a counts line: `X epics | Y stories | Z tasks | W open issues`

---

## References
- [references/tool-guide.md](references/tool-guide.md) — all 35 tools, parameters, chaining rules, ID resolution
- [references/output-templates.md](references/output-templates.md) — copy-paste templates for every summary type
