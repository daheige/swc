//// [logicalAssignment2.ts]
var _a, _b, _c, _foo, _foo1, _foo2, _ref, _ref1, _ref2;
(_a = a).baz && (_a.baz = result.baz), (_b = b).baz || (_b.baz = result.baz), (_c = c).baz ?? (_c.baz = result.baz), (_foo = a.foo).baz && (_foo.baz = result.foo.baz), (_foo1 = b.foo).baz || (_foo1.baz = result.foo.baz), (_foo2 = c.foo).baz ?? (_foo2.baz = result.foo.baz), (_ref = a.foo.bar()).baz && (_ref.baz = result.foo.bar().baz), (_ref1 = b.foo.bar()).baz || (_ref1.baz = result.foo.bar().baz), (_ref2 = c.foo.bar()).baz ?? (_ref2.baz = result.foo.bar().baz);
