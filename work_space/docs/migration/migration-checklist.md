# Migration Checklist

Generated: 2026-06-04

Check off each item before decommissioning the current machine.

---

## Per-Repository Checklist

### Repositories Needing Action

#### Java Projects Without Remotes

- [ ] `java/zooInfo` — create GitHub repo, push
- [ ] `java/runtimeInstanceCreation` — create GitHub repo, push
- [ ] `java/calculateScore` — create GitHub repo, push
- [ ] `java/mockTests` — create GitHub repo, push
- [ ] `java/bootcamp` — create GitHub repo, push
- [ ] `java/streams` — create GitHub repo, push
- [ ] `java/multiThreading` — create GitHub repo, push
- [ ] `java/java_reflection` — create GitHub repo, push
- [ ] `java/ioStreams` — create GitHub repo, push

#### JS Tryouts Without Remotes

- [ ] `js/tryouts/sorting` — commit pending change, create GitHub repo, push
- [ ] `js/tryouts/git_practice` — create GitHub repo, push (clean, just needs remote)

#### Non-git Projects That Need Backing Up

- [ ] `ai_agents/` — initialize git, create .gitignore (exclude node_modules), commit, create GitHub repo, push
- [ ] `shell/` — initialize git, commit shell scripts, create GitHub repo, push
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

- [ ] `copilot/Uno` — add .gitignore with `node_modules/` BEFORE any commit
- [ ] `til-LakshmiCharitha349` — add .gitignore
- [ ] `visuals/vis` — add .gitignore
- [ ] `js/advent_of_code` — add .gitignore
- [ ] `js/tryouts/git_practice` — add .gitignore
- [ ] `js/tryouts/sorting` — add .gitignore
- [ ] `js/tryouts/generators` — add .gitignore
- [ ] `js/tryouts/promises` — add .gitignore
- [ ] `js/tryouts/some_js_practices` — add .gitignore

---

## Security Checks

- [ ] Review `MicroservicesWorkshop` auth.js hardcoded fallback secret
- [ ] Confirm Spring `application.properties` files contain no real secrets
- [ ] Verify `copilot/Uno/.gitignore` added before any commit (111 MB node_modules)

---

## Workspace Root Repository

- [ ] Decide what untracked dirs to commit to `LakshmiCharitha349/workspace.git`
- [ ] Commit pending changes: `js/games/jaipur`, `js/l_systems/algae.js`

---

## Validation

- [ ] All repos with personal code pushed to `LakshmiCharitha349` GitHub
- [ ] All repos with step-batch-11 code are either pushed or deliberately left as-is
- [ ] Generated directories confirmed excluded from all commits
- [ ] No secrets in any committed file
- [ ] New machine can `git clone` all repos and run with package manager installs only
