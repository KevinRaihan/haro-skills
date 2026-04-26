# Taiga MCP Tool Reference

All tools use the prefix `mcp_taiga_api__` in goclaw / `mcp__taigaApi__` in Claude Code.
Auto-authentication is active — `session_id` is optional on every call.

---

## Session

### `get_default_session`
Returns the active session from env-var auto-login.
- No parameters required
- Response: `{session_id, status, auto_authenticated}`
- Use to verify the server is authenticated before making other calls

---

## Projects

### `list_projects`
```
params: session_id? | verbosity="minimal"
```
Returns: `[{id, name, slug, ...}]`
- Use `verbosity="minimal"` — you only need `id`, `name`, `slug`
- Always call this first when project is unknown

### `get_project_by_slug`
```
params: slug | session_id? | verbosity="standard"
```
Returns: full project object including `id`, `is_epics_activated`, `is_backlog_activated`, member count
- **This is the preferred way to resolve `project_id` from a name**
- slug is the lowercase-hyphenated project identifier (visible in Taiga URL)

### `get_project_members`
```
params: project_id | session_id? | verbosity="minimal"
```
Returns: `[{id, user, full_name, role}]`
- Use to resolve `user_id` values for assignment filtering

### `get_project_stats`
```
params: project_id | session_id?
```
Returns: total/assigned/completed points, velocity
- Quick project health check

### `get_project_timeline`
```
params: project_id | session_id?
```
Returns: recent activity events (changes by all members)
- Use for "what happened recently" queries

### `search`
```
params: project_id | text | session_id?
```
Returns: `{user_stories: [...], tasks: [...], issues: [...], wiki_pages: [...]}`
- Each result has `ref` and `subject`
- Use this when you have a keyword but don't know the object type or location

---

## Epics

### `list_epics`
```
params: project_id | session_id? | verbosity="minimal"
```
Returns: `[{id, ref, subject, status, ...}]`

### `get_epic_by_ref`
```
params: project_id | ref (integer, no #) | session_id? | verbosity="standard"
```
Returns: full epic — use to get `epic_id` (the `id` field) for story filtering

### `update_epic`
```
params: epic_id | kwargs (JSON string) | session_id? | verbosity="standard"
```
kwargs fields: `subject`, `description`, `status`, `assigned_to`, `tags`

### `link_user_story_to_epic`
```
params: epic_id | user_story_id | session_id?
```
Links an existing user story to an epic.

---

## User Stories

### `list_user_stories`
```
params: project_id | filters? (JSON string) | session_id? | verbosity="minimal"
```
Filter examples:
- `'{"milestone": 12}'` — stories in sprint 12
- `'{"epic": 7}'` — stories linked to epic 7
- `'{"assigned_to": 42}'` — stories assigned to user 42
- `'{"status": 3}'` — stories with status ID 3

Returns: `[{id, ref, subject, status, assigned_to, milestone, ...}]`
Note: `id` is the internal ID (for task filtering); `ref` is the #N shown in UI

### `get_user_story_by_ref`
```
params: project_id | ref (integer) | session_id? | verbosity="standard"
```
Returns: full story detail — status, assignee, points, description, milestone, epic

### `create_user_story`
```
params: project_id | subject | kwargs? (JSON string) | session_id?
```
kwargs: `description`, `milestone` (id), `status` (id), `assigned_to` (user_id), `tags`, `points`

### `update_user_story`
```
params: user_story_id | kwargs (JSON string) | session_id?
```
kwargs: `subject`, `description`, `status`, `assigned_to`, `milestone`, `is_blocked`, `blocked_note`

### `assign_user_story_to_user`
```
params: user_story_id | user_id | session_id?
```
Shorthand for updating `assigned_to`.

### `bulk_create_user_stories`
```
params: project_id | stories (newline-separated subjects string) | session_id?
```
Example: `stories="Story one\nStory two\nStory three"`

