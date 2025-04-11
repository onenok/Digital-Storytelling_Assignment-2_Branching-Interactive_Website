# The Sonic Era: Key of Dawn - Website Design

## 1. Overall Layout
```
+------------------------------------------+
|              Header Section              |
|  +------------------------------------+  |
|  |            [Title Area]            |  |
|  +------------------------------------+  |
|  |         [Progress Bar Area]        |  |
|  +------------------------------------+  |
+------------------------------------------+
|               Main Content               |
|  +------------------------------------+  |
|  |                                    |  |
|  |          Story Image Area          |  |
|  |      [Dynamic Scene Image/Art]     |  |
|  |                                    |  |
|  +------------------------------------+  |
|  |                                    |  |
|  |           Story Text Area          |  |
|  |    [Dynamic Story Content Here]    |  |
|  |                                    |  |
|  +------------------------------------+  |
|  |             Choice Area            |  |
|  +------------------------------------+  |
|  |         Choice Button Area         |  |
|  |    [Dynamic Choice Button Here]    |  |
|  +------------------------------------+  |
+------------------------------------------+
|              Footer Section              |
|  +------------------------------------+  |
|  |          [Restart Button]          |  |
|  +------------------------------------+  |
+------------------------------------------+
```

## 2. Element Details

### 2.1 Header Design
```
+------------------------------------------+
|                  [Title]                 |
|      (Gradient Title + Glow Effect)      |
|                                          |
|    [==========Progress Bar==========]    |
|     (Blue-Purple Gradient + Dynamic)     |
+------------------------------------------+
```

### 2.2 Story Container Design
```
+--------------------------------------------+
|   +------------------------------------+   |
|   |             Scene Image            |   |
|   |     (Interactive hover + fade)     |   |
|   +------------------------------------+   |
|                                            |
|   +------------------------------------+   |
|   |             Story Text             |   |
|   |     (Dynamic update + fade in)     |   |
|   +------------------------------------+   |
|                                            |
|   +------------------------------------+   |
|   |             Choice Area            |   |
|   |       (Special style divider)      |   |
|   +------------------------------------+   |
|                                            |
|   +------------------------------------+   |
|   |          [Choice Button 1]         |   |
|   |    (Glow border + hover effect)    |   |
|   +------------------------------------+   |
|   +------------------------------------+   |
|   |          [Choice Button 2]         |   |
|   |    (Glow border + hover effect)    |   |
|   +------------------------------------+   |
+--------------------------------------------+
```

### 2.3 Bad Ending Special Effects
```
+--------------------------------------------+
|             [Red Border Style]             |
|   +------------------------------------+   |
|   |         Warning Style Text         |   |
|   |      (Red Theme + Glow Effect)     |   |
|   +------------------------------------+   |
|   |           [Return Option]          |   |
|   |         (Red Theme Button)         |   |
|   +------------------------------------+   |
+--------------------------------------------+
```

## 3. Responsive Design Considerations
- Maximum width: 800px
- Padding: 2rem
- Image area height: 300px
- Font sizes:
  - Title: 2.5rem
  - Body text: 1.2rem
  - Buttons: 1rem

## 4. Color Scheme
```
Primary Colors:
- Primary: #00f2ff (Cyan)
- Secondary: #ff00ff (Magenta)
- Background: #0a0a1a (Deep Blue)
- Text: #ffffff (White)
- Accent: #ff3366 (Red)
```

# The Sonic Era: Key of Dawn - Branching Story Wireframe

## 1. Main Story Branch Structure
```
+-------------------------------------------------------------------------------------+
|                                                                                     |
|                                       [start]                                       |
|                                          │                                          |
|                             ┌────────────┴────────────┐                             |
|                           (wait)                (try to escape)                     |
|                             │                         │                             |
|                             │                    [badending 1]                      |
|                       [virtualview]                                                 |
|                             │                                                       |
|                          [action]                                                   |
|                             │                                                       |
|                ┌────────────┴────────────┐                                          |
|           (check chip)         (use chip immediately)                               |
|                │                         │                                          |
|           [badending 3]              [useChip]                                      |
|                                          │                                          |
|                             ┌────────────┴────────────┐                             |
|                           (rest)                  (continue)                        |
|                             │                         │                             |
|                       [badending 4]                   │                             |
|                                                       │                             |
|                                                 [ventilation]                       |
|                                                       │                             |
|                                          ┌────────────┴────────────┐                |
|                                 (use the music power)  (break the trap directly)    |
|                                          │                         │                |
|                                          │                    [badending 5]         |
|                                          │                                          |
|                                    [server room]                                    |
|                                          │                                          |
|                             ┌────────────┴────────────┐                             |
|                      (pull out chip)             (run away)                         |
|                             │                         │                             |
|                             │                    [badending 6]                      |
|                             │                                                       |
|                       [final battle]                                                |
|                             │                                                       |
|                ┌────────────┴────────────┐                                          |
|            (destroy)             (become container)                                 |
|                │                         │                                          |
|           [badending7]                   |                                          |
|                                          │                                          |
|                                    [mainEnding]                                     | 
|                                          │                                          |
|                                      [epilogue]                                     |
|                                                                                     |
+-------------------------------------------------------------------------------------+
```

## 2. Branch Option Detail Design
```
+----------------------------------------------+
|               Scene Transition               |
|                       |                      |
|                       v                      |
|       Current Scene ──────> Next Scene       |
|                       |                      |
|                       v                      |
|            [Transition Animation]            |
|                       |                      |
|                       v                      |
|             [Progress Bar Update]            |
+----------------------------------------------+

+--------------------------------------------+
|               Choice Buttons               |
|                                            |
|         ┌────────────────────────┐         |
|         │    Main/Risk Choice    │         |
|         └────────────────────────┘         |
|                                            |
|         ┌────────────────────────┐         |
|         │    Main/Risk Choice    │         |
|         └────────────────────────┘         |
+--------------------------------------------+

+------------------------------------------+
|             Bad Ending Scene             |
|                                          |
|            [Warning Text Area]           |
|                                          |
|        ┌────────────────────────┐        |
|        │   Return to Previous   │        |
|        └────────────────────────┘        |
|                                          |
|        ┌────────────────────────┐        |
|        │      Restart Game      │        |
|        └────────────────────────┘        |
+------------------------------------------+
```

## 5. Scene Transition Logic
```
+----------------------------------------------+
|              Variable Assignment             |
|                      │                       |
|                      V                       |
|           Update Progress Bar & UI           |
|                      │                       |
|                      V                       |
|             ┌──────────────────┐             |
|             │ Check Scene Type │             |
|             └──────────────────┘             |
|                      │                       |
|               ┌──────┴──────┐                |
|               │             │                |
|         Normal Scene    Bad Ending           |
|               │             │                |
|        Normal Choice   Return Choice         |
+----------------------------------------------+
```