const head = require('../head');
const assertEqual = require('../assertEqual');

// Tests
assertEqual(head([10, 2, 6]), 10);
assertEqual(head(['Mitchell', 'Gaby', 'Jaocquim', 'Martin', 'Zac']), 'Mitchell');
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);