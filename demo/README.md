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
- Final point

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
# Exercise: Diffusion equation 3 ways

- Use `modules.sh` to load correct environment on ARCHER2
  
- Compile the examples using `make`
  
- Run each of the three examples explicit, implicit and sparse
  
- Generate the movie using the provided python script

To view the movie you will need to either:
   -  Download the data and generate it locally
  
    or
  
   - Set up a python virtual environment on ARCHER2 with matplotlib
   - User `ssh -X` to view graphics