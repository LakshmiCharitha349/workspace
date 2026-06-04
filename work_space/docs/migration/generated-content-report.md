# Generated Content Report

Generated: 2026-06-04

---

## Summary

Total workspace size: ~2.2 GB
Generated/dependency content: ~1.9 GB (estimated ~86%)

---

## Large Generated Directories Found

| Path | Size | Type | Safe to Exclude |
|---|---|---|---|
| `js/tryouts/react/todos/node_modules` | 156 MB | Node.js deps | YES |
| `js/tryouts/react/use_effects/node_modules` | 156 MB | Node.js deps | YES |
| `js/tryouts/react/custom_hooks/node_modules` | 156 MB | Node.js deps | YES |
| `js/games/snake_game/node_modules` | 156 MB | Node.js deps | YES |
| `copilot/Uno/node_modules` | 111 MB | Node.js deps | YES |
| `js/tryouts/react/todo_list/node_modules` | 87 MB | Node.js deps | YES |
| `js/tryouts/react/myApp/node_modules` | 87 MB | Node.js deps | YES |
| `js/tryouts/react/react_tryouts/node_modules` | 87 MB | Node.js deps | YES |
| `js/tryouts/generics/node_modules` | 6.0 MB | Node.js deps | YES |
| `ai_agents/node_modules` | 10 MB | Node.js deps | YES |
| `js/tryouts/websockets/node_modules` | 196 KB | Node.js deps | YES |
| `java/backend/build` | 408 KB | Gradle build output | YES |
| `java/backend/.gradle` | 664 KB | Gradle cache | YES |
| `java/runtimeInstanceCreation/build` | 164 KB | Gradle build output | YES |
| `java/runtimeInstanceCreation/.gradle` | 160 KB | Gradle cache | YES |
| `java/spring/spring-todo/.gradle` | 88 KB | Gradle cache | YES |
| `java/ide-bootcamp-LakshmiCharitha349/target` | 136 KB | Maven build output | YES |
| `copilot/Uno/dist` | 160 KB | Vite build output | YES |
| `js/games/snake_game/dist` | 208 KB | Build output | YES |

---

## Recommended .gitignore Additions

### For Node.js / JavaScript projects

```
node_modules/
dist/
build/
.next/
coverage/
*.log
.DS_Store
```

### For Java / Gradle projects

```
build/
.gradle/
*.class
*.jar
```

### For Java / Maven projects

```
target/
*.class
```

### For Deno projects

```
.deno/
```

---

## Other Files to Exclude

| Pattern | Reason |
|---|---|
| `.DS_Store` | macOS metadata, no value in git |
| `*.log` | Runtime log files |
| `.claude/` | Claude Code session files (already in workspace root) |

---

## Note on React Tryouts (js/tryouts/react/)

This directory contains ~730 MB in node_modules across 6 React app directories. These are all untracked by git and none have a .git directory. If you wish to back up this work, create a single git repo for `js/tryouts/react/` with a root-level `.gitignore` that excludes all nested `node_modules/`.