### `bulk_update_story_sprint`
```
params: project_id | story_ids (list of ints) | milestone_id | session_id?
```
Moves multiple stories to a sprint in one call.

---

## Tasks

### `list_tasks`
```
params: project_id | filters? (JSON string) | session_id? | verbosity="minimal"
```
Filter examples:
- `'{"user_story": 55}'` — tasks in story 55
- `'{"assigned_to": 42}'` — tasks assigned to user 42
- `'{"milestone": 12}'` — tasks in sprint 12

### `get_task_by_ref`
```
params: project_id | ref (integer) | session_id? | verbosity="standard"
```

### `create_task`
```
params: project_id | subject | kwargs? (JSON string) | session_id?
```
kwargs: `user_story` (id), `milestone` (id), `assigned_to`, `status`, `description`

### `update_task`
```
params: task_id | kwargs (JSON string) | session_id?
```
kwargs: `subject`, `status`, `assigned_to`, `is_closed`, `description`

### `assign_task_to_user`
```
params: task_id | user_id | session_id?
```

### `bulk_create_tasks`
```
params: project_id | user_story_id | tasks (newline-separated subjects) | session_id?
```

---

## Issues

### `list_issues`
```
params: project_id | filters? (JSON string) | session_id? | verbosity="minimal"
```
Filter examples:
- `'{"priority": 3}'` — high priority issues
- `'{"status": 1}'` — new/open issues
- `'{"assigned_to": 42}'` — issues assigned to user 42
- `'{"type": 1}'` — filter by issue type

### `get_issue_by_ref`
```
params: project_id | ref (integer) | session_id? | verbosity="standard"
```

### `create_issue`
```
params: project_id | subject | kwargs? (JSON string) | session_id?
```
kwargs: `description`, `assigned_to`, `priority` (id), `severity` (id), `type` (id), `status` (id)

### `update_issue`
```
params: issue_id | kwargs (JSON string) | session_id?
```

### `assign_issue_to_user`
```
params: issue_id | user_id | session_id?
```

---

## Milestones (Sprints)

### `list_milestones`
```
params: project_id | session_id? | verbosity="standard"
```
Returns: `[{id, name, slug, estimated_start, estimated_finish, closed, ...}]`
- `closed=false` means the sprint is still active

### `get_milestone`
```
params: milestone_id | session_id? | verbosity="standard"
```
Returns: full sprint detail including user stories list

### `get_milestone_stats`
```
params: milestone_id | session_id?
```
Returns: `{total_points, completed_points, days_left, burndown_data}`
- Key field: `completed_points / total_points` = completion ratio

---

## History & Comments

### `get_history`
```
params: object_type | object_id | session_id?
```
`object_type`: `"user_story"`, `"task"`, `"issue"`, `"epic"`, `"wiki_page"`
`object_id`: the internal `id` (not ref)
Returns: chronological list of changes with field diffs and comments

### `add_comment`
```
params: object_type | object_id | comment | session_id?
```

### `list_comments`
```
params: object_type | object_id | session_id?
```

---

## ID Resolution Cheatsheet

| You have | You need | Call |
|---|---|---|
| Project name | project_id | `list_projects` → match name → get slug → `get_project_by_slug` |
| Project slug | project_id | `get_project_by_slug(slug=...)` → `.id` |
| Epic #ref | epic_id | `get_epic_by_ref(project_id, ref)` → `.id` |
| Story #ref | story_id | `get_user_story_by_ref(project_id, ref)` → `.id` |
| Task #ref | task_id | `get_task_by_ref(project_id, ref)` → `.id` |
| Issue #ref | issue_id | `get_issue_by_ref(project_id, ref)` → `.id` |
| Sprint name | milestone_id | `list_milestones(project_id)` → match name → `.id` |
| Member name | user_id | `get_project_members(project_id)` → match full_name → `.id` |

Never fabricate an ID — always resolve it through the appropriate tool call.
