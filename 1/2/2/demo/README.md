template: titleslide
# Slide deck title
## Nathan Mannall, EPCC
### n.mannall@epcc.ed.ac.uk

---
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

**This is bold**, *this is italic*, and ***this is both***

Bullet points: 
- Point 1
- And another point
- The final point is a long bit of text that should span multiple lines so long as I add enough waffle.

---
# Code block example

Some changes to look out for in the `sparse.cpp` example:

```C++
#include <Eigen/Sparse>
```
```C++
std::vector<Eigen::Triplet<double>> fill;
fill.reserve(...);
```
```C++
for (int i = 0; i < n - 1; ++i) {
    fill.push_back(Eigen::Triplet<double>(...);
    ...
}
```
```C++
A.setFromTriplets(fill.begin(), fill.end());
```

See `exercises/eigen/sparse.cpp`

---

# Columns example

.columns[
  .col[
    Column 1 (50%)
  ]
  .col[
    Column 2 (50%)
  ]
]

.columns[
  .col25[
    Column 1 (25%)
  ]
  .col[
    Column 2 (50%)
  ]
  .col25[
    Column 3 (25%)
  ]
]

.columns[
  .col75[
    Column 1 (75%)
  ]
  .col25[
    Column 2 (25%)
  ]
]

.columns[
  .col33[
    Column 1 (33%)
  ]
  .col33[
    Column 2 (33%)
  ]
  .col33[
    Column 3 (33%)
  ]
]

.columns[
  .col67[
    Column 1 (67%)
  ]
  .col33[
    Column 2 (33%)
  ]
]