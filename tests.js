import test from 'ava';
import nonunique from './index';

/**
 * For now, I'm mostly concerned with arrays. May come back in a later version
 * for objects, maps, etc.
 */

test('uniques passed in - returns empty array.', t => {
    t.deepEqual(nonunique(['a', 'b']), []);
});

test('dups passed in - returns array of all dups, skips uniques', t => {
    t.deepEqual(nonunique(['a', 'b', 'a', 'b', 'c']), ['a', 'b']);
});

/**
 * Short-circuit mode - when you want the name of the first offender, but not all of them.
 */
test('short-circuit mode - dups passed in - returns array of one dup', t => {
    t.deepEqual(nonunique(['a', 'a', 'b', 'b'], null,true), ['a']);
});


/**
 * Boolean mode! always short-circuits. If you just want to know whether there are dups.
 */
test('boolean mode - uniques passed in - returns false', t => {
    t.is(nonunique(['a','b'], true), false);
});

test('boolean mode - dups passed in - returns true', t => {
    t.is(nonunique(['a', 'a'], true), true);
});

/**
 * Using a `uniqBy` function.
 * 
 */

test('uniqBy mode - runs uniqBy function.', t => {
    var badArray = [
        { a : 'nonuniq'},
        { b : 'nonuniq'}
    ],
    uniqBy = obj => obj.a || obj.b;
    t.deepEqual(nonunique(badArray, null, null, uniqBy), ['nonuniq']);
})