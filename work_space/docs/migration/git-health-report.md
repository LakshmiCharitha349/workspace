# Git Health Report

Generated: 2026-06-04

---

## Summary

| Status | Count |
|---|---|
| Repos with remote + clean | 8 |
| Repos with remote + dirty (uncommitted changes) | 34 |
| Repos WITHOUT remote | 15 |
| Repos missing .gitignore | 9 |

---

## Workspace Root Repository

| Field | Value |
|---|---|
| Remote | `git@github.com:LakshmiCharitha349/workspace.git` |
| Branch | main |
| Status | **Untracked** — large portions of workspace not committed |

The workspace root repo tracks top-level `js/` source files (l_systems, games/jaipur) but most subdirectories are untracked because they are nested git repos or new directories (ai_agents, copilot, java, etc.). This is by design — nested git repos are not tracked by the parent. The untracked directories that are **not** nested repos (`ai_agents/`, `shell/`, `js/assignments/`, `js/animations/`, etc.) should be reviewed.

---

## Repos WITHOUT Remote (Require Attention)

These repos have commits but no GitHub remote configured. They will be lost when moving machines.

| Project | Location | Branch | Commits | Dirty Files | Priority |
|---|---|---|---|---|---|
| zooInfo | `java/zooInfo` | master | none | 13 | HIGH — untracked work only |
| runtimeInstanceCreation | `java/runtimeInstanceCreation` | master | none | 14 | HIGH |
| calculateScore | `java/calculateScore` | master | none | 10 | HIGH |
| mockTests | `java/mockTests` | master | none | 10 | HIGH |
| bootcamp | `java/bootcamp` | master | none | 7 | HIGH |
| streams | `java/streams` | master | none | 8 | HIGH |
| multiThreading | `java/multiThreading` | master | none | 10 | HIGH |
| java_reflection | `java/java_reflection` | master | none | 13 | HIGH |
| ioStreams | `java/ioStreams` | master | none | 11 | HIGH |
| git_practice | `js/tryouts/git_practice` | master | 2026-02-25 | 0 | LOW — has commits, clean |
| sorting | `js/tryouts/sorting` | master | 2025-11-06 | 1 | MEDIUM |

> Note: `generators`, `promises`, `bag-of-goodies`, `some_js_practices` have remotes but were listed in the missing-remote output earlier — recheck confirmed they DO have remotes.

---

## Repos with Significant Uncommitted Changes

These repos have remotes but substantial local changes not yet pushed:

| Project | Dirty Files | Remote |
|---|---|---|
| flower-catalog-LakshmiCharitha349 | **58** | `step-batch-11/flower-catalog-LakshmiCharitha349` |
| js-terminal-todo-LakshmiCharitha349 | **9** | `step-batch-11/js-terminal-todo-LakshmiCharitha349` |
| js-inventory-LakshmiCharitha349 | **13** | `step-batch-11/js-inventory-LakshmiCharitha349` |
| some_js_practices | **13** | `LakshmiCharitha349/js_patterns` |
| java/os-bootcamp | **25** | `PriyanshuA23/os-bootcamp` (external repo) |
| js/advent_of_code | **13** | `LakshmiCharitha349/advent_of_code` |
| java/rover-example | **7** | `LakshmiCharitha349/rover-example` |
| java-rover-LakshmiCharitha349 | **6** | `step-batch-11/java-rover-LakshmiCharitha349` |

---

## Repos Missing .gitignore

| Project | Stack | Risk |
|---|---|---|
| `til-LakshmiCharitha349` | Deno | Low — but add Deno gitignore |
| `visuals/vis` | JS/Canvas | Low |
| `js/advent_of_code` | Deno | Low |
| `copilot/Uno` | Node.js | **HIGH** — 111MB node_modules exist, no gitignore |
| `js/tryouts/git_practice` | JS | Low |
| `js/tryouts/sorting` | JS | Low |
| `js/tryouts/generators` | JS | Low |
| `js/tryouts/promises` | JS | Low |
| `js/tryouts/some_js_practices` | JS | Low |

> `copilot/Uno` is the highest risk — it has a `node_modules/` directory and no `.gitignore`. Any commit would include all dependencies.

---

## External / Shared Repos (Not Yours)

These repos have remotes pointing to organizations or other users — push access may be limited:

| Project | Remote Owner | Notes |
|---|---|---|
| `copilot/Uno` | `Bhargavipeddakota` | External collaborator's repo |
| `java/os-bootcamp` | `PriyanshuA23` | Another user's repo |
| `MicroservicesWorkshop` | `sdptknd` | Workshop organizer's repo |
| All `step-batch-11/*` | `step-batch-11` organization | Batch organization repos |

---

## Clean Repos (No Action Needed)

| Project | Remote |
|---|---|
| `java/spring/spring-todo` | `LakshmiCharitha349/spring-todo` |
| `js/tryouts/generators` | `LakshmiCharitha349/generators` |
| `js/shared_resources/bag-of-goodies` | `step-batch-11/bag-of-goodies` |
| `js/tryouts/git_practice` | NO REMOTE (but clean) |
| Various step-batch-11 assignments | Multiple |
