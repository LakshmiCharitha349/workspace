# Migration Checklist

Generated: 2026-06-04

Check off each item before decommissioning the current machine.

---

## Per-Repository Checklist

### Repositories Needing Action

#### Java Projects Without Remotes

- [x] `java/zooInfo` — pushed to github.com/LakshmiCharitha349/zooInfo ✓
- [x] `java/runtimeInstanceCreation` — pushed to github.com/LakshmiCharitha349/runtimeInstanceCreation ✓
- [x] `java/calculateScore` — pushed to github.com/LakshmiCharitha349/calculateScore ✓
- [x] `java/mockTests` — pushed to github.com/LakshmiCharitha349/mockTests ✓
- [x] `java/bootcamp` — pushed to github.com/LakshmiCharitha349/bootcamp ✓
- [x] `java/streams` — pushed to github.com/LakshmiCharitha349/streams ✓
- [x] `java/multiThreading` — pushed to github.com/LakshmiCharitha349/multiThreading ✓
- [x] `java/java_reflection` — pushed to github.com/LakshmiCharitha349/java_reflection ✓
- [x] `java/ioStreams` — pushed to github.com/LakshmiCharitha349/ioStreams ✓

#### JS Tryouts Without Remotes

- [x] `js/tryouts/sorting` — pushed to github.com/LakshmiCharitha349/sorting ✓
- [x] `js/tryouts/git_practice` — pushed to github.com/LakshmiCharitha349/git_practice ✓

#### Non-git Projects That Need Backing Up

- [x] `ai_agents/` — pushed to github.com/LakshmiCharitha349/ai-agents ✓
- [x] `shell/` — pushed to github.com/LakshmiCharitha349/shell-scripts ✓
- [ ] `js/tryouts/react/` — initialize git, create .gitignore (exclude node_modules), commit, create GitHub repo, push
- [ ] `js/assignments/classroom/step-hotel-booking-flow` — initialize git or merge into step-hotel repo
- [ ] `js/assignments/classroom/assignment_*` — consider if worth backing up or skip
- [ ] `java/backend/` — currently only tracked by workspace root; create its own repo or add to workspace root tracking

#### Repos with Large Uncommitted Changes (Needs Review)

- [ ] `flower-catalog-LakshmiCharitha349` — 58 dirty files, review and commit
- [ ] `js-inventory-LakshmiCharitha349` — 13 dirty files, review and commit
- [ ] `js/advent_of_code` — 13 dirty files, commit remaining solutions
- [ ] `java/os-bootcamp` — 25 dirty files (external repo, check push access)
- [ ] `js/games/snake_game` — 6 dirty files, review and commit

---

## .gitignore Fixes Needed

- [x] `copilot/Uno` — .gitignore added locally (push denied — not your fork) ✓
- [x] `til-LakshmiCharitha349` — pushed ✓
- [x] `visuals/vis` — pushed ✓
- [x] `js/advent_of_code` — pushed ✓
- [x] `js/tryouts/git_practice` — pushed ✓
- [x] `js/tryouts/sorting` — pushed ✓
- [x] `js/tryouts/generators` — pushed ✓
- [x] `js/tryouts/promises` — pushed ✓
- [x] `js/tryouts/some_js_practices` — pushed ✓

---

## Security Checks

- [ ] Review `MicroservicesWorkshop` auth.js hardcoded fallback secret
- [ ] Confirm Spring `application.properties` files contain no real secrets
- [ ] Verify `copilot/Uno/.gitignore` added before any commit (111 MB node_modules)

---

## Workspace Root Repository

- [x] Added .gitignore (excludes nested repos, .claude/, .DS_Store) ✓
- [x] Committed and pushed: jaipur changes, l_systems, migration docs ✓

---

## Validation

- [ ] All repos with personal code pushed to `LakshmiCharitha349` GitHub
- [ ] All repos with step-batch-11 code are either pushed or deliberately left as-is
- [ ] Generated directories confirmed excluded from all commits
- [ ] No secrets in any committed file
- [ ] New machine can `git clone` all repos and run with package manager installs only
