# nonunique

A quick helper function to find the non-unique items in a collection.

Inspired by lodash's `_.uniq`, but I wanted a `_.nonunique`. This turned out a little different from that.

Requires ES6. (Specifically, [Sets.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set))

### Usage `nonunique(Array collection [, Boolean returnBool=false, Boolean shortcircuit=false, Function uniqBy])`
`collection` - The group of objects where you want to pick out the non-unique members. A collection should be able to be any [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable), but it is only tested with arrays for now.

`returnBool` - *optional* - If you just want to know WHETHER the collection's members are unique, and you're not interested in which values are duplicates. Automatically short-circuits for speed. Returns a boolean. (See "Return Values" below.)

`shortcircuit` - *optional* - If you want to return the FIRST non-uniqe member of the collection only. (speeds up runtime on large collections.)

`uniqBy` - *optional* - if passed, every value in the interator will be run through this function before being compared to the others.

#### Return Values

`nonunique` returns an array unless you pass `returnBool` as true. REMEMBER that an empty array coerces to `true` in javascript, leading to a potentially tricky gotcha:

```javascript
// BAD - don't do this.
if(nonunique(myCollection)){
    // this will always be true because [] coerces to true.
}

// GOOD - do this
if(nonunique(myCollection, true)){
    // second arg turns on boolean mode, so it will return true/false
}

```
